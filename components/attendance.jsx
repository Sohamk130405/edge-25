"use client";

import { useState, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QrScanner from "@/components/qr-scanner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCreateAttendance } from "@/hooks/attendance/use-create-attendance";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useGetAttendanceRecords } from "@/hooks/attendance/use-get-attendance-records";

export default function Attendance() {
  const [selectedSession, setSelectedSession] = useState("Workshop 1");
  const [scannerActive, setScannerActive] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [alert, setAlert] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { mutate: markAttendance, isPending } = useCreateAttendance();
  const { data: attendanceRecords } = useGetAttendanceRecords({
    sessionName: selectedSession,
  });

  const handleScan = useCallback(
    async (data) => {
      if (isPending) return;
      if (data) {
        setScanResult(data);
        try {
          await markAttendance(
            { sessionId: selectedSession, prn: parseInt(data) },
            {
              onSuccess: () => {
                setAlert({
                  type: "success",
                  message: "Attendance Marked Successfully",
                });
              },
              onError: () => {
                setAlert({
                  type: "error",
                  message: "Attendance Already Marked",
                });
              },
            }
          );
        } catch (error) {
          setAlert({ type: "error", message: "Attendance Already Marked" });
        }
      }
    },
    [selectedSession, isPending]
  );

  const filteredRecords = attendanceRecords?.filter(
    (record) =>
      record.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.user.prn.toString().includes(searchQuery)
  );

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Event Attendance System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select
              value={selectedSession}
              onValueChange={(value) => setSelectedSession(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Workshop 1">Workshop 1</SelectItem>
                <SelectItem value="Workshop 2">Workshop 2</SelectItem>
                <SelectItem value="Workshop 3">Workshop 3</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => setScannerActive(!scannerActive)}>
              {scannerActive ? "Stop Scanner" : "Start Scanner"}
            </Button>
            {scanResult && <p>Last scanned: {scanResult}</p>}
            {alert && (
              <Alert
                variant={alert.type === "success" ? "default" : "destructive"}
                className={cn("flex justify-between items-center", {
                  "text-green-500 border-green-600": alert.type === "success",
                })}
              >
                <div>
                  <AlertTitle>
                    {alert.type === "success" ? "Success" : "Error"}
                  </AlertTitle>
                  <AlertDescription>{alert.message}</AlertDescription>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setAlert(null)}
                  className="ml-4"
                  size="icon"
                >
                  <X />
                </Button>
              </Alert>
            )}
            {scannerActive && selectedSession && (
              <QrScanner onScan={handleScan} />
            )}
            <Input
              placeholder="Search by Name or PRN"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-4"
            />
            {filteredRecords && (
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>PRN</TableHead>
                    <TableHead>Creation Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.length > 0 ? (
                    filteredRecords.reverse().map((record) => (
                      <TableRow key={record._id}>
                        <TableCell>{record.user.name}</TableCell>
                        <TableCell>{record.user.prn}</TableCell>
                        <TableCell>
                          {new Date(record._creationTime).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan="3" className="text-center">
                        No attendance records found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

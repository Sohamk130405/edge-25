import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const useGetAttendanceRecords = ({ sessionName }) => {
  const data = useQuery(api.attendancerecords.getBySessionName, {
    sessionName,
  });
  const isLoading = data === undefined;
  return { data, isLoading };
};

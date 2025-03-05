import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

const SignUpCard = ({ setState }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ticket, setTicket] = useState("EDGE");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState(false);
  const { signIn } = useAuthActions();
  const [error, setError] = useState("");
  const [prn, setPrn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return setError("Passwords do not match");
    setPending(true);
    signIn("password", {
      name,
      email,
      prn: parseInt(prn),
      password,
      ticket,
      flow: "signUp",
    })
      .catch(() => setError("Something went wrong"))
      .finally(() => setPending(pending));
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={handleSubmit}>
          <Input
            type="text"
            disabled={pending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />
          <Input
            type="email"
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="number"
            disabled={pending}
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            placeholder="Enter PRN"
            required
          />
          <Select onValueChange={setTicket} value={ticket}>
            <SelectTrigger>Select Ticket</SelectTrigger>
            <SelectContent>
              <SelectItem value="EDGE">EDGE</SelectItem>
              <SelectItem value="EDGE + MOCK GDPI">EDGE + MOCK GDPI</SelectItem>
              <SelectItem value="MOCK GDPI">MOCK GDPI</SelectItem>
              <SelectItem value="ADMIN">ADMIN</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="password"
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Input
            type="password"
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />

          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            disabled={pending}
          >
            Continue
          </Button>
        </form>
        <Separator />
        <p className="text-xs text-muted-foreground text-center">
          Already have an account?{" "}
          <span
            className="text-sky-700 hover:underline cursor-pointer"
            onClick={() => setState("signIn")}
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;

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
import React, { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

const SignInCard = ({ setState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { signIn } = useAuthActions();

  const onPasswordSignIn = (e) => {
    e.preventDefault();
    setPending(true);
    signIn("password", { email, password, flow: "signIn" })
      .catch(() => setError("Invalid Email or Password"))
      .finally(() => setPending(false));
  };

  const handleAdminRegistration = () => {
    if (adminCode === "280405") {
      setState("signUp");
    } else {
      setError("Invalid Admin Code");
    }
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>Check your email for credentials</CardDescription>
      </CardHeader>

      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={onPasswordSignIn}>
          <Input
            type="email"
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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
        {!isAdmin ? (
          <p className="text-muted-foreground">
            Register new Admin:{" "}
            <span
              onClick={() => setIsAdmin(true)}
              className="text-blue-500 cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Enter Admin Code"
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
            />
            <Button className="w-full" onClick={handleAdminRegistration}>
              Admin Registration
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SignInCard;

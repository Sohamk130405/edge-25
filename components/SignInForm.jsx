"use client";
import { useSession, signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { Label } from "./ui/label";

const SignInForm = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (session) {
      toast.error("You are already signed in!");
      return;
    }

    if (!email || !password) {
      setIsLoading(false);
      toast.error("Email and password are required!");
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        switch (result.error) {
          case "CredentialsSignin":
            toast.error("Invalid email or password.");
            break;
          case "UserNotFound":
            toast.error("This email is not registered. Please sign up first.");
            break;
          case "TooManyRequests":
            toast.error("Too many attempts. Please try again later.");
            break;
          default:
            toast.error("An error occurred. Please try again.");
            break;
        }
      } else {
        toast.success("Sign-in successful!");
        router.push("/auth/auth-callback");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-y-6 py-8 w-full px-1">
      <h2 className="text-2xl font-semibold">Sign in to EDGE 25</h2>

      <form onSubmit={handleSignIn} className="w-full">
        <div className="space-y-2 w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            disabled={session || isLoading}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full focus-visible:border-foreground"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative w-full">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              disabled={session || isLoading}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full focus-visible:border-foreground"
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              disabled={session || isLoading}
              className="absolute top-1 right-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button
            type="submit"
            disabled={session || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <LoaderIcon className="w-5 h-5 animate-spin" />
            ) : (
              "Sign in with email"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

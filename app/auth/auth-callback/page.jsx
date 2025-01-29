"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthCallbackPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else if (status === "unauthenticated") {
      router.push("/auth/sign-in");
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center flex-col h-screen relative">
      <div className="border-[3px] border-neutral-800 rounded-full border-b-neutral-200 animate-loading w-8 h-8"></div>
      <p className="text-lg font-medium text-center mt-3">
        Verifying your account...
      </p>
    </div>
  );
};

export default AuthCallbackPage;

"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import { Loader } from "lucide-react";
import { signOut } from "@/convex/auth";

const DashboardPage = () => {
  const router = useRouter();
  const { data: user, isLoading } = useCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading ? (
        <Loader className="size-5 animate-spin " />
      ) : (
        <>
          <h1 className="text-xl font-medium">
            Welcome {user?.name || "User"}
          </h1>
          <p className="text-gray-500 mt-2">You are signed in.</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button onClick={() => router.push("/")} variant="outline">
              Back to home
            </Button>
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;

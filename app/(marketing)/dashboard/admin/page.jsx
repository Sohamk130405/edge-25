"use client";
import AnimationContainer from "@/components/animation-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterUsers from "@/components/register-users";
import Attendance from "@/components/attendance";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import { useRouter } from "next/navigation";

const Admin = () => {
  const { data, isLoading } = useCurrentUser();
  const router = useRouter();
  if (!isLoading && data.ticket !== "Admin") {
    return router.replace("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          Admin Portal
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Control in your hand
        </p>
      </AnimationContainer>
      <AnimationContainer delay={0.2} className="w-full pt-20">
        <Tabs
          defaultValue="register"
          className="w-full flex flex-col items-center justify-center"
        >
          <TabsList>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <RegisterUsers />
          </TabsContent>
          <TabsContent value="attendance">
            <Attendance />
          </TabsContent>
        </Tabs>
      </AnimationContainer>
    </div>
  );
};

export default Admin;

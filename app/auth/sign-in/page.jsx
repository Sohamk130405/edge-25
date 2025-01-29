import { Icons } from "@/components/icons";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
      <div className="flex items-center w-full py-8 border-b border-border/80">
        <Link href="/#home" className="flex items-center gap-x-2">
          <Icons.logo className="w-6 h-6" />
          <h1 className="text-lg font-medium">EDGE 25</h1>
        </Link>
      </div>

      <SignInForm />

      <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full justify-center">
        <p className="text-sm text-muted-foreground ">
          Don&apos;t yet participated?{" "}
          <Link href="https://learner.vierp.in" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

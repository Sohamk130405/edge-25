import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-full">
      <div className="flex items-center justify-center h-full flex-col">
        <span className="text-sm font-medium px-3.5 py-1 rounded-md bg-gradient-to-br from-violet-400 to-purple-600 text-neutral-50 not-found">
          Stay tuned!
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-50 mt-5">
          Coming Soon
        </h1>
        <p className="text-base text-neutral-400 font-medium mt-5 text-center mx-auto max-w-xl">
          The content you are looking for is under ideation. <br /> But
          don&apos;t worry, stay tuned.
        </p>
        <Link href="/">
          <Button className="mt-8">Back to homepage</Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;

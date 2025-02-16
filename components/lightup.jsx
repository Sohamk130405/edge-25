import { Button } from "@/components/ui/button";
import AnimationContainer from "./animation-container";
import MaxWidthWrapper from "./max-width-wrapper";
import { LampContainer } from "./ui/lamp";
import { ArrowRightIcon } from "lucide-react";

const Lightup = ({ title, desc }) => {
  return (
    <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
      <AnimationContainer delay={0.1}>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-6xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
              {title}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              {desc}
            </p>
            <div className="mt-6">
              <Button>
                Register Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </LampContainer>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default Lightup;

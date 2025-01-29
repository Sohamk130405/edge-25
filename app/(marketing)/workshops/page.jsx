import AnimationContainer from "@/components/animation-container";
import Workshops from "@/components/workshops";

const WorkshopsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          Professional Workshops
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Latest news and updates.
        </p>
      </AnimationContainer>
      <AnimationContainer delay={0.2} className="w-full pt-20">
        <Workshops />
      </AnimationContainer>
    </div>
  );
};

export default WorkshopsPage;

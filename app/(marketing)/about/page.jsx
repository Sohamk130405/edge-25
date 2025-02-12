import AnimationContainer from "@/components/animation-container";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          About EDGE'25
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Explore, Develop, Grow, ExceL
        </p>
      </AnimationContainer>
    </div>
  );
};

export default AboutPage;

import AnimationContainer from "@/components/animation-container";
import Lightup from "@/components/lightup";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Sponsors from "@/components/sponsors";
import MagicBadge from "@/components/ui/magic-badge";
import Image from "next/image";

const MainEventPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <AnimationContainer delay={0.1} className="w-full">
          <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
            <MagicBadge title="New" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
              MOCK GDPI
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
              Prepare for your dream job with our comprehensive mock group
              discussions and personal interviews.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid  md:grid-cols-2 gap-2 place-content-center">
          <AnimationContainer delay={0.2} className="w-full">
            <div className="w-full flex flex-col max-w-xl py-10 space-y-4 items-center">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Group Disscussions"
                width={720}
                height={720}
                className="w-full h-[360px] rounded-lg"
              />
              <MagicBadge title="Group Disscussions" />
              <p className="text-muted-foreground text-center">
                Immerse yourself in group sessions tailored to equip individuals
                with essential skills for boosting confidence in the job market.
              </p>
            </div>
          </AnimationContainer>
          <AnimationContainer delay={0.2} className="w-full">
            <div className="w-full flex flex-col max-w-xl py-10 space-y-4 items-center">
              <Image
                src="https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Group Disscussions"
                width={720}
                height={720}
                className="w-full h-[360px] rounded-lg"
              />
              <MagicBadge title="Personal Interviews" />
              <p className="text-muted-foreground text-center">
                Experience the interview with one-on-one
                sessions providing personalized feedback to enhance
                communication skills and proficiency.
              </p>
            </div>
          </AnimationContainer>
        </div>
        <Sponsors />
      </MaxWidthWrapper>
      <Lightup
        title={"Empowering Students for Professional Success"}
        desc={
          "E.D.G.E empowers students with real-world insights through mockGroup Discussions, Personal Interviews, and expert mentorship,enhancing communication, teamwork, and problem-solving skills forprofessional success."
        }
      />
    </>
  );
};

export default MainEventPage;

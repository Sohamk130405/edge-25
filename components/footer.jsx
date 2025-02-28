import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import AnimationContainer from "./animation-container";
import { Icons } from "./icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-start md:max-w-[200px]">
            <div className="flex items-start">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                height={720}
                width={1024}
                className="w-auto h-7"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              Explore, Develop, Grow, Excel with EDGE 25
            </p>
            <span className="mt-4 text-neutral-200 text-sm flex items-center">
              Organized by{" "}
              <Link
                href="https://abhivriddhivitpune.in"
                className="font-semibold ml-1"
              >
                Abhivriddhi
              </Link>
            </span>
          </div>
        </AnimationContainer>

        <div className="grid-cols-1 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="grid grid-cols-2">
            <AnimationContainer delay={0.3}>
              <div className="md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">Social</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="https://www.instagram.com/vit_abhivriddhi/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="https://www.youtube.com/@vit_abhivriddhi"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Youtube
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="https://www.linkedin.com/company/abhivriddhi-vit-pune/"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimationContainer>
            <AnimationContainer delay={0.4}>
              <div className="">
                <h3 className="text-base font-medium text-white">Event</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="/workshops"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Workshops
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/speakers"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Speakers
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/main-events"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Main-Events
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <AnimationContainer delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} EDGE. All rights reserved.
          </p>
        </AnimationContainer>
      </div>

      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
        <TextHoverEffect text="EDGE 25" />
      </div>
    </footer>
  );
};

export default Footer;

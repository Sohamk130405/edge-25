import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import MagicCard from "./ui/magic-card";
import speakers from "@/utils/constants/speakers.json";
// import { Instagram, Linkedin, Twitter } from "lucide-react";

const SpeakerSessions = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, id) => (
          <MagicCard key={id} className="p-0 md:p-0 relative">
            <Card className="group border-0 h-full">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center justify-center h-80 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={1024}
                    height={1024}
                    unoptimized
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-4">
                  <CardTitle className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300">
                    {speaker.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {speaker.description}
                  </CardDescription>
                </div>
              </CardContent>
              {/* <CardFooter className="flex justify-evenly items-center w-full">
                <Instagram className="cursor-pointer hover:scale-110 transition" />
                <Linkedin className="cursor-pointer hover:scale-110 transition" />
                <Twitter className="cursor-pointer hover:scale-110 transition" />
              </CardFooter> */}
            </Card>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSessions;

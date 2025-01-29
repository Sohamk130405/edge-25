import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command } from "@/components/ui/command";
import { cn } from "@/utils/functions/cn";
import {
  ArrowRightIcon,
  CalendarIcon,
  UsersIcon,
  ListIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { BorderBeam } from "./border-beam";

export const CARDS = [
  {
    Icon: ListIcon,
    name: "Register Now",
    description: "Sign up for EDGE and its sub-events effortlessly.",
    href: "/register",
    cta: "Register",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
        <CardHeader>
          <CardTitle>Register for EDGE</CardTitle>
          <CardDescription>
            Fill in your details to participate in EDGE and its sub-events.
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-4">
          <Label>Enter your details</Label>
          <Input
            type="text"
            placeholder="Enter your name..."
            className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
          />
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Event Contents",
    description:
      "Explore the detailed contents of the event, including workshops, speaker sessions, mock group discussions, and personal interviews.",
    href: "/contents",
    cta: "View Contents",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out p-4 bg-background grid grid-cols-2 gap-4 [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] group-hover:scale-105">
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/20 text-primary">
          <img
            src="/icons/workshop-icon.svg"
            alt="Workshop Icon"
            className="w-8 h-8 mb-2"
          />
          <p className="text-center text-sm font-medium">Workshops</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/20 text-primary">
          <img
            src="/speakers.png"
            alt="Speaker Session Icon"
            className="w-8 h-8 mb-2"
          />
          <p className="text-center text-sm font-medium">Speaker Sessions</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/20 text-primary">
          <img
            src="/icons/mock-group-discussion-icon.svg"
            alt="Mock Group Discussion Icon"
            className="w-8 h-8 mb-2"
          />
          <p className="text-center text-sm font-medium">
            Mock Group Discussions
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/20 text-primary">
          <img
            src="/icons/personal-interview-icon.svg"
            alt="Personal Interview Icon"
            className="w-8 h-8 mb-2"
          />
          <p className="text-center text-sm font-medium">Personal Interviews</p>
        </div>
      </div>
    ),
  },

  {
    Icon: UsersIcon,
    name: "Meet the Mentors",
    description: "Learn from industry experts and experienced mentors.",
    href: "/mentors",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        {/* Replace with mentor profile cards */}
        <div className="flex flex-col items-start p-4">
          <p className="text-lg font-semibold text-neutral-300">John Doe</p>
          <p className="text-sm text-neutral-400">Software Engineer at ABC</p>
        </div>
        <div className="flex flex-col items-start p-4">
          <p className="text-lg font-semibold text-neutral-300">Jane Smith</p>
          <p className="text-sm text-neutral-400">Data Scientist at XYZ</p>
        </div>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Your Event Calendar",
    description: "Personalize your EDGE schedule and track your events.",
    className: "col-span-3 lg:col-span-1",
    href: "/my-calendar",
    cta: "View Calendar",
    background: (
      <Calendar
        mode="range"
        defaultMonth={new Date(2025, 2)}
        selected={{
          from: new Date(2025, 2, 4),
          to: new Date(2025, 2, 7),
        }}
        className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <BorderBeam size={250} duration={12} delay={9} />
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link
        href={href}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "cursor-pointer",
        })}
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

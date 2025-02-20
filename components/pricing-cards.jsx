"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/utils/constants/pricing";
import { cn } from "@/utils/functions/cn";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const PricingCards = () => {
  const MotionTabTrigger = motion(TabsTrigger);

  return (
    <Tabs
      defaultValue="Vitian"
      className="w-full flex flex-col items-center justify-center"
    >
      <TabsList className="flex gap-4 rounded-3xl">
        <MotionTabTrigger value="Vitian" className="relative rounded-2xl">
          <motion.div
            layoutId="active-tab-indicator"
            transition={{
              type: "spring",
              bounce: 0.5,
            }}
            className="absolute top-0 left-0 w-full h-full shadow-sm  z-10"
          />
          <span className="z-20">Vitian</span>
        </MotionTabTrigger>
        <MotionTabTrigger value="Non-Vitian" className="relative rounded-2xl">
          <motion.div
            layoutId="tab-indicator"
            transition={{
              type: "spring",
              bounce: 0.5,
            }}
            className="absolute top-0 left-0 w-full h-full shadow-sm  z-10"
          />
          <span className="z-20">Non Vitian</span>
        </MotionTabTrigger>
      </TabsList>

      <TabsContent
        value="Vitian"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6"
      >
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col w-full border-border rounded-xl",
              plan.name === "EDGE + MOCK GDPI" && "border-2 border-purple-500"
            )}
          >
            <CardHeader
              className={cn(
                "border-b border-border",
                plan.name === "EDGE + MOCK GDPI"
                  ? "bg-purple-500/[0.07]"
                  : "bg-foreground/[0.03]"
              )}
            >
              <CardTitle
                className={cn(
                  plan.name !== "EDGE + MOCK GDPI" && "text-muted-foreground",
                  "text-lg font-medium"
                )}
              >
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.info}</CardDescription>
              <h5 className="text-3xl font-semibold flex items-end">
                ₹{plan.price.monthly}
              </h5>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <p
                          className={cn(
                            feature.tooltip &&
                              "border-b !border-dashed border-border cursor-pointer"
                          )}
                        >
                          {feature.text}
                        </p>
                      </TooltipTrigger>
                      {feature.tooltip && (
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button asChild>
                <Link href={"https://learner.vierp.in"}>Register now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
      <TabsContent
        value="Non-Vitian"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6"
      >
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col w-full border-border rounded-xl relative",
              plan.name === "EDGE + MOCK GDPI" && "border-2 border-purple-500"
            )}
          >
            <CardHeader
              className={cn(
                "border-b border-border",
                plan.name === "EDGE + MOCK GDPI"
                  ? "bg-purple-500/[0.07]"
                  : "bg-foreground/[0.03]"
              )}
            >
              <CardTitle
                className={cn(
                  plan.name !== "EDGE + MOCK GDPI" && "text-muted-foreground",
                  "text-lg font-medium"
                )}
              >
                {plan.name}
              </CardTitle>
              <CardDescription>{plan.info}</CardDescription>
              <h5 className="text-3xl font-semibold flex items-end">
                ₹{plan.price.yearly}
              </h5>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <p
                          className={cn(
                            feature.tooltip &&
                              "border-b !border-dashed border-border cursor-pointer"
                          )}
                        >
                          {feature.text}
                        </p>
                      </TooltipTrigger>
                      {feature.tooltip && (
                        <TooltipContent>
                          <p>{feature.tooltip}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <Button asChild>
                <Link href={plan.link}>Register now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default PricingCards;

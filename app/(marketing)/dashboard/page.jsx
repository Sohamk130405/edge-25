"use client";
import { useState } from "react";
import { useCurrentUser } from "@/hooks/user/useCurrentUser";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimationContainer from "@/components/animation-container";
import { BorderBeam } from "@/components/ui/border-beam";
import MagicBadge from "@/components/ui/magic-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import PlacementTips from "@/components/placement-tips";

const DashboardPage = () => {
  const { data: user, isLoading } = useCurrentUser();
  const isAdmin = user?.ticket === "Admin";
  const [isOpen, setIsOpen] = useState(false);
  const ticketImg = `/tickets/${user?.prn}.png`;
  const imageUrl = isAdmin
    ? "https://plus.unsplash.com/premium_vector-1736507340724-bb4a869e4e9d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    : ticketImg;

  return (
    <>
      <div className="overflow-x-hidden scrollbar-hide size-full">
        <AnimationContainer delay={0.1} className="w-full">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
            Dashboard
          </h1>
        </AnimationContainer>
        <MaxWidthWrapper>
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center gap-10 py-10">
            {/* Left Side - Ticket Image */}
            <div onClick={() => setIsOpen(true)}>
              <AnimationContainer
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl cursor-pointer"
              >
                <BorderBeam />
                <Image
                  src={imageUrl}
                  alt="Ticket"
                  width={300}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </AnimationContainer>
            </div>

            {/* Right Side - User Details */}
            <AnimationContainer
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <MagicBadge title="Profile" />
              <h1 className="text-lg font-medium">Welcome</h1>
              <h1 className="text-2xl font-medium">{user?.name || "User"}</h1>
              <p className="text-gray-500 mt-2">
                Your goodies as per our promise.
              </p>

              <Accordion type="single" collapsible className="w-64">
                <AccordionItem value="item-1">
                  <AccordionTrigger>LinkedIn Banner</AccordionTrigger>
                  <AccordionContent>
                    <Link
                      className="flex items-center hover:underline"
                      href={"assets/banner.pptx"}
                    >
                      Download now
                      <ArrowDown className="ml-auto size-4" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Resume Template</AccordionTrigger>
                  <AccordionContent>
                    <Link
                      className="flex items-center hover:underline"
                      href={
                        "https://www.overleaf.com/latex/templates/resume-professional-template-software-engineer/ttwtyxskrcsz"
                      }
                    >
                      Checkout Template
                      <ArrowRight className="ml-auto size-4" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>🔒 Certificate</AccordionTrigger>
                  <AccordionContent>
                    Coming Soon
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {!isLoading && user.ticket === "Admin" && (
                <Button>
                  <Link href={"/dashboard/admin"}>Admin Portal</Link>
                </Button>
              )}
            </AnimationContainer>
          </div>
          <PlacementTips/>
        </MaxWidthWrapper>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)} // Close on outside click
              >
                <motion.div
                  className="relative p-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <Image
                    src={imageUrl}
                    alt="Full Image"
                    width={800}
                    height={1200}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DashboardPage;

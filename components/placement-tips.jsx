"use client";

import { motion } from "framer-motion";
import {
  Code,
  Briefcase,
  UserCheck,
  Linkedin,
  MessageSquare,
  Brain,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MagicBadge from "./ui/magic-badge";

export default function PlacementTips() {
  const tips = [
    {
      id: 1,
      title: "Code Daily, Win Big!",
      description: "Master DSA & core CS subjects; consistency is key.",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      title: "Projects Speak Louder!",
      description: "Build real-world projects to stand out from the crowd.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: 3,
      title: "Mock It Till You Rock It!",
      description: "Practice interviews to boost confidence & performance.",
      icon: <UserCheck className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      id: 4,
      title: "LinkedIn = Your Digital Resume!",
      description: "Optimize it, network smartly & seek referrals.",
      icon: <Linkedin className="h-6 w-6" />,
      color: "bg-blue-600/10 text-blue-600",
    },
    {
      id: 5,
      title: "Ace HR with Stories!",
      description: "Use the STAR method to craft impressive answers.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      id: 6,
      title: "Stay Cool, Stay Confident!",
      description: "Problem-solving under pressure makes all the difference.",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-red-500/10 text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <MagicBadge
          title={"Career Tips"}
          className="mb-4 px-3 py-1 text-sm font-medium"
        />

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-[conic-gradient(from_45deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]">
            Smart Placement Tips
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Actionable strategies to help you land your dream job and stand out
          from the competition.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tips.map((tip) => (
          <motion.div
            key={tip.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-2">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${tip.color}`}
                >
                  {tip.icon}
                </div>
                <CardTitle className="text-xl font-bold">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-xl font-medium">
          Prepare smart, practice hard, and own your placements!
          <span className="ml-2 inline-block animate-pulse">🔥</span>
        </p>
      </motion.div>
    </div>
  );
}

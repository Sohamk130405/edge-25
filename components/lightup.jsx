"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimationContainer from "./animation-container";
import MaxWidthWrapper from "./max-width-wrapper";
import { LampContainer } from "./ui/lamp";
import { ArrowRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const Lightup = ({ title, desc }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const closeContactModal = () => setIsContactModalOpen(false);
  const openContactModal = () => setIsContactModalOpen(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myzkbnng", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Modal for Contact Form */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <DialogTitle className="text-2xl font-medium">Contact Us</DialogTitle>
          <DialogDescription className="mt-2 text-muted-foreground">
            Please fill in the form below and we will get back to you shortly.
          </DialogDescription>

          <form className="mt-4" onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              className="mt-2 w-full"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email" className="block mt-4 text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message" className="block mt-4 text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              className="mt-2 w-full"
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <div className="mt-6 flex justify-end gap-2">
              <Button variant="ghost" type="button" onClick={closeContactModal}>
                Close
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>

            {formStatus && (
              <div
                className={`mt-4 text-sm ${
                  formStatus === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {formStatus === "success"
                  ? "Thank you for contacting us! We will get back to you soon."
                  : "Something went wrong. Please try again."}
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>

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
              <div className="mt-6 flex justify-center space-x-4">
                <Button asChild>
                  <Link href="https://learner.vierp.in">
                    Register Now
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  onClick={openContactModal}
                  className="bg-transparent border text-white hover:bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
    </>
  );
};

export default Lightup;

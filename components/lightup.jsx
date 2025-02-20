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
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useSendEmail } from "@/hooks/useSendEmail";
import { toast } from "sonner";

const Lightup = ({ title, desc }) => {
  const { send, loading, response } = useSendEmail();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    await send(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsContactModalOpen(false);
    if (response.success) toast.success(response.message);
    else toast.error(response.message);
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
              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
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
                <Button
                  onClick={openContactModal}
                  className="bg-transparent border text-white hover:bg-white hover:text-black transition duration-500"
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

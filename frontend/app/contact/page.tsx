"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { z } from "zod";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaRegClock } from "react-icons/fa6";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";

import { Mail } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FindUsSection from "@/components/Findus";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(7, { message: "Enter a valid phone" }).optional(),
  email: z.string().email({ message: "Enter a valid email" }),
  subject: z.string().optional(),
  message: z.string().min(5, { message: "Message is required" }),
});

const Contact = () => {
  // move hook usage inside component to follow Rules of Hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
      subject: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <div>
      <Navbar />

      {/* Hero - Areas of Work */}
      <header
        className="relative overflow-hidden h-128 lg:h-164 flex items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 80, 46, 0.90) 35.58%, rgba(0, 0, 0, 0.72) 100%), url('/wateringMan.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="container mx-auto px-6 lg:px-24 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-2 items-start">
            {/* Left copy */}
            <div className="flex  flex-col text-white max-w-xl lg:p-4 lg:pr-8">
              <div className="flex items-center gap-2 md:gap-4 mb-16">
                <div className="w-8 md:w-12 h-1 bg-amber-400" />
                <div className="uppercase text-xl md:text-3xl text-amber-400 tracking-widest font-semibold">
                  Contact Us
                </div>
              </div>
              <h1 className="lg:text-6xl text-4xl md:text-5xl font-bold mb-7">
                We&apos;d love to hear from you
              </h1>
              <p className=" mb-7 text-amber-400 text-base md:text-xl">
                Have any question in mind or want to enquire more about One Million Birtu
                initiatives? Please feel free to contact us through the form or the following means.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="flex flex-col container mx-auto px-4 py-8 md:px-16 md:py-16 gap-12  md:gap-6">
          <div className="flex items-center justify-start md:mb-12 gap-2">
            <div className="w-8 md:w-12 h-0.75 bg-emerald-900 rounded-2xl" />
            <h3 className="text-2xl md:text-4xl font-semibold text-emerald-900 mr-4">
              WHAT&apos;S ON YOUR MIND?
            </h3>
          </div>

          <div className="grid grid-cols-1 px-4 md:px-12 lg:grid-cols-2 lg:gap-24 gap-8">
            {/* form card */}
            <div className="bg-white order-2 lg:order-1 rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jhon Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jhon Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="09xxxxxxxx" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xl">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Example@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xl">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xl">Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={7}
                            className="w-full rounded-md border border-gray-200 p-3 resize-vertical text-base"
                            placeholder="write your message here...."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-[#232433] text-white py-6 text-xl cursor-pointer"
                    >
                      Get in Touch
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <div className="flex flex-col gap-6 justify-start order-1 lg:order-2">
              <h4 className="text-2xl lg:text-3xl font-semibold text-gray-900">Let&apos;s talk!</h4>

              <div className="gap-3 flex flex-col md:gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-black ">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-base text-gray-600">+251 9012346514</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-black ">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-base text-gray-600">hello@largerthani.com</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 md:my-4" />

              <div className="flex flex-col gap-4 md:gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 text-2xl">Headoffice</h5>
                  <div className="text-base text-gray-600 flex items-center gap-2">
                    <HiOutlineOfficeBuilding size={24} />
                    Abyssinia Building, Bole-Medhanyalem , Addis Ababa, Ethiopia.
                  </div>
                </div>
                <div className="border-t border-gray-200 md:my-4" />
                <div>
                  <h5 className="font-semibold text-gray-900 mt-4 mb-2 text-2xl">Office Hours</h5>
                  <div className="text-base text-gray-600 flex items-center gap-2">
                    {" "}
                    <FaRegClock size={20} />
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-amber-400 flex flex-col items-center justify-center py-12 px-16 gap-6 text-center">
        <h1 className="text-4xl font-bold">Follow us</h1>
        <p className="text-xl font-light text-[#013D23] lg:w-1/2 md:w-3/4 sm:w-full">
          Stay connected with our latest stories and impact through our social media channels.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-[#013D23] cursor-pointer text-white flex items-center  md:text-base font-normal"
          >
            <IoLogoLinkedin size={30} />
            LinkedIn
          </Button>
          <Button
            size="lg"
            className="bg-[#013D23] cursor-pointer text-white  md:text-base flex items-center font-normal"
          >
            <FaFacebookSquare size={30} />
            Facebook
          </Button>
          <Button
            size="lg"
            className="bg-[#013D23] cursor-pointer text-white  md:text-base flex items-center font-normal"
          >
            <FaSquareXTwitter size={40} />
            Twitter
          </Button>
        </div>
      </div>

      <FindUsSection />

      <Footer />
    </div>
  );
};

export default Contact;

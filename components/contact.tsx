"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Button } from "./button";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter a valid email")
    .min(1, "Please enter email"),
  company: z.string().optional(),
  message: z.string().optional(),
});

export type LoginUser = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false); // State for success message
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Supabase integration for form submission
  async function onSubmit(values: LoginUser) {
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          full_name: values.name,
          email: values.email,
          company: values.company || null,
          message: values.message || null,
        },
      ]);

      if (error) {
        console.error("Supabase error:", error.message);
        alert("Failed to submit your message. Please try again.");
      } else {
        setSubmitted(true);
        form.reset();
      }
    } catch (e) {
      console.error("Unexpected error:", e);
      alert("Something went wrong. Please try again.");
    }
  }

  const socials = [
    {
      title: "linkedin",
      href: "https://www.linkedin.com/company/superformai/posts/?feedView=all",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
  ];

  return (
    <Form {...form}>
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Secure Your Spot Today
            </h1>
            <p className="mt-4 text-muted dark:text-muted-dark text-sm max-w-sm">
              Join the waitlist for exclusive early beta access to revolutionary AI tools. Don’t miss your chance to stay ahead of the curve!
            </p>
          </div>

          <div className="py-10">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              aria-label="Contact Form"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <FormControl>
                      <input
                        id="name"
                        type="text"
                        placeholder="Elon Musk"
                        className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                        {...field}
                      />
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <FormControl>
                      <input
                        id="email"
                        type="email"
                        placeholder="hello@johndoe.com"
                        className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Company
                    </label>
                    <FormControl>
                      <input
                        id="company"
                        type="text"
                        placeholder="Superform AI"
                        className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                        {...field}
                      />
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                    >
                      Message
                    </label>
                    <FormControl>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Enter your message here"
                        className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">Submit</Button>
            </form>
            {submitted && (
              <div
                className="mt-4 text-center text-green-600 dark:text-green-400"
                aria-live="polite"
              >
                <p>Thank you for joining the waitlist!</p>
                <p>Check your email for confirmation. We&apos;re excited to have you on this journey!</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link href={social.href} key={social.title}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Form>
  );
}

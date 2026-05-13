import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaFacebookF } from "react-icons/fa";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shihab.islam.dev@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shihab.islam.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Whatsapp",
      value: "+8801869452239",
      href: "https://wa.me/8801869452239",
    },
    {
      icon: MapPin,
      label: "From",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Shihab177",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shihab-islam77/",
      color: "hover:text-blue-600",
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/sk.shihab.73594",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shihab.islam.dev@gmail.com",
      color: "hover:text-red-500",
    },
  ];
 const onSubmit = async (data) => {
  setIsSubmitting(true);

  try {
    const res = await fetch("https://your-server-url/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div
      id="contact"
      className=" pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-12 md:pb-8 pb-4"
    >
      <h1 className="lg:text-[30px] md:text-[30px] text-[24px] text-center text-white font-semibold">
        Get In <span className="text-[var(--primary-color)]"> Touch</span>
      </h1>
      <p className="text-[16px] mt-4 text-white max-w-[600px] mx-auto text-center">
        Have a project in mind or just want to say hello? I'd love to hear from
        you. Let's create something amazing together!
      </p>
      <div className="lg:mt-14 md:mt-8 mt-6 flex lg:flex-row flex-col gap-10">
        {/*left */}
        <div className="lg:w-1/2">
          <h2 className="text-[20px] text-white font-semibold">
            Let's Start a Conversation
          </h2>
          <p className="text-[13px] md:text-[16px] text-gray-200">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and innovation.
          </p>
          {/* Contact Details */}
          <div className="lg:mt-8 md:mt-6 mt-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-4 py-6 rounded-lg hover:bg-gray-900 transition-colors group"
                  target="_blank"
                >
                  <div className="p-4 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out">
                    <Icon className="md:h-6 md:w-6 h-4 w-4" />
                  </div>
                  <div className="text-gray-200">
                    <p className="text-sm">{item.label}</p>
                    <p className="md:text-lg text-[15px] font-medium">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="lg:mt-8 md:mt-6 mt-4">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out`}
                  >
                    <Icon className="md:h-5 md:w-5 h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-[#111826] p-8 shadow-md rounded-md border-2 border-gray-700 text-white"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`py-2 px-4 bg-black w-full  placeholder:text-gray-200 ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`py-2 px-4 bg-black w-full shadow-md rounded-md placeholder:text-gray-200 ${errors.email ? "border-red-500" : ""}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                {...register("subject", {
                  required: "Subject is required",
                })}
                className={`py-2 px-4 bg-black shadow-md rounded-md placeholder:text-gray-200 ${errors.subject ? "border-red-500" : ""}`}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={`py-2 px-4 bg-black shadow-md rounded-md placeholder:text-gray-200 ${errors.message ? "border-red-500" : ""}`}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="py-3 flex items-center justify-center  w-full  bg-[var(--primary-color)] rounded-[10px] border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)] transition-all duration-500 ease-in-out"
            >
              {isSubmitting ? (
                <div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

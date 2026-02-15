import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "molikbhateja.2299@gmail.com",
    href: "mailto:molikbhateja.2299@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 - 88599939364",
    href: "tel:+91-8859939364",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Meerut , UP",
    href: "",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || err?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section
  id="contact"
  className="relative -space-x-2 py-20 md:py-32 overflow-hidden"
>
  {/* SAFE BACKGROUND GLOW */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-20 -left-20 w-40 h-72 md:w-96 md:h-96 bg-halfprimary rounded-full blur-[120px] opacity-40" />
    <div className="absolute -bottom-20 -right-20 w-40 h-60 md:w-80 md:h-80 bg-halfprimary rounded-full blur-[120px] opacity-40" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-secondaryForeground text-sm font-medium tracking-wider uppercase">
        Get In Touch
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-secondaryForeground">
        Let's build{" "}
        <span className="font-serif italic font-normal text-white">
          something great.
        </span>
      </h2>

      <p className="text-muted italic">
        Looking for your next great team member? I’m open to work — send me a message and let’s set up a conversation.
      </p>
    </div>

    {/* GRID */}
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

      {/* FORM */}
      <div className="glass w-full p-6 sm:p-8 rounded-3xl border border-halfprimary overflow-hidden">
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              placeholder="Your name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message..."
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border resize-none outline-none"
            />
          </div>

          <Button
            className="w-full transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)] md:!px-6  md:!py-3 lg:!px-7 lg:!py-3.5"
            type="submit"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>

          {submitStatus.type && (
            <div
              className={`p-4 rounded-xl text-sm break-words ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>

      {/* INFO */}
      <div className="space-y-6">

        <div className="glass rounded-3xl p-6 sm:p-8 overflow-hidden">
          <h3 className="text-xl font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-lowprimary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="font-medium break-words">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 border border-halfprimary">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">Currently Available</span>
          </div>

          <p className="text-muted-foreground text-sm break-words">
            I'm currently open and flexible to new opportunities and exciting projects.
            Whether you are searching for a developer or an associate programmer,
            let's talk!
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

  );
};
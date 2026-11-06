import { useState } from "react";
import emailjs from '@emailjs/browser';

export const useFormData = () => {
  const [formData, setFormData] = useState({ name: "", subject: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const templateParams = {
      name: formData.name,
      body: formData.message,
      subject: formData.subject || "Portfolio Contact Inquiry",
      email: formData.email,
    };

    try {
      const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback for development if env vars aren't set
        console.warn("EmailJS credentials not configured in environment variables.");
        // Simulate brief delay
        await new Promise((res) => setTimeout(res, 800));
        setSubmitStatus("success");
        setFormData({ name: "", subject: "", email: "", message: "" });
        return;
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus("success");
      setFormData({ name: "", subject: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name, value) => {
    if (submitStatus) setSubmitStatus(null);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, handleChange, sendEmail, isSubmitting, submitStatus, errorMessage };
};

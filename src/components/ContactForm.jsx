import React from "react";
import { useFormData } from "../hook/useFormData";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const {
    formData,
    handleChange,
    sendEmail,
    isSubmitting,
    submitStatus,
    errorMessage,
  } = useFormData();

  return (
    <div className="modern-contact-card">
      <div className="contact-card-header mb-4">
        <h3 className="contact-form-title">Send a Message</h3>
        <p className="contact-form-subtitle">
          Have an opportunity or question? Drop a message below and I'll respond as soon as possible.
        </p>
      </div>

      {submitStatus === "success" && (
        <div className="contact-alert contact-alert-success mb-4">
          <CheckCircle2 size={18} className="alert-icon" />
          <span>Thank you! Your message has been sent successfully.</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="contact-alert contact-alert-error mb-4">
          <AlertCircle size={18} className="alert-icon" />
          <span>{errorMessage || "Failed to send message. Please try again."}</span>
        </div>
      )}

      <form onSubmit={sendEmail} className="contact-form-body">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="modern-form-group">
              <label htmlFor="contact-name" className="modern-label">
                Your Name <span className="text-cyan">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                className="modern-input"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="modern-form-group">
              <label htmlFor="contact-email" className="modern-label">
                Your Email <span className="text-cyan">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
                className="modern-input"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="modern-form-group">
              <label htmlFor="contact-subject" className="modern-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder="Project discussion / Job Opportunity"
                className="modern-input"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="modern-form-group">
              <label htmlFor="contact-message" className="modern-label">
                Message <span className="text-cyan">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Hi Subramanya, I'd like to discuss..."
                className="modern-input modern-textarea"
              />
            </div>
          </div>

          <div className="col-12 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="modern-submit-btn w-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

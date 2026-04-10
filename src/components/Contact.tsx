import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  title: string;
  name: string;
  message: string;
  email: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    title: '',
    name: '',
    message: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  emailjs.init('4Cq0NA_dX3jU9ZTUz');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const serviceID = 'service_1jisi1l';
    const templateID = 'template_35jt2ng';

    try {
      const result = await emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          title: '',
          name: '',
          message: '',
          email: '',
        });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center mb-3">Get In Touch</h2>
        <p className="section-subtitle text-center mb-5">
          Let&apos;s talk about collaborations, freelance work, or new opportunities.
        </p>

        <div className="contact-wrapper">
          <form id="form" onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Subject <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  maxLength={120}
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={80}
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
                placeholder="Write your message..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-lg px-5 contact-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
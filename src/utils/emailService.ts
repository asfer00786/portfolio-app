/**
 * Email Service Integration Template
 * 
 * This file provides templates for integrating email functionality
 * with various email services. Choose one of the options below.
 */

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Option 1: EmailJS Integration (Client-side, no backend required)
 * 
 * Installation: npm install @emailjs/browser
 * Setup: https://www.emailjs.com/docs/
 * 
 * Example implementation:
 */
/*
import emailjs from '@emailjs/browser';

export const sendEmailWithEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Your Name', // Your name
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
*/

/**
 * Option 2: Formspree Integration (No backend required)
 * 
 * Setup: https://formspree.io/
 * 
 * Example implementation:
 */
/*
export const sendEmailWithFormspree = async (data: EmailData): Promise<boolean> => {
  try {
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Formspree error:', error);
    return false;
  }
};
*/

/**
 * Option 3: Backend API Integration
 * 
 * Create your own API endpoint to handle email sending
 * using services like SendGrid, Mailgun, Nodemailer, etc.
 * 
 * Example implementation:
 */
/*
export const sendEmailViaAPI = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('API error:', error);
    return false;
  }
};
*/

/**
 * Option 4: Mailto Link (Fallback - opens default email client)
 * 
 * Simple fallback that opens the user's default email client
 */
export const createMailtoLink = (data: EmailData, recipientEmail: string): string => {
  const subject = encodeURIComponent(data.subject);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  );
  
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
};

/**
 * Example Backend API Route (Node.js/Express)
 * 
 * Create this file in your backend: routes/contact.js
 * 
 * const express = require('express');
 * const router = express.Router();
 * const nodemailer = require('nodemailer');
 * 
 * router.post('/contact', async (req, res) => {
 *   const { name, email, subject, message } = req.body;
 * 
 *   // Configure your email transporter
 *   const transporter = nodemailer.createTransport({
 *     service: 'gmail', // or your email service
 *     auth: {
 *       user: process.env.EMAIL_USER,
 *       pass: process.env.EMAIL_PASS,
 *     },
 *   });
 * 
 *   const mailOptions = {
 *     from: email,
 *     to: process.env.CONTACT_EMAIL,
 *     subject: `Portfolio Contact: ${subject}`,
 *     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
 *     replyTo: email,
 *   };
 * 
 *   try {
 *     await transporter.sendMail(mailOptions);
 *     res.json({ success: true, message: 'Email sent successfully' });
 *   } catch (error) {
 *     console.error('Email error:', error);
 *     res.status(500).json({ success: false, message: 'Failed to send email' });
 *   }
 * });
 * 
 * module.exports = router;
 */


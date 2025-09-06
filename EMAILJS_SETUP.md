# EmailJS Setup Instructions

Your contact form is currently working but using placeholder EmailJS credentials. To enable actual email sending, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Configuration
Replace the placeholder values in `src/components/Contact/Contact.js`:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // From step 2
  TEMPLATE_ID: 'your_actual_template_id',   // From step 3  
  PUBLIC_KEY: 'your_actual_public_key'      // From step 4
};
```

## 6. Test Your Form
1. Save the file
2. Refresh your portfolio
3. Fill out and submit the contact form
4. Check your email for the message

## Current Status
✅ Form is functional and collects user data
✅ Form validation is working
✅ User gets success feedback
⚠️ EmailJS configuration needed for actual email sending

The form will currently show "Form submitted successfully!" message and log the data to console. Once you complete the EmailJS setup, actual emails will be sent.

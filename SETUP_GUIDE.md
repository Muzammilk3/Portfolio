# Portfolio Issues Resolution Guide

## Issues Fixed:

### 1. Resume Download Issue ✅ FIXED
**Problem**: Portfolio download button was looking for `/resume.pdf` but file was named differently.

**Solution**: Updated Hero.js to point to the correct file path:
- Changed from `/resume.pdf` to `/Muzammil_Resume.pdf`
- Added proper download attribute with filename

### 2. Contact Form Email Issue 🔧 NEEDS SETUP

**Problem**: EmailJS was using placeholder credentials, preventing emails from being sent.

**Solutions Provided**: Two options to choose from:

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service  
1. Click "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: Portfolio Contact: {{subject}}

Hi Muzammil,

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Your Code
Open `src/components/Contact/Contact.js` and update these lines:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id',   // Replace with your Template ID  
  PUBLIC_KEY: 'your_actual_public_key'      // Replace with your Public Key
};
```

## Option 2: Formspree Setup (Easier Alternative)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up for a free account

### Step 2: Create New Form
1. Click "New Form"
2. Enter your email: muzammilahmedk3@gmail.com
3. Copy the form endpoint URL

### Step 3: Replace Contact Component
Use the `ContactAlternative.js` file and update the form endpoint:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## Quick Test Instructions:

### For Resume Download:
1. Rebuild your project: `npm run build`
2. Test the "Download CV" button
3. Should download `Muzammil_Resume.pdf`

### For Contact Form:
1. Complete either EmailJS or Formspree setup above
2. Fill out the contact form on your portfolio
3. Submit a test message
4. Check your email inbox

## Files Modified:
- ✅ `src/components/Hero/Hero.js` - Fixed resume download path
- ✅ `src/components/Contact/Contact.js` - Updated EmailJS configuration
- ✅ Created `src/config/emailjs.js` - Configuration guide
- ✅ Created `src/components/Contact/ContactAlternative.js` - Formspree alternative

## Need Help?
If you encounter any issues:
1. Check browser console for error messages
2. Verify your EmailJS/Formspree credentials
3. Test with a simple message first
4. Ensure your email service is properly configured

Your portfolio should now have working download and contact functionality! 🚀

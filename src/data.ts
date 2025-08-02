// src/data.ts
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaLightbulb, FaHeart, FaHandsHelping, FaCogs, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import project1 from './assets/project-1.png';
import project2 from './assets/project-2.jpg';
import project3 from './assets/project-3.jpg';
import webDevImage from './assets/services-web-dev.png';
import ecommerceImage from './assets/services-ecommerce.webp';
import seoImage from './assets/services-seo.jpg';
import mobileAppImage from './assets/services-mobile-app.png';

// Import images for the Case Studies section
import caseStudyImage1 from './assets/case-study-1.jpg';
import caseStudyImage2 from './assets/case-study-2.jpeg';

import teamMember1 from './assets/team-member-1.png';
import teamMember2 from './assets/team-member-2.png';
import teamMember3 from './assets/team-member-3.png';
// import companyStoryImage from './assets/company-story.png';

export const servicesData = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: `We build bespoke, high-performance websites and web applications tailored to your specific business needs. Using modern frameworks like React, Next.js, and TypeScript, we ensure your digital presence is fast, secure, and scalable. Our focus is on clean code and exceptional user experience from the ground up.`,
    imageUrl: webDevImage,
    ctaText: 'Start a Web Project',
    ctaLink: '/contact',
  },
  {
    id: 2,
    title: 'E-commerce Solutions',
    description: `Transform your business with a robust and scalable online store. We design and develop powerful e-commerce platforms with secure payment gateways, intuitive product management, and a seamless checkout experience. Our solutions are built to grow with your business, whether you're a startup or a large enterprise.`,
    imageUrl: ecommerceImage,
    ctaText: 'Build My Store',
    ctaLink: '/contact',
  },
  {
    id: 3,
    title: 'SEO & Digital Strategy',
    description: `A beautiful website is only effective if people can find it. We optimize your site's technical structure, content, and backlinks to rank higher on search engines. Our digital strategy services ensure your online presence is not just visible, but also drives measurable traffic and converts visitors into loyal customers.`,
    imageUrl: seoImage,
    ctaText: 'Boost My Ranking',
    ctaLink: '/contact',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: `Extend your brand’s reach with a custom-built mobile application. We develop performant and intuitive cross-platform apps using technologies like React Native. From concept to launch, we guide you through the entire process to create an app that engages users and provides real value to your business.`,
    imageUrl: mobileAppImage,
    ctaText: 'Create an App',
    ctaLink: '/contact',
  },
];

export const testimonials = [
  {
    quote: "Our new website exceeded all expectations. Team's attention to detail and responsiveness were truly impressive. The project was delivered ahead of schedule and the results speak for themselves.",
    author: "Jane Doe, CEO",
    company: "InnovateTech Inc.",
  },
  {
    quote: "The e-commerce platform built by the team has revolutionized our online sales. We've seen a 40% increase in conversions since launch. Their technical expertise is second to none.",
    author: "John Smith, Founder",
    company: "Urban Threads",
  },
  {
    quote: "Working with this team was a fantastic experience. They listened to our needs, offered creative solutions, and built a beautiful, high-performing site that perfectly represents our brand.",
    author: "Sarah Chen, Marketing Director",
    company: "Global Ventures",
  },
];

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity, but a standard website typically takes 4-8 weeks from initial concept to launch. We provide a detailed timeline after our initial consultation.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer various support packages that include regular updates, security monitoring, and technical assistance to ensure your website remains fast and secure.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent and regular communication. We use tools like Slack and provide weekly progress reports to keep you informed every step of the way.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core expertise lies in the React ecosystem, including Next.js, TypeScript, and Tailwind CSS. We also have extensive experience with WordPress and various e-commerce platforms.",
  },
];

export const techStackIcons = [FaReact, SiNextdotjs, FaHtml5, FaCss3Alt, FaJs, SiTypescript, SiTailwindcss, FaWordpress];

export const projectsData = [
  {
    id: '1',
    title: 'E-commerce Platform',
    image: project1,
    description: 'Parfait E-Commerce Website Full-Stack Web Development | React (Vite) • Node.js • MongoDB • Tailwind CSS • PayStack Integration This full-stack e-commerce website was built for a gourmet parfait brand, focused on delivering a seamless shopping experience and a clean, modern aesthetic. Developed using React with Vite for lightning-fast performance, and styled with Tailwind CSS for a responsive, mobile-first design. Key Features: Product Catalog: Dynamic product listing with filters and category sorting powered by MongoDB. Individual Product Pages: Users can view detailed parfait descriptions, ingredients, and nutritional info with high-resolution images. Shopping Cart & Checkout: Intuitive cart management and secure PayStack payment integration. User Authentication: Secure login/signup flow using JWT-based authentication. Admin Dashboard: Role-based admin panel to manage products, view orders, and track inventory in real time. Responsive Design: Optimized for mobile, tablet, and desktop using Tailwind’s utility-first classes. Tech Stack: Frontend: React (Vite), Tailwind CSS Backend: Node.js, Express.js Database: MongoDB (Mongoose) Payments: PayStack REST API This project highlights my skills in building performant, user-centric web applications with a scalable backend and modern UI.',
    details: 'Project details and technologies used...',
    link: 'https://jp-ken-e-commerce-client.vercel.app'
  },
  {
    id: '2',
    title: 'School Management App',
    image: project2,
    description: "Studyhabit College is a dynamic web application designed to serve as a comprehensive online presence for an educational institution. Built with a modern tech stack, it offers a user-friendly experience for prospective students, current students, parents, and faculty. The platform effectively showcases the college's offerings, facilitates communication, and provides essential information. The frontend is developed using React and Vite, leveraging TypeScript for robust type safety and maintainability. Tailwind CSS is integrated for efficient and responsive styling, while Framer Motion adds engaging animations, enhancing the user interface. Swiper.js is used for interactive content carousels, providing a smooth Browse experience. The backend is powered by Node.js with Express.js, providing a scalable and efficient API. Data is managed with MongoDB, a NoSQL database, through Mongoose, an ODM, ensuring flexible and efficient data handling. The application includes robust features such as: User Authentication and Management: Secure handling of different user roles (students, parents, faculty, admins). Course Management: Display and organization of academic programs. Student Portals: Functionality for students to access information. Grade and Attendance Tracking: Core academic record management. Event and Announcement Systems: Keeping the community informed. Image Gallery: Showcasing campus life and facilities. Contact Forms: Streamlined communication channels. The project demonstrates proficiency in developing full-stack applications with a focus on modern web development practices, responsive design, and effective API integration. Deployed on Vercel (frontend) and Render (backend), it showcases practical experience with cloud deployment platforms.",
    details: 'More details about the redesign...',
    link: 'https://studyhabitcollege.vercel.app'
  },
  {
    id: '3',
    title: 'Air-Classic Travel App',
    image: project3,
    description: 'Air Classic – Travel App Flight Booking • Trip Management • Full-Stack Travel Platform Air Classic is a full-featured travel web application designed to simplify flight booking and itinerary management for modern travelers. Built with a sleek user interface and robust backend, the app offers a smooth, intuitive experience from flight search to payment. Key Features: Flight Search & Booking: Users can search for flights by destination, date, and airline, with real-time results and pricing. User Dashboard: Personalized dashboard for viewing upcoming trips, booking history, and profile details. Booking Confirmation & E-Tickets: Automated confirmation emails and downloadable e-tickets after payment. Payment Integration: Secure checkout process using PayPal API for flight purchases. Admin Panel: Manage flights, users, and bookings with role-based access. Responsive UI: Mobile-first design using Tailwind CSS for seamless browsing on any device. Tech Stack: Frontend: React (Vite), Tailwind CSS Backend: Node.js, Express.js Database: MongoDB Payments: Pay-stack REST API Authentication: JWT-based login and secure session management This project demonstrates my ability to build scalable, real-world booking systems with third-party API integration, responsive design, and full-stack architecture.',
    details: 'Details about the landing page...',
    link: 'https://air-classic-travel.vercel.app/'
  },
];


export const caseStudiesData = [
  {
    id: '1',
    title: "Revitalizing a Brand's Digital Identity",
    description: "A legacy brand needed a modern, responsive website to appeal to a new generation of customers. We conducted a full brand audit, redesigned their entire user experience, and rebuilt their site on a headless CMS for unparalleled performance.",
    imageUrl: caseStudyImage1,
    stats: [
      '30% increase in organic traffic',
      '45% faster page load times',
      'Streamlined content management',
    ],
    link: '/portfolio/case-study-1',
  },
  {
    id: '2',
    title: "Building an Intuitive E-commerce Experience",
    description: "We developed a custom e-commerce solution to help a local business scale nationally. Our focus was on creating a frictionless user journey, from product discovery to a secure, one-click checkout process.",
    imageUrl: caseStudyImage2,
    stats: [
      '15% increase in conversion rate',
      '20% higher average order value',
      'Seamless integration with inventory software',
    ],
    link: '/portfolio/case-study-2',
  },
];

export const teamMembers = [
  { 
    name: 'John Doe', 
    role: 'Lead Developer', 
    image: teamMember1, 
    bio: "John is a full-stack developer with over 10 years of experience. He specializes in React and backend architecture, ensuring every project is built with scalability and performance in mind.",
    socials: { linkedin: 'https://linkedin.com/in/johndoe' }
  },
  { 
    name: 'Jane Smith', 
    role: 'UI/UX Designer', 
    image: teamMember2, 
    bio: "Jane crafts beautiful and intuitive user interfaces. With a keen eye for detail and a passion for user-centric design, she transforms complex ideas into elegant, user-friendly experiences.",
    socials: { linkedin: 'https://linkedin.com/in/janesmith' }
  },
  { 
    name: 'Michael Brown', 
    role: 'Project Manager', 
    image: teamMember3, 
    bio: "Michael keeps every project on track and within budget. His exceptional organizational skills and clear communication ensure a smooth development process from start to finish.",
    socials: { linkedin: 'https://linkedin.com/in/michaelbrown' }
  },
];

export const coreValues = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We stay ahead of the curve, using the latest technologies to deliver forward-thinking solutions.',
  },
  {
    icon: FaHeart,
    title: 'Passion',
    description: 'We are genuinely passionate about our craft, pouring our hearts into every line of code and every design.',
  },
  {
    icon: FaHandsHelping,
    title: 'Collaboration',
    description: 'We work as your partner, not just a service provider, ensuring your vision is brought to life seamlessly.',
  },
  {
    icon: FaCogs,
    title: 'Quality',
    description: 'We are uncompromising in our commitment to quality, delivering robust and reliable digital experiences.',
  },
];

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    text: '123 Business Avenue, Lekki, Lagos, Nigeria',
    link: '#',
  },
  {
    icon: FaPhone,
    text: '+234 (0) 801 234 5678',
    link: 'tel:+2348012345678',
  },
  {
    icon: FaEnvelope,
    text: 'contact@youremail.com',
    link: 'mailto:contact@youremail.com',
  },
];

export const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'Find us on LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Find us on Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Find us on Instagram' },
];

export const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const footerLegalLinks = [
  { name: 'Privacy Policy', href: '/legal/privacy-policy' },
  { name: 'Terms of Use', href: '/legal/terms-of-use' },
];

export const footerContactInfo = [
  { icon: FaMapMarkerAlt, text: '123 Business Avenue, Lekki, Lagos, Nigeria', link: '#' },
  { icon: FaPhone, text: '+234 (0) 801 234 5678', link: 'tel:+2348012345678' },
  { icon: FaEnvelope, text: 'contact@youremail.com', link: 'mailto:contact@youremail.com' },
];

export const footerSocials = [
  { icon: FaGithub, href: 'https://github.com/your-team', label: 'GitHub' },
  { icon: FaTwitter, href: 'https://twitter.com/your-team', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/your-team', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/your-team', label: 'Instagram' },
];

export const legalDocuments = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'August 2, 2025',
    content: [
      {
        heading: '1. Introduction',
        body: 'EmmyCode ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By using our website, you agree to the terms of this policy.',
      },
      {
        heading: '2. Information We Collect',
        body: 'We may collect personal information such as your name, email address, and phone number when you fill out our contact forms or subscribe to our newsletter. We also collect non-personal information, such as browser type and usage data, to improve our services.',
      },
      {
        heading: '3. How We Use Your Information',
        body: 'We use the information we collect to communicate with you about your projects, send you updates, and improve our website experience. We do not sell or rent your personal information to third parties.',
      },
      {
        heading: '4. Data Security',
        body: 'We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.',
      },
      {
        heading: '5. Your Rights',
        body: 'You have the right to access, update, or delete your personal information. You can contact us at any time to exercise these rights.',
      },
      {
        heading: '6. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.',
      },
    ],
  },
  {
    id: 'terms-of-use',
    title: 'Terms of Use',
    lastUpdated: 'August 2, 2025',
    content: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and using the EmmyCode website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.',
      },
      {
        heading: '2. Intellectual Property',
        body: 'The content, design, and all other materials on this website are the exclusive property of EmmyCode and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.',
      },
      {
        heading: '3. User Conduct',
        body: 'You agree to use the website for lawful purposes only and in a way that does not infringe upon the rights of others. Any misuse of the website is strictly prohibited.',
      },
      {
        heading: '4. Disclaimer of Warranties',
        body: 'This website is provided "as is" without any warranties, express or implied. EmmyCode does not warrant that the website will be uninterrupted, error-free, or free of viruses.',
      },
      {
        heading: '5. Limitation of Liability',
        body: 'In no event shall EmmyCode be liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, incidental, or consequential damages.',
      },
      {
        heading: '6. Governing Law',
        body: 'This agreement shall be governed by the laws of Lekki, Lagos, Nigeria. Any disputes arising from these terms will be resolved in the courts of Lagos.',
      },
      {
        heading: '7. Changes to Terms',
        body: 'We reserve the right to modify these terms at any time. Your continued use of the website after any such changes constitutes your acceptance of the new terms.',
      },
    ],
  },
];

export const legalUpdates = [
  {
    title: 'Legal & Policy Updates',
    description: 'Stay informed about the latest updates to our legal documents and company policies.',
    links: [
      { title: 'Privacy Policy', href: '/legal/privacy-policy' },
      { title: 'Terms of Use', href: '/legal/terms-of-use' },
    ],
  },
];
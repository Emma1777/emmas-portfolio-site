import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa6';
import {
  FaGlobe, FaCode, FaPaintBrush, FaCameraRetro,
  FaIdBadge, FaImage
} from 'react-icons/fa';

import {
  FaHandshake,
  FaUsers,
  FaBalanceScale,
  FaPiggyBank,
  FaRocket,
  FaLightbulb
} from 'react-icons/fa';

export const values = [
  {
    icon: FaPiggyBank,
    title: 'Affordability',
    description: 'We offer premium design services tailored to your budget, making quality accessible for every creative and business.',
  },
  {
    icon: FaUsers,
    title: 'Customer First',
    description: 'Every project starts and ends with your needs — we listen, adapt, and deliver exactly what you envision and deserve.',
  },
  {
    icon: FaBalanceScale,
    title: 'Ethical Responsibility',
    description: 'Our work is guided by honesty and fairness, ensuring respectful collaboration and transparent design practices.',
  },
  {
    icon: FaHandshake,
    title: 'Trust & Reliability',
    description: 'You can count on us to meet deadlines, maintain clear communication, and deliver exactly what we promise — every time.',
  },
  {
    icon: FaRocket,
    title: 'Growth Oriented',
    description: 'We build websites that don’t just look good — they help you attract, retain, and grow your audience with purpose.',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Excellence',
    description: 'We combine originality and strategic thinking to craft designs that stand out and reflect your unique brand personality.',
  },
];



// Social media links
export const socialLinks = [
  { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=61575003892343' },
  { icon: FaXTwitter, url: 'https://x.com/@Tenny343' },
  { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/emmaculate-atieno-2b52a730b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' },
  { icon: FaYoutube, url: 'https://youtube.com/@Tenn.y34' },
  { icon: FaTiktok, url: 'https://tiktok.com/@tenny343' }, // Added TikTok
];
// src/constants/index.js
export const navLinks = [
  { title: 'Home',id: "home", },
  { title: 'About', id: "about", },
  { title: 'Solutions', id: "solutions", },
  { title: 'Contact', id: "contact", },
  { title: 'Blog', id: "blog", },
];
export const services = [
  {
    title: 'Website Design',
    icon: FaGlobe,
    description: 'Modern, responsive and visually appealing websites tailored to your brand.',
  },
  {
    title: 'Website Development',
    icon: FaCode,
    description: 'Custom-coded, fast-loading sites that work on all devices.',
  },
  {
    title: 'Logo & Brand Identity',
    icon: FaPaintBrush,
    description: 'Crafting memorable logos and visual styles to define your business.',
  },
  {
    title: 'Social Media Content Design',
    icon: FaCameraRetro,
    description: 'Eye-catching posts and stories that engage and grow your audience.',
  },
  {
    title: 'Business Cards & Flyers',
    icon: FaIdBadge,
    description: 'Professional marketing materials to showcase your brand offline.',
  },
  {
    title: 'Poster & Banner Design',
    icon: FaImage,
    description: 'Large-format designs for events, promos, and outdoor visibility.',
  },
];

import blogImage1 from './assets/emma-image.jpg';
import blogImage2 from './assets/emma-image.jpg';
import blogImage3 from './assets/emma-image.jpg';
import blogImage4 from './assets/emma-image.jpg';
import blogImage5 from './assets/emma-image.jpg';
import blogImage6 from './assets/emma-image.jpg';

export const blogs = [
  {
    id: 'why-every-business-needs-a-website',
    title: 'Why Every Business Needs a Website in 2025',
    summary: 'Explore why a professional website boosts brand trust and customer conversions — even in the age of social media.',
    image: blogImage1,
    date: 'July 2025',
    content: [
      'In today’s digital landscape, having a website is no longer optional — it’s essential. Customers expect to be able to search for your business online, find reliable information, and validate your credibility. Without a website, your brand risks appearing outdated or untrustworthy compared to competitors who have an established online presence.',
      'A website acts as your digital storefront, available 24/7, showcasing your products, services, and brand story. Unlike physical stores with operating hours, a website ensures that potential clients can learn about your business and make inquiries at any time of the day or night. This continuous availability increases your chances of generating leads and sales.',
      'Relying solely on social media for your digital presence limits your control. Platforms like Facebook, Instagram, or TikTok can change algorithms overnight, reducing your reach and engagement. A website, on the other hand, gives you full control of your brand, design, and messaging while serving as the central hub that links all your marketing channels together.',
      'Additionally, a professional website builds trust. Customers are more likely to purchase from a business that looks polished and organized online. Integrating testimonials, case studies, and clear calls-to-action not only enhances credibility but also converts visitors into paying customers. A well-designed site is an investment that continues to pay dividends for years to come.',
    ],
  },
  {
    id: 'top-5-branding-mistakes-to-avoid',
    title: 'Top 5 Mistakes to Avoid When Branding Your Business',
    summary: 'Avoid these costly branding errors and create a brand that’s memorable and consistent.',
    image: blogImage2,
    date: 'July 2025',
    content: [
      'Branding goes far beyond creating a logo. It is the emotional connection and overall impression people form when they interact with your business. Unfortunately, many businesses make mistakes that weaken their brand identity and confuse potential customers.',
      'The first common mistake is inconsistency. Using different colors, fonts, or tones of voice across platforms makes your brand appear unprofessional. Consistency builds recognition, and recognition builds trust. Without it, customers may struggle to associate your business with a clear identity.',
      'Another major mistake is unclear messaging. If your brand does not communicate what you do, who you serve, and why you’re different within seconds, you risk losing your audience’s attention. Clear, concise messaging should be the backbone of your brand strategy.',
      'Ignoring your audience is equally damaging. Branding isn’t about what you like — it’s about what resonates with your target customers. Businesses that fail to research and understand their audience often design branding that misses the mark.',
      'Finally, overlooking differentiation is a big branding error. If your visuals, slogans, and tone feel generic, you will blend into the crowd. Strong branding highlights your uniqueness and makes your business memorable in the minds of customers.',
    ],
  },
  {
    id: 'how-good-design-builds-trust',
    title: 'How Good Design Builds Customer Trust',
    summary: 'A clean, professional design creates credibility. Discover how layout, color, and typography affect perception.',
    image: blogImage3,
    date: 'July 2025',
    content: [
      'Design is the silent ambassador of your brand. Before customers read a single word, they judge your business based on the look and feel of your design. A cluttered, outdated, or unprofessional design instantly creates doubt and reduces credibility. On the other hand, a clean, modern, and cohesive design communicates trustworthiness and professionalism.',
      'Layout plays a crucial role in this trust-building process. A well-structured website with intuitive navigation shows that you respect your visitors’ time. Customers want to find information quickly and easily, and a confusing layout makes them leave before exploring further.',
      'Color psychology also has a significant impact. For example, blue often represents reliability and professionalism, green conveys growth and health, while black signals sophistication. Choosing colors intentionally ensures your design resonates with the emotions you want to evoke.',
      'Typography is another underrated factor. Fonts that are clear and easy to read make your content accessible. Overly decorative or inconsistent fonts can make your business appear amateurish. Professional typography reassures customers that you care about every detail.',
      'Ultimately, design demonstrates the values of your business. Investing in professional design not only builds customer trust but also creates a lasting impression that keeps people coming back.',
    ],
  },
  {
    id: 'how-to-prepare-for-your-website-project',
    title: 'How to Prepare for Your Website Project',
    summary: 'Thinking of getting a website? Here’s what to gather and how to be ready for a smooth development process.',
    image: blogImage4,
    date: 'July 2025',
    content: [
      'Launching a website is an exciting step, but preparation is the key to making the process smooth and cost-effective. Too often, businesses dive into development without a clear vision, resulting in delays, confusion, and unnecessary expenses. Being prepared ensures your project is efficient and successful.',
      'Start by defining your goals. Do you want your website to generate leads, sell products, showcase your portfolio, or simply provide information? Having a clear purpose will guide every design and functionality decision.',
      'Next, gather your content in advance. This includes images, product descriptions, brand story, testimonials, and any copy you want on your pages. Developers and designers can work faster when they have real content instead of placeholders. It also reduces the need for costly revisions later.',
      'Plan your structure. List the pages you need, such as Home, About, Services, Contact, Blog, or Portfolio. Consider what features are essential, like a contact form, online store, booking system, or newsletter signup. A well-thought-out sitemap prevents confusion and scope creep.',
      'Finally, research and communicate your brand identity clearly. Share your preferred colors, fonts, and design inspiration with your designer. The clearer your vision, the more aligned the final result will be with your expectations.',
    ],
  },
  {
    id: 'graphic-design-trends-2025',
    title: 'Graphic Design Trends to Watch in 2025',
    summary: 'Stay ahead with trending design styles that modern businesses are using to attract customers.',
    image: blogImage5,
    date: 'July 2025',
    content: [
      'The design world never stands still, and 2025 is no exception. This year, bold typography is making a comeback, with brands using oversized letters and unique fonts to capture attention instantly. Typography is becoming a central design element rather than a supporting one.',
      'Gradients are also evolving, with softer pastel tones replacing the neon hues of previous years. These modern gradients add depth and sophistication to digital visuals while keeping them fresh and approachable.',
      'Another growing trend is the use of 3D elements and icons. With the rise of AR and VR experiences, 3D design is becoming mainstream, adding realism and interactivity to digital interfaces. It helps brands stand out with a futuristic and dynamic appeal.',
      'Sustainability is influencing design heavily in 2025. Eco-friendly themes, earthy color palettes, and visuals inspired by nature are becoming popular, reflecting global concerns about climate change and conscious living.',
      'Lastly, motion design is on the rise. Subtle animations, scrolling effects, and micro-interactions enhance user experience, making websites more engaging and memorable. Businesses that embrace these trends will remain visually relevant and appealing to modern audiences.',
    ],
  },
  {
    id: 'web-vs-social-media',
    title: 'Web vs Social Media: Why You Need Both',
    summary: 'Discover how a website complements your social media presence — not replaces it.',
    image: blogImage6,
    date: 'July 2025',
    content: [
      'Social media is a powerful tool for visibility and engagement, but it is not enough to sustain your business in the long term. Platforms like Instagram and Facebook are excellent for building awareness, showcasing your brand personality, and connecting with audiences. However, they do not offer the full control and permanence that a website provides.',
      'A website serves as your digital headquarters. Unlike social platforms, which are subject to algorithm changes and competition for attention, your website belongs entirely to you. It is where potential customers go for detailed information, credibility checks, and professional interaction.',
      'Social media posts are fleeting — they get buried under endless new content. A website, on the other hand, allows you to create evergreen content through blogs, case studies, and portfolios. This builds long-term value and helps with SEO, ensuring people can find you on Google months or even years later.',
      'The most successful businesses use both together. Social media drives traffic and creates engagement, while the website converts that interest into inquiries, purchases, or signups. Treat social media as the handshake and your website as the business card and sales pitch.',
      'By combining both, you maximize your visibility and credibility. Social platforms attract attention, while your website secures trust and builds long-lasting customer relationships.',
    ],
  },
];

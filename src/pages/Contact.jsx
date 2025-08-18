import React, { useRef } from 'react';
import emmaImage from '../assets/emma-image.jpg';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
.then(() => {
      toast.success('Message sent successfully!');
      formRef.current.reset();
    }).catch((error) => {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    });
  };

  return (
    <section className="bg-whitish-bg py-12 px-4 md:px-12" id="contact" >
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blueish-bg">Get in Touch</h2>
        <p className="text-blueish-text mt-2 text-lg">
          Contact Emma Designs for creative and affordable visual designs.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img src={emmaImage} alt="Emma Designs" className="rounded-lg w-full object-cover shadow-md" />
        </div>

        {/* Right: Form */}
        <form ref={formRef} onSubmit={sendEmail} className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-5">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" id="from_name" name="from_name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueishbutton-bg" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueishbutton-bg" required />
          </div>
          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="from_email" name="from_email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueishbutton-bg" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueishbutton-bg" required></textarea>
          </div>
          <button type="submit" className="bg-blueishbutton-bg hover:bg-greenishbutton-bg transition text-white font-semibold py-2 px-6 rounded-md w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

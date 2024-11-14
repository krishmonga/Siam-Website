import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed-bg"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center px-8 py-16 space-y-12">
        
        {/* Title Section */}
        <section className="w-full max-w-3xl text-center space-y-4">
          <h1 className="text-4xl font-bold">About SIAM - JUIT Student Chapter</h1>
          <p className="text-lg text-gray-300">
            Welcome to the official page of the Society for Industrial and Applied Mathematics (SIAM) Student Chapter at Jaypee University of Information Technology, Solan. We are dedicated to advancing the application of mathematics in engineering, science, and technology.
          </p>
        </section>
        
        {/* SIAM Overview Section */}
        <section className="w-full max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">What is SIAM?</h2>
          <p className="text-gray-400">
            SIAM is a global organization that promotes the development and practical application of mathematical and computational methods. It serves as a bridge between mathematics and the real world, addressing scientific and industrial challenges through collaboration and innovation.
          </p>
        </section>
        
        {/* Chapter Mission Section */}
        <section className="w-full max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission at JUIT</h2>
          <p className="text-gray-400">
            At JUIT, the SIAM Student Chapter aims to inspire students to explore applied mathematics, engage in interdisciplinary research, and connect with professionals in the field. We strive to foster a community of aspiring mathematicians and scientists eager to make an impact.
          </p>
        </section>
        
        {/* Goals and Activities Section */}
        <section className="w-full max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">Our Goals and Activities</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Organize seminars and workshops on applied mathematics and computational science.</li>
            <li>Encourage collaboration between students and industry experts.</li>
            <li>Provide resources for academic and professional growth in STEM fields.</li>
            <li>Host events that showcase real-world applications of mathematical concepts.</li>
          </ul>
        </section>
        
        {/* Join Us Section */}
        <section className="w-full max-w-3xl space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Join Us</h2>
          <p className="text-gray-400">
            Interested in being a part of SIAM-JUIT? Connect with us to learn more about our events, membership, and how you can contribute to this growing community.
          </p>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
}

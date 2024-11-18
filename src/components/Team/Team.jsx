import React from 'react';

const Team = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="text-center">
        <h1 className="text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-8">
          Meet Our Team
        </h1>
        <p className="text-lg mb-12">
          Our team consists of passionate individuals committed to advancing the field of applied mathematics and making a difference in our community.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-16">
        <div className="bg-gray-800 p-6 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="team-member-1.jpg"
            alt="Team Member 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">John Doe</h3>
          <p className="text-gray-400">President</p>
          <p className="mt-2 text-gray-300">
            John is passionate about applied math and strives to bring innovative solutions to real-world problems.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="team-member-2.jpg"
            alt="Team Member 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
          <p className="text-gray-400">Vice President</p>
          <p className="mt-2 text-gray-300">
            Jane brings a wealth of experience in math modeling and is dedicated to growing the student chapter.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="team-member-3.jpg"
            alt="Team Member 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
          <p className="text-gray-400">Secretary</p>
          <p className="mt-2 text-gray-300">
            Emily plays a key role in organizing events and keeping the chapter running smoothly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;

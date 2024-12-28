// const Teams = () => {
//   return (
//     <div className="h-full flex flex-col justify-center items-center gap-10 bg-black">
//       <span className="text-5xl text-white">Team</span>
//       <span className="text-3xl text-red-600">Coming soon</span>
//     </div>
//   )
// }

// export default Teams;

import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

// Team members data
const teamMembers = [
  {
    name: "SAHIL GAWADE",
    photo: "/TeamPhotos/Sahil.png",
    phone: "+91 123 456 7890",
    email: "sahil@example.com",
    linkedin: "https://linkedin.com/in/sahil-gawade",
  },
  {
    name: "SHOBHIT",
    photo: "",
    phone: "+91 987 654 3210",
    email: "shobhit@example.com",
    linkedin: "https://linkedin.com/in/shobhit",
  },
  {
    name: "RUDRA AGRAWAL",
    photo: "",
    phone: "+91 111 222 3333",
    email: "rudra@example.com",
    linkedin: "https://linkedin.com/in/rudra-agrawal",
  },
  {
    name: "AYUSHI P",
    photo: "",
    phone: "+91 444 555 6666",
    email: "ayushi@example.com",
    linkedin: "https://linkedin.com/in/ayushi-p",
  },
  {
    name: "CHETAN KASABE",
    photo: "",
    phone: "+91 777 888 9999",
    email: "chetan@example.com",
    linkedin: "https://linkedin.com/in/chetan-kasabe",
  },
  {
    name: "RITESH MESHRAM",
    photo: "",
    phone: "+91 222 333 4444",
    email: "ritesh@example.com",
    linkedin: "https://linkedin.com/in/ritesh-meshram",
  },
];

const Teams = () => {
  return (
    <div className="h-full flex flex-col items-center gap-10 bg-black p-10">
      {/* Header */}
      <h1 className="text-5xl text-white mb-10">Executive Team</h1>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 bg-gradient-to-b from-red-600 to-black p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Circular Photo with Black Background */}
            <div className="relative w-48 h-48 rounded-full bg-black flex items-center justify-center">
              <img
                src={member.photo || "/default-avatar.png"} // Fallback image if photo is missing
                alt={member.name}
                className="w-44 h-44 object-cover rounded-full border-4 border-white"
              />
            </div>
            {/* Member Name */}
            <span className="text-white text-xl font-semibold">{member.name}</span>

            {/* Member Details */}
            <div className="text-white text-sm mt-4 space-y-2">
              {/* Phone Number */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-red-600" />
                <span>{member.phone}</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-600" />
                <span>{member.email}</span>
              </div>
              {/* LinkedIn */}
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-red-600" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

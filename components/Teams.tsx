// const Teams = () => {
//   return (
//     <div className="h-full flex flex-col justify-center items-center gap-10 bg-black">
//       <span className="text-5xl text-white">Team</span>
//       <span className="text-3xl text-red-600">Coming soon</span>
//     </div>
//   )
// }

// export default Teams;

import React, { useMemo } from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

interface TeamMember {
  name: string;
  photo?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
}

const teamMembers: { [key: string]: TeamMember[] } = {
  chairperson: [
    {
      name: "ISHAN PANDEY",
      photo: "/TeamPhotos/Ishan.png",
      phone: "+91 6376317859",
      email: "ishanpandey@duck.com",
      linkedin: "https://www.linkedin.com/in/ishan-paandey/",
    },
    {
      name: "PRANAY GAIDHANE",
      photo: "/TeamPhotos/Pranay.png",
      phone: "+91 8308728488",
      email: "gaidhanepranay19@gmail.com",
      linkedin: "https://www.linkedin.com/in/pranay-gaidhane-319843217/",
    },
  ],
  licensee: [
    {
      name: "TANVI MALODE",
      photo: "/TeamPhotos/Tanvi.png",
      phone: "+91 9096779472",
      email: "malodetanvi01@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/tanvi-malode-5744a4258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  coorganiser: [
    {
      name: "ABHIJEET SINGH",
      photo: "/TeamPhotos/Abhijeet.png",
      phone: "+91 8504827156",
      email: "abhijeettsingh2715@gmail.com",
      linkedin: "https://www.linkedin.com/in/abhijeet-singh-as1510",
    },
  ],
  curators: [
    {
      name: "SUDHANSHU TIWARI",
      photo: "/TeamPhotos/Sudhanshu.png",
      phone: "+91 9130692448",
      email: "sudhanshutiwari4117@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/sudhanshu-tiwari-843ba525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "APURVA UGALE",
      photo: "/TeamPhotos/Apurva.png",
      phone: "+91 8208874080",
      email: "bt22mme018@students.vnit.ac.in",
      linkedin: "http://linkedin.com/in/apurva-ugale-3964b1267",
    },
    {
      name: "ANSHUL MUKATI",
      photo: "/TeamPhotos/Anshul.png",
      phone: "+91 9479402002",
      email: "anshulmukati2021@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/anshul-mukati-643a15285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  technicalhead: [
    {
      name: "HARSH AGRAWAL",
      photo: "/TeamPhotos/Harsh.png",
      phone: "+91 8805214581",
      email: "hagrawal560@gmail.com",
      linkedin: "http://www.linkedin.com/in/harsh-agrawal-1o0",
    },
  ],
  marketinghead: [
    {
      name: "ROHIT SHRIVAS",
      photo: "/TeamPhotos/Rohit.png",
      phone: "+91 7440391889",
      email: "rohitshrivas453@gmail.com",
      linkedin: "",
    },
    {
      name: "AQUIB SHAIKH",
      photo: "/TeamPhotos/Aquib.png",
      phone: "+91 8581930601",
      email: "aquibshaikh200215@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/aquib-iqbal-shaikh-042504253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "ANUJ SINGH",
      photo: "/TeamPhotos/Anuj.png",
      phone: "+91 9373765481",
      email: "anujsingh.442211@gmail.com",
      linkedin: "https://www.linkedin.com/in/anujsingh5",
    },
  ],
  brandhead: [
    {
      name: "BHAKTI UMARKAR",
      photo: "/TeamPhotos/Bhakti.png",
      phone: "+91 9552990692",
      email: "bhaktiumarkar497@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/bhakti-umarkar-101754282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "ANURAG TIWARI",
      photo: "/TeamPhotos/Anurag.png",
      phone: "+91 7572041766",
      email: "tiwanurag44@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/anurag-tiwari-172a59250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  executiveTeam: [
    {
      name: "SAHIL GAWADE",
      photo: "/TeamPhotos/Sahil.png",
      phone: "+91 9309500965",
      email: "gawadesahil36@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/sahil-gawade-4b0716286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "SHOBHIT",
      photo: "/TeamPhotos/Shobhit.png",
      phone: "+91 9140503651",
      email: "shobhitsingh1024@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/shobhit-kumar-singh-135844338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "RUDRA AGRAWAL",
      photo: "/TeamPhotos/Rudra.png",
      phone: "+91 9352477416",
      email: "rudraaggarwal09@gmail.com",
      linkedin: "http://linkedin.com/in/rudra-agrawal09",
    },
    {
      name: "AYUSHI P",
      photo: "/TeamPhotos/Ayushi.png",
      phone: "+91 6202948481",
      email: "priyadarshini.priyanka2004@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/ayushi-priyadarshini-001aa027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "CHETAN KASABE",
      photo: "/TeamPhotos/Chetan.png",
      phone: "+91 7744871579",
      email: "chetankasabe0@gmail.com",
      linkedin: "",
    },
    {
      name: "RITESH MESHRAM",
      photo: "/TeamPhotos/Ritesh.png",
      phone: "+91 8177940716",
      email: "riteshmeshram233@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/ritesh-meshram-b80b13343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  marketingTeam: [
    {
      name: "PRATYUSH KUMAR",
      photo: "/TeamPhotos/Pratyush.png",
      phone: "+91 7028799484 ",
      email: "prat210105.kr@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/pratyush-kumar-90aaa4284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
    {
      name: "YASHASHWI KUMAR ",
      photo: "/TeamPhotos/Yashashwi.png",
      phone: "+91 7839571042",
      email: "yashashwinks@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/yashashwi-kumar-3b4953312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "KAUSTUBH WARDHE",
      photo: "/TeamPhotos/Kaustubh.png",
      phone: "+91 8605139498",
      email: "kaustubhwardhe88@gmail.com",
      linkedin: "https://www.linkedin.com/in/kaustubh-wardhe-b2a9a7278/",
    },
    {
      name: "UJJAWAL ASHTHANA",
      photo: "/TeamPhotos/Ujjawal.png",
      phone: "+91 8303282787 ",
      email: "ujjawalasthana7943@gmail.com ",
      linkedin:
        "https://www.linkedin.com/in/ujjawal-asthana-50925a203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "ILYAS PITHEWAN",
      photo: "/TeamPhotos/Ilyas.png",
      phone: "+91 9806666152",
      email: "ilyaspithewan@gmail.com",
      linkedin: "https://www.linkedin.com/in/ilyas-pithewan-b18a24289/",
    },
    {
      name: "PRAGYA CHAKRAVARTHY",
      photo: "/TeamPhotos/Pragya.png",
      phone: "+91 9769091274 ",
      email: "pragyac09@gmail.com ",
      linkedin:
        "https://www.linkedin.com/in/pragya-chakravarty-a82209327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
    },
  ],
  brandTeam: [
    {
      name: "RAJ ARYAN",
      photo: "/TeamPhotos/Raj.png",
      phone: "+91 7909001445",
      email: "rajaryangupta1445@gmail.com",
      linkedin: "https://www.linkedin.com/in/raj-aryan-gupta-4a48aa26b/",
    },
    {
      name: "VIRINCHI JACKSON",
      photo: "/TeamPhotos/Virinchi.png",
      phone: "+91 7997990440",
      email: "bt23mme078@students.vnit.ac.in",
      linkedin: "https://www.linkedin.com/in/virinchilankadasari/",
    },
    {
      name: "SUJAL BURADE",
      photo: "/TeamPhotos/Sujal.png",
      phone: "+91 7666624849 ",
      email: "buradesujal@gmail.com ",
      linkedin:
        "https://www.linkedin.com/in/sujal-burade-28787a30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    },
  ],
  techTeam: [
    {
      name: "GIRISH MORE",
      photo: "/TeamPhotos/Girish.png",
      phone: "+91 9890564620",
      email: "girishmore097@gmail.com",
      linkedin: "https://www.linkedin.com/in/girish-more-085b9924a",
    },
  ],
};
const teamCategoryNames: { [key: string]: string } = {
  chairperson: "CHAIRPERSON",
  licensee: "LICENSEE",
  coorganiser: "CO-ORGANISER",
  curators: "CURATORS",
  marketinghead: "MARKETING HEAD",
  brandhead: "BRAND HEAD",
  technicalhead: "TECHNICAL HEAD",
  executiveTeam: "EXECUTIVE TEAM",
  marketingTeam: "MARKETING TEAM",
  brandTeam: "BRAND TEAM",
  techTeam: "TECH TEAM",
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex flex-col items-center gap-6 bg-gradient-to-b from-red-600 to-black p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative w-48 h-48 rounded-full bg-black flex items-center justify-center">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="w-44 h-44 object-cover rounded-full border-4 border-white"
        />
      ) : (
        <div className="w-44 h-44 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-center text-xl text-white">
          {member.name.charAt(0)}
        </div>
      )}
    </div>
    <span className="text-white text-xl font-semibold">{member.name}</span>
    <div className="flex gap-6 mt-4">
      {member.phone && (
        <a
          href={`tel:${member.phone}`}
          className="text-red-600 text-2xl hover:text-red-800"
          title="Call"
        >
          <FaPhone />
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-red-600 text-2xl hover:text-red-800"
          title="Email"
        >
          <FaEnvelope />
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-2xl hover:text-blue-700"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
  </div>
);

const Teams = () => {
  return (
    <div className="bg-black p-8">
      {Object.entries(teamMembers).map(([teamKey, members]) => {
        const teamName =
          teamCategoryNames[teamKey] ||
          teamKey.charAt(0).toUpperCase() + teamKey.slice(1);
        return (
          <div className="mb-16" key={teamKey}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-red-600 mb-12 p-4 bg-white rounded-full shadow-md w-[70%] mx-auto border-b-4 border-red-600 min-w-[300px] sm:min-w-[300px] lg:min-w-[400px]">
              {teamName}
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mx-auto w-full max-w-screen-xl">
              {members.map((member, index) => (
                <div
                  className="flex justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                  key={index}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;

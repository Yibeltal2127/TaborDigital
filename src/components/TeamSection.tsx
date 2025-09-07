import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
  skills: string[];
  linkedin: string;
  email: string;
}


const teamMembers = [
  {
    id: 1,
    name: "Yibeltal Dires",
    role: "Senior CAD Specialist | Structural Engineer | Founder & CEO",
    specialization: "Structural Engineering & Engineering Software Training",
    image: "https://res.cloudinary.com/dlv8bqq37/image/upload/v1751668496/Yibe_edt1dh.jpg",
    bio: "With 5 years of experience as a Structural Engineer and 3 years as an Engineering Software Trainer, Yibeltal brings comprehensive expertise in civil engineering and software development to lead our technical solutions.",
    skills: ["AutoCAD", "ETABS", "SAFE", "Primavera", "MS-Project", "AutoCAD Civil 3D"],
    linkedin: "https://www.linkedin.com/in/yibe-designer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEUGI%2FzXxRkyQV6PUnOZTXQ%3D%3D",
    email: "daniel@tabordigital.com"
  },
  {
    id: 2,
    name: "Sara Melaku",
    role: "Creative Director",
    specialization: "Brand Identity & Visual Design",
    image: "https://res.cloudinary.com/dlv8bqq37/image/upload/v1751296792/td_ss_1_mhtn8t.jpg",
    bio: "Sara brings creativity and strategic thinking to every project, ensuring our designs not only look beautiful but also drive business results.",
    skills: ["Brand Design", "UI/UX", "Creative Strategy", "Team Leadership"],
    linkedin: "https://linkedin.com/in/sara-mohammed",
    email: "sara@tabordigital.com"
  },
  {
    id: 3,
    name: "Abenezer Kifle",
    role: "Full Stack Developer",
    specialization: "Web & Mobile Development",
    image: "https://res.cloudinary.com/dlv8bqq37/image/upload/v1751668133/Abeni_kffdts.jpg",
    bio: "Abenezer is a skilled Full Stack Developer passionate about creating scalable, user-friendly applications that solve real-world problems for businesses across Ethiopia.",
    skills: ["React", "Node.js", "Mobile Development", "System Architecture"],
    linkedin: "linkedin.com/in/abenezer-kifle",
    email: "abebe@tabordigital.com"
  },
  {
    id: 4,
    name: "Meron Tadesse",
    role: "Interior Design Lead",
    specialization: "Space Planning & 3D Visualization",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Meron transforms spaces into functional, beautiful environments that enhance productivity and well-being for our clients.",
    skills: ["3D Modeling", "Space Planning", "Sustainable Design", "Project Management"],
    linkedin: "https://linkedin.com/in/meron-tadesse",
    email: "meron@tabordigital.com"
  }
];


const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-3">
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-[#FF6B35] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${member.email}`}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-[#FF6B35] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-[#FF6B35] font-medium mb-2">{member.role}</p>
        <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill: string, index: number) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Company Story */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Meet Our Team
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              We're a passionate team of designers, developers, and consultants dedicated to empowering Ethiopian businesses through innovative digital solutions.
            </p>
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-lg leading-relaxed">
                Founded in 2019 as Eagle Consulting Architects and Engineers, Tabor Engineering & Digital Solutions emerged from a vision to bridge the engineering and digital gap for Ethiopian businesses. 
                We started as a small team of engineering enthusiasts and have grown into a comprehensive engineering and digital agency, 
                helping hundreds of businesses transform their operations and reach new heights through engineering design, technology, and digital innovation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        
        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            If you're ready to make an impact, we'd love to hear from you.
          </p>
          <button className="bg-[#FF6B35] hover:bg-[#4ECDC4] text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
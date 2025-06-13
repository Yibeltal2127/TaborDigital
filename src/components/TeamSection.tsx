import React from 'react';
import { Linkedin, Mail, Award, Users, Target, Heart } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Daniel Mekonnen",
    role: "Founder & CEO",
    specialization: "Full-Stack Development & Business Strategy",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "With over 8 years of experience in software development and business consulting, Daniel leads our vision of empowering Ethiopian businesses through technology.",
    skills: ["Leadership", "Strategy", "Full-Stack Development", "Business Development"],
    linkedin: "https://linkedin.com/in/daniel-mekonnen",
    email: "daniel@tabordigital.com"
  },
  {
    id: 2,
    name: "Sara Mohammed",
    role: "Creative Director",
    specialization: "Brand Identity & Visual Design",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sara brings creativity and strategic thinking to every project, ensuring our designs not only look beautiful but also drive business results.",
    skills: ["Brand Design", "UI/UX", "Creative Strategy", "Team Leadership"],
    linkedin: "https://linkedin.com/in/sara-mohammed",
    email: "sara@tabordigital.com"
  },
  {
    id: 3,
    name: "Abebe Kebede",
    role: "Lead Developer",
    specialization: "Web & Mobile Development",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Abebe is passionate about creating scalable, user-friendly applications that solve real-world problems for businesses across Ethiopia.",
    skills: ["React", "Node.js", "Mobile Development", "System Architecture"],
    linkedin: "https://linkedin.com/in/abebe-kebede",
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
  },
  {
    id: 5,
    name: "Yohannes Girma",
    role: "Business Consultant",
    specialization: "Strategy & Operations",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Yohannes helps businesses optimize their operations and develop growth strategies that drive sustainable success.",
    skills: ["Business Strategy", "Operations", "Market Analysis", "Financial Planning"],
    linkedin: "https://linkedin.com/in/yohannes-girma",
    email: "yohannes@tabordigital.com"
  },
  {
    id: 6,
    name: "Tekle Hailu",
    role: "Senior Engineer",
    specialization: "Structural & MEP Engineering",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Tekle brings precision and innovation to our engineering projects, ensuring every design meets the highest standards of safety and efficiency.",
    skills: ["Structural Design", "MEP Systems", "CAD", "Project Engineering"],
    linkedin: "https://linkedin.com/in/tekle-hailu",
    email: "tekle@tabordigital.com"
  }
];

const companyValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and close collaboration with our clients."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve complex challenges."
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We're committed to making a positive impact on businesses and communities in Ethiopia."
  }
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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
          {member.skills.map((skill, index) => (
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

const ValueCard = ({ value }) => {
  const Icon = value.icon;
  
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] text-white rounded-full mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
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
                Founded in 2020, Tabor Digital Solutions emerged from a vision to bridge the digital gap for Ethiopian businesses. 
                We started as a small team of tech enthusiasts and have grown into a comprehensive digital agency, 
                helping hundreds of businesses transform their operations and reach new heights through technology and design.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        {/* Company Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
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
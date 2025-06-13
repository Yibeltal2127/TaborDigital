export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'contact' | 'services' | 'pricing';
  quickActions?: string[];
  satisfactionCheck?: boolean;
}

export interface ChatResponse {
  text: string;
  type: 'text' | 'contact' | 'services' | 'pricing';
  quickActions?: string[];
  satisfactionCheck?: boolean;
  stage?: 'greeting' | 'helping' | 'escalation';
}

// Predefined responses for common queries
export const chatbotResponses = {
  greeting: [
    "Hello! I'm here to help you learn about our digital services. What would you like to know?",
    "Hi there! Welcome to Tabor Digital Solutions. How can I assist you today?",
    "Great to see you! I'm your virtual assistant. What brings you here today?"
  ],
  
  services: {
    general: "We offer 6 main services: Graphic Design, Web Development, Digital Marketing, Business Consulting, Interior Design, and Engineering Design. Which one interests you most?",
    
    'graphic design': "Our graphic design services include:\n\n• Brand Identity & Logo Design\n• Marketing Materials (brochures, flyers, posters)\n• Social Media Graphics\n• Packaging Design\n• Print Design\n\nPricing starts from $200 for basic logo design. Would you like to see our portfolio or get a custom quote?",
    
    'web development': "We create modern, responsive websites and web applications:\n\n• Custom Website Development\n• E-commerce Solutions\n• Web Applications\n• Mobile-Responsive Design\n• SEO Optimization\n\nBasic websites start from $800. Complex applications range from $2,000-$10,000. Want to discuss your specific needs?",
    
    'digital marketing': "Our digital marketing services help grow your online presence:\n\n• Search Engine Optimization (SEO)\n• Social Media Marketing\n• Pay-Per-Click Advertising\n• Email Marketing\n• Content Marketing\n\nMonthly packages start from $300. Shall I connect you with our marketing specialist?",
    
    'business consulting': "We provide strategic business guidance:\n\n• Business Strategy Development\n• Market Analysis\n• Growth Planning\n• Process Optimization\n• Financial Planning\n\nConsultation rates: $100/hour or project-based pricing. Would you like to book a free initial consultation?",
    
    'interior design': "Transform your space with our interior design services:\n\n• Space Planning\n• 3D Visualization\n• Residential & Commercial Design\n• Furniture Selection\n• Lighting Design\n\nProjects start from $500 for consultation + 3D renders. Interested in seeing our design portfolio?",
    
    'engineering design': "Professional engineering solutions:\n\n• Structural Engineering\n• Architectural Design\n• MEP Systems Design\n• Construction Documentation\n• Project Management\n\nPricing varies by project scope. Would you like to discuss your specific engineering needs?"
  },
  
  pricing: {
    general: "Our pricing varies by service and project scope:\n\n💰 Graphic Design: $200 - $2,000\n💰 Web Development: $800 - $10,000\n💰 Digital Marketing: $300/month+\n💰 Business Consulting: $100/hour\n💰 Interior Design: $500 - $5,000\n💰 Engineering: Custom quotes\n\nAll projects include free consultation. Want a detailed quote for your specific needs?",
    
    packages: "We offer flexible pricing packages:\n\n🌟 Starter Package: Basic services for small businesses\n🚀 Growth Package: Comprehensive solutions for expanding companies\n💎 Enterprise Package: Full-service solutions for large organizations\n\nEach package is customized to your needs. Shall I help you find the right fit?"
  },
  
  contact: "Here's how you can reach us:\n\n📞 Phone: +251 91 123 4567\n📧 Email: contact@tabordigital.com\n📍 Office: Bole Road, Addis Ababa\n🕒 Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM\n\nWould you like to schedule a free consultation or get a project quote?",
  
  portfolio: "I'd love to show you our work! You can view our complete portfolio at our website's portfolio section. We've completed 500+ projects across all our service areas.\n\nSome highlights:\n• 200+ websites developed\n• 150+ brand identities created\n• 100+ marketing campaigns\n• 50+ interior design projects\n\nWould you like me to direct you to specific portfolio categories?",
  
  consultation: "Great choice! Our free consultation includes:\n\n✅ 20-minute strategy session\n✅ Project scope discussion\n✅ Timeline estimation\n✅ Custom pricing proposal\n✅ No obligation\n\nWould you like to book now or learn more about what we'll cover?",
  
  fallback: [
    "I want to make sure I give you the most accurate information. Could you rephrase your question or let me know which of our services you're most interested in?",
    "That's a great question! To provide you with the best answer, could you tell me more about what you're looking for?",
    "I'd love to help you with that. Can you give me a bit more context about your specific needs?"
  ]
};

// AI Response Generator
export const getAIResponse = async (userMessage: string, stage: string): Promise<ChatResponse> => {
  const message = userMessage.toLowerCase();
  
  // Service-specific responses
  if (message.includes('graphic design') || message.includes('logo') || message.includes('branding')) {
    return {
      text: chatbotResponses.services['graphic design'],
      type: 'text',
      quickActions: ['Show me graphic design portfolio', 'Get a logo design quote', 'Book design consultation'],
      satisfactionCheck: true
    };
  }
  
  if (message.includes('web') || message.includes('website') || message.includes('development')) {
    return {
      text: chatbotResponses.services['web development'],
      type: 'text',
      quickActions: ['View website portfolio', 'Get web development quote', 'Discuss my website needs'],
      satisfactionCheck: true
    };
  }
  
  if (message.includes('marketing') || message.includes('seo') || message.includes('social media')) {
    return {
      text: chatbotResponses.services['digital marketing'],
      type: 'text',
      quickActions: ['Learn about SEO services', 'Social media packages', 'Marketing consultation'],
      satisfactionCheck: true
    };
  }
  
  if (message.includes('business') || message.includes('consulting') || message.includes('strategy')) {
    return {
      text: chatbotResponses.services['business consulting'],
      type: 'text',
      quickActions: ['Book strategy session', 'Learn about consulting', 'Discuss business needs'],
      satisfactionCheck: true
    };
  }
  
  if (message.includes('interior') || message.includes('design') || message.includes('space')) {
    return {
      text: chatbotResponses.services['interior design'],
      type: 'text',
      quickActions: ['View interior portfolio', 'Get design quote', '3D visualization info'],
      satisfactionCheck: true
    };
  }
  
  if (message.includes('engineering') || message.includes('structural') || message.includes('architectural')) {
    return {
      text: chatbotResponses.services['engineering design'],
      type: 'text',
      quickActions: ['Engineering portfolio', 'Project consultation', 'Technical requirements'],
      satisfactionCheck: true
    };
  }
  
  // Pricing queries
  if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('pricing')) {
    return {
      text: chatbotResponses.pricing.general,
      type: 'pricing',
      quickActions: ['Get custom quote', 'Compare packages', 'Book consultation'],
      satisfactionCheck: true
    };
  }
  
  // Contact queries
  if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('address')) {
    return {
      text: chatbotResponses.contact,
      type: 'contact',
      quickActions: ['Book consultation', 'Send email', 'Call now'],
      satisfactionCheck: true
    };
  }
  
  // Portfolio queries
  if (message.includes('portfolio') || message.includes('work') || message.includes('examples') || message.includes('projects')) {
    return {
      text: chatbotResponses.portfolio,
      type: 'text',
      quickActions: ['View full portfolio', 'Graphic design work', 'Web development projects', 'See case studies'],
      satisfactionCheck: true
    };
  }
  
  // Consultation booking
  if (message.includes('consultation') || message.includes('book') || message.includes('appointment') || message.includes('meeting')) {
    return {
      text: chatbotResponses.consultation,
      type: 'text',
      quickActions: ['Book now', 'Learn more about consultation', 'Choose consultation type'],
      satisfactionCheck: true
    };
  }
  
  // General service inquiry
  if (message.includes('services') || message.includes('what do you do') || message.includes('offerings')) {
    return {
      text: chatbotResponses.services.general,
      type: 'services',
      satisfactionCheck: true
    };
  }
  
  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey') || stage === 'greeting') {
    return {
      text: chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)],
      type: 'text',
      quickActions: ['Our services', 'View portfolio', 'Get pricing', 'Book consultation']
    };
  }
  
  // Positive responses
  if (message.includes('thank') || message.includes('thanks') || message.includes('great') || message.includes('perfect')) {
    return {
      text: "You're welcome! I'm glad I could help. Is there anything else you'd like to know about our services?",
      type: 'text',
      quickActions: ['Book consultation', 'Get quote', 'View portfolio', 'Contact team']
    };
  }
  
  // Negative/ending responses
  if (message.includes('no') || message.includes('that\'s all') || message.includes('nothing else')) {
    return {
      text: "Perfect! If you need any help in the future, just start a new chat. Have a great day! 🌟",
      type: 'text'
    };
  }
  
  // Fallback response
  return {
    text: chatbotResponses.fallback[Math.floor(Math.random() * chatbotResponses.fallback.length)],
    type: 'text',
    quickActions: ['Our services', 'Pricing info', 'Contact us', 'View portfolio'],
    satisfactionCheck: true
  };
};

// Utility function to extract intent from user message
export const extractIntent = (message: string): string => {
  const intents = {
    service: ['service', 'what do you do', 'offerings', 'help with'],
    pricing: ['price', 'cost', 'quote', 'pricing', 'how much'],
    contact: ['contact', 'phone', 'email', 'address', 'reach'],
    portfolio: ['portfolio', 'work', 'examples', 'projects', 'show me'],
    consultation: ['consultation', 'book', 'appointment', 'meeting', 'schedule']
  };
  
  const lowerMessage = message.toLowerCase();
  
  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return intent;
    }
  }
  
  return 'general';
};
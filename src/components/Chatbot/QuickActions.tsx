import React from 'react';
import { Palette, Code, BarChart3, Briefcase, Home, Wrench, DollarSign, Calendar } from 'lucide-react';

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onAction }) => {
  const quickActions = [
    {
      icon: Palette,
      text: 'Graphic Design',
      action: 'Tell me about graphic design services'
    },
    {
      icon: Code,
      text: 'Web Development',
      action: 'Tell me about web development services'
    },
    {
      icon: BarChart3,
      text: 'Digital Marketing',
      action: 'Tell me about digital marketing services'
    },
    {
      icon: DollarSign,
      text: 'Pricing',
      action: 'What are your pricing options?'
    },
    {
      icon: Calendar,
      text: 'Book Consultation',
      action: 'I want to book a consultation'
    },
    {
      icon: Briefcase,
      text: 'Portfolio',
      action: 'Show me your portfolio'
    }
  ];

  return (
    <div className="p-4 border-t bg-gray-50">
      <p className="text-sm text-gray-600 mb-3 text-center">
        Quick actions to get you started:
      </p>
      <div className="grid grid-cols-2 gap-2">
        {quickActions.map((item, index) => (
          <button
            key={index}
            onClick={() => onAction(item.action)}
            className="flex items-center space-x-2 p-2 bg-white hover:bg-[#FF6B35] hover:text-white rounded-lg transition-colors text-sm border border-gray-200 hover:border-[#FF6B35]"
          >
            <item.icon size={16} />
            <span className="truncate">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
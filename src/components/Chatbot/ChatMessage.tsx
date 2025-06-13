import React from 'react';
import { Bot, User, ThumbsUp, ThumbsDown, ExternalLink, Phone, Mail } from 'lucide-react';
import { type ChatMessage as ChatMessageType } from '../../lib/chatbot';

interface ChatMessageProps {
  message: ChatMessageType;
  onQuickAction: (action: string) => void;
  onSatisfactionResponse: (satisfied: boolean) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onQuickAction, onSatisfactionResponse }) => {
  const isBot = message.sender === 'bot';

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const renderMessageContent = () => {
    switch (message.type) {
      case 'contact':
        return (
          <div className="space-y-3">
            <p className="text-gray-700">{message.text}</p>
            <div className="space-y-2">
              <a 
                href="tel:+251911234567"
                className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] transition-colors"
              >
                <Phone size={16} className="mr-2" />
                +251 91 123 4567
              </a>
              <a 
                href="mailto:contact@tabordigital.com"
                className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] transition-colors"
              >
                <Mail size={16} className="mr-2" />
                contact@tabordigital.com
              </a>
              <a 
                href="/contact"
                className="flex items-center text-[#FF6B35] hover:text-[#4ECDC4] transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                Contact Form
              </a>
            </div>
          </div>
        );
      
      case 'services':
        return (
          <div className="space-y-3">
            <p className="text-gray-700">{message.text}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                'Graphic Design',
                'Web Development', 
                'Digital Marketing',
                'Business Consulting',
                'Interior Design',
                'Engineering Design'
              ].map((service, index) => (
                <button
                  key={index}
                  onClick={() => onQuickAction(`Tell me about ${service}`)}
                  className="text-left p-2 bg-gray-50 hover:bg-[#FF6B35] hover:text-white rounded transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return <p className="text-gray-700 leading-relaxed">{message.text}</p>;
    }
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start space-x-2 max-w-xs ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? 'bg-gray-100' : 'bg-[#FF6B35]'
        }`}>
          {isBot ? (
            <Bot size={16} className="text-[#FF6B35]" />
          ) : (
            <User size={16} className="text-white" />
          )}
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col">
          <div className={`rounded-lg px-3 py-2 ${
            isBot 
              ? 'bg-gray-100 text-gray-800' 
              : 'bg-[#FF6B35] text-white'
          }`}>
            {renderMessageContent()}
          </div>

          {/* Quick Actions */}
          {message.quickActions && message.quickActions.length > 0 && (
            <div className="mt-2 space-y-1">
              {message.quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => onQuickAction(action)}
                  className="block w-full text-left text-sm text-[#FF6B35] hover:text-[#4ECDC4] border border-[#FF6B35] hover:border-[#4ECDC4] rounded px-2 py-1 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Satisfaction Check */}
          {message.satisfactionCheck && (
            <div className="mt-3 flex items-center space-x-2">
              <span className="text-xs text-gray-600">Was this helpful?</span>
              <button
                onClick={() => onSatisfactionResponse(true)}
                className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
                aria-label="Yes, this was helpful"
              >
                <ThumbsUp size={14} />
              </button>
              <button
                onClick={() => onSatisfactionResponse(false)}
                className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                aria-label="No, this was not helpful"
              >
                <ThumbsDown size={14} />
              </button>
            </div>
          )}

          {/* Timestamp */}
          <span className={`text-xs text-gray-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
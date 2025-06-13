import React, { useState } from 'react';
import { User, Mail, Phone, Send, X, CheckCircle, MessageCircle } from 'lucide-react';

interface LiveChatEscalationProps {
  userInfo: {
    name: string;
    email: string;
    phone: string;
  };
  setUserInfo: (info: any) => void;
  onClose: () => void;
}

const LiveChatEscalation: React.FC<LiveChatEscalationProps> = ({ userInfo, setUserInfo, onClose }) => {
  const [step, setStep] = useState<'contact-options'>('contact-options');

  const handleContactOption = (type: 'telegram' | 'whatsapp') => {
    if (type === 'telegram') {
      window.open('https://t.me/+251936747488', '_blank');
      onClose();
    } else if (type === 'whatsapp') {
      window.open('https://wa.me/251910083733', '_blank');
      onClose();
    }
  };

  return (
    <div className="border-t bg-blue-50 animate-slide-in-bottom relative z-[9995]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center">
            <MessageCircle className="mr-2 text-[#FF6B35]" size={18} />
            Choose How to Connect
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:scale-110 transform"
          >
            <X size={16} />
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          We'd love to help you personally. Choose your preferred way to connect with our team:
        </p>

        <div className="space-y-3">
          {/* Telegram Option */}
          <button
            onClick={() => handleContactOption('telegram')}
            className="w-full flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-[#0088cc] hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 8.368-1.268 8.368-.159.708-.534.708-.534.708s-2.376-.168-3.936-.803c-.801-.317-1.896-.743-2.736-1.139 0 0-.424-.265-.424-.636 0-.265.212-.477.477-.477.265 0 .477.212.477.477 0 .159-.053.318-.159.424l2.267 1.139c1.56.635 3.936.803 3.936.803s.375 0 .534-.708c0 0 .372-1.64 1.268-8.368 0 0 .727-4.87.896-6.728.053-.583-.159-1.006-.636-1.006-.318 0-.583.159-.742.424 0 0-4.87 3.088-5.453 3.459-.159.106-.265.265-.265.477s.106.371.265.477c.583.371 5.453 3.459 5.453 3.459.159.265.424.424.742.424.477 0 .689.423.636 1.006z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-[#0088cc] transition-colors duration-300">
                Message us on Telegram
              </p>
              <p className="text-sm text-gray-600">Instant messaging support</p>
            </div>
          </button>

          {/* WhatsApp Option */}
          <button
            onClick={() => handleContactOption('whatsapp')}
            className="w-full flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-[#25D366] hover:bg-green-50 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900 group-hover:text-[#25D366] transition-colors duration-300">
                Chat on WhatsApp
              </p>
              <p className="text-sm text-gray-600">Quick voice & text support</p>
            </div>
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-blue-200">
          <p className="text-xs text-gray-600 text-center">
            🕒 Business Hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM (EAT)
          </p>
          <p className="text-xs text-gray-600 text-center mt-1">
            Outside business hours? We'll respond first thing in the morning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveChatEscalation;
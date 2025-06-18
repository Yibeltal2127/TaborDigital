import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Minimize2, Maximize2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import QuickActions from './QuickActions';
import LiveChatEscalation from './LiveChatEscalation';
import { getAIResponse, type ChatMessage as ChatMessageType } from '../../lib/chatbot';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [conversationStage, setConversationStage] = useState<'greeting' | 'helping' | 'escalation'>('greeting');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessageType = {
        id: '1',
        text: "👋 Hi there! I'm your digital assistant from Tabor Digital Solutions. I'm here to help you with information about our services, pricing, or any questions you might have. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages([welcomeMessage]);
      setConversationStage('greeting');
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (message: Omit<ChatMessageType, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessageType = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (duration: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), duration);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    addMessage({
      text: userMessage,
      sender: 'user',
      type: 'text'
    });

    // Simulate typing
    simulateTyping();

    // Get AI response
    setTimeout(async () => {
      const response = await getAIResponse(userMessage, conversationStage);
      
      addMessage({
        text: response.text,
        sender: 'bot',
        type: response.type,
        quickActions: response.quickActions,
        satisfactionCheck: response.satisfactionCheck
      });

      // Update conversation stage
      if (response.stage) {
        setConversationStage(response.stage);
      }
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    // Simulate user clicking a quick action
    addMessage({
      text: action,
      sender: 'user',
      type: 'text'
    });

    simulateTyping();

    // Get response for quick action
    setTimeout(async () => {
      const response = await getAIResponse(action, conversationStage);
      
      addMessage({
        text: response.text,
        sender: 'bot',
        type: response.type,
        quickActions: response.quickActions,
        satisfactionCheck: response.satisfactionCheck
      });

      if (response.stage) {
        setConversationStage(response.stage);
      }
    }, 1000);
  };

  const handleSatisfactionResponse = (satisfied: boolean) => {
    if (satisfied) {
      addMessage({
        text: "Great! I'm glad I could help. Is there anything else you'd like to know about our services?",
        sender: 'bot',
        type: 'text',
        quickActions: [
          'Tell me about pricing',
          'Show me your portfolio',
          'Book a consultation',
          'No, that\'s all for now'
        ]
      });
    } else {
      setConversationStage('escalation');
      addMessage({
        text: "I'm sorry I couldn't fully address your needs. Let me connect you with one of our human experts who can provide more personalized assistance.",
        sender: 'bot',
        type: 'text'
      });
      
      setTimeout(() => {
        setShowLiveChat(true);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="chatbot-widget fixed bottom-6 right-6 bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[9999] group animate-bounce-gentle hover:animate-none hover:scale-110 transform"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform -translate-y-2 group-hover:translate-y-0">
            Need help? Chat with us!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-widget fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl z-[9999] transition-all duration-500 transform ${
          isMinimized ? 'w-80 h-16 scale-95' : 'w-96 h-[600px] scale-100'
        } ${isOpen ? 'animate-slide-in-bottom' : ''}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] text-white p-4 rounded-t-lg flex items-center justify-between relative z-[10000]">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 animate-pulse-glow">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Tabor Assistant</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? (
                    <span className="flex items-center">
                      <span>Typing</span>
                      <span className="ml-1 flex space-x-1">
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      </span>
                    </span>
                  ) : (
                    'Online • Usually replies instantly'
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="p-1 hover:bg-white/20 rounded transition-all duration-300 hover:scale-110 transform"
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/20 rounded transition-all duration-300 hover:scale-110 transform"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="flex flex-col h-[552px] relative z-[9998]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white relative z-[9997]">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`animate-fade-in-up relative z-[9996]`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ChatMessage
                      message={message}
                      onQuickAction={handleQuickAction}
                      onSatisfactionResponse={handleSatisfactionResponse}
                    />
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center space-x-2 animate-fade-in-up relative z-[9996]">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot size={16} className="text-[#FF6B35]" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {conversationStage === 'greeting' && messages.length === 1 && (
                <div className="animate-fade-in-up relative z-[9996] bg-white">
                  <QuickActions onAction={handleQuickAction} />
                </div>
              )}

              {/* Live Chat Escalation */}
              {showLiveChat && (
                <div className="animate-slide-in-bottom relative z-[9996] bg-white">
                  <LiveChatEscalation
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    onClose={() => setShowLiveChat(false)}
                  />
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t bg-white relative z-[9996]">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all duration-300"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-[#FF6B35] text-white p-2 rounded-lg hover:bg-[#4ECDC4] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transform"
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by AI • For complex queries, we'll connect you with our team
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
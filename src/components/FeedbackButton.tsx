import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Star, ThumbsUp, ThumbsDown, Loader } from 'lucide-react';

interface FeedbackData {
  rating: number;
  category: string;
  message: string;
  email?: string;
}

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [step, setStep] = useState<'rating' | 'category' | 'message' | 'submitted'>('rating');
  const [feedback, setFeedback] = useState<FeedbackData>({
    rating: 0,
    category: '',
    message: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  const activityTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleUserActivity = () => {
      setIsVisibleButton(true);
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
      if (!isOpen) {
        activityTimerRef.current = setTimeout(() => {
          setIsVisibleButton(false);
        }, 10000);
      }
    };

    const initialTimer = setTimeout(() => {
      setIsVisibleButton(false);
    }, 10000);
    activityTimerRef.current = initialTimer;

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);

    return () => {
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
    };
  }, [isOpen]);

  const categories = [
    { id: 'website', label: '🌐 Website Experience', description: 'Navigation, design, performance' },
    { id: 'services', label: '⚡ Our Services', description: 'Quality, pricing, delivery' },
    { id: 'support', label: '🤝 Customer Support', description: 'Response time, helpfulness' },
    { id: 'content', label: '📝 Content Quality', description: 'Blog posts, information accuracy' },
    { id: 'suggestion', label: '💡 Suggestions', description: 'New features, improvements' },
    { id: 'other', label: '🔧 Other', description: 'Something else on your mind' }
  ];

  const handleRatingSelect = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
    setStep('category');
  };

  const handleCategorySelect = (category: string) => {
    setFeedback(prev => ({ ...prev, category }));
    setStep('message');
  };

  const handleSubmit = async () => {
    if (!feedback.message.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStep('submitted');
      
      setTimeout(() => {
        setIsOpen(false);
        resetFeedback();
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFeedback = () => {
    setFeedback({ rating: 0, category: '', message: '', email: '' });
    setStep('rating');
    setIsMinimized(false);
  };

  const toggleFeedback = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetFeedback();
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <button
        key={i}
        onClick={interactive ? () => handleRatingSelect(i + 1) : undefined}
        disabled={!interactive}
        className={`transition-all duration-300 ${
          interactive ? 'hover:scale-125 cursor-pointer' : 'cursor-default'
        } ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        <Star size={interactive ? 24 : 16} className={i < rating ? 'fill-current' : ''} />
      </button>
    ));
  };

  const getRatingText = (rating: number) => {
    const texts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    return texts[rating] || '';
  };

  const getRatingEmoji = (rating: number) => {
    const emojis = ['', '😞', '😐', '🙂', '😊', '🤩'];
    return emojis[rating] || '';
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleFeedback}
          className={`fixed bottom-24 right-0 bg-[#FF6B35] text-white px-5 py-3 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300 z-[9998] group hover:scale-110 transform origin-right ${isVisibleButton ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
          aria-label="Give feedback"
        >
          <div className="flex items-center space-x-2">
            <MessageSquare size={20} />
            <span className="font-medium">Feedback</span>
          </div>
          <div className="absolute -top-2 -right-2 bg-[#4ECDC4] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            ✨
          </div>
          <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform -translate-y-2 group-hover:translate-y-0">
            Share your feedback!
          </div>
        </button>
      )}

      {isOpen && (
        <div className={`fixed bottom-24 right-6 bg-white rounded-lg shadow-2xl z-[9998] transition-all duration-500 transform ${
          isMinimized ? 'w-80 h-16 scale-95' : 'w-96 h-[500px] scale-100'
        } ${isOpen ? 'animate-slide-in-bottom' : ''}`}>
          
          <div className="bg-[#FF6B35] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Feedback</h3>
                <p className="text-xs opacity-90">Help us improve your experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-all duration-300 hover:scale-110 transform"
              >
                {isMinimized ? '⬆️' : '⬇️'}
              </button>
              <button
                onClick={toggleFeedback}
                className="p-1 hover:bg-white/20 rounded transition-all duration-300 hover:scale-110 transform"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-6 h-[436px] flex flex-col">
              {step === 'rating' && (
                <div className="text-center space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">How was your experience?</h4>
                    <p className="text-gray-600 text-sm">Your feedback helps us improve our services</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-2">
                      {renderStars(feedback.rating, true)}
                    </div>
                    
                    {feedback.rating > 0 && (
                      <div className="animate-fade-in-up">
                        <div className="text-2xl mb-2">{getRatingEmoji(feedback.rating)}</div>
                        <p className="text-lg font-medium text-gray-800">{getRatingText(feedback.rating)}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 'category' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">What's this about?</h4>
                    <div className="flex justify-center space-x-1 mb-4">
                      {renderStars(feedback.rating)}
                      <span className="ml-2 text-sm text-gray-600">{getRatingText(feedback.rating)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-[#FF6B35] hover:bg-orange-50 transition-all duration-300 group"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-[#FF6B35]">
                          {category.label}
                        </div>
                        <div className="text-sm text-gray-500">{category.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 'message' && (
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Tell us more</h4>
                    <div className="flex justify-center items-center space-x-2 mb-4">
                      {renderStars(feedback.rating)}
                      <span className="text-sm text-gray-600">
                        • {categories.find(c => c.id === feedback.category)?.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <textarea
                      value={feedback.message}
                      onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Share your thoughts, suggestions, or concerns..."
                      className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] resize-none"
                    />
                    
                    <input
                      type="email"
                      value={feedback.email}
                      onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Email (optional - for follow-up)"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35]"
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={!feedback.message.trim() || isSubmitting}
                    className="w-full bg-[#FF6B35] text-white py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg flex items-center justify-center hover:bg-[#4ECDC4]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin mr-2" size={16} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Submit Feedback
                      </>
                    )}
                  </button>
                </div>
              )}

              {step === 'submitted' && (
                <div className="flex flex-col items-center justify-center flex-1 text-center space-y-4">
                  <ThumbsUp size={48} className="text-green-500 animate-bounce" />
                  <h4 className="text-xl font-bold text-gray-900">Feedback Submitted!</h4>
                  <p className="text-gray-600">Thank you for helping us improve.</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeedbackButton;
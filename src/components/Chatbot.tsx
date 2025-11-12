import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  mobile: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! Welcome to Oscillion. May I have your name?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    mobile: '',
  });
  const [currentStep, setCurrentStep] =
    useState<'name' | 'email' | 'mobile' | 'complete'>('name');

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const [isUserAtBottom, setIsUserAtBottom] = useState(true);

  // ✅ Smart Auto-scroll Logic
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const threshold = 80; // px from bottom
      const atBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        threshold;
      setIsUserAtBottom(atBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Scroll when new message arrives (if user near bottom)
  useEffect(() => {
    if (!isUserAtBottom) return;
    const container = messagesContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    const userInput = inputMessage;
    setInputMessage('');

    setTimeout(() => {
      let botResponseText = '';
      let nextStep = currentStep;

      if (currentStep === 'name') {
        setUserInfo((prev) => ({ ...prev, name: userInput }));
        botResponseText = `Nice to meet you, ${userInput}! Could you please share your email address?`;
        nextStep = 'email';
      } else if (currentStep === 'email') {
        setUserInfo((prev) => ({ ...prev, email: userInput }));
        botResponseText = 'Thank you! Lastly, could you provide your mobile number?';
        nextStep = 'mobile';
      } else if (currentStep === 'mobile') {
        setUserInfo((prev) => ({ ...prev, mobile: userInput }));
        botResponseText =
          'Thank you for providing your information! How can I help you today?';
        nextStep = 'complete';
      } else {
        botResponseText =
          'Thank you for your message. Our team will get back to you shortly.';
      }

      const botResponse: Message = {
        id: Math.random(),
        text: botResponseText,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setCurrentStep(nextStep);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white shadow-2xl
        hover:bg-gray-800 transition-all duration-300 flex items-center justify-center transform hover:scale-110
        animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200
        transform transition-all duration-300
        w-[calc(100vw-2rem)] sm:w-96 max-w-md
        ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-black text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold">Chat with Oscillion</h3>
            <p className="text-xs sm:text-sm text-gray-300">We're here to help!</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-white hover:text-gray-300 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="h-64 sm:h-96 max-h-[50vh] sm:max-h-[70vh] overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50"
        >
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[75%] rounded-lg p-3 ${
                  message.isUser
                    ? 'bg-black text-white rounded-br-none'
                    : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 sm:p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                currentStep === 'name'
                  ? 'Enter your name...'
                  : currentStep === 'email'
                  ? 'Enter your email...'
                  : currentStep === 'mobile'
                  ? 'Enter your mobile...'
                  : 'Type your message...'
              }
              className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

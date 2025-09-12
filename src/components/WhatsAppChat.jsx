import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const phoneNumber = "+919970141477";
  const message = "Hi, I'm interested in Gaurav Infra's luxury apartments. Could you please provide more information about location, size, and pricing? Thank you!";
  
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-chat"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle />
    </a>
  );
};

export default WhatsAppChat;
import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = '6281575786153';
  const message = encodeURIComponent('Halo Oemah Training, saya ingin bertanya.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi lewat WhatsApp"
    >
      <img
        className="whatsapp-icon"
        src="/images/whatsApp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;

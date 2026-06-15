"use client";

import Script from "next/script";

export default function BrevoChatWidget() {
  return (
    <Script id="brevo-chat-widget" strategy="afterInteractive">
      {`
        (function(d, w, c) {
          w.BrevoConversationsID = '6a2fb992d0e43b5d9c0dad27';
          w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
      `}
    </Script>
  );
}
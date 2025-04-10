'use client';
import { useEffect } from 'react';

export default function Live2DWidget() {
  useEffect(() => {
    // Load script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore để tránh lỗi TS khi gọi L2Dwidget
      window.L2Dwidget?.init({
        model: {
          jsonPath: '/models/histoire/model.json',
        },
        display: {
          position: 'right',
          width: 180,
          height: 300,
        },
        mobile: {
          show: true,
        },
        react: {
          opacityDefault: 0.8,
          opacityOnHover: 0.2,
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return null; // Không render gì
}

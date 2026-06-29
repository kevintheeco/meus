/* ============================================================
   MEUS · Tailwind token snippet
   Paste into tailwind.config.js → theme.extend
   Then use: bg-paper text-ink border-rule font-display
             text-drive bg-connect ...
   ============================================================ */

module.exports = {
  theme: {
    extend: {
      colors: {
        // 4 Drives
        drive: '#D85A30', 'drive-deep': '#B84A26',     // 추진
        connect: '#1D9E75', 'connect-deep': '#178A66', // 조화
        order: '#378ADD', 'order-deep': '#2F78C2',     // 체계
        explore: '#7F77DD', 'explore-deep': '#6B63C4', // 탐구
        // Warm neutral
        ink: '#1C1814', 'ink-soft': '#4A4339', mute: '#7C7263', faint: '#A99E8B',
        rule: '#D8CFBE', 'rule-strong': '#C8BDA8', hairline: '#E2D9C8',
        paint: '#E8E0D0', fill: '#EFE8DA', panel: '#FBF7EE',
        screen: '#F6F1E6', paper: '#F1EBDF', 'paper-pure': '#FFFDF8', chrome: '#EAE2D2',
      },
      fontFamily: {
        display: ['Archivo', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
        sans: ['Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: { card: '2px', screen: '4px' },
      boxShadow: {
        screen: '0 18px 48px -28px rgba(28,24,20,.5)',
        paper: '0 30px 70px -40px rgba(28,24,20,.55)',
      },
      maxWidth: { canvas: '1180px' },
    },
  },
};

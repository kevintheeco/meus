/* ============================================================
   MEUS · Design Tokens (TypeScript)
   Mirror of meus-tokens.css. Use whichever your stack prefers.
   ============================================================ */

export const meus = {
  // 4 Drives — accent only
  drive:   { base: '#D85A30', deep: '#B84A26' }, // 추진
  connect: { base: '#1D9E75', deep: '#178A66' }, // 조화
  order:   { base: '#378ADD', deep: '#2F78C2' }, // 체계
  explore: { base: '#7F77DD', deep: '#6B63C4' }, // 탐구

  // Warm neutral scale (light)
  neutral: {
    ink: '#1C1814', inkSoft: '#4A4339', mute: '#7C7263', faint: '#A99E8B',
    rule: '#D8CFBE', ruleStrong: '#C8BDA8', hairline: '#E2D9C8',
    paint: '#E8E0D0', fill: '#EFE8DA', panel: '#FBF7EE',
    screen: '#F6F1E6', paper: '#F1EBDF', paperPure: '#FFFDF8', chrome: '#EAE2D2',
  },

  // Dark (defined; not yet applied to key screens)
  dark: {
    ink: '#EDE7D9', inkSoft: '#CFC6B5', mute: '#9A8E7A', faint: '#7C7263',
    rule: '#322C22', hairline: '#2A2419', panel: '#1F1B14',
    screen: '#1A160F', paper: '#15120D', chrome: '#211C14',
  },

  font: {
    display: "'Archivo','Pretendard','Apple SD Gothic Neo',sans-serif",
    sans: "'Pretendard','Apple SD Gothic Neo',sans-serif",
    mono: "'JetBrains Mono',monospace",
  },

  radius: { card: 2, screen: 4 },
  shadow: {
    screen: '0 18px 48px -28px rgba(28,24,20,.5)',
    paper: '0 30px 70px -40px rgba(28,24,20,.55)',
  },
  maxWidth: 1180,
} as const;

// Model metadata — keep these keys identical on the scoring side.
export const driveMeta = {
  drive:   { ko: '추진', en: 'Drive',   anchor: '되게 만든다',   facets: ['결단', '주도', '성취'] },
  connect: { ko: '조화', en: 'Connect', anchor: '이어준다',       facets: ['지지', '신뢰', '공감'] },
  order:   { ko: '체계', en: 'Order',   anchor: '정확히 채운다', facets: ['정밀', '계획', '신중'] },
  explore: { ko: '탐구', en: 'Explore', anchor: '새 길을 연다',   facets: ['발상', '유연', '비전'] },
} as const;

// Conflict modes (1→2→3 sequence). Decoder legend colors shown.
export const conflictModes = {
  assert:      { ko: '주장', en: 'Assert',      dot: '#D85A30' },
  accommodate: { ko: '수용', en: 'Accommodate', dot: '#378ADD' },
  analyze:     { ko: '분석', en: 'Analyze',     dot: '#1D9E75' },
} as const;

export type DriveKey = keyof typeof driveMeta;

const VARIANTS = ['minimal', 'primary', 'secondary'] as const;

export type Variant = typeof VARIANTS[number];

export default VARIANTS;

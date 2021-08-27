const VARIANTS = ['default', 'minimal'] as const;

export type Variant = typeof VARIANTS[number];

export default VARIANTS;

const SIZES = ['jumbo', 'large', 'medium', 'small'] as const;

export type Size = typeof SIZES[number];

export default SIZES;

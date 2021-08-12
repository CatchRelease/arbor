const INTENTS = ['info', 'danger', 'success', 'warning'] as const;

export type Intent = typeof INTENTS[number];

export default INTENTS;

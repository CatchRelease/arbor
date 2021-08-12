import { Intent } from './intents';

export default (intent?: Intent) => ({
  borderLeft: intent ? '3px solid' : null,
  borderColor: `intent.${intent}.default`
});

import notes from './toast.md';
import { Box, Button, Heading, Link, ToastContainer, toast } from '../src';
import INTENTS from '../src/Alert/intents';

export default {
  title: 'Toast'
};

export const Default = () => {
  const details = (
    <Box>
      That&lsquo;s six wells.&nbsp;
      <Link href="https://www.dailymotion.com/video/x5xlg93" target="_blank">
        Look, a link!
      </Link>
    </Box>
  );

  const message = 'Well, well, well, well, well...';

  return (
    <Box as="section" p="regular">
      <Heading.H1>Toast</Heading.H1>

      {INTENTS.map((intent) => (
        <Box key={intent} mb="smaller" textAlign="right">
          <Button
            intent={intent}
            onClick={() => toast[intent](message, details)}
          >
            {`${intent} toast!`}
          </Button>
        </Box>
      ))}

      <ToastContainer />
    </Box>
  );
};

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

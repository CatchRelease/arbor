import notes from './links.md';
import { Box, Link } from '../src';

export default {
  title: 'Links'
};

export const Default = () => (
  <Box m="regular" id="skip">
    <Link
      fontSize="size2"
      href="#brandDark"
      m="regular"
      onClick={(e) => e.preventDefault()}
      variant="brandDark"
    >
      Brand Dark
    </Link>
    <Link
      fontSize="size2"
      href="#brandLight"
      m="regular"
      onClick={(e) => e.preventDefault()}
      variant="brandLight"
    >
      Brand Light
    </Link>
    <Link
      fontSize="size2"
      href="#default"
      m="regular"
      onClick={(e) => e.preventDefault()}
    >
      Default Link
    </Link>
    <Link
      fontSize="size2"
      href="#muted"
      m="regular"
      onClick={(e) => e.preventDefault()}
      variant="muted"
    >
      Muted Link
    </Link>
  </Box>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

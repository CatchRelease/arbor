import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import notes from './descriptionLists.md';
import {
  Box,
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  Heading
} from '../src';

const stories = storiesOf('Description Lists', module);

stories.add(
  'Default',
  () => (
    <Box as="section" p="regular">
      <Heading.H1>Description Lists</Heading.H1>

      <DescriptionList inline={boolean('Inline', false)}>
        <DescriptionTerm>Batman</DescriptionTerm>
        <DescriptionDetails>
          Batman is a fictional superhero appearing in American comic books
          published by DC Comics. The character was created by artist Bob Kane
          and writer Bill Finger, and first appeared in Detective Comics #27 in
          1939. Originally named the Bat-Man, the character is also referred to
          by such epithets as the Caped Crusader, the Dark Knight, and the
          Worlds Greatest Detective
        </DescriptionDetails>
        <DescriptionTerm>The Flash</DescriptionTerm>
        <DescriptionDetails>
          The Flash (or simply Flash) is the name of several superheroes
          appearing in American comic books published by DC Comics. Created by
          writer Gardner Fox and artist Harry Lampert, the original Flash first
          appeared in Flash Comics #1 (cover date January 1940/release month
          November 1939). Nicknamed the Scarlet Speedster, all incarnations of
          the Flash possess super speed, which includes the ability to run,
          move, and think extremely fast, use superhuman reflexes, and seemingly
          violate certain laws of physics.
        </DescriptionDetails>
        <DescriptionTerm>Green Arrow</DescriptionTerm>
        <DescriptionDetails>
          Green Arrow is a fictional superhero who appears in comic books
          published by DC Comics. Created by Mort Weisinger and designed by
          George Papp, he first appeared in More Fun Comics #73 in November
          1941. His real name is Oliver Jonas Queen, a wealthy businessman and
          owner of Queen Industries who is also a well-known celebrity in Star
          City. Sometimes shown dressed like the character Robin Hood, Green
          Arrow is an archer who uses his skills to fight crime in his home
          cities of Star City and Seattle, as well as alongside his fellow
          superheroes as a member of the Justice League. Though much less
          frequently used in modern stories, he also deploys a range of trick
          arrows with various special functions, such as glue, explosive-tipped,
          grappling hook, flash grenade, tear gas and even kryptonite arrows for
          use in a range of special situations. At the time of his debut, Green
          Arrow functioned in many ways as an archery-themed analogue of the
          very popular Batman character, but writers at DC subsequently
          developed him into a voice of left-wing politics very much distinct in
          character from Batman.
        </DescriptionDetails>
      </DescriptionList>
    </Box>
  ),
  { notes: { markdown: notes } }
);

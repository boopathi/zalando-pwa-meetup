import React from 'react';
import {
  Link,
  Slide,
  Heading
} from 'spectacle';

const boo = <Link href="https://twitter.com/heisenbugger" className='white link'>Boopathi Rajaa (@heisenbugger)</Link>;
const vig = <Link href="https://twitter.com/_vigneshh" className='white link'>Vignesh Shanmugam (@_vigneshh)</Link>;

export default <Slide transition={['slide']}>
  <Heading fit caps size={1}>
    Progressive Web Apps
  </Heading>
  <h6 className='white'>
    by
    <div>
      {boo} & {vig}
    </div>
  </h6>
</Slide>

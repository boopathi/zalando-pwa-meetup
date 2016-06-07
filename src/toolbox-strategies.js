import React from 'react';
import {
  Slide, Heading, List, ListItem, CodePane
} from 'spectacle';

const cacheCode = `toolbox.options.networkTimeoutSeconds = 3;
toolbox.router.get('/api/*', toolbox.networkFirst, {
  cache: {
    maxEntries: 10,
    maxAgeSeconds: 5
  }
})`;

export const SWToolboxOptions = <Slide transition={['slide']} bgColor='#FFA000'>
  <Heading size={2}>Toolbox Options</Heading>
  <List>
    <ListItem>networkTimeoutSeconds</ListItem>
    <ListItem>cache.maxAgeSeconds</ListItem>
    <ListItem>cache.maxEntries</ListItem>
  </List>
  <CodePane className='code' lang={'javascript'} source={cacheCode}/>
</Slide>;

export const SWToolboxStrategies = <Slide bgColor='#616161' transition={['slide']}>
  <Heading size={2}>Strategies</Heading>
  <List>
    <ListItem>CacheOnly</ListItem>
    <ListItem>NetworkOnly</ListItem>
    <ListItem>CacheFirst</ListItem>
    <ListItem>NetworkFirst</ListItem>
    <ListItem>Fastest</ListItem>
  </List>
</Slide>

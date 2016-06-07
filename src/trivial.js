import React from 'react';
import {Slide, Link, Heading, Text, List, ListItem} from 'spectacle';

export const Thankyou = <Slide bgColor='#9C27B0' transition={['slide']}>
  <Heading>Thank you</Heading>
  <Text lineHeight={3}>Questions/Discussions</Text>
</Slide>

// JS Fatigue
// I mean, Why not?
function createLinkItem(url, title) {
  return <ListItem>
    <Link className='link' target='_blank' href={url}>{title}</Link>
  </ListItem>
}

export const Links = <Slide transition={['slide']}>
  <Heading size={4}>Links</Heading>
  <List>
    {createLinkItem("https://github.com/vigneshshanmugam/zalando-pwa-demo", 'Demos')}
    {createLinkItem('https://github.com/boopathi/zalando-pwa-meetup', 'Source for this presentation')}
    {createLinkItem('http://www.html5rocks.com/en/tutorials/service-worker/introduction/', 'ServiceWorker Intro')}
    {createLinkItem('https://serviceworke.rs/', 'Mozilla ServiceWorkers cookbook')}
    {createLinkItem('https://infrequently.org/2016/05/service-workers-and-pwas-its-about-reliable-performance-not-offline/', 'It\'s about reliable performance, not offline')}
    {createLinkItem('https://medium.com/@boopathi/service-workers-gotchas-44bec65eab3f', 'ServiceWorker Gotchas')}
    {createLinkItem('https://infrequently.org/2016/06/pwa-discovery-you-aint-seen-nothin-yet/', 'PWA Discovery')}
  </List>
</Slide>

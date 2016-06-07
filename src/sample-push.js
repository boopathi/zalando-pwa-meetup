import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default <CodeSlide
  transition={[]}
  lang='js'
  code={require('raw!../assets/push.js')}
  ranges={[
    { loc: [8, 8], title: 'Push Notifications' },
    { loc: [0, 1] , note: 'Listening for push event'},
    { loc: [2, 8], note: 'Declare notification options'},
    { loc: [10, 11], note: 'Display Notification'},

    { loc: [13, 14], note: 'Notification action'},
    { loc: [18, 19], note: 'display new page using target url'}
  ]}/>

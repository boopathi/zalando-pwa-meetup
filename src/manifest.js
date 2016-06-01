import React from 'react';
import {
	Heading,
	CodePane,
  Slide
} from 'spectacle';


const manifestFile = `{
	name: "My Awesome Web App",
    short_name: "Awesome App",
    icons: [{
        src: "images/touch/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
    }, {
        src: "images/touch/icon-128x128.png",
        sizes: "128x128",
        type: "image/png"
    }, {
        src: "images/touch/apple-touch-icon.png",
        sizes: "152x152",
        type: "image/png"
    }],
    start_url: "/index.html",
    display: "standalone",
    background_color: "#3E4EB8",
    theme_color: "#2F3BA2""
}`;

export default <Slide transition={['slide']}>
	<Heading size={3} lineHeight={2}>
		Manifest.json
	</Heading>
	<CodePane lang={'javascript'} source={manifestFile}/>
</Slide>

import React from 'react';
import Story from '../story/Story.js';

import './StoryReel.js';

const StoryReel = () => {
	return (
		<div className='storyReel'>
			<Story
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3vImOj8Wsho%2Fmaxresdefault.jpg&f=1&nofb=1'
				profileSrc='https://avatars.githubusercontent.com/u/55563466?s=400&u=2d4380cfba4b166a7961eaf6d85450f9f66bd0ef&v=4'
				title='Blake Videbeck'
			/>
		</div>
	);
};

export default StoryReel;

import React from 'react';
import { Avatar } from '@material-ui/core';
import { StoryContainer } from './StoryStyles';

const Story = ({ image, profileSrc, title }) => {
	return (
		<StoryContainer style={{ backgroundImage: `url(${image})` }}>
			<Avatar src={profileSrc} />
			<h4>{title}</h4>
		</StoryContainer>
	);
};

export default Story;

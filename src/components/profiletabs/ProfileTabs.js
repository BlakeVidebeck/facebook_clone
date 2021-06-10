import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ProfileTab, ProfileTabsContainer } from './ProfileTabsStyles';

const ProfileTabs = () => {
	return (
		<ProfileTabsContainer>
			<ProfileTab activeClassName='active'>
				<span>Posts</span>
			</ProfileTab>
			<ProfileTab>
				<span>About</span>
			</ProfileTab>
			<ProfileTab>
				<span>Friends</span>
			</ProfileTab>
			<ProfileTab>
				<span>Photos</span>
			</ProfileTab>
			<ProfileTab>
				<span>
					More
					{/* <ExpandMoreIcon /> */}
				</span>
			</ProfileTab>
		</ProfileTabsContainer>
	);
};

export default ProfileTabs;

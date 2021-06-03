import { Avatar } from '@material-ui/core';
import React from 'react';

import { SidebarRowContainer } from './SidebarRowStyles';

const SidebarRow = ({ src, Icon, title }) => {
	return (
		<SidebarRowContainer>
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</SidebarRowContainer>
	);
};

export default SidebarRow;

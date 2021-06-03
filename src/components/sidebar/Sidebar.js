import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SidebarRow from '../sidebarrow/SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

import { SidebarContainer } from './SidebarStyles';
const Sidebar = () => {
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const { user } = userInfo;

	return (
		<SidebarContainer>
			<Link to={`user/${user.uid}`}>
				<SidebarRow src={user.photoURL} title={user.displayName} />
			</Link>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title='COVID-19 Information Center'
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
			<SidebarRow Icon={PeopleIcon} title='Friends' />
			<SidebarRow Icon={ChatIcon} title='Messenger' />
			<SidebarRow Icon={StorefrontIcon} title='Marketplace' />
			<SidebarRow Icon={VideoLibraryIcon} title='Videos' />
			<SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
		</SidebarContainer>
	);
};

export default Sidebar;

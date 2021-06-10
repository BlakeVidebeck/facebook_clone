import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Dropdown from '../dropdownmenu/DropdownMenu';

import { ReactComponent as Logo } from '../../assets/Facebook_f_logo.svg';

import {
	HeaderContainer,
	HeaderLeft,
	LogoContainer,
	HeaderInput,
	Input,
	HeaderCenter,
	HeaderOption,
	HeaderRight,
	HeaderInfo,
} from './HeaderStyles';

const Header = () => {
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const { user } = userInfo;

	return (
		<HeaderContainer>
			{/* header left */}
			<HeaderLeft>
				<LogoContainer to='/'>
					<Logo />
				</LogoContainer>

				<HeaderInput>
					<SearchIcon />
					<Input placeholder='Search Facebook' type='text' />
				</HeaderInput>
			</HeaderLeft>

			{/* header center */}
			<HeaderCenter>
				<HeaderOption to='/' activeClassName='active'>
					<HomeIcon fontSize='large' />
				</HeaderOption>
				<HeaderOption to='/'>
					<FlagIcon fontSize='large' />
				</HeaderOption>
				<HeaderOption to='/'>
					<SubscriptionsOutlinedIcon fontSize='large' />
				</HeaderOption>
				<HeaderOption to='/'>
					<StorefrontOutlinedIcon fontSize='large' />
				</HeaderOption>
				<HeaderOption to='/'>
					<SupervisedUserCircleIcon fontSize='large' />
				</HeaderOption>
			</HeaderCenter>

			{/* header right */}
			<HeaderRight>
				<Link to={`user/${user.uid}`}>
					<HeaderInfo>
						<Avatar src={user.photoURL} />
						<h4>{user.displayName}</h4>
					</HeaderInfo>
				</Link>

				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<Dropdown />
				</IconButton>
			</HeaderRight>
		</HeaderContainer>
	);
};

export default Header;

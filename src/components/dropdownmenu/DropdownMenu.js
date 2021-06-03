import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DropdownMenuContainer } from './DropdownMenuStyles';

export default function Dropdown() {
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<DropdownMenuContainer>
			<ExpandMoreIcon
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				Open Menu
			</ExpandMoreIcon>
			<Menu
				className='menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</DropdownMenuContainer>
	);
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './DropdownMenu.css';

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
		<div>
			<ExpandMoreIcon
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				Open Menu
			</ExpandMoreIcon>
			<Menu
				id='dropdown'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	);
}

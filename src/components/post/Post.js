import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

import './Post.css';

const Post = ({
	post: { uid, profilePic, image, username, timestamp, message },
}) => {
	return (
		<div className='post'>
			<div className='post_top'>
				<Avatar src={profilePic} className='post_avatar' />
				<div className='post_topInfo'>
					<Link to={`user/${uid}`}>
						<h3>{username}</h3>
					</Link>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>

			<div className='post_bottom'>
				<p>{message}</p>
			</div>

			<div className='post_image'>
				<img src={image} alt='' />
			</div>

			<div className='post_options'>
				<div className='post_option'>
					<ThumbUpIcon />
				</div>
				<div className='post_option'>
					<ChatBubbleOutlineIcon />
				</div>
				<div className='post_option'>
					<NearMeIcon />
				</div>
				<div className='post_option'>
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
};

export default Post;

import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

import {
	PostAvatar,
	PostBottom,
	PostContainer,
	PostImage,
	PostOption,
	PostOptions,
	PostTop,
	PostTopInfo,
} from './PostStyles';

const Post = ({
	post: { uid, profilePic, image, username, timestamp, message },
}) => {
	return (
		<PostContainer>
			<PostTop>
				<PostAvatar>
					<Avatar src={profilePic} />
				</PostAvatar>
				<PostTopInfo>
					<Link to={`/user/${uid}`}>
						<h3>{username}</h3>
					</Link>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</PostTopInfo>
			</PostTop>

			<PostBottom>
				<p>{message}</p>
			</PostBottom>

			<PostImage>
				<img src={image} alt='' />
			</PostImage>

			<PostOptions>
				<PostOption>
					<ThumbUpIcon />
				</PostOption>
				<PostOption>
					<ChatBubbleOutlineIcon />
				</PostOption>
				<PostOption>
					<NearMeIcon />
				</PostOption>
				<PostOption>
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</PostOption>
			</PostOptions>
		</PostContainer>
	);
};

export default Post;

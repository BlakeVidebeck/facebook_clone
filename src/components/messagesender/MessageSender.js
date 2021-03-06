import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import db from '../../firebase';
import firebase from 'firebase';

import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import {
	MessageSenderBottom,
	MessageSenderContainer,
	MessageSenderForm,
	MessageSenderFormButton,
	MessageSenderFormInput,
	MessageSenderOption,
	MessageSenderTop,
} from './MessageSenderStyles';

const MessageSender = () => {
	// get user info from the user login state to make sure they are logged in
	const userLogin = useSelector((state) => state.userLogin);
	const {
		userInfo: { user },
	} = userLogin;

	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			uid: user.uid,
			image: imageUrl,
		});

		setInput('');
		setImageUrl('');
	};

	return (
		<MessageSenderContainer>
			<MessageSenderTop>
				<Avatar src={user.photoURL} />
				<MessageSenderForm>
					<MessageSenderFormInput
						placeholder={`What's on your mind?`}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<MessageSenderFormInput
						placeholder={`image URL (Optional)`}
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
					/>

					<MessageSenderFormButton onClick={handleSubmit} type='submit'>
						Hidden submit
					</MessageSenderFormButton>
				</MessageSenderForm>
			</MessageSenderTop>

			<MessageSenderBottom>
				<MessageSenderOption>
					<VideoCamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</MessageSenderOption>
				<MessageSenderOption>
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</MessageSenderOption>
				<MessageSenderOption>
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</MessageSenderOption>
			</MessageSenderBottom>
		</MessageSenderContainer>
	);
};

export default MessageSender;

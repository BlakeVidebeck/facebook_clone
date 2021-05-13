import React, { useState, useEffect } from 'react';
import MessageSender from '../messagesender/MessageSender';
import Post from '../post/Post';
import StoryReel from '../storyreel/StoryReel';
import db from '../../firebase';

import './Feed.css';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
			);
	}, []);
	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />

			{posts.map((post) => (
				<Post key={post.id} post={post.data} />
			))}
		</div>
	);
};

export default Feed;

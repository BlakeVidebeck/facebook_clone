import React, { useEffect, useState } from 'react';

import db from '../../firebase';
import Post from '../post/Post';

const ProfilePosts = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
			);
	});
	return (
		<>
			{posts.map((post) => (
				<Post key={post.id} post={post.data} />
			))}
		</>
	);
};

export default ProfilePosts;

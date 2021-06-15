import React, { useEffect, useState } from 'react';

import db from '../../firebase';
import Post from '../post/Post';

const ProfilePosts = ({ userUid }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// put code here for user posts - there is actions / reducers for this so if need to change to dispatch
		db.collection('posts')
			.where('uid', '==', userUid)
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, [userUid]);

	return (
		<>
			{posts.map((post) => (
				<Post key={post.id} post={post.data} />
			))}
		</>
	);
};

export default ProfilePosts;

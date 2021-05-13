import React from 'react';
import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';

const HomeScreen = () => {
	return (
		<div>
			<Header />
			<div className='app_body'>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</div>
	);
};

export default HomeScreen;

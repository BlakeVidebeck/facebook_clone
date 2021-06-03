import React from 'react';
import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import { HomeScreenContainer } from './HomeScreenStyles';

const HomeScreen = () => {
	return (
		<>
			<Header />
			<HomeScreenContainer>
				<Sidebar />
				<Feed />
				<Widgets />
			</HomeScreenContainer>
		</>
	);
};

export default HomeScreen;

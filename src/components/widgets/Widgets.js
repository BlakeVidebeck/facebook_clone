import React from 'react';

const Widgets = () => {
	return (
		<div className='widgets'>
			<iframe
				title='for iframe'
				src='https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/react&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
				frameBorder='0'
				width='340'
				height='100%'
				style={{ border: 'none', overflow: 'hidden' }}
				scrolling='no'
				allowtransparency='true'
				allow='encrypted-media'
			></iframe>
		</div>
	);
};

export default Widgets;

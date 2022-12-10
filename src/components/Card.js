import React from 'react';
import { FaQuestion } from 'react-icons/fa';

const Card = ({ ryan }) => {
	return (
		<div className='card'>
			<img src={ryan.src} alt='라이언' />
			<FaQuestion />
		</div>
	);
};

export default Card;

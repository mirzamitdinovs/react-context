import React, { useContext } from 'react';
import CheckoutContext from '../../context/CheckoutContext';
const ProductCard = ({ item }) => {
	const { addToCart } = useContext(CheckoutContext);
	return (
		<div
			onClick={() => addToCart(item)}
			style={{
				border: '1px solid red',
				width: '300px',
				padding: '20px',
				marginBottom: '10px',
				textAlign: 'center',
				marginLeft: '10px',
				cursor: 'pointer',
			}}
		>
			<h3>{item.name}</h3>
			<p>{item.price}</p>
		</div>
	);
};

export default ProductCard;

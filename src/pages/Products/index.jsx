import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';

export const ProductsPage = () => {
	const [products, setCartProducts] = useState([
		{
			id: 1,
			name: 'I Phone 13',
			price: '$1000',
		},
		{
			id: 2,
			name: 'I Phone 12',
			price: '$900',
		},
		{
			id: 3,
			name: 'I Phone X',
			price: '$800',
		},
		{
			id: 4,
			name: 'I Phone 8',
			price: '$600',
		},
	]);
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				marginTop: '40px',
			}}
		>
			{products.map((item, index) => (
				<ProductCard item={item} key={index} />
			))}
		</div>
	);
};

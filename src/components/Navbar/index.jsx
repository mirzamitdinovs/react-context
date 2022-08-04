import React, { useContext } from 'react';
import CheckoutContext from '../../context/CheckoutContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const { cartProducts } = useContext(CheckoutContext);

	console.log('cp: ', cartProducts);

	const getProductCount = (products) => {
		return products.map((item) => item.count).reduce((a, b) => a + b, 0);
	};

	return (
		<div
			style={{
				display: 'flex',
				background: 'lightgray',
				justifyContent: 'space-between',
				padding: '10px 30px',
				alignItems: 'center',
			}}
		>
			<Link to='/'>Logo</Link>

			<Link to='/checkout'>Cart: {getProductCount(cartProducts)}</Link>
		</div>
	);
};

export default Navbar;

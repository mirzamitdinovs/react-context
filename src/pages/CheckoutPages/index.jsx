import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import CheckoutContext from '../../context/CheckoutContext';

const CheckoutPage = () => {
	const { cartProducts, removeFromCart, addQuantity, substractQuantity } =
		useContext(CheckoutContext);
	return (
		<div>
			<h2>Checkout page</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 30px',
					alignItems: 'center',
				}}
				s
			>
				{cartProducts.map((item, index) => (
					<div
						key={index}
						style={{
							border: '1px solid red',
							width: '300px',
							padding: '20px',
							marginBottom: '10px',
							textAlign: 'center',
							marginLeft: '10px',
							position: 'relative',
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: 10,
								right: 20,
								cursor: 'pointer',
							}}
							onClick={() => removeFromCart(item.id)}
						>
							X
						</div>
						<h3>{item.name}</h3>
						<p>{item.price}</p>
						<p>
							<span
								style={{
									padding: '5px',
									cursor: 'pointer',
								}}
								onClick={() => substractQuantity(item.id)}
							>
								-
							</span>
							<span style={{ margin: '0 10px' }}>Count: {item.count}</span>
							<span
								style={{
									padding: '5px',
									cursor: 'pointer',
								}}
								onClick={() => addQuantity(item.id)}
							>
								+
							</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CheckoutPage;

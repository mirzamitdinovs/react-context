import React, { useState, createContext } from 'react';

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	const addToCart = (product) => {
		const selectedProduct = cartProducts.find((item) => item.id === product.id);
		if (selectedProduct) {
			setCartProducts(
				cartProducts.map((item) =>
					item.id === product.id
						? {
								...item,
								count: item.count + 1,
						  }
						: item
				)
			);
		} else {
			setCartProducts([...cartProducts, { ...product, count: 1 }]);
		}
	};

	const removeFromCart = (id) => {
		setCartProducts(cartProducts.filter((item) => item.id !== id));
	};

	const addQuantity = (id) => {
		setCartProducts(
			cartProducts.map((item) =>
				item.id === id
					? {
							...item,
							count: item.count + 1,
					  }
					: item
			)
		);
	};

	const substractQuantity = (id) => {
		const selectedProduct = cartProducts.find((item) => item.id === id);
		if (selectedProduct.count > 1) {
			setCartProducts(
				cartProducts.map((item) =>
					item.id === id
						? {
								...item,
								count: item.count - 1,
						  }
						: item
				)
			);
		} else {
			setCartProducts(cartProducts.filter((item) => item.id !== id));
		}
	};

	return (
		<CheckoutContext.Provider
			value={{
				cartProducts,
				addToCart,
				removeFromCart,
				addQuantity,
				substractQuantity,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export default CheckoutContext;

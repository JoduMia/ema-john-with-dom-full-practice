import { getStoredCart } from "../Utilities/fakeDb";

export const productAndCardLoader = async () => {
    const loadProducts = await fetch('products.json');
    const products = await loadProducts.json();

    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return {products, savedCart};
};
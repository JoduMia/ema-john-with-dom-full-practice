const addToDb = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    const quantity = shoppingCart[id];
    if(id in shoppingCart) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
};


const getStoredCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}

export {addToDb, getStoredCart, removeFromDb};
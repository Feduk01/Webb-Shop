import {create} from 'zustand'


const useStore = create(set => ({

    products: [],
    // För att filtrera saker
    selectedCategory: null,
    selectedFilter: null,
    searchedProduct: '',
    // För att lägga till i varukorg
    cartItems: [],
    allCategories: ['Vattenpistol', 'Sandlåda leksaker', 'Flygande leksaker', 'Badleksaker', 'Utomhusspel', 'Vattenspridare'],

    setCategory: changedCategory => set({ selectedCategory: changedCategory }),

    setProducts: newProduct => set(state => ({
        products: newProduct
    })),
    
    setSelectedCategory: category => set({ selectedCategory: category }),
    setSelectedFilter: filter => set({ selectedFilter: filter }),
    setSearchedProduct: search => set({searchedProduct: search}),

    addProduct: product => set(state => ({
        products: [...state.products, product]
    })),

    addProductToCart: product => set(state => {
        const existingProduct = state.cartItems.find(item => item.key === product.key);
        if (existingProduct) {
            return {
                cartItems: state.cartItems.map(item =>
                    item.key === product.key ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return {
                cartItems: [...state.cartItems, { ...product, quantity: 1 }]
            };
        }
    }),
   
    decrementProductQuantity: key => set(state => ({
        cartItems: state.cartItems.map(item =>
            item.key === key ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        )
    })),

    incrementProductQuantity: key => set(state => ({
        cartItems: state.cartItems.map(item =>
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        )
    })),

    removeProductFromCart: productId => set(state => ({
        cartItems: state.cartItems.filter(item => item.key !== productId)
    })),

    clearCart: () => set({ cartItems: [] }),

    
}))


export {useStore}
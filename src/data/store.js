import {create} from 'zustand'


const useStore = create(set => ({

    products: [],

    setProducts: newProduct => set(state => ({
        products: newProduct
    })),

    addProduct: product => set(state => ({
        products: [...state.products, product]
    }))
}))


export {useStore}
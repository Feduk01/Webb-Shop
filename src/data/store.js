import {create} from 'zustand'

const useStore = create(set => ({

    products: [],

    setProducts: newProduct => set(state => ({
        products: newProduct
    }))
}))


export {useStore}
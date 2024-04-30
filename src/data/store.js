import {create} from 'zustand'


const useStore = create(set => ({

    products: [],
    selectedCategory: null,
    selectedFilter: null,
    searchedProduct: '',

    setProducts: newProduct => set(state => ({
        products: newProduct
    })),
    
    setSelectedCategory: category => set({ selectedCategory: category }),
    setSelectedFilter: filter => set({ selectedFilter: filter }),
    setSearchedProduct: search => set({searchedProduct: search}),

    addProduct: product => set(state => ({
        products: [...state.products, product]
    }))
}))


export {useStore}
import { create } from "zustand";


const useActivityNavStore = create((set) => ({
    selected: [],
    setSelected: (data) => set((state) => ({ selected: data })),
    active: 'orders',
    setActive: (data) => set((state) => ({ active: data })),
    openOrderWindow: false,
    setOpenOrderWindow:  (data) => set((state) => ({ openOrderWindow: data })),
    activeOrder: false,
    setActiveOrder: (data) => set((state) => ({ activeOrder: data })),
}))


const LogoutWindowStore = create((set) => ({
    isOpen: false,
    setIsOpen: (data) => set((state) => ({ isOpen: data }))
}))

const showPriceUpdateStore = create((set) => ({
    isOpen: false,
    setIsOpen: (data) => set((state) => ({ isOpen: data }))
}))

const vendorPriceStore = create ((set) => ({
    coloured: false,
    uncoloured: false,
    updateColoured: (data) => set((state) => ({
        coloured: data
    })),
    updateUncoloured: (data) => set((state) => ({
        uncoloured: data
    }))
}))

const reviewsStore = create((set) => ({
    optionID: false,
    setOptionID: (data) => set((state) => ({ optionID: data })),
    allReviews: [],
    setAllReviews: (data) => set((state) => ({ allReviews: data })),
    deleteReviewFromUI: (data) => set((state) => ({ allReviews: state.allReviews.filter(function(el) {
        return el.id == data
    }) }))
}))

const searchStore = create((set) => ({
    searchText: '',
    setSearchText: (data) => set((state) => ({ searchText: data })),
}))



export  { useActivityNavStore, LogoutWindowStore, showPriceUpdateStore, vendorPriceStore, reviewsStore, searchStore }
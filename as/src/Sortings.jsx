import React, { useState } from 'react'

export default function useSort(cart) {
    const [tog, setToggle] = useState(false);
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(false)
    const filtersorted = cart.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (sort ? a.price - b.price : 0))


    return { search, sort, filtersorted, setSearch, setSort };
}

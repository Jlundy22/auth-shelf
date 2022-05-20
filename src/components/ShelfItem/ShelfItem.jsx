import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfItem({item}) {
    const shelf = useSelector((store) => store.shelfReducer);
    const dispatch = useDispatch();

    return (
        
                        <li >
                            <img src={item.image_url} />
                            {item.description}
                        </li>
    )
}

export default ShelfItem
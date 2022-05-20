import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {
  const shelf = useSelector((store) => store.shelfReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    });
  }, []);

  return (
    <div className='container'>
      <ShelfForm />
      <h2>Shelf</h2>
      <ul>
        {shelf.map((item) => {
          return <ShelfItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;

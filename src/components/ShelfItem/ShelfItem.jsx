import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfItem({ item }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch({
      type: 'DELETE_ITEM',
      payload: item.id,
    });
  }

  return (
    <li>
      <img src={item.image_url} />
      {item.description}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ShelfItem;

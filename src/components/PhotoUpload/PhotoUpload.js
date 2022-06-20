import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PhotoUpload() {
  const shelf = useSelector((store) => store.shelfReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_IMAGE',
    });
  }, []);

  return (
    <div className='container'>
      hi
    </div>
  );
}

export default PhotoUpload;

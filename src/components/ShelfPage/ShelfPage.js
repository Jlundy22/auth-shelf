import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelfReducer);

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    });
  }, []);

  return (
    <div className='container'>
      <h2>Shelf</h2>
      <ul>
        {shelf.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image_url} />
              {item.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;

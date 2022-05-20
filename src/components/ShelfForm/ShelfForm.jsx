import React from 'react';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfForm(){

const [newThing, setNewThing] = useState('');
const [newImageUrl, setNewImageUrl] = useState('');
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_THING',
      payload: {
        newThing,
        newImageUrl
      }
    })
    setNewThing('');
    setNewImageUrl('');
  }
return(
<form onSubmit={handleSubmit}>
<input
  placeholder="add a thing"
  value={newThing}
  onChange={(e) => { setNewThing(e.target.value) }}></input>
<input
  placeholder="add a url"
  value={newImageUrl}
  onChange={(e) => { setNewImageUrl(e.target.value) }}></input>
<button>Submit!</button>
</form>)

}

export default ShelfForm;
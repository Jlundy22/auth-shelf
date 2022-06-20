const imageReducer = (state = [], action) => {
    console.log('====>',action.payload)
    switch (action.type) {
      case 'SET_IMAGE':
        return action.payload;
      default:
        return state;
    }
  };

  export default imageReducer;
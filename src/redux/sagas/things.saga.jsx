import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


// function* fetchThings(action) {
//   // HTTP GET things
//   const response = yield axios({
//     method: 'GET',
//     url: '/api/things'
//   })
//   // PUT things in redux: "SET_THINGS"
//   yield put({
//     type: 'SET_THINGS',
//     payload: response.data
//   })
// }

function* createThing(action) {
  // POST the newThing to our server and put it in db:
  const response = yield axios({
    method: 'POST',
    url: '/api/shelf',
    data: action.payload
  })
  // Call the fetchThings saga function to update the
    // state of our things reducer:


  // yield put({
  //   type: 'TBD'
  // })
}


function* thingsSaga() {
  // yield takeEvery('FETCH_THINGS', fetchThings);
  yield takeEvery('CREATE_THING', createThing);
}

export default thingsSaga;
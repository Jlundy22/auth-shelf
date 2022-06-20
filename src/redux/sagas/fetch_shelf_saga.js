import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* fetchShelf() {
//   try {
//     const shelf = yield axios.get('/api/shelf/');
//     console.log('GET shelf', shelf.data);
//     yield put({
//       type: 'SET_SHELF',
//       payload: shelf.data,
//     });
//   } catch {
//     console.log('GET shelf error');
//   }
// }

// function* fetchShelfSaga() {
//   yield takeLatest('FETCH_SHELF', fetchShelf);
// }

function* fetchImage() {
  try {
    const shelf = yield axios.get('/api/shelf/images');
    yield put({
      type: 'SET_IMAGES',
      payload: shelf.data,
    });
  } catch {
    console.log('GET shelf error');
  }
}

function* fetchImageSaga() {
  yield takeLatest('FETCH_IMAGE', fetchImage);
}

export default fetchImageSaga;

// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// // worker Saga: will be fired on "FETCH_USER" actions
// function* fetchUser() {
//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };

//     // the config includes credentials which
//     // allow the server session to recognize the user
//     // If a user is logged in, this will return their information
//     // from the server session (req.user)
//     const response = yield axios.get('/api/user', config);

//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
//     yield put({ type: 'SET_USER', payload: response.data });
//   } catch (error) {
//     console.log('User get request failed', error);
//   }
// }

// function* userSaga() {
//   yield takeLatest('FETCH_USER', fetchUser);
// }

// export default userSaga;

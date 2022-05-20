import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteShelfItem(action) {
  try {
    const item = yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({
      type: 'FETCH_SHELF',
    });
  } catch {
    console.log('DELETE shelf error');
  }
}

function* deleteShelfItemSaga() {
  yield takeLatest('DELETE_ITEM', deleteShelfItem);
}

export default deleteShelfItemSaga;

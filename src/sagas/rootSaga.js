import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("API_CALL_ROOMS_REQUEST", workerSagaRooms);
    yield takeLatest("API_CALL_ROOM_REQUEST", workerSagaRoom);
}

function fetchRooms() {
    return axios({
        method: "get",
        url: "http://localhost:11148/rooms"
    });
}

function fetchRoom(id) {
    return axios({
        method: "get",
        url: `http://localhost:11148/room?id=${id}`
    });
}

function* workerSagaRooms() {
    try {
        const response = yield call(fetchRooms);
        const rooms = response.data.message;
        yield put({ type: "API_CALL_ROOMS_SUCCESS", rooms });

    } catch (error) {
        yield put({ type: "API_CALL_ROOMS_FAILURE", error });
    }
}

function* workerSagaRoom({payload}) {
    try {
        const response = yield call(fetchRoom, payload);
        const room = response.data.message;
        yield put({ type: "API_CALL_ROOM_SUCCESS", room});

    } catch (error) {
        yield put({ type: "API_CALL_ROOM_FAILURE", error });
    }
}

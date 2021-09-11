import { localStorageSlice } from "./slice";
const { actions: slice } = localStorageSlice;

// this redux is for store data to local storage by redux persist

export const setAppNameAction = (data) => (dispatch) => {
    dispatch(slice.setAppName(data));
};
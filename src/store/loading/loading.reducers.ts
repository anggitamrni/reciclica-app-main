import { createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.actions";
import { Actions } from "@ngrx/store-devtools/src/reducer";
import { LoadingState } from "./LoadingState";

const initialState: LoadingState = {
    show: false
}

const reducer = createReducer(
    initialState,
    on(show, () => {
        return {show: true};
    }),
    on(hide, () => {
        return {show: false};
    })
);

export function loadingReducer(state: LoadingState, action: Actions){
    return reducer(state, action);
}
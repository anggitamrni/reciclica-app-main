import { Action, createReducer, on } from "@ngrx/store";
import { hide, show } from "./loading.action";
import { LoadingState } from "./LoadingState";

const initialStates: LoadingState = {
    show: false
}
const reducer = createReducer(initialStates,
    on(show, () =>{
        return{show: true};
    }),
    on(hide, () =>{
        return{show: false};
    })
);

export function loadingReducer(state: LoadingState, action: Action<string>){
    return reducer(state, action);
}
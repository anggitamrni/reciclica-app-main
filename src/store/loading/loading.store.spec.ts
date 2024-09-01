import { createAction } from "@ngrx/store";
import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./LoadingState";


describe('Loading store', () => {
    it('show', () => {
        const initialState: LoadingState = {show: false};
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })
    it('hide', () => {
        const initialState: LoadingState = {show: true};
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: false});
    })
    it('should keep state if action is unknown', () => {
        const initialState: LoadingState = {show: true};
        const action = createAction("UNKOWN")
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })
})

function show(): import("@ngrx/store-devtools/src/reducer").Actions {
    throw new Error("Function not implemented.");
}


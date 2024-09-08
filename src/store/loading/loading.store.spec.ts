import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./LoadingState";
import { hide, show } from "./loading.action";
import { createAction } from "@ngrx/store";

describe('Loading store', () => {

    it('show', () => {
        const initialStates: LoadingState = {
            show: false};

        const newState = loadingReducer(initialStates, show());

        expect(newState).toEqual({show: true});
    })

    it('hide', () => {
        const initialStates: LoadingState = {
            show: true};

        const newState = loadingReducer(initialStates, hide());

        expect(newState).toEqual({show: false});
    })

    it('should keep state if action is unknown', () => {
        const initialStates: LoadingState = {
            show: true};

        const action = createAction("UNKNOWN");
        const newState = loadingReducer(initialStates, action);

        expect(newState).toEqual({show: true});
    })

})
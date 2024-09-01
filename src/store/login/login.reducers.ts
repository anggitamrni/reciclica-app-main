import { Action, createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
    on(recoverPassword, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: false,
            isRecoverinPassword: true
        };
    }),
    on(recoverPasswordSuccess, currentState => {
        return {
            ...currentState,
            error: null,
            isRecoveredPassword: true,
            isRecoverinPassword: false
        };
    }),
    on(recoverPasswordFail, (currentState, action) => {
        return {
            ...currentState,
            error: action.error,
            isRecoveredPassword: false,
            isRecoverinPassword: false
        };
    })
)

export function loadingReducer(state: LoginState, action: Action<string>) {
    return reducer(state, action);
}
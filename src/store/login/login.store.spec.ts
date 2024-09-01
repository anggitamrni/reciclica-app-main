import { AppInitialState } from "../AppInitialState"
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions"
import { loadingReducer } from "./login.reducers"
import { LoginState } from "./LoginState"

describe("Login store", () => {

  it('recoverPassword', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loadingReducer(initialState, recoverPassword());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: false,
      isRecoverinPassword: true
    })
  })

  it('recoverPasswordSuccess', () => {
    const initialState: LoginState = AppInitialState.login;
    const newState = loadingReducer(initialState, recoverPasswordSuccess());
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isRecoveredPassword: true,
      isRecoverinPassword: false
    })
  })

  it('recoverPasswordFail', () => {
    const initialState: LoginState =AppInitialState.login;
    const error = {error: 'error'};
    const newState = loadingReducer(initialState, recoverPasswordFail(error));
    expect(newState).toEqual({
      ...initialState,
      error,
      isRecoveredPassword: false,
      isRecoverinPassword: false
    })
  })
})
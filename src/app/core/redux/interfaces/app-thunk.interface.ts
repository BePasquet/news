import { Action, ThunkAction } from '@reduxjs/toolkit';

export type AppThunk<TState, TAction extends Action = Action> = ThunkAction<
  void,
  TState,
  unknown,
  TAction
>;

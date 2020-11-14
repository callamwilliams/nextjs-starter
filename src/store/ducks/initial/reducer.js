import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export const initialState = {};

const initialReducer = createReducer(initialState, {});

export default initialReducer;

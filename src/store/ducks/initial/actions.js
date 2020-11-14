import { createAction } from '@reduxjs/toolkit';

export const ns = 'initial';

export const initial = createAction(`${ns}/initial`);

export default {
    initial,
};

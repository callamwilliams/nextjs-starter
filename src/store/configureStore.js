import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './ducks';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [logger, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [],
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./ducks', () => store.replaceReducer(rootReducer));
    }

    return store;
}

export const wrapper = createWrapper(configureAppStore, { debug: false });

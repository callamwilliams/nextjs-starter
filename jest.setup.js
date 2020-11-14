// This will mock `next/dynamic`
import preloadAll from 'jest-next-dynamic';

// extend react-testing-library functionality
import '@testing-library/jest-dom/extend-expect';

import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

beforeAll(async () => {
    preloadAll();
});

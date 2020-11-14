import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

const options = {
    refreshInterval: 5000,
};

export const useRequest = (url) => {
    const { data, error } = useSWR(`/api/proxy/${url}`, fetcher, options);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};

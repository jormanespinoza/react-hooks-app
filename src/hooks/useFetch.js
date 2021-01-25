import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setState({data: null, loading: true, error: null});

        fetch(url)
            .then(response => response.json())
            .then(data => setState({
                ...state,
                data,
                loading: false
            }))
            .catch(error => setState({
                ...state,
                error
            }));
    }, [url]);

    return state;
}
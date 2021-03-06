import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const { counter: id, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${id}`);
    const { quote, author } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p
                    className="mb-3"
                    ref={pTag}
                >
                    {quote}
                </p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>
        </>
    )
}

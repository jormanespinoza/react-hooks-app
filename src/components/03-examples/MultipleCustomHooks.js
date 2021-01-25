import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './customHooks.css';

export const MultipleCustomHooks = () => {

    const { counter: id, increment } = useCounter(1);
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${id}`);
    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next quote
            </button>
        </>
    )
}

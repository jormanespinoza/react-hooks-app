import React, { useRef } from 'react';
import './ref.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <div className="input-group mb-3">
                <input
                    ref={inputRef}
                    className="form-control"
                    placeholder="Your name"
                />

                <button
                    className="btn btn-outline-primary"
                    onClick={handleClick}
                >
                    Focus
                </button>
            </div>
        </>
    )
}

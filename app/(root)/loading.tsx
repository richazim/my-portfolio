import React from "react";

const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <svg width="250" height="250" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#000" strokeWidth="12" fill="none" />
                <circle
                    className="progress-ring"
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ddd"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset="251"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default Loading;
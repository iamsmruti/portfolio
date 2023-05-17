import Typewriter from 'typewriter-effect';

import React from 'react'

const Type = () => {
    return (
        <Typewriter
            className="writer"
            options={{
                strings: ['MERN Developer', 'Problem Solver', 'Learner'],
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default Type
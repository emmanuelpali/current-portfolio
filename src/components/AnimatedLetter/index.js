import './index.scss'

import React from 'react'

const AnimatedLetters = ({ letterClass, arr, idx}) => {
  return (
    <span>
        {
            arr.map((char, i) => (
                <span key={char + i } className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ) )
            }
    </span>
  )
}

export default AnimatedLetters
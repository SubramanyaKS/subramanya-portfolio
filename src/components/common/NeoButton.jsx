import React from 'react';

const NeoButton = ({link,Icon}) => {
  return (
      <a href={link} target="_blank" aria-label='icon-button'>
          {" "}
          <button className="neo-button">
            <Icon/>
          </button>
      </a>
  )
}

export default NeoButton
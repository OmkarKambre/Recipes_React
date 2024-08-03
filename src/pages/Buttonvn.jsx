
import React from 'react';

function Buttonvn({ name, handleClick }) {
    return (
        <button onClick={handleClick} style={{ margin: '0 10px', padding: '10px 20px' }}>
            {name}
        </button>
    );
}

export default Buttonvn;

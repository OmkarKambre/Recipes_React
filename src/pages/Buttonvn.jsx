
import React, { useState } from 'react';

function Buttonvn({ name, handleClick }) {
    const[Color,setColor] = useState()
    return (
        <button className='but' onClick={handleClick}>
            {name}
        </button>
    );
}

export default Buttonvn;

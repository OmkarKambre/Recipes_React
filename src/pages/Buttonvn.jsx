
import React, { useState } from 'react';
import '../index.css'; // Adjust the path according to your project structure


function Buttonvn({ name, handleClick }) {
    const [changeColor, setChangeColor] = useState(false)
    const clickit = () => {
        setChangeColor(!changeColor)
        handleClick();
    }
    return (
        <button
            onClick={clickit}
            className={`rounded-lg h-14 w-32 m-2 p-2 border border-black ${changeColor ? 'bg-blue-200' : 'bg-gray-200'}`}
        >            {name}
        </button>
    );
}

export default Buttonvn;

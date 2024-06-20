import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';


ReactDOM.render(
  <>


    <div className='header-container'>
      <h1 className='t-header'>Recipes</h1>
    </div>

    <div className='body-project'>
      <div className='nav'>
        <h3>Home</h3>
        <h3>Categories</h3>
        <h3 className='a-header'>About Us</h3>
      </div>
      
      <Cards
        imgsrc="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
        category="Chinese"
        rname="Fried Rice"
        link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
      />

      <Cards
        imgsrc="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
        category="Chinese"
        rname="Fried Rice"
        link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
      />

      <Cards
        imgsrc="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
        category="Chinese"
        rname="Fried Rice"
        link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
      />
    </div>

  </>,
  document.getElementById('root')
);
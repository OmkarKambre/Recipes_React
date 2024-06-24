import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Nav from './Nav1';


ReactDOM.render(
  <>


    <div className='header-container'>
      <h1 className='t-header'>Recipes</h1>
    </div>

    <div className='body-project'>
      <center><Nav /></center>

      <div className='card-main'>
        <center>
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
          category="Chinese"
          rname= "Chicken Fired Rice"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        </center>
        
      </div>
    </div>

  </>,
  document.getElementById('root')
);
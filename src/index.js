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
          imgsrc= "https://spicecravings.com/wp-content/uploads/2020/08/Matar-Paneer-1.jpg"
          category="Indian"
          rname= "Matar Paneer"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://siamais.co.uk/wp-content/uploads/2023/07/pad-thai-dish.jpeg"
          category="Thai"
          rname= "Pad Thai"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Vitello-Tonnato.jpg"
          category="Italian"
          rname= "Vitello Tonnato"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.justsotasty.com/wp-content/uploads/2016/06/Blueberry-Cheesecake-Milkshake-768x1152.jpg"
          category="Milkshakes"
          rname= "Blueberry Cheesecake Milkshake"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg"
          category="Chinese"
          rname= "Mapo tofu"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />

        <Cards
          imgsrc= "https://siamais.co.uk/wp-content/uploads/2023/07/Gaeng-Daeng-Dish.jpeg"
          category="Thai"
          rname= "Gaeng Daeng"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg"
          category="Italian"
          rname= " Panzenella"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        <Cards
          imgsrc= "https://pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg"
          category="Indian"
          rname= "Misal Pav"
          link= "https://www.youtube.com/watch?v=LxgbGnQ9bPc"
        />
        </center>
        
      </div>
    </div>

  </>,
  document.getElementById('root')
);
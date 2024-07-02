import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards'; 
import Nav from './Nav1';
import Footer from './Footer';
import About from './About';

const App = () => (
  <>
  <Routes>
    <Route path='/about' element={<About/>}/>
  </Routes>
    <div className='header-container'>
      <h1 className='t-header'>Recipe Realm</h1>
    </div>

    <div className='body-project'>
      <center><Nav /></center>

      <div className='card-main'>
        <center>
          <Cards
            imgsrc="https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg"
            category="Chinese"
            rname="Chicken Fired Rice"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Cook 2 cups of rice; cool.
                  Stir-fry 1 lb diced chicken; set aside.
                  Sauté 1 cup mixed veggies and 2 minced garlic cloves.
                  Add rice, chicken, 3 tbsp soy sauce, and 2 tbsp sesame oil; mix.
                  Scramble 2 eggs in the pan; combine.
                  Garnish with green onions. Enjoy!"
          />
          <Cards
            imgsrc="https://spicecravings.com/wp-content/uploads/2020/08/Matar-Paneer-1.jpg"
            category="Indian"
            rname="Matar Paneer"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="North Indian dish with paneer and green peas.
                  Cooked in a spiced tomato-based gravy.
                  Garnished with cilantro.
                  Served with naan, roti, or rice.
                  Creamy and savory, perfect for any meal."
          />
          <Cards
            imgsrc="https://siamais.co.uk/wp-content/uploads/2023/07/pad-thai-dish.jpeg"
            category="Thai"
            rname="Pad Thai"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Thai stir-fried rice noodles.
                  Includes shrimp, chicken, or tofu, eggs, and bean sprouts.
                  Flavored with tamarind, fish sauce, and palm sugar.
                  Garnished with peanuts, lime, and cilantro.
                  Balanced sweet, sour, salty, and spicy flavors."
          />
          <Cards
            imgsrc="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Vitello-Tonnato.jpg"
            category="Italian"
            rname="Vitello Tonnato"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Italian dish of thinly sliced veal.
                  Served cold with a creamy tuna and caper sauce.
                  Flavored with lemon, anchovies, and olive oil.
                  Often garnished with capers and fresh herbs.
                  A delicate, savory appetizer or main course."
          />
          <Cards
            imgsrc="https://www.justsotasty.com/wp-content/uploads/2016/06/Blueberry-Cheesecake-Milkshake-768x1152.jpg"
            category="Milkshakes"
            rname="Blueberry Cheesecake Milkshake"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Creamy milkshake made with blueberry cheesecake.
                  Blended with vanilla ice cream and milk.
                  Includes chunks of cheesecake and fresh blueberries.
                  Topped with whipped cream and a graham cracker crumble.
                  Sweet, rich, and tangy flavor."
          />
          <Cards
            imgsrc="https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg"
            category="Chinese"
            rname="Mapo tofu"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Spicy Sichuan dish with tofu and minced pork.
                  Cooked in a savory, chili bean paste sauce.
                  Flavored with Sichuan peppercorns for a numbing heat.
                  Garnished with green onions and sometimes garlic.
                  Served hot with steamed rice."
          />
          <Cards
            imgsrc="https://siamais.co.uk/wp-content/uploads/2023/07/Gaeng-Daeng-Dish.jpeg"
            category="Thai"
            rname="Gaeng Daeng"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Traditional Thai red curry.
                  Spicy paste of red chilies, lemongrass, and galangal.
                  Coconut milk adds creaminess.
                  Features meat and vegetables.
                  Served with steamed rice."
          />
          <Cards
            imgsrc="https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg"
            category="Italian"
            rname=" Panzenella"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Italian bread salad traditionally made with stale bread.
                  Features ripe tomatoes, onions, cucumbers, and basil.
                  Dressed with olive oil, vinegar, and sometimes garlic.
                  Bread cubes absorb the dressing and tomato juices.
                  Offers a refreshing and savory summer dish."
          />
          <Cards
            imgsrc="https://pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg"
            category="Indian"
            rname="Misal Pav"
            link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
            info="Spicy Maharashtrian dish with sprouted moth beans.
                  Served with buttered pav (bread roll).
                  Topped with farsan, onions, and cilantro.
                  Garnished with lemon and optional yogurt or sev.
                  Offers a rich, spicy flavor profile."
          />
        </center>
      </div>
      <Footer />
    </div>
  </>
);

export default App;

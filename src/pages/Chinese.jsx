import React, { useState } from "react";
import Nav from '../Nav1';
import BootstrapCarousel from "../BootstrapCarousel";
import Cards from "../Cards";
import Footer from "../Footer";
import Buttonvn from "./Buttonvn";

function Chinese() {
    const [category, setCategory] = useState("All");
    const [cardsData, setCardsData] = useState([
        {
            imgsrc: "https://foodbythegram.com/wp-content/uploads/2021/06/E7F8F704-307B-4BFB-ACC4-0FF4E4DF550F-8109-000001EAF8B08F7D-4.jpg",
            category: "General Tso's Cauliflower",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "General Tso's Cauliflower: battered and fried cauliflower florets. Tossed in a sweet, tangy, and spicy soy-garlic-ginger sauce. Deep-fried until crispy, then coated in sauce. Garnished with sesame seeds and green onions, served over rice.",
            active: true
        },
        {
            imgsrc: "https://tasteasianfood.com/wp-content/uploads/2019/01/Buddhas-delight-featured-image-735x430.jpg",
            category: "Buddha's Delight",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Buddha's Delight: a vegetarian dish with bok choy, snow peas, bamboo shoots, and mushrooms. Seasoned with soy sauce, garlic, ginger, and sometimes tofu. Stir-fried or steamed vegetables. Served over rice or noodles.",
            active: true
        },
        {
            imgsrc: "https://www.tasteatlas.com/Images/Dishes/d89e3029be1e430fb1a78377e6cf8add.jpg?mw=1300",
            category: "Stir-fry Shrimps",
            rname: "Non-Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Stir-fry Shrimps: Ingredients include thinly sliced meats, seafood, tofu, and vegetables. Broth is spicy with chili peppers, Sichuan peppercorns, garlic, and ginger. Cooked at the table, allowing customization of ingredients. Enjoyed communally with dipping sauces and rice or noodles.",
            active: true
        },
        {
            imgsrc: "https://www.tasteatlas.com/Images/Dishes/48140353384b4442a0f161993a62d319.jpg?mw=1300",
            category: "Latiaozi",
            rname: "Non-Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Làtiáozǐ (Spicy Hot Pot): Features thinly sliced meats, seafood, tofu, and vegetables. Broth is spicy with chili peppers, Sichuan peppercorns, garlic, and ginger. Cooked at the table, allowing customization of ingredients. Enjoyed communally with dipping sauces and rice or noodles.",
            active: true
        },
        {
            imgsrc: "https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg",
            category: "Mapo dofu",
            rname: "Non-Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Mapo dofu: Spicy Sichuan dish with tofu and minced pork. Cooked in a savory, chili bean paste sauce. Flavored with Sichuan peppercorns for a numbing heat. Garnished with green onions and sometimes garlic. Served hot with steamed rice.",
            active: true
        },
        {
            imgsrc: "https://myfoodstory.com/wp-content/uploads/2021/02/Vegetable-Hakka-Noodles-Restaurant-Style-3.jpg",
            category: "Hakka Noodles",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Hakka Noodles: Stir-fried noodles with bell peppers, carrots, cabbage, and spring onions. Seasoned with soy sauce and Asian spices. Quick-cooked to keep vegetables crisp. Enjoyed alone or with Chinese-inspired dishes.",
            active: true
        }
    ]);

    const showAll = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: true })));
        setCategory("All");
    };

    const showVeg = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Veg" })));
        setCategory("Veg");
    };

    const showNonVeg = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Non-Veg" })));
        setCategory("Non-Veg");
    };

    return (
        <>
            <div>
                <center><Nav /></center>
            </div>

            <BootstrapCarousel 
                img1="https://assets.epicurious.com/photos/624d9590857fa7e509238b59/16:9/w_2560%2Cc_limit/RegionalChinese_HERO_033122_31320.jpg" 
                img2="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1134086327.png?crop=1xw:0.6774847870182555xh;center,top&resize=640:*" 
            />

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Buttonvn name="All" handleClick={showAll} />
                <Buttonvn name="Veg" handleClick={showVeg} />
                <Buttonvn name="Non-Veg" handleClick={showNonVeg} />
            </div>

            <center>
                {cardsData.map((card, index) => (
                    card.active ? <Cards key={index} imgsrc={card.imgsrc} category={card.category} rname={card.rname} link={card.link} info={card.info} /> : null
                ))}
            </center>
            <Footer />
        </>
    );
}

export default Chinese;

import React, { useState } from "react";
import Nav from '../Nav1';
import BootstrapCarousel from "../BootstrapCarousel";
import Cards from "../Cards";
import Buttonvn from "./Buttonvn";
import Footer from "../Footer";

function Indian() {
    const [cardsData, setCardsData] = useState([
        {
            imgsrc: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/06/chole-bhature-recipe32-1.jpg",
            category: "Chole Bhature",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Cook Chole: Pressure cook chickpeas with salt until tender. In a pan, add cumin seeds, onions, ginger-garlic paste, tomatoes, and spices. Add chickpeas and simmer for 10 minutes. Make Bhature: Mix flour, yogurt, salt, and water to make a soft dough. Roll into small discs and deep fry until golden brown.",
            active: true
        },
        {
            imgsrc: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/rogan-josh-1645057933.webp",
            category: "Rogan Josh",
            rname: "Non-Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "In a bowl, mix lamb with yogurt, ginger-garlic paste, and a pinch of salt In a pot add cumin seeds, fennel seeds, and asafoetida. Add onions and cook. Add marinated lamb, tomatoes, turmeric, red chili powder, coriander powder, and salt. Cook for about 45 minutes to 1 hour.Add garam masala and simmer.",
            active: true
        },
        {
            imgsrc: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/palak-paneer-1645057933.webp",
            category: "Palak Paneer",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Cook Base: In a pan, heat oil, add cumin seeds, onions, ginger-garlic paste, and tomatoes. Cook until soft. Add Spinach: Add spinach puree, turmeric, salt, and cook for 5 minutes. Add Paneer: Stir in paneer cubes and cook for another 5 minutes. Sprinkle garam masala.",
            active: true
        },
        {
            imgsrc: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/biryani-1645057933.webp",
            category: "Biryani",
            rname: "Non-Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Cook Rice: Boil rice with whole spices.In a large pot, heat oil, fry onions until golden. Add marinated chicken and cook until done.In the same pot, layer half-cooked rice over chicken. Top with fried onions, fresh coriander, mint leaves, and saffron milk. Cover pot with a tight lid and cook on low heat for 20-25 minutes.",
            active: true
        },
        {
            imgsrc: "https://spicecravings.com/wp-content/uploads/2020/08/Matar-Paneer-1.jpg",
            category: "Matar Paneer",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "North Indian dish with paneer and green peas. Cooked in a spiced tomato-based gravy. Garnished with cilantro. Served with naan, roti, or rice. Creamy and savory, perfect for any meal.",
            active: true
        },
        {
            imgsrc: "https://pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg",
            category: "Misal Pav",
            rname: "Veg",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Spicy Maharashtrian dish with sprouted moth beans. Served with buttered pav (bread roll). Topped with farsan, onions, and cilantro. Garnished with lemon and optional yogurt or sev. Offers a rich, spicy flavor profile.",
            active: true
        },
    ]);

    const showAll = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: true })));
        // setCategory("All");
    };

    const showVeg = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Veg" })));
        // setCategory("Veg");
    };

    const showNonVeg = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Non-Veg" })));
        // setCategory("Non-Veg");
    };

    return (
        <>
            <div>
                <center><Nav /></center>
            </div>

            <BootstrapCarousel img1="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph" img2="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" />

            <div style={{ textAlign: 'center', margin: '20px 0' }} >
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
    )
}

export default Indian;
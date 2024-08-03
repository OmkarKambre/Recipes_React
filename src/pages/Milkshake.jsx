import React, { useState } from "react";
import Nav from '../Nav1';
import BootstrapCarousel from "../BootstrapCarousel";
import Cards from "../Cards";
import Footer from "../Footer";
import Buttonvn from "./Buttonvn";

function Milkshake() {

    const [cardsData, setCardsData] = useState([
        {
            imgsrc: "https://plus.unsplash.com/premium_photo-1667544654787-cd984212004d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbWlsa3NoYWtlfGVufDB8fDB8fHww",
            category: "Hot Chocolate",
            rname: "Hot",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Ingredients: 2 cups vanilla ice cream, 1 cup milk, 1/4 cup chocolate syrup, whipped cream (optional). Add: Place ice cream, milk, and chocolate syrup in a blender. Blend: Blend until smooth and creamy. Pour: Pour the milkshake into a tall glass.",
            active:true

        },
        {
            imgsrc: "https://plus.unsplash.com/premium_photo-1669686982303-7da68cdd4595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXdiZXJyeSUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
            category: "Strawberry Milkshake",
            rname: "Cold",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Ingredients: 2 cups vanilla ice cream, 1 cup milk, 1 cup fresh strawberries, whipped cream (optional). Add: Place ice cream, milk, and strawberries in a blender. Blend: Blend until smooth and creamy. Pour: Pour the milkshake into a tall glass.",
            active:true

        },
        {
            imgsrc: "https://images.unsplash.com/photo-1641665271888-575e46923776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JlbyUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
            category: "Oreo Milkshake",
            rname: "Cold",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Ingredients: 2 cups vanilla ice cream, 1 cup milk, 6 Oreo cookies, whipped cream (optional). Add: Place ice cream, milk, and Oreo cookies in a blender. Blend: Blend until smooth and creamy. Pour: Pour the milkshake into a tall glass.",
            active:true

        },
        {
            imgsrc: "https://www.justsotasty.com/wp-content/uploads/2016/06/Blueberry-Cheesecake-Milkshake-768x1152.jpg",
            category: "Blueberry Cheesecake Milkshake",
            rname: "Cold",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Creamy milkshake made with blueberry cheesecake. Blended with vanilla ice cream and milk. Includes chunks of cheesecake and fresh blueberries. Topped with whipped cream and a graham cracker crumble. Sweet, rich, and tangy flavor.",
            active:true

        },
        {
            imgsrc: "https://images.unsplash.com/photo-1514919224949-507c703a3a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYW1lbCUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D",
            category: "Hot Caramel Milkshake",
            rname: "Hot",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "Ingredients: 2 cups vanilla ice cream, 1 cup warm milk, 1/4 cup caramel sauce, whipped cream (optional). Add: Place ice cream, warm milk, and caramel sauce in a blender. Blend: Blend until smooth and creamy. Pour: Pour the milkshake into a tall glass.",
            active:true

        },
        {
            imgsrc: "http://img.taste.com.au/8PS7KoSF/taste/2016/11/top-10-milkshakes-image-2-64001-1.jpg",
            category: "Cool Mint",
            rname: "Cold",
            link: "https://www.youtube.com/watch?v=LxgbGnQ9bPc",
            info: "For 2 shakes, drizzle Cottee’s Ice Magic Choc Mint around 2 glasses. Blend 1 drop peppermint essence and 2 drops green food colouring with the Basic Milkshake. Divide between glasses, top with chocolate ice-cream and decorate with Nestlé Aero Peppermint Bubbles and a Mini Corinthian wafer.",
            active:true

        },
    ])


    const showAll = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: true })));
        // setCategory("All");
    };

    const showHot = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Hot" })));
        // setCategory("Veg");
    };

    const showCold = () => {
        setCardsData(cardsData.map(card => ({ ...card, active: card.rname === "Cold" })));
        // setCategory("Non-Veg");
    };

    return (
        <>
            <div>
                <center><Nav /></center>
            </div>

            <BootstrapCarousel img1="https://hips.hearstapps.com/delish/assets/15/24/1433889344-del-milkshakes-index.jpg" img2="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2927279-e794-40e9-b6f6-1b78624363f7/dbbmlja-79136995-4f43-429e-a1f0-aa57bbb32e4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyOTI3Mjc5LWU3OTQtNDBlOS1iNmY2LTFiNzg2MjQzNjNmN1wvZGJibWxqYS03OTEzNjk5NS00ZjQzLTQyOWUtYTFmMC1hYTU3YmJiMzJlNGQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NPTL2A3os4fRomcSk_KKf-o7EeaEvQB5WMNla0dBqHg" />

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <Buttonvn name="All" handleClick={showAll} />
                <Buttonvn name="Hot" handleClick={showHot} />
                <Buttonvn name="Cold" handleClick={showCold} />
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

export default Milkshake;
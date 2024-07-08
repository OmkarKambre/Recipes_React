import React from "react";
import Nav from '../Nav1';
import BootstrapCarousel from "../BootstrapCarousel";
import Cards from "../Cards";
import Footer from "../Footer";

function Indian(){
    return(
        <>
        <div>
                <center><Nav /></center>
            </div>

            <BootstrapCarousel img1="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph" img2="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" />

            <center>
                <Cards
                    imgsrc="https://plus.unsplash.com/premium_photo-1667544654787-cd984212004d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbWlsa3NoYWtlfGVufDB8fDB8fHww"
                    category="Hot Chocolate"
                    rname="Hot"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="Ingredients: 2 cups vanilla ice cream, 1 cup milk, 1/4 cup chocolate syrup, whipped cream (optional).
Add: Place ice cream, milk, and chocolate syrup in a blender.
Blend: Blend until smooth and creamy.
Pour: Pour the milkshake into a tall glass."
                />

                <Cards
                    imgsrc="https://plus.unsplash.com/premium_photo-1669686982303-7da68cdd4595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXdiZXJyeSUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D"
                    category="Strawberry Milkshake"
                    rname="Cold"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="Ingredients: 2 cups vanilla ice cream, 1 cup milk, 1 cup fresh strawberries, whipped cream (optional).
Add: Place ice cream, milk, and strawberries in a blender.
Blend: Blend until smooth and creamy.
Pour: Pour the milkshake into a tall glass."
                />

                <Cards
                    imgsrc="https://images.unsplash.com/photo-1641665271888-575e46923776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JlbyUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D"
                    category="Oreo Milkshake"
                    rname="Cold"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="Ingredients: 2 cups vanilla ice cream, 1 cup milk, 6 Oreo cookies, whipped cream (optional).
Add: Place ice cream, milk, and Oreo cookies in a blender.
Blend: Blend until smooth and creamy.
Pour: Pour the milkshake into a tall glass."
                />

                <Cards
                    imgsrc="https://www.justsotasty.com/wp-content/uploads/2016/06/Blueberry-Cheesecake-Milkshake-768x1152.jpg"
                    category="Blueberry Cheesecake Milkshake"
                    rname="Cold"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="Creamy milkshake made with blueberry cheesecake.
                  Blended with vanilla ice cream and milk.
                  Includes chunks of cheesecake and fresh blueberries.
                  Topped with whipped cream and a graham cracker crumble.
                  Sweet, rich, and tangy flavor."
                />

                <Cards
                    imgsrc="https://images.unsplash.com/photo-1514919224949-507c703a3a88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYW1lbCUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3Dg"
                    category="Hot Caramel Milkshake"
                    rname="Hot"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="Ingredients: 2 cups vanilla ice cream, 1 cup warm milk, 1/4 cup caramel sauce, whipped cream (optional).
Add: Place ice cream, warm milk, and caramel sauce in a blender.
Blend: Blend until smooth and creamy.
Pour: Pour the milkshake into a tall glass."
                />


                <Cards
                    imgsrc="http://img.taste.com.au/8PS7KoSF/taste/2016/11/top-10-milkshakes-image-2-64001-1.jpg"
                    category="Cool Mint"
                    rname="Cold"
                    link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                    info="For 2 shakes, drizzle Cottee’s Ice Magic Choc Mint around 2 glasses. Blend 1 drop peppermint essence and 2 drops green food colouring with the Basic Milkshake. Divide between glasses, top with chocolate ice-cream and decorate with Nestlé Aero Peppermint Bubbles and a Mini Corinthian wafer."
                />
            </center>
            <Footer />
        </>
    )
}

export default Indian;
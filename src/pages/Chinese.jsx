import React from "react";
import Nav from '../Nav1';
import BootstrapCarousel from "../BootstrapCarousel";
import Cards from "../Cards";
import Footer from "../Footer";
function Chinese(){
    return(
        <>
        <div>
            <center><Nav /></center>
        </div>

        <BootstrapCarousel img1="https://hips.hearstapps.com/delish/assets/15/24/1433889344-del-milkshakes-index.jpg" img2="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2927279-e794-40e9-b6f6-1b78624363f7/dbbmlja-79136995-4f43-429e-a1f0-aa57bbb32e4d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyOTI3Mjc5LWU3OTQtNDBlOS1iNmY2LTFiNzg2MjQzNjNmN1wvZGJibWxqYS03OTEzNjk5NS00ZjQzLTQyOWUtYTFmMC1hYTU3YmJiMzJlNGQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NPTL2A3os4fRomcSk_KKf-o7EeaEvQB5WMNla0dBqHg" />

        <center>
            <Cards
                imgsrc="https://cdn.tasteatlas.com//images/dishes/d8c9977734d040b3bed4e29caff5b2b2.jpg?w=905&h=510"
                category="Pecking Duck"
                rname="Hot"
                link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                info="Ingredients: Whole duck, hoisin sauce, Chinese five-spice powder, green onions, cucumber, Mandarin pancakes.
Prepare: Rub the duck with Chinese five-spice powder and let it marinate.
Roast: Roast the duck in the oven until the skin is crispy and golden brown.
Slice: Carve the duck into thin slices.
Serve: Serve the duck with hoisin sauce, sliced green onions, cucumber, and Mandarin pancakes."
            />

            <Cards
                imgsrc="https://cdn.tasteatlas.com//Images/Dishes/148ba9db636c40f699567b013e9828c5.jpg?w=905&h=510"
                category="Dan Dan Noodles"
                rname="Cold"
                link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                info="Ingredients: 8 oz noodles, 1/4 lb ground pork, 2 tbsp sesame paste, 1 tbsp soy sauce, 1 tbsp chili oil, garlic, ginger, green onions, Sichuan peppercorns, chicken broth.
Cook Noodles: Boil the noodles according to package instructions, then drain and set aside.
Prepare Sauce: Mix sesame paste, soy sauce, chili oil, minced garlic, and ginger in a bowl.
Cook Pork: Stir-fry ground pork with minced garlic, ginger, and Sichuan peppercorns until fully cooked.
Assemble: Place noodles in a bowl, pour the sauce over them, add the cooked pork, and garnish with chopped green onions. Serve immediately."
            />

            <Cards
                imgsrc="https://www.tasteatlas.com/Images/Dishes/d89e3029be1e430fb1a78377e6cf8add.jpg?mw=1300"
                category="Stir-fry Shrimps"
                rname="You bao Xia"
                link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                info="Ingredients: 2 cups vanilla ice cream, 1 cup milk, 6 Oreo cookies, whipped cream (optional).
Add: Place ice cream, milk, and Oreo cookies in a blender.
Blend: Blend until smooth and creamy.
Pour: Pour the milkshake into a tall glass."
            />

            <Cards
                imgsrc="https://www.tasteatlas.com/Images/Dishes/48140353384b4442a0f161993a62d319.jpg?mw=1300"
                category="Latiaozi"
                rname="Cold"
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
                  Served hot with steamed rice."/>


            <Cards
                imgsrc="https://www.tasteatlas.com/Images/Dishes/8738dc28f1824697b53a1852456ccff5.jpg?mw=1300"
                category="Mapo doufu"
                rname="Cold"
                link="https://www.youtube.com/watch?v=LxgbGnQ9bPc"
                info="For 2 shakes, drizzle Cottee’s Ice Magic Choc Mint around 2 glasses. Blend 1 drop peppermint essence and 2 drops green food colouring with the Basic Milkshake. Divide between glasses, top with chocolate ice-cream and decorate with Nestlé Aero Peppermint Bubbles and a Mini Corinthian wafer."
            />
        </center>
        <Footer />
    </>
    )
}

export default Chinese;
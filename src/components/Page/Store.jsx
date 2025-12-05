import React from 'react'
import {Navbar} from '../Navbar/Navbar.jsx'
import NavbarBanner from '../Navbar/NavbarBanner.jsx'

import { getBlurClasses } from "../Utils/BlurUtils";
import { PRODUCTS } from "../../dummyData/Products";
import { useState } from "react";

import StoreHero from '../Hero/StoreHero.jsx'
import ProductCard from '../Store/ProductCard.jsx'
import Footer from '../Footer/Footer.jsx'




function Store() {
  const [isBlur, setIsBlur] = useState(true);

  const blur = getBlurClasses(isBlur);

  return (
    <>
        <Navbar />
        <NavbarBanner />

        <StoreHero/>

        <div className="py-10 px-40 mx-auto">
          <div className="relative">

            {isBlur && (
              <div className={blur.overlay}>
                Coming Soon…
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((item, index) => (
                <ProductCard
                  key={index}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  name={item.name}
                  weight={item.weight}
                  price={item.price}
                />
              ))}
            </div>
        </div>
        </div>

        <button onClick={() => setIsBlur(!isBlur)}>toggle</button>
        
        <Footer></Footer>
    </>
  )
}

export default Store
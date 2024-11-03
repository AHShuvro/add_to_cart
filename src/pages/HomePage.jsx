import React from 'react';
import Hero_1 from '../components/Hero/Hero_1';
import ArrivalsProducts from '../components/Products/ArrivalsProducts';
import College_1 from '../components/Collage/College_1';
import TopTranding from '../components/Products/TopTranding';
import Hero_2 from '../components/Hero/Hero_2';
import BlogCart from '../components/Blog/BlogCart';
import Services_1 from '../components/Clients/Services/Services_1';
import Brand_1 from '../components/Brand/Brand_1';
import Insta from '../components/Socials/Insta';
import Contact_1 from '../components/Contact/Contact_1';

const HomePage = () => {
    return (
        <>
        <Hero_1 />
        <ArrivalsProducts />
        <College_1 />
        <TopTranding />
        <Hero_2 />
        <BlogCart />
        <Services_1 />
        <Brand_1 />
        <Insta />
        <Contact_1 />

        </>
    );
};

export default HomePage;
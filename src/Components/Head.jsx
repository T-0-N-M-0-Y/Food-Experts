import React from 'react';

const Head = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-screen h-full">
                <div id="slide1" className="carousel-item relative w-full lg:h-screen h-full">
                    <img src="https://e0.pxfuel.com/wallpapers/283/511/desktop-wallpaper-thai-food-food-thai-recipes-food-food-table.jpg" className="w-full lg:h-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-lime-900 hover:bg-orange-950">❮</a>
                        <p className='text-center font-bold lg:text-5xl text-green-600 bg-lime-200 px-10 py-5 rounded-xl'>Tasty Bites <br /> Healthy Foods</p>
                        <a href="#slide2" className="btn btn-circle bg-lime-900 hover:bg-orange-950">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full lg:h-screen h-full">
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600=" className="w-full lg:h-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-lime-900 hover:bg-orange-950" >❮</a>
                        <p className='text-center font-bold lg:text-5xl text-green-600 bg-lime-200 px-10 py-5 rounded-xl'>Great Dishes <br /> Great Prices</p>
                        <a href="#slide1" className="btn btn-circle bg-lime-900 hover:bg-orange-950">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;
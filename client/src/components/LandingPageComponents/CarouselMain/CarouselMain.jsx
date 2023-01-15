import React, { useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const titles = [
    "Hogwarts Legacy - Deluxe Edition",
    "Manifold Garden",
    "Prey",
    "Rebel Galaxy",
    "Wolfenstein: The Old Blood",
    "Battlefield™ 2042",
];

const baseUrl = "//localhost:5000/api"

const CarouselMain = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + "/games/")
            .then(response => {
                const data = response.data
                const allGames = [];
                for (const key in data) {
                    const game = {
                        id: key,
                        ...data[key]
                    };
                    allGames.push(game);
                }
                setGames(allGames);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const carouselData = games.filter((el) => {
        if (titles.includes(el.title)) {
            return el;
        }
        return false;
    });
    return (
        <div id='carouselmain'>
            <Carousel
                autoPlay
                showStatus={false}
                showArrows={false}
                stopOnHover={false}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                transitionTime={500}
                infiniteLoop={true}
                interval={4000}
            >
                {carouselData.map((el, i) => {
                    return (
                        <Link to={`/games/${el?._id}`} key={i}>
                            <div className='max-w-[1600px] mx-auto'>
                                <img src={el?.thumbnail.src} alt="" className="image" />
                            </div>
                        </Link>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default CarouselMain
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Loading } from "../../components";
import { GameCard } from '../../components/GamePageComponents'

const baseUrl = "//localhost:5000/api"

const GamePage = () => {
    const { id } = useParams();
    const [gameData, setGameData] = useState({});

    const getGameData = async () => {
        try {
            const { data } = await axios.get(baseUrl + `/games/${id}`);

            setGameData({ ...data });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getGameData();
    }, []);

    return (
        <div>
            <div>
                {!gameData.title ? <Loading /> : <GameCard data={gameData} />}
            </div>
        </div>
    )
}

export default GamePage
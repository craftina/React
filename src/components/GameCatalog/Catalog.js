import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameServices from "../../services/gameServices"

const Catalog = ({navChangeHandler}) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        gameServices.getAll()
            .then(result => {
                setGames(result)
                setLoading(false);
            })

    }, [])


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {loading
                ? <h1>Loading...</h1>
                : games.length > 0
                    ? games.map(g => <GameCard key={g._id} game={g} navChangeHandler={navChangeHandler} />)
                    : <h3 className="no-articles">No games yet</h3>
            }

            <h3 className="no-articles">No games yet</h3>
        </section>
    );
}

export default Catalog;
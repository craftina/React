import { useEffect, useState, lazy, Suspense } from "react";
import * as gameServices from "../../services/gameServices";
// import GameCard from "./GameCard";
const GameCard = lazy(() => import('./GameCard'));


const Catalog = ({ navChangeHandler }) => {
    const [games, setGames] = useState([]);


    useEffect(() => {
        gameServices.getAll()
            .then(result => {
                setGames(result)
            })

    }, [])


    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
            {
                games.length > 0
                ? games.map(g => <GameCard key={g._id} game={g} navChangeHandler={navChangeHandler} />)
                : <h3 className="no-articles">No games yet</h3>
            }
            </Suspense>
            <h3 className="no-articles">No games yet</h3>
        </section>
    );
}

export default Catalog;
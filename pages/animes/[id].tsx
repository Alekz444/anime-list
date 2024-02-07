import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime');
    const data = await res.json();

    const paths = data.data.map(anime => {
        return {
            params: { id: anime.mal_id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://api.jikan.moe/v4/anime/' + id);
    const data = await res.json();

    return {
        props: {anime: data.data}
    }

}

const Details = ( { anime } ) => {
    return ( 
        <div>
            <h1 className="anime-title">{ anime.title }</h1>
            <h1 className="anime-subtitle">{ anime.title_japanese }</h1>
            <div className="anime-box">
                <div className="anime-image">
                    <img src={anime.images.jpg.large_image_url}></img>
                </div>
                <div className="anime-about-box">
                    <p><b>Status:</b> {anime.status}</p>
                    <p><b>Episodes:</b>: {anime.episodes}</p>
                    <p><b>Score:</b>: {anime.score}</p>
                    <p><b>Rank:</b>: {anime.rank}</p>
                    <p><b>Rating:</b>: {anime.rating}</p>
                    <p><b>Synopsis:</b>: {anime.synopsis}</p>
                    <Link href={anime.url}>{ anime.url }</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Details;
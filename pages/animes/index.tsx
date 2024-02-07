import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime');
    const data = await res.json();
    
    return {
        props: { animes: data.data}
    }
}

const Animes = ( { animes } ) => {
    return ( 
        <div>
            <h1 className="anime-subtitle">All Anime</h1>
            { animes.map(anime => (
                <Link className="single" href={'/animes/' + anime.mal_id} key={anime.mal_id}>
                    <h3>{ anime.title }</h3>
                </Link>
            )) }
        </div>
     );
}
 
export default Animes;
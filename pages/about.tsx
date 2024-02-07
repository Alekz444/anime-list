import Head from 'next/head'

const About = () => {
    return ( 
        <>
            <Head>
                <title>Anime List | About</title>
                <meta name="keywords" content="anime" />
            </Head>
            <div>
                <h1 className='anime-subtitle'>About</h1>
                <p>This is just a project I used to learn NextJS :P</p>
            </div>
        </>
    );
}
 
export default About;
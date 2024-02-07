import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <div>
                    <Image src="/anya.png" width={128} height={77} />
                </div>    
                <div className='anime-title'>
                    AniGloss
                </div>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/animes">Anime Listing</Link>
        </nav>
     );
}
 
export default Navbar;
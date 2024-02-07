import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anime List | Home</title>
        <meta name="keywords" content="anime" />
      </Head>
      <div>
        <h1>Welcome to AniGloss</h1>
        <Link href="/animes">See Anime Listing</Link>
      </div>
    </>
  );
}

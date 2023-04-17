import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mythen aus Westernis RP - Deine einzigartige Rollenspiel Erfahrung in Garry's Mod</title>
        <meta name="description" content="Tritt noch heute dem Mythen aus Westernis Rollenspiel-Server bei und lerne als Mensch, Zwerg oder Ork eine neue Welt kennen!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
      </main>
    </>
  )
}

import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData, cardsData}) {

  return (
    <div className="bg-white">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1
        md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {exploreData?.map((item, i) => (
               <SmallCard key={i} img={item.img} location={item.location} distance={item.distance}  />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData?.map((item, i) => (
                <MediumCard key={i} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired" />
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  let exploreData = null;
  let cardsData = null;
  try{
    exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())

    cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  } catch(error) {
    console.log(error)
  }

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}


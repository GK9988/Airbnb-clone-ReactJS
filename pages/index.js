import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils";
import MediumCard from "../components/MediumCard";

const Home = ({ exploreData, cardData }) => {
  return (
    <div className="">
      <Head>
        <title>GarvK Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull small cards from API*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }, itindex) => (
              <SmallCard
                img={img}
                distance={distance}
                location={location}
                key={itindex}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map(({ img, title }, itindex) => (
              <MediumCard key={itindex} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // small card data
  const exploreD = await fetch("https://links.papareact.com/pyp");
  const exploreData = await exploreD.json();

  // medium card data
  const cardD = await fetch("https://links.papareact.com/zp1");
  const cardData = await cardD.json();

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}

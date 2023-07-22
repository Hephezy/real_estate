import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaPropertiesContainer from "../components/area-properties-container";
import AreaFeatureContainer from "../components/area-feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="description"
          content="Discover the perfect home for you and your family"
        />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <Hero />
        <AreaPropertiesContainer />
        <AreaFeatureContainer />
        <RentPropertiesCard />
        <RentPropertiesContainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

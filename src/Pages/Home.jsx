import React from 'react';
import Banner from '../Main/Banner';
import Featured_Service_section from '../Main/Featured_Service_section';
import PartnerSection from '../Main/PartnerSection';
import BestBank from '../Main/BestBank';
import BestTravel from '../Main/BestTravel';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Featured_Service_section></Featured_Service_section>
          <PartnerSection></PartnerSection>
          <BestBank></BestBank>
          <BestTravel></BestTravel>
        </div>
    );
};

export default Home;
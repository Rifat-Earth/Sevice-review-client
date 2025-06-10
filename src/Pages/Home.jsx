import React from 'react';
import Banner from '../Main/Banner';
import Featured_Service_section from '../Main/Featured_Service_section';
import PartnerSection from '../Main/PartnerSection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Featured_Service_section></Featured_Service_section>
          <PartnerSection></PartnerSection>
        </div>
    );
};

export default Home;
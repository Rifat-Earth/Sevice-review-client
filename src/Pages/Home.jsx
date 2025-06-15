import React, { useContext, useEffect } from 'react';
import Banner from '../Main/Banner';
import Featured_Service_section from '../Main/Featured_Service_section';
import PartnerSection from '../Main/PartnerSection';
import BestBank from '../Main/BestBank';
import BestTravel from '../Main/BestTravel';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {

  useEffect(() => {
    document.title = "Home | Service-review";
  }, []);
  const data = useLoaderData()
  console.log(data)
  const { loading } = useContext(AuthContext)
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-bars text-success"></span>
    </div>
  }

  return (
    <div>
      <Banner></Banner>
      <h1 className='text-center font-bold mt-6 mb-6 text-2xl'>Featured Service Section</h1>
      <div className='grid grid-cols-1 m-4 md:grid-cols-3  mx-auto md:gap-2 mb-12 gap-2 '>
        {
          data.map(feature => <Featured_Service_section key={data.email
          } feature={feature}></Featured_Service_section>)
        }
      </div>
      <PartnerSection></PartnerSection>
      <BestBank></BestBank>
      <BestTravel></BestTravel>
    </div>
  );
};

export default Home;
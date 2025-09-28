import React, { useContext, useEffect } from 'react';
import Banner from '../Main/Banner';
import Featured_Service_section from '../Main/Featured_Service_section';
import PartnerSection from '../Main/PartnerSection';
import BestBank from '../Main/BestBank';
import BestTravel from '../Main/BestTravel';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import PopularServices from '../Main/PopularServices';
import WhyChooseUs from '../Main/WhyChooseUs';
import CustomerReview from '../Main/CustomerReview';
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
      <h1
        className='text-3xl font-bold text-center m-5 mt-10'>Featured <span className='text-green-700'>Service Section</span> </h1>
      <div className='grid bg-base-100 grid-cols-1  md:grid-cols-4 lg:grid-cols-6 justify-center  md:gap-2 ml-8 lg:ml-20 p-6 gap-2 '>
        {
          data.slice(0, 12).map(feature => (
            <Featured_Service_section  key={feature._id} feature={feature} />
          ))
        }
      </div>
      <PartnerSection></PartnerSection>
      <BestBank></BestBank>
      <BestTravel></BestTravel>
      <PopularServices></PopularServices>
      <WhyChooseUs></WhyChooseUs>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
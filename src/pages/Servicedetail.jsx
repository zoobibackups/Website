import React from 'react';
import Newsletter from './Components/Newsletter';
import Banner from './Components/Banner';
import Serdetails from './Components/Serdetails';

function Servicedetail({item}) {
  return (
    <>
      <Banner home={"Home"} title={"Services"} liItem={"Serices"} />
      <Serdetails />
      <Newsletter />
    </>
  )
}
export default Servicedetail;

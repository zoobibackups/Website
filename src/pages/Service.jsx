import React from 'react';
import Servicebox from './Components/Servicebox';
import Newsletter from './Components/Newsletter';
import Banner from './Components/Banner';


function Service() {
  return (
    <>
      <Banner home={"Home"} title={"Services"} liItem={"Serices"} />
      <Servicebox />
      <Newsletter />
    </>
  )
}
export default Service;
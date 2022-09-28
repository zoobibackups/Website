import React from 'react';
// import Countercode from './Countercode';
import CountUp from 'react-countup';


function Countercode(props) {
    return (
        <>
            <li className="counter-single-item">
                <div className="count-box">
                    <img src={props.img} alt="" />
                    <p className="text"><span className="counter">
                        <CountUp start={0} end={props.endvalue} duration={2} delay={0} />
                    </span>%</p>
                </div>
                <h6 className="title"> {props.heading} </h6>
            </li>
        </>
    )
}

function Counter() {

    const runningcounter  = [
        {
            id: "1",
            img: 'assets/images/icons/count-shape-orange.png',
            heading: "Customer Satisfaction",
            endvalue: "8090"
        },
        {
            id: "2",
            img: "assets/images/icons/count-shape-blue.png",
            heading: "Achieve Goals",
            endvalue: "7050"
        },
        {
            id: "3",
            img: "assets/images/icons/count-shape-purple.png",
            heading: "Dedicated Support",
            endvalue: "5050"
        }
    ]

    const CounterValue = runningcounter.map((countercard, i) => {
        return <Countercode id={runningcounter[i].id} img={runningcounter[i].img} endvalue={runningcounter[i].endvalue} 
        heading={runningcounter[i].heading}        
        />
    })

  return (
    <>
    {CounterValue}
    </>
  )
}

export default Counter;
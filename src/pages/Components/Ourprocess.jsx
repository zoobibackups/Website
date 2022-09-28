import React from 'react';

const Processdata  = (props) => {
    return (
        <>
            <li>
                <div className="icon">
                    <img src= {props.processimg}  alt="" />
                </div>
                <div className="content">
                    <h4 className="smalltitle"> {props.Processphding} </h4>
                    <p> {props.Processpara} </p>
                </div>
            </li>
        </>
    )
}

function Process() {
const OurProcess = [
    {
        processimg: "/assets/images/icons/promo/sericon-1.png",
        id: "1",
        Processphding: "Consult",
        Processpara: "Hit Digitally proudly provides full-time consultancy to its valuable customers."
    },
    {
        processimg: "/assets/images/icons/promo/sericon-2.png",
        id: "2",
        Processphding: "Plan",
        Processpara: "Our professional team gives optimized plans to uprise your business."
    },
    {
        processimg: "/assets/images/icons/promo/sericon-3.png",
        id: "3",
        Processphding: "Create",
        Processpara: "On the basis of adequate planning, we figure out your project optimally."
    },
    {
        processimg: "/assets/images/icons/promo/sericon-4.png",
        id: "4",
        Processphding: "Release",
        Processpara: "We assure the timely delivery of any project within the specified deadline."
    },
]

const ProcessContent = OurProcess.map((card, i) => {
    return <Processdata id={OurProcess[i].id} processimg={OurProcess[i].processimg}  Processphding={OurProcess[i]. Processphding}
        Processpara={OurProcess[i].Processpara} 
    />
})

return (
    <>
        {ProcessContent}
    </>
)

}

export default Process;

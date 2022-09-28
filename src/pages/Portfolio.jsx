import React from "react";
import Newsletter from './Components/Newsletter';
import Banner from './Components/Banner';
import TabsContent from './Components/TabsContent';


function FillExample() {
    return (
        <>
            <Banner home={"Home"} title={"Portfolio"} liItem={"Portfolio"} />
                <TabsContent />
            <Newsletter />
        </>
    )
}

export default FillExample;
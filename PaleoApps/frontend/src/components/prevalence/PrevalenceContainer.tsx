//[TODO] Responsible for handling data specific to Occurances
import React from "react";
import { Prevalence } from "../../common/types.ts";
import { fetchPrevalence } from "../../common/utils.ts";
import { PrevalenceChart } from "./PrevalenceChart.tsx";
import { PrevalencelList } from "./PrevalenceList.tsx";
export function PrevalenceContainer(){
//    let intervals:Interval[] = [];
    //[TODO] Move to Redux to store
    const [prevalenceData, setPrevalenceData] = React.useState<Prevalence[]>([]);

   
React.useEffect(() => {
    console.log('Use Effect - prevalences');
    (async () => {
        const data:Prevalence[] = await fetchPrevalence();
        setPrevalenceData(data);
    }
    )()

});

    return (
        <>
           <h2>Prevelance</h2>
            <PrevalenceChart prevalenceData={prevalenceData}/>
           <PrevalencelList prevalenceData={prevalenceData}/>
       </>
        
    )
}

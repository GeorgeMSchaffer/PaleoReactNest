import { DiversityChart } from "../components/diversity/DiversityChart.tsx";
import PrevalenceChart from "../components/prevalence/PrevalenceChart.tsx";
export  function ChartsDemoPage(){
    return (
        <>
        <div className="p-4">
            <h1>Prevalence</h1>
            <PrevalenceChart prevalenceData={[]} />
        </div>
        <div className="p-4">
            <h1>Diversity</h1>
            <DiversityChart diversity={[]}/>
        </div>
        </>
    )
}

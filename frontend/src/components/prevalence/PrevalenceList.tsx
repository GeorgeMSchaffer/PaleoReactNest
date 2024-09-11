import { Prevalence } from "../../common/types.ts";

export interface PrevalencelListProps {
    prevalenceData: Prevalence[]
}

export  function PrevalencelList(props: PrevalencelListProps) {
    const prevalences = props.prevalenceData || [];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Records {prevalences.length}</b>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Taxon Number</th>
                            <th>Taxon Name</th>
                            <th>Taxon Rank</th>
                            <th>Record Type</th>
                            <th>Image Number</th>
                            <th>Number of Occurances</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prevalences && prevalences.map((p) => {
                            return (
                                <tr key={p.taxonNo}>
                                    <td>{p.taxonNo}</td>                                    
                                    <td>{p.taxonName}</td>
                                    <td>{p.taxonRank}</td>
                                    <td>{p.imageNo}</td>
                                    <td>{p.numOccurances}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

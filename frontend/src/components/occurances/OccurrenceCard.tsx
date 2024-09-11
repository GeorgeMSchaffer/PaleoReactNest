import { Occurrence } from "../../common/types";
export interface IOccurrenceCard {
    occurance: Occurrence;
}
export default function OccuranceCard(props: IOccurrenceCard) {
    const occurance = props.occurance;
    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                <th>
                    <tr>occurrence no</tr>
                    <tr>record type</tr>
                    <tr>collection no</tr>
                    <tr>identified name</tr>
                    <tr>identified rank</tr>
                    <tr>identified no</tr>
                    <tr>accepted name</tr>
                    <tr>accepted rank</tr>
                    <tr>accepted no</tr>
                    <tr>early interval</tr>
                    <tr>late interval</tr>
                    <tr>max ma</tr>
                    <tr>min ma</tr>
                    <tr>reference no</tr>
                    <tr>cc</tr>
                    <tr>latlng basis</tr>
                    <tr>latlng precision</tr>
                    <tr>geogscale</tr>
                    <tr>phylum</tr>
                    <tr>cladeClass,</tr>
                    <tr>cladeOrder</tr>
                    <tr>family</tr>
                    <tr>genus</tr>
                </th>
                </thead>
                <tbody>
                <tr>
                    <td>{occurance.occurrenceNo}</td>
                    <td>{occurance.recordType}</td>
                    <td>{occurance.collectioNo}</td>
                    <td>{occurance.identifiedName}</td>
                    <td>{occurance.identifiedRank}</td>
                    <td>{occurance.identifiedNo}</td>
                    <td>{occurance.acceptedName}</td>
                    <td>{occurance.acceptedRank}</td>
                    <td>{occurance.acceptedNo}</td>
                    <td>{occurance.earlyInterval}</td>
                    <td>{occurance.lateInterval}</td>
                    <td>{occurance.maxMya}</td>
                    <td>{occurance.minMya}</td>
                    <td>{occurance.referenceNo}</td>
                    <td>{occurance.cc}</td>
                    <td>{occurance.latlngBasis}</td>
                    <td>{occurance.latlngPrecision}</td>
                    <td>{occurance.geogscale}</td>
                    <td>{occurance.phylum}</td>
                    <td>{occurance.cladeClass}</td>
                    <td>{occurance.cladeOrder}</td>
                    <td>{occurance.family}</td>
                    <td>{occurance.genus}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    type MRT_ColumnDef
} from 'material-react-table';
import { Taxa } from '../../common/types';
import { MuiVirtualTable } from '../shared/MuiVirtualTable';

interface TaxaListProps {
    taxa: Taxa[];
}

export function TaxaList(props: TaxaListProps) {
    const taxa = props.taxa || [];
    const columns : MRT_ColumnDef<Taxa>[] = [
        { accessorKey: 'taxonNo', header: 'Taxon No' },
        { accessorKey: 'taxonName', header: 'Taxon Name' },
        { accessorKey: 'recordType', header: 'Record Type' },
        { accessorKey: 'taxonName', header: 'Taxon Name' },
        { accessorKey: 'taxonAttr', header: 'Taxon Attr' },
        { accessorKey: 'acceptedNo', header: 'Accepted No' },
        { accessorKey: 'acceptedRank', header: 'Accepted Rank' },
        { accessorKey: 'parentNo', header: 'Parent No' },
        { accessorKey: 'referenceNo', header: 'Reference No' },
        { accessorKey: 'isExtant', header: 'Is Extant' },
        { accessorKey: 'numOccurances', header: '# of Occurrences' },
    ];
    
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Taxas {taxa.length}</b>
            <MuiVirtualTable data={taxa} columns={columns} />

            {/* <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Taxon No</th>
                            <th>Taxon Name</th>
                            <th>Record Type</th>
                            <th>Taxon Name</th>
                            <th>Taxon Attr</th>
                            <th>Accepted No</th>
                            <th>Accepted Rank</th>
                            <th>Parent No</th>
                            <th>Reference No</th>
                            <th>Is Extant</th>
                            <th># of Occurrences</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taxa.map((taxa, index) => (
                            <tr key={index}>
                                <td>{taxa.taxonNo}</td>
                                <td>{taxa.taxonName}</td>
                                <td>{taxa.recordType}</td>
                                <td>{taxa.taxonName}</td>
                                <td>{taxa.taxonAttr}</td>
                                <td>{taxa.acceptedNo}</td>
                                <td>{taxa.acceptedRank}</td>
                                <td>{taxa.parentNo}</td>
                                <td>{taxa.referenceNo}</td>
                                <td>{taxa.isExtant}</td>
                                <td>{taxa.numOccurances}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div> */}
        </div>
    );
}
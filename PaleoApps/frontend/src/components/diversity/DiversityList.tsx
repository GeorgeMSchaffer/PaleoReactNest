import { FixedSizeList as List } from 'react-window';
import { Diversity } from "../../common/types";

export interface DiversityListProps {
    diversity: Diversity[];
}

const Row = ({ index, style, data }) => {
    const item = data[index];
    return (
        <div style={style} className="table-row">
            <div className="table-cell">{item.intervalNo}</div>
            <div className="table-cell">{item.intervalName}</div>
            <div className="table-cell">{item.minMya}</div>
            <div className="table-cell">{item.maxMya}</div>
            <div className="table-cell">{item.numOccurances}</div>
            <div className="table-cell">{item.xFt}</div>
            <div className="table-cell">{item.xBL}</div>
            <div className="table-cell">{item.xFL}</div>
            <div className="table-cell">{item.xBt}</div>
        </div>
    );
};

export function DiversityList(props: DiversityListProps) {
    const data = props.diversity || [];
    return (
        <div className="p-4">
            <b className="block mb-2 text-lg"># of Records {data.length}</b>
            <div className="table-responsive">
                <div className="table table-striped table-bordered">
                    <div className="table-header">
                        <div className="table-row">
                            <div className="table-cell">Interval Number</div>
                            <div className="table-cell">Interval Name</div>
                            <div className="table-cell">MYA Minimum</div>
                            <div className="table-cell">MYA Maximum</div>
                            <div className="table-cell">Number of Occurrences</div>
                            <div className="table-cell">X_Ft</div>
                            <div className="table-cell">X_bL</div>
                            <div className="table-cell">X_FL</div>
                            <div className="table-cell">X_bt</div>
                        </div>
                    </div>
                    <List
                        height={400}
                        itemCount={data.length}
                        itemSize={35}
                        width="100%"
                        itemData={data}
                    >
                        {Row}
                    </List>
                </div>
            </div>
        </div>
    );
}
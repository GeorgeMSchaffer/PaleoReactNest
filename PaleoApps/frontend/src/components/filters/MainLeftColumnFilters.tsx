import { IntervalRecordType } from "./IntervalFilter";
import { PhylumFilter } from "./PhylumFilter";

export function MainLeftColumnFilters(){
    return (
        <>
            <IntervalRecordType/>
            <PhylumFilter/>
        </>
    )
}
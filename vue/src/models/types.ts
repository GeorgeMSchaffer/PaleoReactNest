export enum EnumIntervalType {
    EON = "Eon",
    ERA = "Era",
    PERIOD = "Period",
    EPOCH = "Epoch",
    AGE = "Age",

}
export interface Interval {
    id: number;
    recordType: EnumIntervalType;
    intervalName: string;
    abbrv: string;
    parentNo: number;
    color: string;
    tAge: number;
    bAge: number;
    referenceNo: number;
}
export interface Occurance {
    occuranceNo:Number;
    genus:string;
    family:string;
}

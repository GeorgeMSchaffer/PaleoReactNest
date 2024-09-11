
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//[TODO] If the project grows, we can split this file into multiple files
export enum EnumIntervalType {
    EON = "Eon",
    ERA = "Era",
    PERIOD = "Period",
    EPOCH = "Epoch",
    AGE = "Age",
} 
@Entity('intervals')
export class Interval {
    @PrimaryGeneratedColumn()
    interval_no: number;

    @Column()
    interval_name: string;

    @Column()
    abbrev: string;

    @Column({ name: 'b_age' })
    startMYA: number;

    @Column({ name: 't_age' })
    endMYA: number;

    @Column({name:'color'})
    color: string;

    @Column({name:'parent_no'})
    parentNo: number;

    @Column({name:'record_type'})
    recordType: EnumIntervalType;

    @Column({name:'reference_no'})
    referenceNo: number;

    @Column({name:'scale_no'})
    scaleNo: number;
}

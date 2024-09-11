import { PrimaryColumn,PrimaryGeneratedColumn,Column,Table,Entity } from "typeorm";
import { EnumIntervalType } from "src/common/types";
@Entity('intervals',{database:'paleo'})
//@Table("intervals")
export class Interval {
  @PrimaryGeneratedColumn({name:'interval_no'})
  intervalNo: number;

  @Column({name:'interval_name',})
  intervalName: string;

  @Column({name:'abbrev'})
  abbrev?: string;

  @Column({ name: 'b_age' })
  startMYA?: number;

  @Column({ name: 't_age' })
  endMYA?: number;

  @Column({ name: 'color' })
  color?: string;

  @Column({ name: 'parent_no' })
  parentNo?: number;

  @Column({ name: 'record_type' })
  recordType?: EnumIntervalType;

  @Column({ name: 'reference_no' })
  referenceNo?: number;

  @Column({ name: 'scale_no' })
  scaleNo?: number;
}

// SELECT interval_no, interval_name, abbrev, b_age AS startMYA, t_age AS endMYA, abbrev, color, parent_no, record_type, reference_no, scale_no 
//       FROM intervals

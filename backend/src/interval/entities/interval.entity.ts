import { PrimaryGeneratedColumn, Column, Entity,ManyToMany,OneToMany,ManyToOne,JoinColumn,OneToOne } from "typeorm";

@Entity('intervals',{database:'paleo'})
export class Interval {
  @PrimaryGeneratedColumn({ name: 'interval_no' })
  intervalNo!: number;

  @ManyToOne(() => Interval, interval => interval.children)
  @JoinColumn({ name: 'parent_no' })
  parent: Interval;

  
  @OneToMany(() => Interval, interval => interval.parent)
  children: Interval[];

  @Column({ name: 'interval_name',nullable:true })
  intervalName!: string;

  @Column({name:'abbrev',nullable:true})
  abbrev?: string;

  @Column({ name: 'b_age',nullable:true })
  startMYA?: number;

  @Column({ name: 't_age',nullable:true })
  endMYA?: number;

  @Column({ name: 'color',nullable:true })
  color?: string;

  @Column({ name: 'parent_no',nullable:true })
  parentNo?: number;

  @Column({ name: 'record_type',nullable:true })
  //recordType?: EnumIntervalType;
  recordType?: string;

  @Column({ name: 'reference_no',nullable:true })
  referenceNo?: number;

  @Column({ name: 'scale_no',nullable:true })
  scaleNo?: number;
}

// SELECT interval_no, interval_name, abbrev, b_age AS startMYA, t_age AS endMYA, abbrev, color, parent_no, record_type, reference_no, scale_no 
//       FROM intervals

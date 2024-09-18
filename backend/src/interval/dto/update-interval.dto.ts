import { Interval } from '../entities/interval.entity';

export class UpdateIntervalDto {
  intervalNo!: number;
  parent: Interval;
  children: Interval[];
  intervalName!: string;
  abbrev?: string;
  startMYA?: number;
  endMYA?: number;
  color?: string;
  parentNo?: number;
  recordType?: string;
  referenceNo?: number;
  scaleNo?: number;
}

// SELECT interval_no, interval_name, abbrev, b_age AS startMYA, t_age AS endMYA, abbrev, color, parent_no, record_type, reference_no, scale_no 
//       FROM intervals

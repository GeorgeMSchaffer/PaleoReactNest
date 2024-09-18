import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Occurrence } from '../occurrences/occurrence.entity';
@Entity('species')
export class Species {
  @PrimaryColumn({ name: 'specimen_no'})
  specimenNo: number;

  @Column({ name: 'record_type', type: 'text', nullable: true })
  recordType: string;

  @Column({ name: 'flags', type: 'text', nullable: true })
  flags: string;

  @Column({ name: 'occurrence_no', type: 'text', nullable: true })
  occurrenceNo: string;

  @Column({ name: 'reid_no', type: 'int', nullable: true })
  reidNo: number;
  
  @OneToOne(() => Occurrence,(occurrence) => occurrence.species)
  @JoinColumn({
    name: 'accepted_no',
    referencedColumnName: 'acceptedNo',
  })
  occurrences: Occurrence;

  @Column({ name: 'collection_no', type: 'text', nullable: true })
  collectionNo: string;

  @Column({ name: 'specimen_id', type: 'text', nullable: true })
  specimenId: string;

  @Column({ name: 'is_type', type: 'text', nullable: true })
  isType: string;

  @Column({ name: 'specelt_no', type: 'text', nullable: true })
  speceltNo: string;

  @Column({ name: 'specimen_side', type: 'text', nullable: true })
  specimenSide: string;

  @Column({ name: 'specimen_part', type: 'text', nullable: true })
  specimenPart: string;

  @Column({ name: 'specimen_sex', type: 'text', nullable: true })
  specimenSex: string;

  @Column({ name: 'n_measured', type: 'int', nullable: true })
  nMeasured: number;

  @Column({ name: 'measurement_source', type: 'text', nullable: true })
  measurementSource: string;

  @Column({ name: 'magnification', type: 'text', nullable: true })
  magnification: string;

  @Column({ name: 'comments', type: 'text', nullable: true })
  comments: string;

  @Column({ name: 'identified_name', type: 'text', nullable: true })
  identifiedName: string;

  @Column({ name: 'identified_rank', type: 'text', nullable: true })
  identifiedRank: string;

  @Column({ name: 'identified_no', type: 'int', nullable: true })
  identifiedNo: number;

  @Column({ name: 'difference', type: 'text', nullable: true })
  difference: string;

  @Column({ name: 'accepted_name', type: 'text', nullable: true })
  acceptedName: string;

  @Column({ name: 'accepted_rank', type: 'text', nullable: true })
  acceptedRank: string;

  @Column({ name: 'accepted_no', type: 'int', nullable: true })
  acceptedNo: number;

  @Column({ name: 'max_ma', type: 'text', nullable: true })
  maxMa: string;

  @Column({ name: 'min_ma', type: 'text', nullable: true })
  minMa: string;

  @Column({ name: 'reference_no', type: 'int', nullable: true })
  referenceNo: number;
}
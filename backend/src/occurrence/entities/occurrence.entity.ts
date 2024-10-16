import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Interval } from '../../interval/entities/interval.entity';

@Entity('occurrences', { schema: 'paleo' })
export class Occurrence {
  @PrimaryGeneratedColumn({ name: 'occurrence_no' })
  occurrenceNo: number;

  @Column({ name: 'record_type', type: 'varchar', nullable: true })
  recordType: string;

  // Uncomment and add other columns as needed
  // @Column({ name: 'collection_no', type: 'varchar', nullable: true })
  // collectionNo: string;

  // @Column({ name: 'catalog_no', type: 'varchar', nullable: true })
  // catalogNo: string;

  @Column({ name: 'identified_name', type: 'varchar', nullable: true })
  identifiedName: string;

  @Column({ name: 'identified_rank', type: 'varchar', nullable: true })
  identifiedRank: string;

  @Column({ name: 'identified_no', type: 'int', nullable: true })
  identifiedNo: number;

  @Column({ name: 'accepted_name', type: 'varchar', nullable: true })
  acceptedName: string;

  @Column({ name: 'accepted_rank', type: 'varchar', nullable: true })
  acceptedRank: string;

  @Column({ name: 'accepted_no', type: 'int', nullable: true })
  acceptedNo: number;

  @Column({ name: 'early_interval', type: 'varchar', nullable: true })
  earlyInterval: string;

  @Column({ name: 'early_interval_no', type: 'int', nullable: true })
  earlyIntervalNo: number;

  // @ManyToOne(() => Interval, interval => interval.occurrences)
  // interval: Interval;

  @Column({ name: 'late_interval_no', type: 'int', nullable: true })
  lateIntervalNo: number;

  @Column({ name: 'max_ma', type: 'double precision', nullable: true })
  maxMa: number;

  @Column({ name: 'min_ma', type: 'double precision', nullable: true })
  minMa: number;

  // Uncomment and add other columns as needed
  // @Column({ name: 'reference_no', type: 'int', nullable: true })
  // referenceNo: number;

  // @Column({ name: 'state', type: 'varchar', nullable: true })
  // state: string;

  // @Column({ name: 'county', type: 'varchar', nullable: true })
  // county: string;

  @Column({ name: 'phylum', type: 'varchar', nullable: true })
  phylum: string;

  @Column({ name: 'class', type: 'varchar', nullable: true })
  class: string;

  @Column({ name: 'order', type: 'varchar', nullable: true })
  order: string;

  @Column({ name: 'family', type: 'varchar', nullable: true })
  family: string;

  @Column({ name: 'genus', type: 'varchar', nullable: true })
  genus: string;

  @Column({ name: 'environment', type: 'varchar', nullable: true })
  environment: string;

  @Column({ name: 'paleoage', type: 'varchar', nullable: true })
  paleoage: string;

  @Column({ name: 'paleolng', type: 'double precision', nullable: true })
  paleoLng: number;

  @Column({ name: 'paleolat', type: 'double precision', nullable: true })
  paleoLat: number;

  @Column({ name: 'lng', type: 'double precision', nullable: true })
  lng: number;

  @Column({ name: 'lat', type: 'double precision', nullable: true })
  lat: number;

  @Column({ name: 'composition', type: 'varchar', nullable: true })
  composition: string;
}
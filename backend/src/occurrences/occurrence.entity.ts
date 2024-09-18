import { PrimaryColumn, PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { Species } from "../species/species.entity";
@Entity('occurrences', { database: 'paleo' })
export class Occurrence {
  @PrimaryGeneratedColumn({ name: 'occurrence_no' })
  occurrenceNo: number;

  @OneToOne(() => Species,(species) => species.occurrences)
  @JoinColumn({
    name: 'accepted_no',
    referencedColumnName: 'acceptedNo',
  })
  species: Species;

  @Column({ name: 'collection_no' })
  collectionNo: number;

  @Column({ name: "record_type" })
  recordType: string;

  @Column({ name: "identified_name" })
  identifiedName: string;

  @Column({ name: "identified_rank" })
  identifiedRank: string;

  @Column({ name: "identified_no" })
  identifiedNo: number;

  @Column({ name: "accepted_name" })
  acceptedName: string;

  @Column({ name: "accepted_rank" })
  acceptedRank: string;

  @Column({ name: "accepted_no" })
  acceptedNo: number;

  @Column({ name: "early_interval" })
  earlyInterval: string;

  @Column({ name: "late_interval" })
  lateInterval: string;

  @Column({ name: "max_ma" })
  maxMya: number;

  @Column({ name: "min_ma" })
  minMya: number;

  @Column({ name: "reference_no" })
  referenceNo: number;

  @Column({ name: "cc" })
  cc: string;

  @Column({ name: "latlng_basis" })
  latlngBasis: string;

  @Column({ name: "latlng_precision" })
  latlngPrecision: number;

  @Column({ name: "geogscale" })
  geogscale: string;

  @Column({ name: "phylum" })
  phylum: string;

  @Column({ name: "class" })
  class: string;

  @Column({ name: "order" })
  order: string;

  @Column({ name: "family" })
  family: string;

  @Column({ name: "genus" })
  genus: string;

  constructor() {
    this.occurrenceNo = 0;
    this.collectionNo = 0;
    this.recordType = '';
    this.identifiedName = '';
    this.identifiedRank = '';
    this.identifiedNo = 0;
    this.acceptedName = '';
    this.acceptedRank = '';
    this.acceptedNo = 0;
    this.earlyInterval = '';
    this.lateInterval = '';
    this.maxMya = 0;
    this.minMya = 0;
    this.referenceNo = 0;
    this.cc = '';
    this.latlngBasis = '';
    this.latlngPrecision = 0;
    this.geogscale = '';
    this.phylum = '';
    this.class = '';
    this.order = '';
    this.family = '';
    this.genus = '';
  }
}

import { PrimaryColumn, PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn,ManyToMany } from "typeorm";
import { Species } from '../../species/entities/species.entity';
@Entity('occurrences', { database: 'paleo' })
export class Occurrence {
  @PrimaryGeneratedColumn({ name: 'occurrence_no' })
  occurrenceNo: number;

  // We will need to join manually since there is duplicated ids etc that need to be dealt with
  // @OneToOne(() => Species,(species) => species.occurrence)
  // @JoinColumn({
  //   name: 'accepted_no',
  //   referencedColumnName: 'acceptedNo',
  // })
  // species?: Species;
  @ManyToMany(() => Species,(species) => species.occurrences,{

  })
  @JoinColumn({
    name: 'occurrence_no',
    referencedColumnName: 'occurrenceNo',
  })
  species?: Species[];


  @Column({ name: 'collection_no' ,nullable: true })
  collectionNo: number;

  @Column({ name: "record_type" ,nullable: true })
  recordType: string;

  @Column({ name: "identified_name" ,nullable: true })
  identifiedName: string;

  @Column({ name: "identified_rank" ,nullable: true })
  identifiedRank: string;

  @Column({ name: "identified_no" ,nullable: true })
  identifiedNo: number;

  @Column({ name: "accepted_name" ,nullable: true })
  acceptedName: string;

  @Column({ name: "accepted_rank" ,nullable: true })
  acceptedRank: string;

  @Column({ name: "accepted_no",nullable: true  })
  acceptedNo: number;

  @Column({ name: "early_interval",nullable: true  })
  earlyInterval: string;

  @Column({ name: "late_interval",nullable: true  })
  lateInterval: string;

  @Column({ name: "max_ma",nullable: true  })
  maxMya: number;

  @Column({ name: "min_ma",nullable: true  })
  minMya: number;

  @Column({ name: "reference_no" ,nullable: true })
  referenceNo: number;

  @Column({ name: "cc" ,nullable: true  })
  cc: string;

  @Column({ name: "latlng_basis"  ,nullable: true })
  latlngBasis: string;

  @Column({ name: "latlng_precision" ,nullable: true  })
  latlngPrecision: number;

  @Column({ name: "geogscale",nullable: true  })
  geogscale: string;

  @Column({ name: "phylum",nullable: true  })
  phylum: string;

  @Column({ name: "class",nullable: true  })
  class: string;

  @Column({ name: "order",nullable: true  })
  order: string;

  @Column({ name: "family",nullable: true  })
  family: string;

  @Column({ name: "genus", nullable: true })
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

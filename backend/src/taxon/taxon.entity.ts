import { PrimaryColumn, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('taxon', { database: 'paleo' })
export class Taxon {
@PrimaryGeneratedColumn({ name: 'taxon_no' })
taxonNo: number;

@Column({ name: 'record_type' })
recordType: string;

@Column({ name: 'taxon_rank' })
taxonRank: string;

@Column({ name: 'taxon_name' })
taxonName: string;

@Column({ name: 'taxon_attr' })
taxonAttr: string;

@Column({ name: 'accepted_no' })
acceptedNo: number;

@Column({ name: 'accepted_rank' })
acceptedRank: string;

@Column({ name: 'accepted_name' })
acceptedName: string;

@Column({ name: 'parent_no' })
parentNo: number;

@Column({ name: 'reference_no' })
referenceNo: number;

@Column({ name: 'is_extant' })
isExtant: string;

@Column({ name: 'num_occurances' })
numOccurances: number;
}
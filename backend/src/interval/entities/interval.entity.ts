import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Occurrence } from '../../occurrence/entities/occurrence.entity';

@Entity('intervals')
export class Interval {

    @PrimaryGeneratedColumn()
    intervalNo: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    intervalName: string;

    // @OneToMany(() => Occurrence, occurrence => occurrence.interval)
    // occurrences: Occurrence[];

    @Column({type: 'integer', nullable: true})
    minMa: number;

    @Column({type: 'integer', nullable: true})
    maxMa: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    color: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    parentNo: string;
    
    @Column({ type: 'varchar', length: 255, nullable: true })
    recordType: string;

    @Column({type: 'integer', nullable: true})
    referenceNo: number;

    @Column({type: 'integer', nullable: true})
    scaleNo: number;
}
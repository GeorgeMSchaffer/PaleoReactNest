import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Occurrence } from '../../occurrence/entities/occurrence.entity';
import { ApiProperty } from '@nestjs/swagger';
@Entity('intervals')
export class Interval {

    @PrimaryGeneratedColumn()
    @Column({ type: 'integer', nullable: false, name: 'interval_no',primary:true })
    intervalNo: number;

    @Column({ type: 'varchar', length: 512, nullable: true, name: 'interval_name' })
    @ApiProperty({name:'interval_name'})
    intervalName: string;

    // @OneToMany(() => Occurrence, occurrence => occurrence.interval)
    // occurrences: Occurrence[];

    @Column({type: 'integer', nullable: true, name: 'min_ma'})
    @ApiProperty({name:'min_ma'})
    minMa: number;

    @Column({type: 'integer', nullable: true, name: 'max_ma'})
    @ApiProperty({name:'max_ma'})
    maxMa: number;

    @Column({ type: 'varchar', length: 255, nullable: true,name: 'color'})
    @ApiProperty({name:'color'})
    color: string;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'parent_no'})
    @ApiProperty({name:'parent_no'})
    parentNo: string;
    
    @Column({ type: 'varchar', length: 255, nullable: true, name: 'record_type'})
    @ApiProperty({name:'record_type'})
    recordType: string;

    @Column({type: 'integer', nullable: true, name: 'reference_no'})
    referenceNo: number;

    @Column({type: 'integer', nullable: true,name: 'scale_no'})
    scaleNo: number;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('strata')
export class Strata {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    record_type: string;

    @Column({ type: 'text' })
    lithology: string;

    @Column({ type: 'float' })
    max_ma: number;

    @Column({ type: 'float' })
    min_ma: number;

    @Column({ type: 'varchar', length: 255 })
    cc_list: string;

    @Column({ type: 'int' })
    n_colls: number;

    @Column({ type: 'int' })
    n_occs: number;
}
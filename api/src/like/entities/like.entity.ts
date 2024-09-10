import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryColumn()
    id: string;

    @Column()
    created_at: string;

    @Column()
    url: string;
}

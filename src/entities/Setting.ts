import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'


/** entity é o nome da pasta que esta na raiz  */
@Entity("settings")
class Setting {

@PrimaryColumn()
  id: string;

@Column()
  username: string;

@Column()
  chat: boolean;

@UpdateDateColumn()
  updated_at: Date;

@CreateDateColumn()
  created_at: Date;

  constructor() {

    if(!this.id) {
      this.id = uuid();
    }

  }

}

export { Setting }
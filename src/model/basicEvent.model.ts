import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'pt_basic_event',
  timestamps: false,
})
export class BasicEventModel extends Model<BasicEventModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;
  @Column
  event_id: number;
  @Column
  event_type: number;
  @Column
  auto_rec: number;
}

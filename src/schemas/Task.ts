import { Schema, model, Document } from 'mongoose';
import { UserInterface } from './User';

export enum StatusEnum {
  OPEN = 'OPEN',
  FINISHED = 'FINISHED'
}

export interface TaskInterface extends Document {
  description: string,
  status: StatusEnum,
  conclused: Date,
  responsible: UserInterface,
  creation: Date,
}

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description required'],
  },
  status: {
    type: String,
    validate: {
      validator: (value) => {
        if (value === StatusEnum.OPEN || value === StatusEnum.FINISHED) return true;
        return false;
      },
      message: (props) => `${props.value} is not an valid status`,
    },
    required: [true, 'Status required'],
    uppercase: true,
  },
  conclused: {
    type: Date,
  },
  responsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Responsible user required'],
  },
  creation: {
    type: Date,
    default: Date.now(),
  },
});

export default model<TaskInterface>('Task', TaskSchema);

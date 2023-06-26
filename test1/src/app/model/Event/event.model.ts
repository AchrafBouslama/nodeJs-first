import { User } from '../User/user';
import { ModaliteEvent } from '../Event/modalite-event';
import { TypeEvent } from '../Event/type-event';
export class Event {
    id!: number;
    title!: string;
    description!: string;
    dateD!: Date;
    dateF!: Date;
    nbreDePlaces!: number;
    image!: string;
    typeEvent!: TypeEvent;
    users!: User[];
  
   
   
  }

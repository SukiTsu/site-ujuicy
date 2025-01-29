import { Evenement } from "./ClassEvement";

export class ManagerEvent {
    listEvent: Evenement[] = [];
  
    addClassEvent(event: Evenement): void {
        this.listEvent.push(event);
    }
}
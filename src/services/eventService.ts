import { Event } from "../models/event";
import { Type } from "../models/type";
import { Visitor } from "../models/visitor";

export class EventService {
    private _events: Map<number, Event> = new Map();

    addEvent(event: Event): void {
        this._events.set(event.id, event);
        console.log(`${event.name} added.`);
    }

    listEvents(): void {
        this._events.forEach(event => {
            console.log(event.name);
        })
    }

    deleteEvent(id: number): void {
        this._events.delete(id);
        console.log(`Event with the following id has been deleted: ${id}`);
    }

    addVisitorToEvent(eventId: number, visitor: Visitor) {
        const wantedEvent = this._events.get(eventId);

        if(wantedEvent) {
            wantedEvent.setVisitor(visitor);
            console.log(`Added ${visitor.name} to ${wantedEvent?.name}`);
        } else {
            console.log(`Event not found.`);
        }
    }

    removeVisitorFromEvent(eventId: number, visitor: Visitor) {
        const unWantedEvent = this._events.get(eventId);

        if(unWantedEvent) {
            unWantedEvent.removeVisitor(visitor.id);
            console.log(`${visitor.name} from ${unWantedEvent.name} has been removed`);
        } else {
            console.log("Event not found.");
        }
    }

    filter(type: Type) {
        return Array.from(this._events).filter(([k, v]) => v.type === type)
    }
}
import { Service } from "./service";
import { Visitor } from "../models/visitor";
import { EventService } from "./eventService";

export class VisitorService implements Service {
    private _visitorsList: Map<number, Visitor> = new Map();
    private _eventService: EventService;

    constructor(eventService: EventService) {
        this._eventService = eventService;
    }

    addVisitor(visitor: Visitor): void {
        this._visitorsList.set(visitor.id, visitor);
    }

    //@listDecorator
    listVisitors(): void {
        this._visitorsList.forEach(visitor => {
            console.log(visitor.name);
        })
    }

    removeVisitor(id: number): void {
        this._visitorsList.delete(id);
        this._eventService.events.forEach(event => {
            if(event.visitors.has(id))
                event.removeVisitor(id);
        })
    }
}
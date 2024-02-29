import { Event } from "../src/models/event.ts"
import { EventService } from "../src/services/eventService.ts"
import { Art, Music, Type } from "../src/models/type.ts";
import { Visitor } from "../src/models/visitor.ts";

describe('EventService', () => {
    let eventServ: EventService;

    beforeEach(() => {
        eventServ = new EventService();
    });

    test('Testing filter method', () => {
        const event: Event = new Event(
            1, 
            "ZeneFeszt", 
            "Budapest", 
            new Date("2024-08-01"), 
            Music, 
            new Map<number, Visitor>)

        eventServ.addEvent(event);
        const musicEvents = eventServ.filter(Music);

        expect(musicEvent).toContain(event);
    })
})
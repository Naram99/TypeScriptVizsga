import { Event } from "./models/event";
import { EventService } from "./services/eventService";
import { Art, Music, Type } from "./models/type";
import { Visitor } from "./models/visitor";
import { VisitorService } from "./services/visitorService";

const john = new Visitor(1, "John");
const jane = new Visitor(2, "Jane");

const music = new Event(
    1, 
    "ZeneFeszt", 
    "Budapest", 
    new Date("2024-08-01"), 
    Music, 
    new Map<number, Visitor>
    );

const art = new Event(
    2, 
    "MűvészExpo", 
    "Debrecen", 
    new Date("2024-07-22"), 
    Art, 
    new Map<number, Visitor>
    );

const eventServ = new EventService();

const visitorServ = new VisitorService(eventServ);

eventServ.addEvent(music);
eventServ.addEvent(art);

eventServ.addVisitorToEvent(1, john);
eventServ.addVisitorToEvent(2, john);

eventServ.addVisitorToEvent(2, jane);
console.log(eventServ.filter(Art));

art.listVisitors();

visitorServ.removeVisitor(2);

art.listVisitors();
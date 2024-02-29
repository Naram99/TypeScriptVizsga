import { Visitor } from "../models/visitor";

export interface Service {
    addVisitor(visitor: Visitor): void,
    listVisitors(): void,
    removeVisitor(id: number): void,
}
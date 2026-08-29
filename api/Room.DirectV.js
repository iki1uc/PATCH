// ============================================================
// iki1uc · DirectV ROOM ADAPTER
// Bindet DirectV in jeden Room ein
// ============================================================

import DirectV from "./DirectV.js";

export class RoomDirectV {

    constructor(roomName) {
        this.room = roomName;
        this.directV = new DirectV();
    }

    // Hauptfunktion: Room → DirectV
    run(zone, respo, vector) {

        const out = this.directV.route(respo, zone, vector);

        return {
            room: this.room,
            zone,
            respo,
            vector,
            directV: out
        };
    }
}

console.log("RoomDirectV Adapter geladen");

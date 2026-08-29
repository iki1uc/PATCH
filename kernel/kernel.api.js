// iki1uc · KERNEL API ADAPTER
// verbindet Kernel → API → DirectV → NC → Rooms → Rolle

import { API } from "../api/api.index.js";
import { RoomDirectV } from "../api/Room.DirectV.js";
import NC from "../rolle/NC.js";
import RolleEngine from "../rolle/rolle.core.js";

export class KernelAPI {

    constructor() {
        this.api = API;
        this.directV = API.directV;
        this.nc = NC;
        this.rolle = new RolleEngine();
        this.roomX = new RoomDirectV("X.room");
        this.roomY = new RoomDirectV("Y.room");
        this.room81 = new RoomDirectV("81.room");
    }

    feed(zone, respo, vec) {

        // DirectV-Vektor
        const vektor = this.directV.route(respo, zone, vec);

        // NC-Intelligenz
        const ncOut = this.nc.run(zone, respo, vec);

        // Rolle-Ausführung
        const rolleOut = this.rolle.run("kernel", zone, respo, vec);

        // Rooms
        const roomX = this.roomX.run(zone, respo, vec);
        const roomY = this.roomY.run(zone, respo, vec);
        const room81 = this.room81.run(zone, respo, vec);

        return {
            zone,
            respo,
            vec,
            vektor,
            nc: ncOut,
            rolle: rolleOut,
            rooms: { roomX, roomY, room81 }
        };
    }
}

console.log("KernelAPI aktiv");

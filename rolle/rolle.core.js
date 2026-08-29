// iki1uc · ROLLE ENGINE
// verbindet DirectV, NC, API, Rooms, tmp, matrix

import { API } from "../api/api.index.js";
import matrix512 from "./matrix.512.json";
import ncCore from "./nc.core.json";
import ncVector from "./nc.vector.json";
import ncTmp from "./nc.tmp.index.json";

export class RolleEngine {

    constructor() {
        this.api = API;
        this.matrix = matrix512;
        this.nc = {
            core: ncCore,
            vector: ncVector,
            tmp: ncTmp
        };
    }

    run(loopName, zone, respo, vec) {

        const directV = this.api.directV.route(respo, zone, vec);

        return {
            loop: loopName,
            zone,
            respo,
            vec,
            directV,
            matrix: this.matrix,
            nc: this.nc
        };
    }
}

console.log("RolleEngine aktiv");

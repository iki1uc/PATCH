// ============================================================
// iki1uc · API INDEX
// Zentraler Kern für alle API-Module im PATCH/api/ Verzeichnis
// ============================================================

// Pipeline-Kerne
import Core3 from "./3.js";
import Core9 from "./9.js";
import Core81 from "./81.js";
import Core243 from "./243.js";

// Router-Kerne
import RIR from "./RIR.Core";
import Dreihoch3 from "./3hoch3.js";
import DreiO3 from "./3o3.js";
import XyX from "./XyX.js";

// API-Kit
import KIT from "./KIT.js";

// Transwarp / Schnitt / Position
import Transwarp from "./corridoor.transwarp.nc.js";
import POS from "./pos.js";
import Schnitt from "./schnitt.js";

// ============================================================
// API-Registry
// ============================================================

export const API = {

    // Pipeline-Stufen
    core: {
        "3": Core3,
        "9": Core9,
        "81": Core81,
        "243": Core243
    },

    // Router
    router: {
        rir: RIR,
        kubik: Dreihoch3,
        orbit: DreiO3,
        vector: XyX
    },

    // Zusatzmodule
    kit: KIT,
    transwarp: Transwarp,
    pos: POS,
    schnitt: Schnitt,

    // ========================================================
    // UNIVERSALER DISPATCHER
    // ========================================================
    dispatch(respo, zone, addr) {

        // 1) Etage bestimmen
        let etage = this._etage(respo);
        let core = this.core[etage];

        // 2) Router bestimmen
        let router = this._router(respo);

        // 3) Pipeline ausführen
        return {
            etage,
            core: core ? core : null,
            router,
            result: core ? core.run(zone, respo, addr) : null
        };
    },

    // ========================================================
    // Etagen-Logik (3 → 9 → 81 → 243)
    // ========================================================
    _etage(respo) {
        if (respo < 10) return "3";
        if (respo < 100) return "9";
        if (respo < 300) return "81";
        return "243";
    },

    // ========================================================
    // Router-Logik (RIR / 3hoch3 / 3o3)
    // ========================================================
    _router(respo) {
        if (respo < 100) return this.router.kubik;
        if (respo < 200) return this.router.rir;
        if (respo < 300) return this.router.kubik;
        return this.router.orbit;
    }
};

// ============================================================
// READY SIGNAL
// ============================================================

console.log("iki1uc API bereit · api.index.js geladen");
import DirectV from "./DirectV.js";

export const API = {
    ...
    directV: new DirectV(),
    ...
};

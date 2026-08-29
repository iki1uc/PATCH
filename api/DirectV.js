// ============================================================
// iki1uc · DirectV VECTOR ROUTER
// Höchster Vektor-Kern: CPU SIMD + GPU + NC-Vektoren
// ============================================================

import XyX from "./XyX.js";          // Vektor-Basis
import Dreihoch3 from "./3hoch3.js"; // Kubik-Router
import RIR from "./RIR.Core";        // Linear-Router
import Core81 from "./81.js";        // Continuum
import Core243 from "./243.js";      // Tiefe

export class DirectV {

    constructor() {
        this.vectorCore = new XyX();
        this.cubeCore   = new Dreihoch3();
        this.linearCore = new RIR();
        this.continuum  = new Core81();
        this.depth      = new Core243();
    }

    // ========================================================
    // Haupt-Router
    // ========================================================
    route(respo, zone, vec) {

        const path = this._selectPath(respo);
        const core = this._selectCore(path);

        const result = core.run
            ? core.run(zone, respo, vec)
            : core.route(zone, respo, vec);

        return {
            directV: true,
            respo,
            zone,
            vec,
            path,
            core: core.constructor.name,
            result
        };
    }

    // ========================================================
    // Pfadwahl nach Respo
    // ========================================================
    _selectPath(respo) {

        if (respo < 100) return "vector";     // MMX / SSE1
        if (respo < 200) return "linear";     // SSE2 / NLP/NPP
        if (respo < 300) return "cube";       // SSE3 / AVX
        if (respo < 500) return "continuum";  // AVX2 / GPU
        return "depth";                       // DirectV / TIPRP
    }

    // ========================================================
    // Core-Zuordnung
    // ========================================================
    _selectCore(path) {

        switch(path) {
            case "vector":    return this.vectorCore;
            case "linear":    return this.linearCore;
            case "cube":      return this.cubeCore;
            case "continuum": return this.continuum;
            case "depth":     return this.depth;
        }
    }
}

// ============================================================
// READY SIGNAL
// ============================================================

console.log("DirectV Vektor-Router geladen");

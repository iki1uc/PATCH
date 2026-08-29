🌀 iki1uc · PATCH · README
1. Überblick
PATCH ist der System‑Layer des iki1uc‑Frameworks.
Er verbindet DirectV, NC, Rolle, Matrix und Kernel zu einem stabilen Ausführungs‑ und Routing‑System.

PATCH ist nicht PQ, nicht Dispatcher, nicht Mind —
PATCH ist der operative Kern, der die Systeme verbindet.

2. PATCH‑ID
Der PATCH‑Layer besitzt eine eigene Identität:

Code
ID.MODE     = PATCH
ID.CORE     = 512
ID.ROLE     = PATCH‑Root
ID.STATE    = stabil
ID.READY    = 100%
ID.LINK     = lokal
ID.RUNTIME  = DirectV + NC + Rolle
ID.MATRIX   = 81 / 128 / 256 / 512
ID.TMP      = aktiv
ID.ROOMS    = X · Y · 81 · B
ID.SYS      = HDF / IN / OUT / SCALE
ID.NC       = core · vector · tmp · respo · stable
ID.API      = aktiv
ID.KERNEL   = aktiv
ID.WHIRL    = WHIRL_SYS
Dieser Block ersetzt den alten PQ‑Block vollständig.

3. Struktur des Repos
API‑Layer
KIT.js

RIR.Core

XyX.js

Matrix‑Layer
matrix.81

matrix.128

matrix.256

matrix.512

NC‑Layer
nc.core

nc.vector

nc.tmp

nc.respo

nc.stable

Rolle‑Layer
Execution‑Loops

State‑Machine

tmp‑Zonen

Kernel‑Layer
Raum‑Krümmung

Pipeline‑Routing

Slip‑Mechanik

Rooms
X.room

Y.room

81.room

B.room

System
sys.hdf

sys.in

sys.out

sys.scale

4. Zweck von PATCH
PATCH ist der operative Knotenpunkt zwischen:

DirectV (Vektor‑Router)

NC (Intelligenz‑Layer)

Rolle (Execution‑Engine)

Kernel (Raum‑Krümmung)

Matrix (Daten‑Tiefe)

Rooms (Zonen‑Routing)

PATCH sorgt dafür, dass alle Systeme synchron, stabil und lokal laufen.

5. PATCH‑Runtime
Die Runtime besteht aus drei Hauptkomponenten:

DirectV – Routing & Vektorisierung

NC – Intelligenz, Tiefe, Respo

Rolle – Ausführung, Loops, State‑Machine

Diese drei bilden zusammen die PATCH‑Runtime.

6. PATCH‑Matrix
PATCH arbeitet mit vier Matrix‑Stufen:

Stufe	Bedeutung
81	Raum‑Raster
128	Übergangs‑Matrix
256	Kanal‑Matrix
512	System‑Matrix (CORE)


7. PATCH‑Whirl
PATCH verwendet WHIRL_SYS, nicht WHIRL_PQ.

WHIRL_SYS ist der System‑Wirbel für:

Routing

Synchronisation

tmp‑Zonen

Matrix‑Wechsel

8. PATCH‑Zustand
PATCH läuft standardmäßig im Zustand:

Code
STATE = stabil
READY = 100%
LINK  = lokal
9. PATCH‑Startpunkt
Der Einstiegspunkt ist:

index.html

oder ID.html (System‑Identität)

10. Mini‑Essenz
✔ PATCH ist der operative iki1uc‑Layer
✔ ersetzt PQ vollständig
✔ nutzt DirectV + NC + Rolle
✔ CORE = 512
✔ MATRIX = 81/128/256/512
✔ WHIRL_SYS statt WHIRL_PQ
✔ stabil, lokal, vollständig

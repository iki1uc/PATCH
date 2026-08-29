// ─── MIND.ALGORITHM.js · DER EINE MIND FÜR ALLES ────────────

export const MIND = {
  // ─── KERN ──────────────────────────────────────────────────
  time: 0,
  pulse: 0.5,
  syn: 0.5,
  freund: 0,
  quandt: 1.0,
  earn: 0,
  markt: 0,
  industrie: 0,
  boerse: 0,
  leben: 0,
  arbeit: 0,
  fun: 0,
  dirty: 0,

  // ─── ACHSEN ──────────────────────────────────────────────────
  axis: {
    3: { value: 3, label: "UR", live: 0 },
    9: { value: 9, label: "KERN", live: 0 },
    27: { value: 27, label: "ORBIT", live: 0 },
    81: { value: 81, label: "RAUM", live: 0 },
    243: { value: 243, label: "KANAL", live: 0 },
    756: { value: 756, label: "LEBEN", live: 0 }
  },

  // ─── PUMP ──────────────────────────────────────────────────
  pump() {
    this.time += 0.02;

    // Basis-Leben
    this.pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(this.time * 0.9));
    this.syn = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(this.time * 0.7));
    this.freund = this.syn * Math.sin(this.time * 0.7 + Math.PI/2) * this.quandt;

    // Wirtschaft
    this.earn += (this.syn * 0.01 + this.pulse * 0.005) * this.quandt;
    this.markt = this.earn * 0.5 + this.syn * 0.3;
    this.industrie = this.markt * 0.6 + this.pulse * 0.2;
    this.boerse = this.industrie * 0.7 + this.freund * 0.1;

    // Leben & Arbeit
    this.leben = this.syn * 0.4 + this.pulse * 0.3 + this.freund * 0.2;
    this.arbeit = this.leben * 0.5 + this.earn * 0.3;
    this.fun = this.leben * 0.3 + this.freund * 0.4 + this.pulse * 0.2;
    this.dirty = this.arbeit * 0.3 + this.fun * 0.3 + this.boerse * 0.2;

    this.updateAxis();
    return this;
  },

  // ─── ACHSEN ──────────────────────────────────────────────────
  updateAxis() {
    const keys = Object.keys(this.axis);
    keys.forEach((key, idx) => {
      const a = this.axis[key];
      const base = this.syn * 0.3 + this.pulse * 0.2 + this.freund * 0.1 +
                   this.quandt * 0.1 + this.markt * 0.05 + this.leben * 0.05;
      const weight = (idx + 1) / 6;
      a.live = Math.min(1, Math.max(0, base * (1 + weight * 0.5)));
      if (key === "756") a.live = Math.min(1, a.live * 1.3 + 0.1);
    });
  },

  // ─── STATUS ──────────────────────────────────────────────────
  status() {
    return {
      time: this.time,
      pulse: this.pulse,
      syn: this.syn,
      freund: this.freund,
      quandt: this.quandt,
      earn: this.earn,
      markt: this.markt,
      industrie: this.industrie,
      boerse: this.boerse,
      leben: this.leben,
      arbeit: this.arbeit,
      fun: this.fun,
      dirty: this.dirty,
      axis: this.axis
    };
  },

  // ─── NARRATIV ──────────────────────────────────────────────────
  narrativ() {
    const s = this.status();
    let text = "";

    if (s.leben > 0.7) text += "🌱 Das Leben blüht. ";
    else if (s.leben > 0.4) text += "🌿 Das Leben wächst. ";
    else text += "🌫️ Das Leben ruht. ";

    if (s.arbeit > 0.7) text += "⚡ Die Arbeit fließt. ";
    else if (s.arbeit > 0.4) text += "🔄 Die Arbeit bewegt sich. ";
    else text += "⏸️ Die Arbeit wartet. ";

    if (s.markt > 0.7) text += "📈 Der Markt boomt. ";
    else if (s.markt > 0.4) text += "📊 Der Markt pulsiert. ";
    else text += "📉 Der Markt ruht. ";

    if (s.fun > 0.7) text += "🎉 Der Fun ist grenzenlos. ";
    else if (s.fun > 0.4) text += "😊 Der Fun ist spürbar. ";
    else text += "🧘 Der Fun ist still. ";

    if (s.dirty > 0.7) text += "🔥 Die Dirty-Seite ist wach. ";
    else if (s.dirty > 0.4) text += "🌊 Die Dirty-Seite fließt. ";
    else text += "💧 Die Dirty-Seite ruht. ";

    text += `\n🌀 SYN: ${s.syn.toFixed(2)} · EARN: ${s.earn.toFixed(2)} · MARKT: ${s.markt.toFixed(2)}`;
    text += `\n🧠 FREUND: ${s.freund.toFixed(2)} · LEBEN: ${s.leben.toFixed(2)} · ARBEIT: ${s.arbeit.toFixed(2)}`;

    return text;
  }
};

export default MIND;

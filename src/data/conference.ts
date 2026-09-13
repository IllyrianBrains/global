export const conference = {
  name: 'Global III',
  city: 'Tiranë',
  country: 'AL',
  dates: '18-20 Shtator 2026',
  tagline: "Zhvillim në karrierë, integrim më i lehtë dhe miqësi që i qëndrojnë kohës — të gjitha brenda një komuniteti që flet gjuhën tënde.",
  description:
    'Tri ditë me ide, bashkëpunim dhe komunitet në rrjetin Illyrian Brains — një mbrëmje mirëseardhjeje, takime mes anëtarëve dhe një konferencë për çdo fushë.',
  registrationUrl: '#register',
};

export const workshops = [
  { time: '10:00–10:45', room: 'Salla kryesore', title: 'Projektet e Illyrian Brains', type: 'IB-Projekte', text: 'Një përmbledhje e projekteve kryesore të rrjetit — nga ku nisën te ku janë sot dhe si mund të kontribuojë komuniteti.', agenda: ['Mentoring', 'Atlas', 'Heritage'], speaker: null, break: false },
  { time: '10:45–11:30', room: 'Salla kryesore', title: 'Siguria nga zjarri në ndërtesa banimi', type: 'IB-Arch Eng Construction', text: 'Një krahasim praktik i standardeve dhe masave të sigurisë nga zjarri në ndërtesat e banimit, mes Mbretërisë së Bashkuar dhe Shqipërisë.', agenda: ['Standardet në Mbretërinë e Bashkuar', 'Situata në Shqipëri', 'Praktika dhe rekomandime'], speaker: { name: 'Klaudia Meta', initials: 'KM', linkedin: '' }, break: '15 min' },
  { time: '11:45–12:30', room: 'Salla kryesore', title: 'Lightning Talks', type: 'IB-Tech', text: 'Tri prezantime të shkurtra nga profesionistë të teknologjisë në rrjetin IB, të ndjekura nga pyetje dhe biseda.', agenda: ['Setting up a homelab — Dorian Osmani', 'Open Data dhe Open-Source — Doren Calliku', 'Inteligjenca artificiale — Për t’u konfirmuar'], speaker: null, break: false },
  { time: '12:30–13:30', room: 'Salla kryesore', title: 'Natyra, trashëgimia dhe diaspora', type: 'Ligjëratë', text: 'Një bisedë mbi marrëdhënien mes natyrës, përvojës së diasporës dhe formave të protestës e angazhimit qytetar.', agenda: ['Natyra dhe hapësira publike', 'Perspektiva e diasporës', 'Protesta dhe angazhimi qytetar'], speaker: null, break: false }
];

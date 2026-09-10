export const conference = {
  name: 'Global III',
  city: 'Tiranë',
  country: 'AL',
  dates: '18-20 Shtator 2026',
  tagline: "Zhvillim në karrierë, integrim më i lehtë dhe miqësi që i qëndrojnë kohës — të gjitha brenda një komuniteti që flet gjuhën tënde.",
  description:
    'Tri ditë me ide, bashkëpunim dhe komunitet në rrjetin Illyrian Brains — një mbrëmje mirëseardhjeje, takime mes anëtarëve dhe një konferencë për çdo fushë.',
  registrationUrl: '#register',
  heroImage: '/assets/hero-placeholder.svg',
};

export const program = [
  {
    day: 'E premte, 18 Shtator',
    label: 'Mirëseardhja',
    events: [
      {
        time: '19:00',
        title: 'Mbrëmje me pjesëtarë të rrjetit',
        meta: 'Një mbrëmje e qetë për t’u njohur, rilidhur dhe për të nisur fundjavën së bashku.'
      }
    ]
  },
  {
    day: 'E shtunë, 19 Shtator',
    label: 'Connect · Inspire · Celebrate',
    events: [
      { time: '10:00', title: 'Forumi i komunitetit', meta: 'Përditësime nga bordi, qytetet dhe iniciativat e rrjetit.' },
      { time: '13:00', title: 'Drekë së bashku', meta: 'Një pushim i përbashkët për biseda dhe lidhje të reja.' },
      { time: '18:00', title: 'Zhvillimi i komuniteteve shqiptare', meta: 'Bisedë me Illyrian Brains, Germin dhe përfaqësues nga diaspora.' },
      { time: '19:19', title: 'Takimi i anëtarëve të IB Global', meta: 'Darkë, njohje, diskutime, muzikë dhe energji e mirë në Oborri.' }
    ]
  },
  {
    day: 'E diel, 20 Shtator',
    label: 'Konferenca globale',
    events: [
      { time: '10:00', title: 'Punëtoritë dhe takimet', meta: 'Seanca praktike në grupe të vogla, me hapësirë për pyetje dhe bashkëpunim.' }
    ]
  }
];

export const speakers = [
  { name: 'Endri Basha', role: 'Themelues · Illyrian Brains', initials: 'EB' },
  { name: 'Për t’u konfirmuar', role: 'Germin', initials: 'GE' },
  { name: 'Për t’u konfirmuar', role: 'Diaspora', initials: 'DI' }
];

export const workshops = [
  { time: '10:00–10:45', room: 'Salla kryesore', title: 'Projektet e Illyrian Brains', type: 'IB-Projekte', text: 'Një përmbledhje e projekteve kryesore të rrjetit — nga ku nisën te ku janë sot dhe si mund të kontribuojë komuniteti.', agenda: ['Mentoring', 'Atlas', 'Heritage'], speaker: null, break: false },
  { time: '10:45–11:30', room: 'Salla kryesore', title: 'Siguria nga zjarri në ndërtesa banimi', type: 'IB-Arch Eng Construction', text: 'Një krahasim praktik i standardeve dhe masave të sigurisë nga zjarri në ndërtesat e banimit, mes Mbretërisë së Bashkuar dhe Shqipërisë.', agenda: ['Standardet në Mbretёrinё e Bashkuar', 'Situata në Shqipёri', 'Praktika dhe rekomandime'], speaker: { name: 'Klaudia Meta', initials: 'KM', linkedin: '' }, break: '15 min' },
  { time: '11:45–12:30', room: 'Salla kryesore', title: 'IB-Tech Meetup', type: 'IB-Tech', text: 'Tri prezantime të shkurtra nga profesionistë të teknologjisë në rrjetin IB, të ndjekura nga pyetje dhe biseda.', agenda: ['Setting up a homelab — Dorian Osmani', 'Open Data dhe Open-Source — Doren Calliku', 'Inteligjenca artificiale — Për t’u konfirmuar'], speaker: null, break: false },
  { time: '12:30–13:30', room: 'Salla kryesore', title: 'Natyra, trashëgimia dhe diaspora', type: 'Ligjëratë', text: 'Një bisedë mbi marrëdhënien mes natyrës, përvojës së diasporës dhe formave të protestës e angazhimit qytetar.', agenda: ['Natyra dhe hapësira publike', 'Perspektiva e diasporës', 'Protesta dhe angazhimi qytetar'], speaker: null, break: false }
];

export const attendees: { name: string; profession: string; city?: string; example?: boolean }[] = [
  { name: 'Ana K.', profession: 'Software Engineer', city: 'Berlin', example: true },
  { name: 'Arben M.', profession: 'Mjek', city: 'London', example: true },
  { name: 'Elira B.', profession: 'Financë & Investime', city: 'New York', example: true }
];

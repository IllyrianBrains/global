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
  { time: '10:00–13:00', title: 'Shpjegueshmëria e vendimeve të IA-së', type: 'Teknologji', text: 'Sesioni trajton mënyrën si kuptohen dhe komunikohen vendimet e sistemeve të inteligjencës artificiale.', agenda: ['Hyrje në temë', 'Raste praktike', 'Diskutim në grup'], speaker: { name: 'Për t’u konfirmuar', initials: '?', linkedin: '' } },
  { time: '10:00–13:00', title: 'IB Shëndetësi — takim profesional', type: 'Shëndetësi', text: 'Një forum pune ku profesionistët shqiptarë të shëndetësisë ndajnë përvoja, sfida dhe mundësi bashkëpunimi.', agenda: ['Prezantimi i pjesëmarrësve', 'Sfidat e përbashkëta', 'Hapat e bashkëpunimit'], speaker: { name: 'Për t’u konfirmuar', initials: '?', linkedin: '' } }
];

export const attendees: { name: string; profession: string; city?: string; example?: boolean }[] = [
  { name: 'Ana K.', profession: 'Software Engineer', city: 'Berlin', example: true },
  { name: 'Arben M.', profession: 'Mjek', city: 'London', example: true },
  { name: 'Elira B.', profession: 'Financë & Investime', city: 'New York', example: true }
];

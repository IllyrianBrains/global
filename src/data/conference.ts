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

export const natureSpeakers = [
  { name: 'Besjana Guri', role: 'Drejtuese e shoqatës LUMI', topic: 'Nga fushata «Save the Blue Heart of Europe» te shpallja e Vjosës si Park Kombëtar i Lumit të Egër në mars 2023 dhe Çmimi Goldman për Mjedisin 2025 — një rrugëtim mbi si komunitetet, gratë dhe të rinjtë bëhen forca kryesore për mbrojtjen e lumenjve. Sot drejton Qendrën LUMI, themeluar për ta çuar këtë punë më tej.', initials: 'BG', linkedin: 'https://www.linkedin.com/in/besjana-guri-0049a230/' },
  { name: 'Gëzim Shuli', role: 'Drejtor Ekzekutiv i AlbNatyra', topic: 'Përvoja e AlbNatyra në Elbasan e Librazhd: nga monitorimi i faunës dhe mbrojtja e habitateve të specieve të rrezikuara te zhvillimi i turizmit të natyrës dhe edukimi mjedisor. Si ruajtja e biodiversitetit dhe angazhimi i të rinjve krijojnë mundësi reale për komunitetet lokale.', initials: 'GS', linkedin: 'https://www.linkedin.com/in/gezim-shuli-6308b1156/' },
  { name: 'Oljam Dervishi', role: 'Drejtues i shoqatës RESU', topic: 'Nga inxhinieria agro-mjedisore te themelimi i RESU në 2022, së bashku me katër të rinj të tjerë të rikthyer në Shqipëri: përmes programit «River of People» punon për mbrojtjen e lumenjve dhe fuqizimin e komuniteteve. Kontribut i vlerësuar në 2025 me çmimin «Green Activist».', initials: 'OD', linkedin: 'https://www.linkedin.com/in/oljam-dervishi/' },
  { name: 'Doren Calliku', role: 'Kryetar i Bordit, Illyrian Brains', topic: 'Open data dhe open-source si infrastrukturë e përbashkët: si OJF-të që punojnë drejt qëllimeve të njëjta mund të ndajnë të dhëna dhe mjete teknologjike, duke e bërë punën e secilit organizëm më efikase dhe me ndikim më të madh.', initials: 'DC', linkedin: 'https://www.linkedin.com/in/pomodoren/' },
];

export const workshops = [
  { time: '10:00–10:45', room: 'Salla kryesore', title: 'Projektet e Illyrian Brains', type: 'IB-Projekte', text: 'Një përmbledhje e projekteve kryesore të rrjetit — nga ku nisën te ku janë sot dhe si mund të kontribuojë komuniteti.', agenda: ['Mentoring', 'Atlas', 'Heritage'], speaker: null, break: false },
  { time: '10:45–11:30', room: 'Salla kryesore', title: 'Siguria nga zjarri në ndërtesa banimi', type: 'IB-Arch Eng Construction', text: 'Një krahasim praktik i standardeve dhe masave të sigurisë nga zjarri në ndërtesat e banimit, mes Mbretërisë së Bashkuar dhe Shqipërisë.', agenda: ['Standardet në Mbretërinë e Bashkuar', 'Situata në Shqipëri', 'Praktika dhe rekomandime'], speaker: { name: 'Klaudia Meta', initials: 'KM', linkedin: '' }, break: '15 min' },
  { time: '11:45–12:30', room: 'Salla kryesore', title: 'Lightning Talks', type: 'IB-Tech', text: 'Tri prezantime të shkurtra nga profesionistë të teknologjisë në rrjetin IB, të ndjekura nga pyetje dhe biseda.', agenda: ['Setting up a homelab — Dorian Osmani', 'Building an Exposure Model for Albania — Doren Calliku', 'Inteligjenca artificiale — Për t’u konfirmuar'], speaker: null, break: false },
  { time: '12:30–13:30', room: 'Salla kryesore', title: 'Natyra, trashëgimia dhe diaspora', type: 'Ligjëratë', text: 'Një bisedë mbi marrëdhënien mes natyrës, përvojës së diasporës dhe formave të protestës e angazhimit qytetar.', agenda: [], speaker: null, speakers: natureSpeakers, image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Monastery%20of%20Zv%C3%ABrnec,%20Albania.jpg?width=1000', imageAlt: 'Manastiri i Zvërnecit në Lagunën e Nartës', imageCredit: 'Pudelek (Marcin Szala) · CC BY-SA 3.0', break: false, open: true }
];

export const networkingGuests = [
  { name: 'Leuarta Gjidoda', role: 'Presidente e ZASMŽ dhe Balkiva', topic: 'Diaspora shqiptare në Kroaci: si ruhet identiteti ndër breza, si ndërtohen komunitete larg vendit të origjinës dhe si kthehet diaspora në urë mes kulturës, profesionistëve dhe rajonit.', initials: 'LG', linkedin: 'https://www.linkedin.com/in/leuarta-gjidoda-35281335/' },
  { name: 'Endri Ndoni', role: 'Managing Partner, AIMS International Albania & Kosovo · Themelues i Toastmasters Tirana', topic: 'Fuqia e komunikimit dhe e komunitetit: çfarë mund të mësojmë nga Toastmasters dhe një rrjet global me mbi 100 vjet histori për të ndërtuar rrjete më të forta e me ndikim.', initials: 'EN', linkedin: 'https://www.linkedin.com/in/endri-ndoni/' },
  { name: 'Shpend Lila', role: 'Manager, Innovation Centre Kosovo', topic: 'Çfarë roli mund të luajmë ne — si profesionistë, rrjet dhe diasporë — për ta kthyer dijen, eksperiencën dhe lidhjet në kontribut konkret për zhvillimin teknologjik të rajonit.', initials: 'SL', linkedin: 'https://www.linkedin.com/in/shpendlila/' },
  { name: 'Endri Basha', role: 'Themelues i Illyrian Brains · Sociolog · Kontribues për IB Milano', topic: 'Tre ditë për të takuar njerëz nga Shqipëria, Kosova dhe diaspora, për të ndarë ide e histori dhe për të folur jo vetëm për atë që jemi, por për atë që mund të ndërtojmë së bashku. Unë dhe i gjithë ekipi i Illyrian Brains ju presim në Tiranë!', initials: 'EB', linkedin: 'https://www.linkedin.com/in/endribasha/' },
];

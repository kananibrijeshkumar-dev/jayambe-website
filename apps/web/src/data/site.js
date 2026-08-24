export const company = {
  name: 'Jay Shree Ambe Food Machinery',
  tagline: 'Direct Manufacturer of Double Stage Pulverizer, Atta, Flour Mill & Masala Grinding Machinery',
  experience: '30+ Years of Manufacturing Experience',
  address:
    'Plot No. 1, Panchamrut Industrial Park-4, Dhamatvan-Vanch Road, Dhamatvan Branch Post Office, Dhamatvan, Ahmedabad, Gujarat 382435, India',
  phone: '+91 7201890711',
  phoneHref: 'tel:+917201890711',
  whatsapp: '917201890711',
  email: 'supportteam@jayambefoodmachinery.com',
  mapEmbed:
    'https://maps.google.com/maps?q=22.9541651,72.7174421&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapDirections:
    'https://www.google.com/maps/dir/22.9526274,72.7215382/Panchamrut+4+industrial+Park,+XP38%2BMX6,+Daskroi,+Nandej,+Gujarat+382435/@22.954165,72.7126774,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e63002a9f29c5:0xe129ed7f80471bbe!2m2!1d72.7174421!2d22.9541651?entry=ttu',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61591655811119',
    instagram: '#',
    youtube: 'https://www.youtube.com/@jayambefoodmachinery',
  },
};

export const waLink = (message) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message || `Hello ${company.name}, I would like to enquire about your machines.`,
  )}`;

const AOR = 'Available on request';

export const categories = [
  { slug: 'atta-chakki', name: 'Atta Chakki', description: 'Machines specialized for wheat and flour grinding.' },
  { slug: 'atta-chakki-with-cyclone', name: 'Atta Chakki with Cyclone', description: 'Flour grinding machines equipped with cyclone separators for dust control.' },
  { slug: 'masala-grinding', name: 'Masala Grinding', description: 'Machines designed for spice and masala grinding.' },
  { slug: 'masala-grinding-with-cyclone', name: 'Masala Grinding with Cyclone', description: 'Spice grinding lines equipped with cyclone separators for dust-free operation.' },
  { slug: 'haldi-grinding', name: 'Haldi Grinding', description: 'Heavy-duty pulverizers suitable for turmeric and hard spices.' },
  { slug: 'haldi-grinding-with-cyclone', name: 'Haldi Grinding with Cyclone', description: 'Turmeric grinding machines with attached cyclone for efficient collection.' },
  { slug: 'chilly-grinding-machine', name: 'Chilly Grinding Machine', description: 'Specialized pulverizers built to grind whole dried chillies into fine powder.' },
  { slug: 'chilly-grinding-with-cyclone', name: 'Chilly Grinding with Cyclone', description: 'Chilly grinding lines featuring cyclone collection to completely eliminate airborne spice dust.' }
];

const baseMachines = [
  {
    slug: '5-hp-double-stage-pulverizer-three-phase',
    name: 'Flourmill 5HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-01',
    model: '5HP Double Stage Pulverizer Machine',
    power: '5 HP',
    phase: 'Three Phase',
    image: '/media/5hp-main.png',
    gallery: ['/media/5hp-main.png', '/media/5hp-sub1.png', '/media/5hp-atta-mill.png'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    description: 'Our 5 HP Double Stage Pulverizer is a two-chamber grinding machine manufactured in-house. Material passes through the first chamber for coarse reduction and then through the second chamber for final fine grinding, which helps hold a consistent output mesh in a single pass. It runs at 1440 RPM and features a heavy drum structure.',
    cardSpecs: [['Power', '5 HP'], ['Phase', 'Three Phase'], ['Output', '35-50 KG/HR'], ['Weight', '140 KG']],
    specs: [['Model', '5HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '140 KG'], ['Motor Weight', '30 KG'], ['Grinding Chamber', '10.5" x 6" & 8.5" x 3.5" Inch (Dual Chamber)'], ['Hopper Capacity', '15-20 KG'], ['No of Jali', '6 NOS (0 to 5)'], ['Motor & Machine Pulley', '8 Inch / 3 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '5HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '35-50 KG/HR Average Capacity']],
    features: ['Two-stage grinding for a consistent fine mesh in one pass', 'Dual chamber (10.5" x 6" & 8.5" x 3.5") design', '6308 SKF Bearing with Double Groove V-Belt Drive', 'Manufactured, assembled and trial run at our own unit', 'Suitable for Wheat, Juwar, Maize, Rawo, Besan, Chilies, Black Pepper, Turmeric, Coriander'],
    applications: ['Masala & spices', 'Besan & pulses', 'Turmeric & chilli', 'Dry herbs', 'Grains'],
  },
  {
    slug: '7-5hp-double-stage-pulverizer',
    name: 'Flourmill 7.5HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-02',
    model: '7.5HP Double Stage Pulverizer Machine',
    power: '7.5 HP',
    phase: 'Three Phase',
    image: '/media/7-5hp-main.jpg',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/7-5hp-main.jpg', '/media/10hp-add1.png', '/media/10hp-add2.png'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'Mid-range double stage pulverizer for commercial spice and food grinding units producing 70-150KG/HR.',
    description: 'This machine is our workhorse for commercial spice and food grinding units. Available in 7.5HP variant. A heavier rotor assembly and larger 13"x8" and 10"x4" dual grinding chambers allow continuous running through the day, while the interchangeable sieve arrangement lets the operator change the output mesh according to the product being processed.',
    cardSpecs: [['Power', '7.5 HP'], ['Phase', 'Three Phase'], ['Output', '70-150 KG/HR'], ['Weight', '210 KG']],
    specs: [['Model', '7.5HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '7.5HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Heavy rotor and beater assembly for continuous commercial duty', 'Dual chamber (13"x8" & 10"x4") heavy drum structure', 'Balanced drive with 10" / 4" double groove pulleys for reduced vibration', 'Straightforward layout for quick cleaning between products', 'Suitable for Wheat, Juwar, Maize, Rawo, Besan, Chilies, Black Pepper, Turmeric, Coriander'],
    applications: ['Masala units', 'Chilli & coriander', 'Food processing', 'Cattle feed', 'Chemicals (dry)'],
  },
  {
    slug: '10hp-double-stage-pulverizer',
    name: 'Flourmill 10HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-03',
    model: '10HP Double Stage Pulverizer Machine',
    power: '10 HP',
    phase: 'Three Phase',
    image: '/media/10hp-main.png',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/10hp-main.png', '/media/10hp-add1.png', '/media/10hp-add2.png'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'Mid-range double stage pulverizer for commercial spice and food grinding units producing 70-150KG/HR.',
    description: 'This machine is our workhorse for commercial spice and food grinding units. Available in 10HP variant. A heavier rotor assembly and larger 13"x8" and 10"x4" dual grinding chambers allow continuous running through the day, while the interchangeable sieve arrangement lets the operator change the output mesh according to the product being processed.',
    cardSpecs: [['Power', '10 HP'], ['Phase', 'Three Phase'], ['Output', '70-150 KG/HR'], ['Weight', '210 KG']],
    specs: [['Model', '10HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '10HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Heavy rotor and beater assembly for continuous commercial duty', 'Dual chamber (13"x8" & 10"x4") heavy drum structure', 'Balanced drive with 10" / 4" double groove pulleys for reduced vibration', 'Straightforward layout for quick cleaning between products', 'Suitable for Wheat, Juwar, Maize, Rawo, Besan, Chilies, Black Pepper, Turmeric, Coriander'],
    applications: ['Masala units', 'Chilli & coriander', 'Food processing', 'Cattle feed', 'Chemicals (dry)'],
  },
  {
    slug: '15hp-double-stage-pulverizer',
    name: 'Flourmill 15HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-04',
    model: '15HP Double Stage Pulverizer Machine',
    power: '15 HP',
    phase: 'Three Phase',
    image: '/media/10hp-main.png',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/10hp-main.png', '/media/10hp-add1.png', '/media/10hp-add2.png'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'Mid-range double stage pulverizer for commercial spice and food grinding units producing 70-150KG/HR.',
    description: 'This machine is our workhorse for commercial spice and food grinding units. Available in 15HP variant. A heavier rotor assembly and larger 13"x8" and 10"x4" dual grinding chambers allow continuous running through the day, while the interchangeable sieve arrangement lets the operator change the output mesh according to the product being processed.',
    cardSpecs: [['Power', '15 HP'], ['Phase', 'Three Phase'], ['Output', '70-150 KG/HR'], ['Weight', '210 KG']],
    specs: [['Model', '15HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '15HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Heavy rotor and beater assembly for continuous commercial duty', 'Dual chamber (13"x8" & 10"x4") heavy drum structure', 'Balanced drive with 10" / 4" double groove pulleys for reduced vibration', 'Straightforward layout for quick cleaning between products', 'Suitable for Wheat, Juwar, Maize, Rawo, Besan, Chilies, Black Pepper, Turmeric, Coriander'],
    applications: ['Masala units', 'Chilli & coriander', 'Food processing', 'Cattle feed', 'Chemicals (dry)'],
  },
  {
    slug: '20hp-double-stage-pulverizer',
    name: 'Flourmill 20HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-05',
    model: '20HP Double Stage Pulverizer Machine',
    power: '20 HP',
    phase: 'Three Phase',
    image: '/media/20-25-30hp-new.jpg',
    gallery: ['/media/20-25-30hp-new.jpg'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'High capacity double stage pulverizer for large masala and food grinding plants outputting 180-250KG/HR.',
    description: 'The 20 HP Double Stage Pulverizer is our large-capacity machine for established processing plants. It is fabricated on a heavy drum structure with a mild steel body to take the load of continuous production. It features massive 19.5"x6.8" and 13.5"x3.8" grinding chambers, outputting 180-250 KG/HR on a 14,400 RPM (equiv) blade system.',
    cardSpecs: [['Power', '20 HP'], ['Output', '180–250 KG/HR'], ['Weight', '310 KG'], ['Type', 'Double Stage']],
    specs: [['Model', '20HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '20HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Heavy drum structure on mild steel body (310 KG total machine weight)', 'Dual chamber grinding (19.5" x 6.8" & 13.5" x 3.8") for uniform fine mesh', '6 + 4 blades with 6 jali arrangement for controlled output', 'SKF 63012 bearings with double groove V-belt (C-79) drive', 'Massive 180–250 KG/hour output for industrial applications', '35–40 KG hopper capacity for extended batch running'],
    applications: ['Large masala plants', 'Food processing plants', 'Contract grinding', 'Export units', 'Spice packers'],
  },
  {
    slug: '25hp-double-stage-pulverizer',
    name: 'Flourmill 25HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-06',
    model: '25HP Double Stage Pulverizer Machine',
    power: '25 HP',
    phase: 'Three Phase',
    image: '/media/20-25-30hp-new.jpg',
    gallery: ['/media/20-25-30hp-new.jpg'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'High capacity double stage pulverizer for large masala and food grinding plants outputting 180-250KG/HR.',
    description: 'The 25 HP Double Stage Pulverizer is our large-capacity machine for established processing plants. It is fabricated on a heavy drum structure with a mild steel body to take the load of continuous production. It features massive 19.5"x6.8" and 13.5"x3.8" grinding chambers, outputting 180-250 KG/HR on a 14,400 RPM (equiv) blade system.',
    cardSpecs: [['Power', '25 HP'], ['Output', '180–250 KG/HR'], ['Weight', '310 KG'], ['Type', 'Double Stage']],
    specs: [['Model', '25HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '25HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Heavy drum structure on mild steel body (310 KG total machine weight)', 'Dual chamber grinding (19.5" x 6.8" & 13.5" x 3.8") for uniform fine mesh', '6 + 4 blades with 6 jali arrangement for controlled output', 'SKF 63012 bearings with double groove V-belt (C-79) drive', 'Massive 180–250 KG/hour output for industrial applications', '35–40 KG hopper capacity for extended batch running'],
    applications: ['Large masala plants', 'Food processing plants', 'Contract grinding', 'Export units', 'Spice packers'],
  },
  {
    slug: '30hp-double-stage-pulverizer',
    name: 'Flourmill 30HP Double Stage Pulverizer Machine',
    subtitle: 'Three Phase | Model No: JADS-07',
    model: '30HP Double Stage Pulverizer Machine',
    power: '30 HP',
    phase: 'Three Phase',
    image: '/media/20-25-30hp-new.jpg',
    gallery: ['/media/20-25-30hp-new.jpg'],
    categories: ['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'],
    short: 'High capacity double stage pulverizer for large masala and food grinding plants outputting 180-250KG/HR.',
    description: 'The 30 HP Double Stage Pulverizer is our large-capacity machine for established processing plants. It is fabricated on a heavy drum structure with a mild steel body to take the load of continuous production. It features massive 19.5"x6.8" and 13.5"x3.8" grinding chambers, outputting 180-250 KG/HR on a 14,400 RPM (equiv) blade system.',
    cardSpecs: [['Power', '30 HP'], ['Output', '180–250 KG/HR'], ['Weight', '310 KG'], ['Type', 'Double Stage']],
    specs: [['Model', '30HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['HP Phase-Rated Power', '30HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Heavy drum structure on mild steel body (310 KG total machine weight)', 'Dual chamber grinding (19.5" x 6.8" & 13.5" x 3.8") for uniform fine mesh', '6 + 4 blades with 6 jali arrangement for controlled output', 'SKF 63012 bearings with double groove V-belt (C-79) drive', 'Massive 180–250 KG/hour output for industrial applications', '35–40 KG hopper capacity for extended batch running'],
    applications: ['Large masala plants', 'Food processing plants', 'Contract grinding', 'Export units', 'Spice packers'],
  },

  {
    slug: '5-hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 5HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-01',
    model: '5HP Double Stage Pulverizer Machine',
    power: '5 HP',
    phase: 'Three Phase',
    image: '/media/5hp-masala-cyclone.jpg',
    gallery: ['/media/5hp-masala-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 5 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-01'], ['Power', '5 HP'], ['Output', '35-50 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '5HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '140 KG'], ['Motor Weight', '30 KG'], ['Grinding Chamber', '10.5" x 6" & 8.5" x 3.5" Inch (Dual Chamber)'], ['Hopper Capacity', '15-20 KG'], ['No of Jali', '6 NOS (0 to 5)'], ['Motor & Machine Pulley', '8 Inch / 3 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['HP Phase-Rated Power', '5HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '35-50 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '7-5hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 7.5HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-02',
    model: '7.5HP Double Stage Pulverizer Machine',
    power: '7.5 HP',
    phase: 'Three Phase',
    image: '/media/7.5hp-atta-cyclone.jpg',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/7.5hp-atta-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 7.5 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-02'], ['Power', '7.5 HP'], ['Output', '70-150 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '7.5HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['HP Phase-Rated Power', '7.5HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '10hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 10HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-03',
    model: '10HP Double Stage Pulverizer Machine',
    power: '10 HP',
    phase: 'Three Phase',
    image: '/media/10hp-masala-cyclone.jpg',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/10hp-masala-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 10 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-03'], ['Power', '10 HP'], ['Output', '70-150 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '10HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['HP Phase-Rated Power', '10HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '15hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 15HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-03A',
    model: '15HP Double Stage Pulverizer Machine',
    power: '15 HP',
    phase: 'Three Phase',
    image: '/media/15hp-chilly-cyclone.png',
    video: '/media/5hp-video.mp4',
    gallery: ['/media/15hp-chilly-cyclone.png'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 15 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-03A'], ['Power', '15 HP'], ['Output', '70-150 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '15HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '210 KG'], ['Motor Weight', '55 KG'], ['Grinding Chamber', '13" x 8" & 10" x 4" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '25-30 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '10 Inch / 4 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '6308 SKF Belt No - C-69'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['HP Phase-Rated Power', '15HP 1440RPM - Three Phase'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '70-150 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '20hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 20HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-04',
    model: '20HP Double Stage Pulverizer Machine',
    power: '20 HP',
    phase: 'Three Phase',
    image: '/media/20hp-masala-cyclone.jpg',
    gallery: ['/media/20hp-masala-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 20 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-04'], ['Power', '20 HP'], ['Output', '180–250 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '20HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '25hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 25HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-05',
    model: '25HP Double Stage Pulverizer Machine',
    power: '25 HP',
    phase: 'Three Phase',
    image: '/media/25hp-masala-cyclone.jpg',
    gallery: ['/media/25hp-masala-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 25 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-05'], ['Power', '25 HP'], ['Output', '180–250 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '25HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  },
  {
    slug: '30hp-double-stage-pulverizer-with-cyclone',
    name: 'Flourmill 30HP Double Stage Pulverizer Machine With Cyclone',
    subtitle: 'Three Phase | Model No: JADSC-06',
    model: '30HP Double Stage Pulverizer Machine',
    power: '30 HP',
    phase: 'Three Phase',
    image: '/media/30hp-masala-cyclone.jpg',
    gallery: ['/media/30hp-masala-cyclone.jpg'],
    categories: ['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'],
    short: 'Complete high-capacity double stage grinding line with cyclone separator and blower for zero-dust operation.',
    description: 'This is our 30 HP Double Stage Pulverizer supplied as a complete grinding line with a cyclone separator, ducting, and a 2HP blower. The cyclone separates the ground material from the air stream so that dust is strictly controlled—commonly asked for by premium masala and food plants working in enclosed premises.',
    cardSpecs: [['Model', 'JADSC-06'], ['Power', '30 HP'], ['Output', '180–250 KG/HR'], ['Cyclone', 'Attached + 2HP Blower']],
    specs: [['Model', '30HP Double Stage Pulverizer Machine'], ['Product Type', 'Food Pulverizer'], ['Brand', 'Jay Ambe'], ['Body Material', 'Mild Steel'], ['Machine Weight', '310 KG'], ['Motor Weight', '120 KG'], ['Grinding Chamber', '19.5" x 6.8" & 13.5" x 3.8" Inch (Heavy Drum Structure)'], ['Hopper Capacity', '35-40 KG'], ['No of Jali', '6 NOS'], ['Motor & Machine Pulley', '12 Inch / 5 Inch Double Groove V-Belt Pully'], ['Bearing Size & Belt', '63012 SKF Belt No - C-79'], ['Machine Pedestal Oiling', 'Gear Oil - 140NO & Gearease High Tempreture'], ['Blower Motor', 'With Machine Attach Blower 2HP 2800RPM T.P'], ['Total Blades', '6+4 Blade Dual Chamber'], ['Output Capacity', '180-250 KG/HR Average Capacity']],
    features: ['Cyclone separator for controlled dust and neat collection', 'Double stage / dual chamber grinding for uniform fine output', 'Attached 2 HP three phase blower running at 2800 RPM', 'Supplied as a complete line with ducting arrangement', '180-250 KG/HR output capacity for heavy industrial use'],
    applications: ['Masala plants', 'Spice export units', 'Food processing lines', 'Dust-sensitive premises'],
  }
];

export const products = categories.flatMap(category =>
  baseMachines
    .filter(base => base.categories.includes(category.slug))
    .map(base => {
      let finalImage = base.image;
      let finalGallery = base.gallery ? [...base.gallery] : undefined;
      let finalFeatures = [...base.features];

      if (finalGallery) {
        if (!category.slug.includes('atta-chakki')) {
          finalGallery = finalGallery.filter(img => img !== '/media/5hp-atta-mill.png');
        }
        if (base.slug.includes('5-hp-double-stage')) {
          if (category.slug.includes('chilly-grinding')) {
            finalGallery.push('/media/5hp-chilly.png');
          }
          if (category.slug.includes('haldi-grinding')) {
            finalGallery.push('/media/5hp-haldi.png');
          }
        }
        if (base.slug.includes('20hp') || base.slug.includes('25hp') || base.slug.includes('30hp')) {
          if (category.slug.includes('atta-chakki')) {
            finalGallery.push('/media/20hp-atta.png');
            finalGallery.push('/media/20hp-atta-2.png');
          }
        }
        if (category.slug === 'haldi-grinding') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-haldi-pulverizer.jpg';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-haldi-pulverizer.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-haldi-pulverizer.jpg';
          }
          finalGallery = [];
        }

        if (category.slug === 'haldi-grinding-with-cyclone') {
          finalImage = '/media/haldi-cyclone-1.jpg';
          finalGallery.unshift('/media/haldi-cyclone-1.jpg', '/media/haldi-cyclone-2.jpg');
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-haldi-cyclone.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-haldi-cyclone.jpg';
          } else if (base.power === '15 HP') {
            finalImage = '/media/15hp-haldi-cyclone.jpg';
          } else if (base.power === '10 HP') {
            finalImage = '/media/10hp-haldi-cyclone.png';
          } else if (base.power === '7.5 HP') {
            finalImage = '/media/7.5hp-haldi-cyclone.jpg';
          } else if (base.power === '5 HP') {
            finalImage = '/media/5hp-haldi-cyclone.jpg';
          } else {
            finalImage = '/media/haldi-cyclone-1.jpg';
          }
          finalGallery = [];
        }
        if (category.slug === 'atta-chakki') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-normal-pulverizer.png';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-normal-pulverizer.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-normal-pulverizer.jpg';
          }
          finalGallery = [];
        }
        if (category.slug === 'atta-chakki-with-cyclone') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-atta-cyclone.jpg';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-atta-cyclone.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-atta-cyclone.jpg';
          } else if (base.power === '15 HP') {
            finalImage = '/media/15hp-atta-cyclone-v2.jpg';
          } else if (base.power === '10 HP') {
            finalImage = '/media/10hp-atta-cyclone.jpg';
          } else if (base.power === '7.5 HP') {
            finalImage = '/media/7.5hp-atta-cyclone.jpg';
          } else if (base.power === '5 HP') {
            finalImage = '/media/5hp-atta-cyclone.jpg';
          } else {
            finalImage = '/media/atta-chakki-hero.jpg';
          }
          finalGallery = [];
        }

        if (category.slug === 'chilly-grinding-with-cyclone') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-chilly-cyclone.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-chilly-cyclone.jpg';
          } else if (base.power === '15 HP') {
            finalImage = '/media/15hp-chilly-cyclone.png';
          } else if (base.power === '10 HP') {
            finalImage = '/media/10hp-chilly-cyclone.jpg';
          } else if (base.power === '7.5 HP') {
            finalImage = '/media/7.5hp-chilly-cyclone.jpg';
          } else if (base.power === '5 HP') {
            finalImage = '/media/5hp-chilly-cyclone.jpg';
          } else {
            finalImage = '/media/chilly-cyclone-hero.jpg';
          }
          finalGallery = [];
        }
        if (category.slug === 'masala-grinding') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-masala-pulverizer.jpg';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-masala-pulverizer.png';
          } else if (base.power === '20 HP') {
            finalImage = '/media/masala-20hp-unique.jpg';
          }
          finalGallery = [];
        }

        if (category.slug === 'masala-grinding-with-cyclone') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-masala-cyclone.jpg';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-masala-cyclone.jpg';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-masala-cyclone.jpg';
          } else if (base.power === '15 HP') {
            finalImage = '/media/15hp-masala-cyclone.jpg';
          } else if (base.power === '10 HP') {
            finalImage = '/media/10hp-masala-cyclone.jpg';
          } else if (base.power === '5 HP') {
            finalImage = '/media/5hp-masala-cyclone.jpg';
          } else {
            finalImage = '/media/masala-cyclone-hero.jpg';
          }
          finalGallery = [];
        }

        // 1. Remove wheat/jawar images for chilly pulverizers and replace with Mahadev Spices image
        if (category.slug === 'chilly-grinding-machine') {
          if (base.power === '30 HP') {
            finalImage = '/media/30hp-chilly-pulverizer.jpg';
          } else if (base.power === '25 HP') {
            finalImage = '/media/25hp-chilly-pulverizer.png';
          } else if (base.power === '20 HP') {
            finalImage = '/media/20hp-chilly-pulverizer.jpg';
          } else if (base.power === '15 HP') {
            finalImage = '/media/15hp-chilly-pulverizer.jpg';
          }
          finalGallery = [];
        }

        // 2. Fix features list for all chilly categories (remove wheat/jawar)

        if (category.slug.includes('chilly')) {
          finalFeatures = finalFeatures.map(f =>
            f.startsWith('Suitable for Wheat')
              ? 'Specially designed for Chilies, Black Pepper, Turmeric, Coriander and other spices'
              : f
          );
        }
      }
      
      let finalPrice = null;
      if (['atta-chakki', 'masala-grinding', 'haldi-grinding', 'chilly-grinding-machine'].includes(category.slug)) {
        if (base.power === '30 HP') finalPrice = '₹2,05,000';
        else if (base.power === '25 HP') finalPrice = '₹1,95,000';
        else if (base.power === '20 HP') finalPrice = '₹1,80,000';
        else if (base.power === '15 HP') finalPrice = '₹1,25,000';
        else if (base.power === '10 HP') finalPrice = '₹1,10,000';
        else if (base.power === '7.5 HP') finalPrice = '₹99,000';
        else if (base.power === '5 HP') finalPrice = '₹65,000';
      } else if (['atta-chakki-with-cyclone', 'masala-grinding-with-cyclone', 'haldi-grinding-with-cyclone', 'chilly-grinding-with-cyclone'].includes(category.slug)) {
        if (base.power === '30 HP') finalPrice = '₹2,55,000';
        else if (base.power === '25 HP') finalPrice = '₹2,35,000';
        else if (base.power === '20 HP') finalPrice = '₹2,20,000';
        else if (base.power === '15 HP') finalPrice = '₹1,45,000';
        else if (base.power === '10 HP') finalPrice = '₹1,30,000';
        else if (base.power === '7.5 HP') finalPrice = '₹1,25,000';
        else if (base.power === '5 HP') finalPrice = '₹75,000';
      }

      let finalCardSpecs = [...base.cardSpecs];
      let finalSpecs = [...base.specs];

      let newOutput = null;
      if (base.power === '30 HP') newOutput = '250-300 KG/HR';
      else if (base.power === '25 HP') newOutput = '200-250 KG/HR';
      else if (base.power === '20 HP') newOutput = '150-200 KG/HR';
      else if (base.power === '15 HP') newOutput = '100-150 KG/HR';
      else if (base.power === '10 HP') newOutput = '80-100 KG/HR';
      else if (base.power === '7.5 HP') newOutput = '60-80 KG/HR';
      else if (base.power === '5 HP') newOutput = '40-50 KG/HR';

      if (newOutput) {
        finalCardSpecs = finalCardSpecs.map(spec => spec[0] === 'Output' ? ['Output', newOutput] : spec);
        finalSpecs = finalSpecs.map(spec => spec[0] === 'Output Capacity' ? ['Output Capacity', newOutput + ' Average Capacity'] : spec);
      }

      return {
        ...base,
        image: finalImage,
        gallery: finalGallery,
        features: finalFeatures || base.features,
        price: finalPrice,
        cardSpecs: finalCardSpecs,
        specs: finalSpecs,
        slug: `${category.slug}-${base.slug}`,
        name: base.name.includes('Flourmill') ? base.name.replace('Flourmill', category.name.replace(' with Cyclone', '')) : `${category.name.replace(' with Cyclone', '')} ${base.name}`,
        categories: [category.slug]
      };
    })
);

export const trustBlocks = [
  {
    title: '30+ Years Experience',
    body: 'Three decades of building grinding machinery for Indian food processing — experience that shows in fabrication, balancing and finish.',
    icon: 'award',
  },
  {
    title: 'Direct Manufacturer',
    body: 'Machines are fabricated, machined, assembled and trial run at our own unit in Dhamatvan, Ahmedabad. You deal with the builder.',
    icon: 'factory',
  },
  {
    title: 'Heavy-Duty Machinery',
    body: 'Mild steel bodies, heavy drum structures, SKF bearings and balanced drives built for continuous commercial production shifts.',
    icon: 'wrench',
  },
  {
    title: 'Customer Support',
    body: 'Spares, service and technical guidance come straight from the manufacturer — before and long after the machine is dispatched.',
    icon: 'headset',
  },
];

export const applications = [
  {
    title: 'Masala & Spice Grinding',
    body: 'Chilli, turmeric, coriander, cumin, garam masala and blended spice powders for masala units and packers.',
    image: '/media/masala-spice.png',
  },
  {
    title: 'Atta & Flour Milling',
    body: 'Wheat chakki atta, maize, jowar, bajra and rice flour for flour mills, kirana stores and societies.',
    image: '/media/atta-flour.png',
  },
  {
    title: 'Pulses & Besan',
    body: 'Gram, moong and other pulses ground to besan and fine flours for food and namkeen manufacturers.',
    image: '/media/pulses-besan.jpg',
  },
  {
    title: 'Dry Herbs & Ayurvedic Material',
    body: 'Neem, ashwagandha, amla and similar dry herbal material for ayurvedic and herbal product units.',
    image: '/media/dry-herbs.png',
  },
];

export const gallery = {
  machinery: [
    { src: '/media/machine-1.mp4', alt: 'Machinery Video 1' },
    { src: '/videos/machinery2.mp4', alt: 'Machinery Video 2' },
    { src: '/videos/machinery3.mp4', alt: 'Machinery Video 3' },
    { src: '/videos/machinery4.mp4', alt: 'Machinery Video 4' },
    { src: '/videos/machinery5.mp4', alt: 'Machinery Video 5' },
  ],
  manufacturing: [
    { src: '/media/manufacturing-1.mp4', alt: 'Manufacturing Process' },
    { src: '/videos/dispatch.mp4', alt: 'Dispatch Process' },
  ],
  factory: [
    { src: '/videos/unit1.mp4', alt: 'Our Manufacturing Unit 1' },
    { src: '/videos/unit2.mp4', alt: 'Our Manufacturing Unit 2' },
  ],
};

export const reasons = [
  {
    title: '30+ Years of Manufacturing Experience',
    body: 'Three decades of building grinding machinery for Indian food processing businesses — experience that shows in the way our machines are fabricated, balanced and finished.',
  },
  {
    title: 'Direct Manufacturer, Not a Trader',
    body: 'Machines are fabricated, machined, assembled and trial run at our own unit in Dhamatvan, Ahmedabad. You deal with the people who actually build the machine.',
  },
  {
    title: 'Machines Built Around Your Product',
    body: 'Mesh, motor rating, phase and layout are discussed before manufacturing so the machine suits the material you grind and the space you have.',
  },
  {
    title: 'In-House Fabrication & Machining',
    body: 'Bodies, chambers and rotor assemblies are prepared in-house, which keeps quality control and delivery timelines in our own hands.',
  },
  {
    title: 'Serviceable Design & Spares Support',
    body: 'Chambers, beaters and sieves are easy to reach for cleaning and replacement, and spares come straight from the manufacturer.',
  },
];

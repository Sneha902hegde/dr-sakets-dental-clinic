export type DoctorProfileKey = 'saket' | 'sneha' | 'aheli';

export type Affiliation = { name: string; role: string };

export type DoctorProfile = {
  key: DoctorProfileKey;
  name: string;
  role: string;
  image?: string;
  education?: { degree: string; institution: string }[];
  intro: string;
  introParagraphs?: string[];
  areas: string[];
  philosophy: string;
  researchNote?: string;
  affiliations?: Affiliation[];
  related: { label: string; page: string }[];
};

export const doctorProfiles: Record<DoctorProfileKey, DoctorProfile> = {
  saket: {
    key: 'saket',
    name: 'Dr. Saket Sai Rallabhandi',
    role: 'Orthodontist',
    image: '/images/Dr_Saket_Rallabhandi.jpg',
    intro: 'Dr. Saket Rallabhandi is an orthodontist and smile designer focused on creating confident smiles through advanced orthodontics, innovation, compassionate care and evidence-based dentistry.',
    areas: ['Braces and orthodontics', 'Clear aligner therapy', 'Dentofacial orthopedics', 'Complex malocclusions', 'Cleft and surgical orthodontics', 'Digital smile planning'],
    philosophy: 'Every plan begins with understanding the patient’s goals, concerns and comfort. Treatment is explained clearly and planned around long-term oral health.',
    related: [{ label: 'Braces & Orthodontics', page: 'braces' }, { label: 'Clear Aligners', page: 'aligners' }],
  },
  sneha: {
    key: 'sneha',
    name: 'Dr. Sneha Hegde',
    role: 'MDS – Prosthodontics | Prosthodontist',
    image: '/images/Prosthodontist_in_Aundh.jfif',
    education: [
      { degree: 'BDS', institution: 'SDM Dental College, Dharwad' },
      { degree: 'MDS – Prosthodontics', institution: 'Sri Hasanamba Dental College, Hassan' },
    ],
    intro: 'Dr. Sneha Hegde is a Prosthodontist with a keen interest in restoring smiles through comprehensive restorative and rehabilitative dentistry.',
    introParagraphs: [
      'She completed her Bachelor of Dental Surgery (BDS) from SDM Dental College, Dharwad, followed by her Master of Dental Surgery (MDS) from Sri Hasanamba Dental College, Hassan, specialising in Prosthodontics.',
      'Her clinical interests encompass the restoration and replacement of missing, damaged and compromised teeth. Her areas of practice include crowns and bridges, complete and partial dentures, implant-supported prosthetic restorations, aesthetic rehabilitation and full-mouth rehabilitation.',
      'She believes that successful prosthodontic treatment extends beyond replacing teeth. It involves restoring oral function, achieving aesthetic harmony and improving patient comfort through careful diagnosis, precision and individualised treatment planning.',
      'As part of a multidisciplinary dental team, she values collaboration between specialties to provide comprehensive and well-coordinated patient care.',
    ],
    areas: [
      'Fixed and Removable Prosthodontics',
      'Crowns and Bridges',
      'Complete and Partial Dentures',
      'Implant-Supported Prosthetic Restorations',
      'Aesthetic and Smile Rehabilitation',
      'Full-Mouth Rehabilitation',
      'Restoration of Worn and Damaged Teeth',
    ],
    philosophy: 'Successful prosthodontic treatment extends beyond replacing teeth — it involves restoring oral function, achieving aesthetic harmony and improving patient comfort through careful diagnosis, precision and individualised treatment planning.',
    researchNote:
      'Dr. Sneha Hegde has multiple publications to her credit, reflecting her involvement in academic research and her interest in contributing to the advancement of dental knowledge.',
    affiliations: [
      { name: 'Indian Prosthodontic Society (IPS)', role: 'Member' },
      { name: 'Indian Dental Association (IDA), Pune West Branch', role: 'Active Member' },
      { name: 'IDA Pune West Branch', role: 'Editor' },
    ],
    related: [{ label: 'Crowns & Bridges', page: 'crowns-and-bridges' }, { label: 'Dentures', page: 'dentures' }, { label: 'Full Mouth Rehabilitation', page: 'full-mouth-rehabilitation' }],
  },
  aheli: {
    key: 'aheli',
    name: 'Dr. Aheli Pal',
    role: 'Oral & Maxillofacial Surgeon',
    intro: 'Dr. Aheli Pal is a Board-Certified Oral and Maxillofacial Surgeon with an MDS in Oral & Maxillofacial Surgery from Datta Meghe Institute of Medical Sciences, Wardha.',
    areas: ['Impacted teeth', 'Oral surgical conditions', 'Facial trauma', 'Jaw-related conditions', 'Conditions affecting facial structures', 'Oral and maxillofacial surgical care'],
    philosophy: 'Dr. Aheli brings a thoughtful, patient-centred approach to surgical care, with clear guidance and careful attention to each patient’s concerns.',
    related: [{ label: 'Wisdom Tooth Removal', page: 'wisdom-tooth-removal' }, { label: 'Dental Implants', page: 'dental-implants' }],
  },
};

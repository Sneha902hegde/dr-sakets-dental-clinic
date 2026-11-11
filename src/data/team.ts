export type DoctorProfileKey = 'saket' | 'sneha' | 'aheli';

export type DoctorProfile = {
  key: DoctorProfileKey;
  name: string;
  role: string;
  intro: string;
  areas: string[];
  philosophy: string;
  related: { label: string; page: string }[];
};

export const doctorProfiles: Record<DoctorProfileKey, DoctorProfile> = {
  saket: {
    key: 'saket',
    name: 'Dr. Saket Sai Rallabhandi',
    role: 'Orthodontist',
    intro: 'Dr. Saket Rallabhandi is an orthodontist and smile designer focused on creating confident smiles through advanced orthodontics, innovation, compassionate care and evidence-based dentistry.',
    areas: ['Braces and orthodontics', 'Clear aligner therapy', 'Dentofacial orthopedics', 'Complex malocclusions', 'Cleft and surgical orthodontics', 'Digital smile planning'],
    philosophy: 'Every plan begins with understanding the patient’s goals, concerns and comfort. Treatment is explained clearly and planned around long-term oral health.',
    related: [{ label: 'Braces & Orthodontics', page: 'braces' }, { label: 'Clear Aligners', page: 'aligners' }],
  },
  sneha: {
    key: 'sneha',
    name: 'Dr. Sneha Hegde',
    role: 'Prosthodontist',
    intro: 'Dr. Sneha Hegde is a Prosthodontist specialising in the restoration and replacement of missing or damaged teeth. She brings a thoughtful, detail-focused approach to functional and aesthetic dental rehabilitation.',
    areas: ['Crowns and bridges', 'Dentures', 'Implant-supported restorations', 'Aesthetic rehabilitation', 'Full-mouth rehabilitation', 'Replacement of missing teeth'],
    philosophy: 'Dr. Sneha believes in personalised treatment plans that restore comfort, confidence and natural-looking function while respecting each patient’s needs and goals.',
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

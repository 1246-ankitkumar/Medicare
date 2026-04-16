// ─────────────────────────────────────────────
//  Medicare – Mock Data (array-based, no backend)
// ─────────────────────────────────────────────

export const HOSPITALS = [
  { id: 'aiims',    name: 'AIIMS New Delhi',                  city: 'New Delhi',  type: 'Government', rating: 4.8, beds: 2478, logo: '🏛️' },
  { id: 'medanta',  name: 'Medanta – The Medicity',           city: 'Gurugram',   type: 'Private',    rating: 4.7, beds: 1250, logo: '🏥' },
  { id: 'apollo',   name: 'Apollo Hospitals',                  city: 'Delhi',      type: 'Private',    rating: 4.6, beds: 710,  logo: '⚕️' },
  { id: 'fortis',   name: 'Fortis Healthcare',                 city: 'Delhi',      type: 'Private',    rating: 4.5, beds: 900,  logo: '🔴' },
  { id: 'kokilaben',name: 'Kokilaben Dhirubhai Ambani Hospital',city: 'Mumbai',    type: 'Private',    rating: 4.7, beds: 750,  logo: '💙' },
];

export const SURGERIES = [
  {
    id: 'bypass',
    name: 'Coronary Artery Bypass Graft (CABG)',
    category: 'Cardiac',
    description: 'Open-heart surgery to improve blood flow to the heart.',
    avgDuration: '4–6 hrs',
    prices: { aiims: 180000, medanta: 420000, apollo: 390000, fortis: 370000, kokilaben: 450000 },
  },
  {
    id: 'knee_replacement',
    name: 'Total Knee Replacement',
    category: 'Orthopaedic',
    description: 'Replacing damaged knee joint with artificial implant.',
    avgDuration: '2–3 hrs',
    prices: { aiims: 120000, medanta: 320000, apollo: 290000, fortis: 275000, kokilaben: 340000 },
  },
  {
    id: 'hip_replacement',
    name: 'Total Hip Replacement',
    category: 'Orthopaedic',
    description: 'Replacing worn hip joint with a prosthetic implant.',
    avgDuration: '2–3 hrs',
    prices: { aiims: 115000, medanta: 305000, apollo: 280000, fortis: 260000, kokilaben: 320000 },
  },
  {
    id: 'spinal_fusion',
    name: 'Spinal Fusion Surgery',
    category: 'Neuro/Spine',
    description: 'Fusing two or more vertebrae to eliminate painful motion.',
    avgDuration: '3–5 hrs',
    prices: { aiims: 140000, medanta: 380000, apollo: 350000, fortis: 330000, kokilaben: 395000 },
  },
  {
    id: 'appendectomy',
    name: 'Laparoscopic Appendectomy',
    category: 'General Surgery',
    description: 'Minimally invasive removal of inflamed appendix.',
    avgDuration: '1–2 hrs',
    prices: { aiims: 25000, medanta: 75000, apollo: 68000, fortis: 62000, kokilaben: 80000 },
  },
  {
    id: 'gallbladder',
    name: 'Laparoscopic Cholecystectomy',
    category: 'General Surgery',
    description: 'Removal of gallbladder through small incisions.',
    avgDuration: '1–2 hrs',
    prices: { aiims: 30000, medanta: 85000, apollo: 78000, fortis: 72000, kokilaben: 90000 },
  },
  {
    id: 'cataract',
    name: 'Cataract Surgery (Phacoemulsification)',
    category: 'Ophthalmology',
    description: 'Lens replacement for cataract using ultrasound technique.',
    avgDuration: '30–45 min',
    prices: { aiims: 8000, medanta: 45000, apollo: 40000, fortis: 38000, kokilaben: 50000 },
  },
  {
    id: 'angioplasty',
    name: 'Coronary Angioplasty (PTCA)',
    category: 'Cardiac',
    description: 'Opening blocked coronary arteries using balloon/stent.',
    avgDuration: '1–3 hrs',
    prices: { aiims: 95000, medanta: 260000, apollo: 240000, fortis: 225000, kokilaben: 280000 },
  },
  {
    id: 'hernia',
    name: 'Inguinal Hernia Repair',
    category: 'General Surgery',
    description: 'Repair of inguinal hernia via laparoscopic technique.',
    avgDuration: '1–2 hrs',
    prices: { aiims: 20000, medanta: 65000, apollo: 58000, fortis: 54000, kokilaben: 70000 },
  },
  {
    id: 'hysterectomy',
    name: 'Laparoscopic Hysterectomy',
    category: 'Gynaecology',
    description: 'Minimally invasive removal of uterus.',
    avgDuration: '2–4 hrs',
    prices: { aiims: 45000, medanta: 130000, apollo: 118000, fortis: 110000, kokilaben: 140000 },
  },
];

export const MEDICATIONS = [
  {
    id: 'metformin',
    name: 'Metformin 500mg (30 tabs)',
    category: 'Diabetes',
    generic: true,
    prices: { aiims: 18, medanta: 45, apollo: 42, fortis: 40, kokilaben: 48 },
  },
  {
    id: 'atorvastatin',
    name: 'Atorvastatin 10mg (30 tabs)',
    category: 'Cardiac',
    generic: true,
    prices: { aiims: 22, medanta: 85, apollo: 78, fortis: 72, kokilaben: 90 },
  },
  {
    id: 'amlodipine',
    name: 'Amlodipine 5mg (30 tabs)',
    category: 'Hypertension',
    generic: true,
    prices: { aiims: 15, medanta: 55, apollo: 50, fortis: 48, kokilaben: 60 },
  },
  {
    id: 'pantoprazole',
    name: 'Pantoprazole 40mg (30 tabs)',
    category: 'Gastro',
    generic: false,
    prices: { aiims: 35, medanta: 120, apollo: 110, fortis: 105, kokilaben: 130 },
  },
  {
    id: 'cefixime',
    name: 'Cefixime 200mg (10 caps)',
    category: 'Antibiotic',
    generic: false,
    prices: { aiims: 65, medanta: 185, apollo: 170, fortis: 160, kokilaben: 195 },
  },
  {
    id: 'aspirin',
    name: 'Aspirin 75mg (30 tabs)',
    category: 'Cardiac',
    generic: true,
    prices: { aiims: 8, medanta: 28, apollo: 25, fortis: 22, kokilaben: 30 },
  },
  {
    id: 'azithromycin',
    name: 'Azithromycin 500mg (3 tabs)',
    category: 'Antibiotic',
    generic: false,
    prices: { aiims: 55, medanta: 145, apollo: 135, fortis: 125, kokilaben: 155 },
  },
  {
    id: 'insulin',
    name: 'Insulin Glargine 100 IU/mL (5 pens)',
    category: 'Diabetes',
    generic: false,
    prices: { aiims: 1200, medanta: 2800, apollo: 2600, fortis: 2450, kokilaben: 2950 },
  },
];

export const LAB_TESTS = [
  {
    id: 'cbc',
    name: 'Complete Blood Count (CBC)',
    category: 'Haematology',
    turnaround: '4–6 hrs',
    fasting: false,
    prices: { aiims: 120, medanta: 450, apollo: 420, fortis: 390, kokilaben: 480 },
  },
  {
    id: 'lft',
    name: 'Liver Function Test (LFT)',
    category: 'Biochemistry',
    turnaround: '6–8 hrs',
    fasting: true,
    prices: { aiims: 250, medanta: 750, apollo: 700, fortis: 650, kokilaben: 800 },
  },
  {
    id: 'kft',
    name: 'Kidney Function Test (KFT)',
    category: 'Biochemistry',
    turnaround: '6–8 hrs',
    fasting: true,
    prices: { aiims: 220, medanta: 680, apollo: 630, fortis: 590, kokilaben: 720 },
  },
  {
    id: 'lipid',
    name: 'Lipid Profile',
    category: 'Biochemistry',
    turnaround: '6–8 hrs',
    fasting: true,
    prices: { aiims: 300, medanta: 850, apollo: 800, fortis: 740, kokilaben: 900 },
  },
  {
    id: 'thyroid',
    name: 'Thyroid Function Test (T3,T4,TSH)',
    category: 'Endocrinology',
    turnaround: '8–12 hrs',
    fasting: false,
    prices: { aiims: 350, medanta: 950, apollo: 900, fortis: 840, kokilaben: 1000 },
  },
  {
    id: 'hba1c',
    name: 'HbA1c (Glycated Haemoglobin)',
    category: 'Diabetes',
    turnaround: '6–8 hrs',
    fasting: false,
    prices: { aiims: 280, medanta: 700, apollo: 650, fortis: 620, kokilaben: 750 },
  },
  {
    id: 'vitamin_d',
    name: 'Vitamin D (25-OH)',
    category: 'Vitamins',
    turnaround: '24 hrs',
    fasting: false,
    prices: { aiims: 400, medanta: 1200, apollo: 1100, fortis: 1050, kokilaben: 1250 },
  },
  {
    id: 'vitamin_b12',
    name: 'Vitamin B12',
    category: 'Vitamins',
    turnaround: '24 hrs',
    fasting: false,
    prices: { aiims: 350, medanta: 950, apollo: 900, fortis: 850, kokilaben: 1000 },
  },
  {
    id: 'ecg',
    name: 'Electrocardiogram (ECG)',
    category: 'Cardiac',
    turnaround: 'Immediate',
    fasting: false,
    prices: { aiims: 100, medanta: 500, apollo: 450, fortis: 400, kokilaben: 550 },
  },
  {
    id: 'xray_chest',
    name: 'Chest X-Ray (PA View)',
    category: 'Radiology',
    turnaround: '1–2 hrs',
    fasting: false,
    prices: { aiims: 150, medanta: 600, apollo: 550, fortis: 500, kokilaben: 650 },
  },
  {
    id: 'urine_routine',
    name: 'Urine Routine & Microscopy',
    category: 'Pathology',
    turnaround: '3–4 hrs',
    fasting: false,
    prices: { aiims: 80, medanta: 300, apollo: 280, fortis: 260, kokilaben: 320 },
  },
  {
    id: 'blood_sugar_fasting',
    name: 'Blood Sugar Fasting',
    category: 'Diabetes',
    turnaround: '2–3 hrs',
    fasting: true,
    prices: { aiims: 60, medanta: 200, apollo: 180, fortis: 170, kokilaben: 220 },
  },
];

export const PLANS = [
  {
    id: 'free',
    name: 'Basic',
    price: 0,
    billing: 'forever free',
    color: '#64748b',
    features: [
      'Price comparison (5 hospitals)',
      'Surgery pricing',
      'Lab test pricing',
      'Medication pricing',
      'Unlimited searches',
    ],
    notIncluded: [
      'Personal health records',
      'Appointment history',
      'Saved searches',
      'Priority support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 199,
    billing: 'per month',
    color: '#0a6e6e',
    popular: true,
    features: [
      'Everything in Basic',
      'Personal health records',
      'Appointment history tracking',
      'Saved searches & alerts',
      'Priority email support',
      'Export reports (PDF)',
    ],
    notIncluded: [],
  },
  {
    id: 'family',
    name: 'Family',
    price: 499,
    billing: 'per month',
    color: '#f59e0b',
    features: [
      'Everything in Pro',
      'Up to 5 family members',
      'Family health dashboard',
      'Shared appointment history',
      'Dedicated relationship manager',
      'Telemedicine consultations',
    ],
    notIncluded: [],
  },
];

// ── Registered users (array-based auth) ──────
export let USERS = [
  {
    id: 1,
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    password: 'password123',
    plan: 'pro',
    age: 34,
    blood: 'B+',
    phone: '+91 98765 43210',
    city: 'New Delhi',
    healthRecords: [
      { id: 1, date: '2024-11-15', type: 'Diagnosis', note: 'Mild hypertension. Prescribed Amlodipine 5mg.', doctor: 'Dr. Meera Kapoor' },
      { id: 2, date: '2024-09-03', type: 'Lab Report', note: 'HbA1c: 5.9% – Pre-diabetic range. Lifestyle changes advised.', doctor: 'Dr. Suresh Nair' },
    ],
    appointments: [
      { id: 1, hospital: 'Apollo Hospitals', doctor: 'Dr. Meera Kapoor', date: '2024-11-15', type: 'Cardiology OPD', status: 'Completed' },
      { id: 2, hospital: 'AIIMS New Delhi', doctor: 'Dr. Suresh Nair', date: '2024-09-03', type: 'General Medicine', status: 'Completed' },
      { id: 3, hospital: 'Fortis Healthcare', doctor: 'Dr. Anjali Singh', date: '2025-01-20', type: 'Follow-up', status: 'Upcoming' },
    ],
    savedSearches: [
      { id: 1, type: 'Surgery', item: 'Total Knee Replacement', date: '2024-12-01' },
      { id: 2, type: 'Lab Test', item: 'Lipid Profile', date: '2024-12-10' },
    ],
  },
];

export function addUser(user) {
  USERS.push({ ...user, id: USERS.length + 1, plan: 'free', healthRecords: [], appointments: [], savedSearches: [] });
}

export function findUser(email, password) {
  return USERS.find(u => u.email === email && u.password === password) || null;
}

export function emailExists(email) {
  return USERS.some(u => u.email === email);
}

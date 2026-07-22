const fs = require('fs');

let localDir = fs.readFileSync('src/components/LocalDirectory.tsx', 'utf-8');

// 1. Add BookingForm import
localDir = localDir.replace(
  "import { Accordion } from './ui/Accordion';",
  "import { Accordion } from './ui/Accordion';\nimport { BookingForm } from './BookingForm';"
);

// 2. Remove booking state and form
// We remove:
// const [bookingSuccess, setBookingSuccess] = useState(false);
// const [bookingName, setBookingName] = useState('');
// const [bookingPhone, setBookingPhone] = useState('');
// const [bookingDate, setBookingDate] = useState('');
// const [bookingSubmitting, setBookingSubmitting] = useState(false);
localDir = localDir.replace(/\s*const \[bookingSuccess[\s\S]*?setBookingSubmitting\(false\);/m, '');

// Wait, the handleBookingSubmit was separated from the state declarations. 
// Let's be more precise with regex.

// Remove state declarations
localDir = localDir.replace(/\s*const \[bookingSuccess, setBookingSuccess\] = useState\(false\);\s*const \[bookingName, setBookingName\] = useState\(''\);\s*const \[bookingPhone, setBookingPhone\] = useState\(''\);\s*const \[bookingDate, setBookingDate\] = useState\(''\);\s*const \[bookingSubmitting, setBookingSubmitting\] = useState\(false\);/, '');

// Remove handleBookingSubmit
localDir = localDir.replace(/\s*const handleBookingSubmit = async \(e: React\.FormEvent\) => \{[\s\S]*?\}\n    \}\n  \};\n/m, '\n');

// Replace the JSX form block with BookingForm
const formBlockRegex = /<div className="bg-emerald-950 rounded-\[32px\] text-white p-8 shadow-xl border border-emerald-900 relative overflow-hidden">[\s\S]*?<\/form>\n\s*\}\)\}\n\s*<\/div>/m;
localDir = localDir.replace(formBlockRegex, '<BookingForm activeClinic={activeClinic} t={t} />');

fs.writeFileSync('src/components/LocalDirectory.tsx', localDir);
console.log('Replaced BookingForm in LocalDirectory.tsx');

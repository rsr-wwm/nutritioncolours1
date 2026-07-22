const fs = require('fs');

let code = fs.readFileSync('src/components/LocalDirectory.tsx', 'utf-8');

code = code.replace(
  "import { Accordion } from './ui/Accordion';",
  "import { Accordion } from './ui/Accordion';\nimport { BookingForm } from './BookingForm';"
);

const stateBlockRegex = /\s*const \[bookingSuccess, setBookingSuccess\] = useState\(false\);\n\s*const \[bookingName, setBookingName\] = useState\(''\);\n\s*const \[bookingPhone, setBookingPhone\] = useState\(''\);\n\s*const \[bookingDate, setBookingDate\] = useState\(''\);\n\s*const \[bookingSubmitting, setBookingSubmitting\] = useState\(false\);/;
code = code.replace(stateBlockRegex, '');

const handleBookingRegex = /\s*const handleBookingSubmit = async \(e: React\.FormEvent\) => \{[\s\S]*?setBookingSuccess\(true\);\n  \};\n/;
code = code.replace(handleBookingRegex, '\n');

const jsxRegex = /\s*<div className="bg-emerald-950 rounded-\[32px\] text-white p-8 shadow-xl border border-emerald-900 relative overflow-hidden">[\s\S]*?<\/form>\n\s*\}\)\}\n\s*<\/div>/;
code = code.replace(jsxRegex, '\n              <BookingForm activeClinic={activeClinic} t={t} />');

fs.writeFileSync('src/components/LocalDirectory.tsx', code);
console.log('Replaced successfully');

import fs from 'fs';
import path from 'path';

async function evaluateKillSwitch() {
  if (process.env.EMERGENCY_MACHINE_LOCKDOWN === 'true') {
    const DIST_DIR = path.resolve(process.cwd(), 'dist');
    console.error('🚨 EMERGENCY_MACHINE_LOCKDOWN IS ACTIVE 🚨');
    ['llms.txt', 'manifest-ai.json', 'openapi.json'].forEach(target => {
      const targetPath = path.join(DIST_DIR, target);
      if (fs.existsSync(targetPath)) {
        fs.unlinkSync(targetPath);
        console.error(`💥 Destroyed: ${target}`);
      }
    });
    fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
    console.error('🛑 Machine Estate is fully locked down.');
  } else {
    console.log('✅ Kill Switch inactive.');
  }
}
evaluateKillSwitch();

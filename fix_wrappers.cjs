const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/pages', (filePath) => {
  if (filePath.endsWith('.astro')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<div data-ai-answer="true">')) {
      content = content.replace('<div data-ai-answer="true">\n<BaseLayout', '<BaseLayout');
      content = content.replace('<div data-ai-answer="true">\n', '');
      content = content.replace('<div data-ai-answer="true">', '');
      
      // Remove trailing </div> if it's the last thing in the file
      content = content.replace(/<\/BaseLayout>\n<\/div>\n*$/, '</BaseLayout>\n');
      content = content.replace(/<\/BaseLayout>\n<\/div>$/, '</BaseLayout>');
      // Just in case it's not the last thing
      content = content.replace(/<\/div>\n*$/, '\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});

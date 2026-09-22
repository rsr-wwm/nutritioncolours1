import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => readFile(path.join(root, relativePath));
const output = (relativePath) => path.join(root, relativePath);

const icon = await read('public/icons/icon-any.svg');
const socialSource = (await read('src/assets/brand/social-preview.svg')).toString();
const inter = (await read('public/fonts/inter-latin-400-normal.woff2')).toString('base64');
const fraunces = (await read('public/fonts/fraunces-latin-900-normal.woff2')).toString('base64');
const socialSvg = socialSource
  .replace('__INTER_FONT__', inter)
  .replace('__FRAUNCES_FONT__', fraunces);

await sharp(Buffer.from(socialSvg)).png({ compressionLevel: 9 }).toFile(output('public/images/nutritioncolours-social.png'));
await sharp(icon, { density: 960 }).resize(512, 512).png().toFile(output('public/images/nutritioncolours-logo.png'));

// ICO supports embedded PNG entries. Include standard small browser sizes.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => sharp(icon, { density: 960 }).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((png, index) => {
  const entry = 6 + index * 16;
  directory.writeUInt8(sizes[index], entry);
  directory.writeUInt8(sizes[index], entry + 1);
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile(output('public/favicon.ico'), Buffer.concat([directory, ...images]));

console.log('Rendered social PNG, square logo PNG, and 16/32/48px ICO.');

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const fruit of ['apple', 'banana', 'orange']) {
  const source = path.join(root, 'src/assets/fruit', `${fruit}.png`);
  const target = path.join(root, 'public/images', `${fruit}_illustration.jpg`);
  await sharp(source)
    .resize(1024, 1024, { fit: 'cover' })
    .flatten({ background: '#f5f5f4' })
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(target);
}

console.log('Rendered three 1024px editorial fruit JPGs.');

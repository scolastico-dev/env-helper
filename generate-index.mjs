import { promises as fs } from 'fs';
import path from 'path';

const srcDir = path.resolve('src');
const indexFile = path.join(srcDir, 'index.ts');

async function generateIndex() {
  const files = await fs.readdir(srcDir);
  const exports = ['// This file is auto-generated. Do not edit manually.\n'];

  for (const file of files) {
    const fullPath = path.join(srcDir, file);
    const stat = await fs.stat(fullPath);

    if (
      stat.isFile() &&
      file !== 'index.ts' &&
      (file.endsWith('.ts') || file.endsWith('.tsx'))
    ) {
      const base = file.replace(/\.(ts|tsx)$/, '');
      exports.push(`export * from './${base}';`);
    }
  }

  const content = exports.join('\n') + '\n';
  await fs.writeFile(indexFile, content);
  console.log(`Generated ${indexFile}`);
}

generateIndex().catch(err => {
  console.error(err);
  process.exit(1);
});

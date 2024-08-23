import { readFileSync } from 'fs';
import path from 'path';

export function createGlobals() {

  const projectFolder = process.cwd();
  const projectPackage = JSON.parse(readFileSync(path.join(projectFolder, 'package.json'), 'utf-8'));

  const calystonePackage = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

  return {
    projectFolder,
    projectPackage, 
    calystonePackage
  };
}
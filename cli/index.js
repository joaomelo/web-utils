import { Command } from "commander";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

const program = new Command();

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version);

program.command('serve')
  .action(() => {
    console.log('serve');
  });

program.parse();
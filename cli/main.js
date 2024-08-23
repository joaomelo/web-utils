
import { Command } from "commander";
import { serve } from '../server/index.js';

export function main(globals) {
  const { calystonePackage, projectFolder, projectPackage } = globals;

  const program = new Command();

  program
    .name(calystonePackage.name)
    .description(calystonePackage.description)
    .version(calystonePackage.version);

  program
    .command('dev')
    .action(() => serve({ port: 3000, projectFolder, projectPackage }));

  program
    .command('serve')
    .action(() => serve(3000));

  program.parse();
}


#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from 'fs';
import { serve } from '../server/index.js';

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

const program = new Command();

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version);

program.command('serve')
  .action(() => serve(3000));

program.parse();
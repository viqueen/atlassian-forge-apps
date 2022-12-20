import dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';

type Configuration = {
    JIRA_APP_ID: string;
};

const parsedConfig: unknown = dotenv.config().parsed || {};
const configuration = parsedConfig as Configuration;

const source = fs
    .readFileSync(path.resolve(process.cwd(), 'manifest.src.yml'))
    .toString();
const output = source.replace('${JIRA_APP_ID}', configuration.JIRA_APP_ID);
fs.writeFileSync(path.resolve(process.cwd(), 'manifest.yml'), output);

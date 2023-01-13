// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

import headIMG from "../../personal assets/head.jpg";

// Help
export const help = async (args: string[]): Promise<string> => {
  return `Welcome! Here are all the available commands:

about

banner

date

echo

email

github

help

linkedin

ls

readme

resume

sumfetch

whoami

[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my terminal!

More about me:

'sumfetch' - short summary about me.

'resume' - my latest resume.

'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `no
directories
here`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `

<div style="display: inline-flex; align-items: center;">
<img style="margin-right: 2em;" src=${headIMG.src} width="180px;" />
 ██████   █████           █████                                ████      █████████                                                    
░░██████ ░░███           ░░███                                ░░███     ███░░░░░███                                                   
 ░███░███ ░███   ██████  ███████  ████████    ██████    ██████ ░███    ░███    ░░░  ██████  █████████████   █████   ██████  ████████  
 ░███░░███░███  ░░░░░███░░░███░  ░░███░░███  ░░░░░███  ███░░███░███    ░░█████████ ░░░░░███░░███░░███░░███ ███░░   ███░░███░░███░░███ 
 ░███ ░░██████   ███████  ░███    ░███ ░███   ███████ ░███████ ░███     ░░░░░░░░███ ███████ ░███ ░███ ░███░░█████ ░███ ░███ ░███ ░███ 
 ░███  ░░█████  ███░░███  ░███ ███░███ ░███  ███░░███ ░███░░░  ░███     ███    ░██████░░███ ░███ ░███ ░███ ░░░░███░███ ░███ ░███ ░███ 
 █████  ░░█████░░████████ ░░█████ ████ █████░░████████░░██████ █████   ░░█████████░░█████████████░███ ███████████ ░░██████  ████ █████
 ░░░░░    ░░░░░  ░░░░░░░░   ░░░░░ ░░░░ ░░░░░  ░░░░░░░░  ░░░░░░ ░░░░░     ░░░░░░░░░  ░░░░░░░░░░░░░ ░░░ ░░░░░░░░░░░   ░░░░░░  ░░░░ ░░░░░ 
</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                        

Type 'help' to see the list of available commands.

Type 'sumfetch' for personal summary.

`;
};

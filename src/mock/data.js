import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jack Kent', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Student, Computer Scientist, Human Being', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello there! My name is',
  name: 'Jack',
  subtitle: 'I\'m a computer science student',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m currently an undergraduate student in Computer Science and Artificial Intelligence at Loughborough University, although I\'m just about to enter my year in industry. The lanugage I\'m most proficient in is Python, but I also have working knowledge of PHP, Java, and HTML/CSS.',
  paragraphTwo: 'Outside of studying, my main role is as Operations Director (and Trustee) at Conex Research, a young non-profit research organisation specialising in spacecraft design and mission planning. There, I oversee IT operations, as well as most HR and compliance functions.',
  paragraphThree: 'Recently I completed my tenure as Vice Chair at Loughborough Space, a student engineering group that is currently designing and manufacturing a hybrid rocket engine, which will soon fly in their custom built rocket, Beacon.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'p_conexresearch.png',
    title: 'Conex Research',
    info: 'My role at Conex included developing their website, which was designed by Tom Dixon and implemented by me using the Webflow platform.',
    info2: 'I also administrate Google Workspace (formerly G Suite), and a variety of cloud software products including Okta and Cloudflare for Teams.',
    url: 'https://conexresearch.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'p_lborospace.png',
    title: 'Loughborough Space',
    info: 'I also developed the Loughborough Space website, which runs on self-hosted WordPress.',
    info2: '',
    url: 'https://lboro.space',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a question?',
  btn: 'Email Me',
  email: 'hey@jackkent.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JackCompSci',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/jackcompsci',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jackcompsci',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michelle Ching',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I am a software engineer with a background in Data Analytics.',
  paragraphTwo: 'My experience in gathering business requirements in order to provide meaningful outputs for teams has made me proficient in organized and structured thought, working with large quantities of data in a cohesive manner, and translating non-technical requests into tangible and measurable tasks.',
  paragraphThree: 'My goal is to use my existing skills and combine them with my technical abilities in order to create and implement polished solutions from the front end to the back end.',
  resume: 'https://docs.google.com/document/d/1C-CAS_F-oSCBE06lsIPPbQkM5jmxnaOfb43JAzQACeE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Budget App',
    info: 'I combined a budget app design with data from the census.gov website for housing costs in order for the end user to be able to estimate their cost of living based on location.',
    info2: '',
    url: 'https://budget-app-sigma.vercel.app/',
    repo: 'https://github.com/chingmm/budget-app.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Tea Shop',
    info: 'Full-stack web application for an online tea store that implements CRUD and INDUCES',
    info2: '',
    url: 'https://mc-tea-shop.herokuapp.com/',
    repo: 'https://github.com/chingmm/tea-shop.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Zen Movie Reviews',
    info: 'I worked with a team and built a full CRUD app using the MERN stack to create an app that allows users to search for films and create, edit or delete film reviews. The project utilizes a pull from a third party API + Authorization with signup, login and logout functionality.',
    info2: '',
    url: 'https://5f9d64cc6dedee0007caeda5--lucid-benz-946cf4.netlify.app/',
    repo: 'https://github.com/chingmm/movie-review-frontend.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Chitown Community Watch',
    info: 'A web app for communities to post suspicious activity (i.e. theft, shootings, etc) occurring in their neighborhood, so that others are aware of what to be more careful about. The web app is currently only focused on Chicago neighborhoods.',
    info2: '',
    url: 'https://inspiring-knuth-f2bd42.netlify.app/',
    repo: 'https://github.com/chingmm/neighborhood_watch_frontend.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Chatter',
    info: 'A chat application utilizing websockets via GraphQL',
    info2: '',
    url: 'https://inspiring-knuth-f2bd42.netlify.app/',
    repo: 'https://github.com/chingmm/chat_app.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chingmm19@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michellemuiching/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chingmm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

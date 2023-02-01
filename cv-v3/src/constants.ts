export const NAV_LINKS = [
  {
    link: '#education',
    name: 'Education',
  },
  {
    link: '#hard-skills',
    name: 'Hard Skills',
  },
  {
    link: '#soft-skills',
    name: 'Soft Skills',
  },
  {
    link: '#about',
    name: 'About',
  },
  {
    link: '#projects',
    name: 'Projects',
  },
];

export const CONTACTS = [
  {
    type: 'mobile',
    href: 'tel:+79295501998',
    name: '+7 (929) 550-19-98',
  },
  {
    type: 'email',
    href: 'mailto:w.feelingalright.p@yandex.ru',
    name: 'w.feelingalright.p@yandex.ru',
  },
  {
    type: 'tg',
    href: 'https://t.me/rewired25',
    name: '@ReWired25',
  },
  {
    type: 'github',
    href: 'https://github.com/ReWired25',
    name: 'ReWired25',
  },
];

export const RSS_EDUCATION = [
  {
    title: 'Frontend PreSchool',
    period: '(Dec 21 - March 22)',
    link: 'https://app.rs.school/certificate/rhldvmyh',
  },
  {
    title: 'Frontend Main Stages',
    period: '(March 22 - Sept 22)',
    link: 'https://app.rs.school/certificate/ehuoc2wa',
  },
  {
    title: 'React',
    period: '(Sept 22 - Dec 22)',
    link: 'https://app.rs.school/certificate/4q58hj3o',
  },
];

export const SIDE_EDUCATION = [
  {
    source: 'Learn JavaScript',
    link: 'https://learn.javascript.ru',
    areas: ['The JavaScript language', 'Browser: Document, Events, Interfaces'],
  },
  {
    source: 'Hexlet',
    link: 'https://ru.hexlet.io',
    areas: ['Code Basics, IIP, basic web-development'],
  },
];

export const STACK_BAGES = [
  {
    type: 'langs',
    badges: ['./assets/badjes/JavaScript-black.svg', './assets/badjes/TypeScript-blue.svg'],
  },
  {
    type: 'frameworks',
    badges: ['./assets/badjes/React-282c34.svg', './assets/badjes/Redux-764abc.svg'],
  },
  {
    type: 'layout',
    badges: [
      './assets/badjes/HTML5-e54c21.svg',
      './assets/badjes/CSS3-214ce5.svg',
      './assets/badjes/SASS-cf649a.svg',
      './assets/badjes/Material%20UI-0071e3.svg',
    ],
  },
  {
    type: 'env',
    badges: [
      './assets/badjes/Webpack-2b3a42.svg',
      './assets/badjes/Eslint-4b32c3.svg',
      './assets/badjes/Prettier-1a2b34.svg',
    ],
  },
  {
    type: 'versionControl',
    badges: ['./assets/badjes/Git-f0f0e8.svg', './assets/badjes/Github-24292f.svg'],
  },
  {
    type: 'node',
    badges: ['./assets/badjes/Node.svg', './assets/badjes/NPM-c53231.svg'],
  },
];

export const SOFT_SKILLS = [
  {
    characteristic: 'Sociability',
    description:
      'A bright period of work of the bartender, during which there was a lot of communication with guests, teamwork, collective planning and organization of our tasks',
  },
  {
    characteristic: 'Stress tolerance',
    description: 'Work in a bar on a stream of visitors with a very large number of orders',
  },
  {
    characteristic: 'Punctuality',
    description:
      'Experience in a complex dynamic schedule without delay, with the timely implementation of the tasks set by the leadership',
  },
  {
    characteristic: 'Learning',
    description: 'The ability to learn technology/framework in a short period',
  },
  {
    characteristic: 'Motivation',
    description:
      'There is a huge number of motivation. You can solve any problem if you find the right approach to it.',
  },
];

export const ABOUT = {
  INFO: 'I have been involved in the frontend development for more than a year, during which there was a bright and very intensive training in the "walls" of Rolling Scopes with a large community and with mentors as practicing developers. During this period, a number of projects were made (both layouts and applications with a certain business logic), two relatively large team projects with a supervising mentor, video presentations related to frontend and adjacent areas. At the moment, in development, I am interested in the continuation of development in the web and the study of related areas (primarily algorithms and data structures to strengthen the fundamental base of the language).',
  INTERESTS:
    'My interests: music, history, to some extent philosophical literature and the progress of hardware technology.',
};

export const PROJECTS_INFO = [
  {
    name: 'Eyes Up',
    description: 'Interactive typing trainer on the keyboard',
    stack: 'TypeScript, SCSS, Webpack, ESLint, Prettier, GIT workflow',
    features: 'AJAX-based app, registration and authorization of users, backend with DB (Mongo)',
    img: './assets/img/eyes-up-preview.jpg',
    repo: 'https://github.com/oxanacode/Eyes-up/tree/develop',
    deploy: 'https://eyesup.netlify.app',
  },
  {
    name: 'Project Management App',
    description: 'Kanban-style management application',
    stack: 'React, CRA, TypeScript, ESLint, Prettier, GIT workflow',
    features: 'Drag-n-drop, registration and authorization of users, backend with DB (PostgreSQL)',
    img: './assets/img/kanban-preview.jpg',
    repo: 'https://github.com/Verbena336/project-management-app/pull/44',
    deploy: 'https://project-kanban.netlify.app',
  },
  {
    name: 'Modular React App',
    description: 'React app with API, form and tests',
    stack: 'React, CRA, Redux Toolkit, React Hook Form, JEST, ESLint, Prettier',
    features: 'Global state with RTK, Mock API with MSW for tests, dynamic sorting and pagination',
    img: './assets/img/modular-react-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-react',
    deploy: 'https://react-tasks-rss.netlify.app',
  },
  {
    name: 'Async Race',
    description: 'Race game based on AJAX',
    stack: 'TypeScript, Webpack, ESLint, Prettier',
    features: `API with backend, server's and app's errors handling`,
    img: './assets/img/async-race-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-main-stages/tree/async-race',
    deploy: 'https://rewired25.github.io/RSS-main-stages/async-race',
  },
  {
    name: 'CPU store',
    description: 'Online CPU store',
    stack: 'TypeScript, Webpack, ESLint, Prettier',
    features:
      'SPA with MVC pattern, dynamic filters, sortings and search, mock data and basics tests',
    img: './assets/img/cpu-store-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-main-stages/tree/online-store',
    deploy: 'https://rewired25.github.io/RSS-main-stages/online-store',
  },
  {
    name: 'Virtual Keyboard',
    description: 'App based on actions of a physical keyboard',
    stack: 'JavaScript, Webpack, ESLint, Prettier',
    features: 'Two languages, keyboard or mouse control',
    img: './assets/img/virtual-keyboard-preview.jpg',
    repo: 'https://github.com/ReWired25/virtual-keyboard',
    deploy: 'https://rewired25.github.io/virtual-keyboard',
  },
  {
    name: 'Audio Player',
    description: 'App based on Web Audio API',
    stack: 'JavaScript, HTML, CSS',
    features: 'Volume and range control',
    img: './assets/img/audio-player-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-prestage/tree/js30-audio-player',
    deploy: 'https://rewired25.github.io/RSS-prestage/js30-audio-player',
  },
  {
    name: 'Xs and Os game',
    description: 'Tic tac toe app',
    stack: 'JavaScript, HTML, CSS',
    features: 'Adaptive design, score and scoreboard, dark and light themes',
    img: './assets/img/tic-tac-toe-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-prestage/tree/tic-tac-toe',
    deploy: 'https://rewired25.github.io/RSS-prestage/tic-tac-toe',
  },
  {
    name: 'Image Gallery',
    description: 'Gallery based on Unsplash API',
    stack: 'JavaScript, HTML, CSS',
    features: 'API queries, adaptive design',
    img: './assets/img/image-gallery-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-prestage/tree/image-gallery',
    deploy: 'https://rewired25.github.io/RSS-prestage/image-gallery',
  },
  {
    name: 'Shelter for pets',
    description: 'Layout application',
    stack: 'JavaScript, HTML, CSS',
    features: 'Random slider, pagination, burger menu, adaptive design',
    img: './assets/img/shelter-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-main-stages/tree/shelter',
    deploy: 'https://rewired25.github.io/RSS-main-stages/shelter/pages/main',
  },
  {
    name: `Photographer's Portfolio`,
    description: 'Layout application',
    stack: 'JavaScript, HTML, CSS',
    features: 'Adaptive design, dark and light themes, two languages',
    img: './assets/img/portfolio-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-prestage/tree/portfolio',
    deploy: 'https://rewired25.github.io/RSS-prestage/portfolio',
  },
  {
    name: 'CSS meme slider',
    description: 'Slider on pure CSS',
    stack: 'HTML, CSS',
    features: 'Pure CSS',
    img: './assets/img/css-slider-preview.jpg',
    repo: 'https://github.com/ReWired25/css-meme-slider',
    deploy: 'https://rewired25.github.io/css-meme-slider/css-meme-slider',
  },
  {
    name: 'HTML Builder',
    description: 'Node JS application application that creates an assembly from html and css files',
    stack: 'JavaScript',
    features: 'AJAX with streams',
    img: './assets/img/html-builder-preview.jpg',
    repo: 'https://github.com/ReWired25/HTML-builder',
    deploy: 'https://github.com/ReWired25/HTML-builder',
  },
  {
    name: 'MongoDB presentation',
    description: 'Presentation with a brief history of databases and the main features of mongoDB',
    stack: 'Reveal JS',
    features: 'Slide presentation',
    img: './assets/img/mongo-db-preview.jpg',
    repo: 'https://github.com/ReWired25/RSS-main-stages/tree/presentation',
    deploy: 'https://rewired25.github.io/RSS-main-stages/mongodb-presentation',
  },
];

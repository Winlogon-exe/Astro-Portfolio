import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Winlogon-exe',
  linkedin: 'https://www.linkedin.com/in/winlogon',
  mail: 'roman.sarkisyan15@gmail.com',
  instagram: 'https://www.instagram.com/win_log_on/',
  discord: 'https://discordapp.com/users/443444223359057921',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:'Portfolio and blog for developers.',
  AUTHOR: 'Winlogon',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'СКФУ',
    link: 'https://ncfu.ru/',
    date: '2024 - 2028',
  },
  {
    title: 'Computer Science',
    institution: 'Колледж связи',
    link: 'http://stvcc.ru/',
    date: '2021 - 2024',
  },
  
]

export const EXPERIENCE = [
  {
    company: 'StilSoft',
    location: 'Stavropol',
    position: 'C++ Developer',
    start: '30.01.2024',
    link: 'https://stilsoft.su/',
    end: '31.06.2024',
    tasks: [
      'Designed and developed user interfaces using Qt Widgets and Qt Designer.',
      'Integrated SQLite database into the application, implementing create, read, update, and delete (CRUD) operations.',
      'Implemented pagination, filtering, and data search functionality using QSqlQueryModel and custom proxy models.',
      'Optimized SQL queries to improve performance when working with large datasets.',
      'Configured event handling to ensure real-time UI updates in response to data changes.',
      'Developed and executed modular tests for database and UI components.',
      'Contributed to the entire software development lifecycle: from system design to deployment and support.',
    ],
  },
];


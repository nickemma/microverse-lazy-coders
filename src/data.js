/* eslint-disable global-require */

import { FaLaptopCode } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Trainers',
    path: '/trainers',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const programs = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: 'Front End Development',
    info: 'A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.',
    path: '/programs/111',
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Back End Development',
    info: 'The back end developer is a programmer who creates components and features on the server-side, indirectly accessed by a user through a front end application or system. These developers are tasked with creating, maintaining, testing, and debugging the entire back end.',
    path: '/programs/222',
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Fullstack Development',
    info: 'A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application. In this sense, they provide an end-to-end service, and can be involved in projects that involve databases and building user-facing websites.',
    path: '/programs/333',
  },
];

export const values = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: 'Value One',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.',
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: 'Value Two',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.',
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: 'Value Three',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.',
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: 'Value Four',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'How often should I code?',
    answer:
      'Yes, our platform uses a secure payment system to ensure that all transactions are safe and secure. You can feel confident that your personal and financial information is protected when using our platform.',
  },
  {
    id: 2,
    question: 'What time of day is best to code?',
    answer:
      "Yes, you can cancel or reschedule a session with a mentor through our platform. However, please note that our cancellation and rescheduling policies may vary depending on the mentor's availability and the timing of your request. Be sure to review the terms and conditions of your session before booking.",
  },
  {
    id: 3,
    question: 'How long should my coding be?',
    answer:
      'Yes, our platform uses a secure payment system to ensure that all transactions are safe and secure. You can feel confident that your personal and financial information is protected when using our platform',
  },
  {
    id: 4,
    question: 'How to join Lazy Coders Team?',
    answer:
      "Sessions can be conducted online or in-person, depending on the mentor's availability and your preference. You can choose the format that works best for you when booking a session.",
  },
  {
    id: 5,
    question: 'online bootcamp or self-taught?',
    answer:
      "To book a session with a mentor, simply select the mentor you'd like to work with and choose an available time slot that works for you. Our platform will then prompt you to complete the payment process and confirm your session.",
  },
  {
    id: 6,
    question: 'diversity in pair programming?',
    answer:
      "To find a mentor on our platform, simply browse through the profiles of our available mentors. You can filter your search by area of expertise, location, and other factors to find a mentor who is right for you. Once you've found a mentor you'd like to work with, you can easily book a session through our platform.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Oyinlade Ojasemani',
    quote:
      'I have been working with my mentor for the past year and it has completely transformed my career. My mentor has provided me with valuable advice and guidance on my professional development, and has helped me to identify and pursue new opportunities.',
    job: 'Student',
    avatar: require('./images/avatar1.png'),
  },
  {
    id: 2,
    name: 'Oyinlade Ojasemani',
    quote:
      'I have gained so much from our sessions and have seen a marked improvement in my confidence and skills. My mentor has truly been a supportive and invaluable resource for me, and I am so grateful to have connected with them through this platform.',
    job: 'Software Engineer',
    avatar: require('./images/avatar2.jpg'),
  },
  {
    id: 3,
    name: 'Oyinlade Ojasemani',
    quote:
      'I have been working with my mentor for the past year and it has completely transformed my career. My mentor has provided me with valuable advice and guidance on my professional development, and has helped me to identify and pursue new opportunities.',
    job: 'University Lecturer',
    avatar: require('./images/avatar3.jpg'),
  },
  {
    id: 4,
    name: 'Oyinlade Ojasemani',
    quote:
      'I have gained so much from our sessions and have seen a marked improvement in my confidence and skills. My mentor has truly been a supportive and invaluable resource for me, and I am so grateful to have connected with them through this platform.',
    job: 'The Bug Catcher',
    avatar: require('./images/avatar4.jpg'),
  },
  {
    id: 5,
    name: 'Oyinlade Ojasemani',
    quote:
      'I highly recommend working with a mentor to anyone looking to take their career to the next level. It has made a huge difference in my life and I am confident it can do the same for others',
    job: 'Java developer',
    avatar: require('./images/avatar5.jpg'),
  },
];

const Trainer1 = require('./images/trainer1.png');
const Trainer2 = require('./images/trainer2.png');
const Trainer3 = require('./images/trainer3.png');
const Trainer4 = require('./images/trainer4.png');
const Trainer5 = require('./images/avatar4.jpg');
const Trainer9 = require('./images/trainer5.png');
const Trainer6 = require('./images/trainer6.png');
const Trainer7 = require('./images/trainer7.png');
const Trainer8 = require('./images/trainer8.png');
const Trainer10 = require('./images/trainer10.png');
const Trainer11 = require('./images/trainer11.png');
const Trainer12 = require('./images/trainer12.png');

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'Abdelmajid',
    job: 'Javascript Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Dorian Urem',
    job: 'Software Engineer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Said Lassri',
    job: 'Front End Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Chrispaix Kaze',
    job: 'Web Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: 'Oyinlade Ojesanmi',
    job: 'Web Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: 'Piesie Omane',
    job: 'Back End Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 7,
    image: Trainer7,
    name: 'Desmond Owusu Ansah',
    job: 'Mern Stack Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },

  {
    id: 8,
    image: Trainer8,
    name: 'Nicholas Emmanuel',
    job: 'Fullstack Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 9,
    image: Trainer9,
    name: 'Sidney Kaguli',
    job: 'Devops Engineer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 10,
    image: Trainer10,
    name: 'Asim Khan',
    job: 'Software Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 11,
    image: Trainer11,
    name: 'Htet Niang Rex',
    job: 'Mobile Developer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 12,
    image: Trainer12,
    name: 'Tushar Singh',
    job: 'Full-Stack Engineer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://github.com/',
      'https://linkedin.com/',
    ],
  },
];

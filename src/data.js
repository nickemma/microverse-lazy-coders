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
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: 'Software Engineering',
    info: 'Software engineers focus on applying the principles of engineering to software development. Their role includes analyzing and modifying existing software as well as designing, constructing and testing end-user applications. that meet user needs — all through software programming',
    path: '/programs/444',
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
  {
    id: 5,
    icon: <FaLaptopCode />,
    title: 'Value Four',
    desc: 'Placeat quidem facere dicta modi? Pariatur exercitationem illum.',
  },
  {
    id: 6,
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
      'Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!',
  },
  {
    id: 2,
    question: 'What time of day is best to code?',
    answer:
      'Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.',
  },
  {
    id: 3,
    question: 'How long should my coding be?',
    answer:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 4,
    question: 'Do I need to a computer science background?',
    answer:
      'Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!',
  },
  {
    id: 5,
    question: 'Should I join online bootcamp or self-taught?',
    answer:
      'Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.',
  },
  {
    id: 6,
    question: 'How is diversity in pair programming?',
    answer:
      'Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Oyinlade Ojasemani',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
    job: 'Student',
    avatar: require('./images/avatar1.png'),
  },
  {
    id: 2,
    name: 'Oyinlade Ojasemani',
    quote:
      'Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
    job: 'Software Engineer',
    avatar: require('./images/avatar2.jpg'),
  },
  {
    id: 3,
    name: 'Oyinlade Ojasemani',
    quote:
      'Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
    job: 'University Lecturer',
    avatar: require('./images/avatar3.jpg'),
  },
  {
    id: 4,
    name: 'Oyinlade Ojasemani',
    quote:
      'Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.',
    job: 'The Bug Catcher',
    avatar: require('./images/avatar4.jpg'),
  },
  {
    id: 5,
    name: 'Oyinlade Ojasemani',
    quote:
      'Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.',
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
    job: 'UI/UX Designer',
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
];

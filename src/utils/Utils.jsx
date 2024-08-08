import React from "react";

// Navbar
export const NavLink = ({ children, href }) => {
  return (
    <a
      href={href}
      className="py-4 hover:text-orange-500 focus:text-orange-500 md:focus:border-b-4 md:focus:border-orange-500"
    >
      {children}
    </a>
  );
};
export const navLinks = [
  { name: "ACCUEIL", href: "#accueil" },
  { name: "PRÉSENTATION", href: "#presentation" },
  { name: "PORTFOLIO", href: "#portfolio" },
  { name: "COMPÉTENCES", href: "#competences" },
  { name: "EXPÉRIENCES", href: "#experiences" },
];

// Section 1
export const Items = ({ icon: MyIcon, children }) => {
  return (
    <div className="flex items-center justify-center">
      <MyIcon className="text-y mx-2 size-5" />
      <span className="">{children}</span>
    </div>
  );
};

// Section 3
export const getProjects = (images) => [
  {
    title: "Volkeno",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.volkeno,
  },
  {
    title: "Fewnu",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.fewnu,
  },
  {
    title: "Fewnu mobile",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.fewnuMobile,
  },
  {
    title: "Volkeno",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.volkeno2,
  },
  {
    title: "Bakeli Payment",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.BakeliPayment,
  },
  {
    title: "Mixte Feewnu",
    description:
      "Créer un équivalent Netflix de Disney. Pour l'anecdote ce site a été fait avant la création de Disney+.",
    hashtags: "#React #API #Redux",
    githubLink: "#",
    image: images.MixteFeewnu,
  },
];
export const ProjectCard = ({ project }) => (
  <div className="mx-auto text-center max-w-sm rounded bg-w px-14 py-5 shadow hover:shadow-md hover:shadow-y group">
    <img className="w-full h-[190px]" src={project.image} alt={project.title} />
    <div className="px-2 py-4">
      <div className="font-semibold text-xl mb-1 text-g group-hover:text-y">
        {project.title}
      </div>
      <p className="text-gray-900 text-sm font-semibold">
        {project.description}
      </p>
      <p className="text-gray-700 text-base mt-1">{project.hashtags}</p>
    </div>
    <div className="">
      <a
        href={project.githubLink}
        className=" bg-w border border-g hover:border-none group-hover:text-w group-hover:bg-y group-hover:border-none text-g text-[9px] font-semibold py-2 px-4 rounded"
      >
        Voir le projet github
      </a>
    </div>
  </div>
);

// Section 4
export const Tabs = ({h3, p1, p2}) => (
  <div className="bg-white shadow p-6 mb-6 rounded-lg">
    <h3 className="text-xl font-semibold">
      {h3}
    </h3>
    <p className="text-y font-semibold">{p1}</p>
    <p className="mt-4">
      {p2}
    </p>
  </div>
)

export const experiences = [
  {
    h3: "Développeur Front-End en alternance ( RNCP niv 6 ),",
    p1: "Janvier 2021",
    p2: "Pédagogie basée sur la réalisation de projets concrets avec l’accompagnement d’un expert métier chaque semaine. L'alternance peut débuter à tout moment dans l'année avec 4 jours en entreprise et un jour de formation modulables dans la semaine.",
  },
  {
    h3: "CS50, Harvard",
    p1: "Août-octobre 2020",
    p2: "Formation en ligne exclusivement dispensée en anglais. Les sujets comprennent l'abstraction, les algorithmes, les structures de données, l'encapsulation, la gestion des ressources, la sécurité, l'ingénierie logicielle et le développement Web. L'ensemble des problèmes est inspiré des domaines du monde réel de la biologie, de la cryptographie, de la finance et des jeux.",
  },
  {
    h3: "Développeur junior, M2I formation",
    p1: "Mars-Juillet 202",
    p2: "Formation à raison de 35h/s à distance. Ce cursus comprend HTML, CSS, Bootstrap, Algorithmie, Javascript, React JS, Redux, LESS/SAAS, Git, Github enseigné par un expert toujours en activité. Cette formation m'a permis de valider ces enseignements par la pratique de plus d'une douzaine de projets.",
  },
];
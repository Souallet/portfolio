import {
  Css,
  Html,
  Javascript,
  Nextjs,
  Nodejs,
  React,
} from '@/images/programming';
import OltFinances from '@/images/projects/olt-finances.png';

import { type Work } from '@/types/work';

export const works: Work[] = [
  {
    name: 'OLT Finances',
    description:
      "Dashboard permettant d'analyser la situation financière d'une entreprise dont le compte bancaire est chez Tiime. Il suffit d'importer un fichier au format .xlsx pour en extraire les informations clés des finances de l'entreprise.",
    image: OltFinances,
    links: {
      preview: 'https://olt-finances.vercel.app',
      sourceCode: 'https://github.com/Souallet/olt-finances',
    },
    technologies: [
      { name: 'React', image: React },
      { name: 'Nextjs', image: Nextjs },
      { name: 'Javascript', image: Javascript },
      { name: 'html', image: Html },
      { name: 'css', image: Css },
    ],
  },
  {
    name: 'Gas Station Finder',
    description:
      "Application web permettant de lister les stations-service en fonction de certains critères de recherche,les carburants disponible ainsi que leur prix et disponibilités sont affichés. Les données sont récupérées depuis l'API publique du gouvernement français.",
    links: {
      preview: 'https://gas-station-finder.vercel.app',
      sourceCode: 'https://github.com/Souallet/gas-station-finder',
    },
    technologies: [
      { name: 'React', image: React },
      { name: 'Javascript', image: Javascript },
      { name: 'html', image: Html },
      { name: 'css', image: Css },
    ],
  },
  {
    name: 'Judge Bot',
    description:
      "JudgeBot est un petit bot Discord qui vous permet d'exécuter des commandes d'administration soumis à un vote dont la majorité des utilisateurs du serveur doivent être d'accord.",
    links: {
      preview: '',
      sourceCode: 'https://github.com/Souallet/discord-judge-bot',
    },
    technologies: [
      { name: 'NodeJS', image: Nodejs },
      { name: 'Javascript', image: Javascript },
    ],
  },
];

import Dog from '../dog'
import scrum from '../../assets/icons/scrum.png'
export const SkillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: "ReactJS",
        icon: <i class="devicon-react-original colored"></i>
        },
      {
        name: "HTML5",
        icon: <i class="devicon-html5-plain colored"></i>
        },
      {
        name: "JavaScript",
        icon: <i class="devicon-javascript-plain colored"></i>
      },
      {
        name: "CSS3",
        icon: <i class="devicon-css3-plain colored"></i>
      },
      {
        name: "Sass",
        icon: <i class="devicon-sass-plain colored"></i>
      },
      {
        name: "Redux",
        icon: <i class="devicon-redux-plain colored"></i>
      },
      {
        name: "Firebase",
        icon: <i class="devicon-firebase-plain colored"></i>
      },
    ],
  },
  {
    type: "Back-end",
    list: [
      {
        name: "Mongodb",
        icon: <i class="devicon-mongodb-plain colored"></i>
      },
      {
        name: "PostgreSQL",
        icon: <i class="devicon-postgresql-plain colored"></i>
      },
      {
        name: "Nodejs",
        icon: <i class="devicon-nodejs-plain colored"></i>
      },
     
    ],
  },
  {
    type: "Other",
    list: [
      {
        name: "Sprite Sheet Animations",
        icon: <i id='animation' class="devicon-animations-plain colored">{<Dog/>}</i>
      },
      {
        name: "Github",
        icon: <i class="devicon-github-plain colored"></i>
      },
      {
        name: "Git",
        icon: <i class="devicon-git-plain colored"></i>
      },
      {
        name: "Scrum",
        icon: <img src={scrum} class="scrum" alt='scrum'/>
      },
    ],
  },
];
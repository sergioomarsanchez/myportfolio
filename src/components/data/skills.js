import Dog from '../dog'
import scrum from '../../assets/icons/scrum.png'
export const SkillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: "ReactJS",
        icon: <i className="devicon-react-original colored"></i>
        },
      {
        name: "HTML5",
        icon: <i className="devicon-html5-plain colored"></i>
        },
      {
        name: "JavaScript",
        icon: <i className="devicon-javascript-plain colored"></i>
      },
      {
        name: "CSS3",
        icon: <i className="devicon-css3-plain colored"></i>
      },
      {
        name: "Sass",
        icon: <i className="devicon-sass-plain colored"></i>
      },
      {
        name: "Redux",
        icon: <i className="devicon-redux-plain colored"></i>
      },
      {
        name: "Firebase",
        icon: <i className="devicon-firebase-plain colored"></i>
      },
    ],
  },
  {
    type: "Back-end",
    list: [
      {
        name: "Mongodb",
        icon: <i className="devicon-mongodb-plain colored"></i>
      },
      {
        name: "PostgreSQL",
        icon: <i className="devicon-postgresql-plain colored"></i>
      },
      {
        name: "Nodejs",
        icon: <i className="devicon-nodejs-plain colored"></i>
      },
     
    ],
  },
  {
    type: "Other",
    list: [
      {
        name: "Sprite Sheet Animations",
        icon: <i id='animation' className="devicon-animations-plain colored">{<Dog/>}</i>
      },
      {
        name: "Github",
        icon: <i className="devicon-github-plain colored"></i>
      },
      {
        name: "Git",
        icon: <i className="devicon-git-plain colored"></i>
      },
      {
        name: "Scrum",
        icon: <img src={scrum} className="scrum" alt='scrum'/>
      },
      {
        name: "Nextjs",
        icon: <i className="devicon-nextjs-plain colored"></i>
      }
    ],
  },
];
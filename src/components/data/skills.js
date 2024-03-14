import Dog from "../dog";
import scrum from "../../assets/icons/scrum.png";
export const SkillsData = [
  {
    type: "Front-End",
    list: [
      {
        name: "ReactJS",
        icon: (
          <i
            className="devicon-react-original colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "HTML5",
        icon: (
          <i
            className="devicon-html5-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <i
            className="devicon-javascript-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "CSS3",
        icon: (
          <i
            className="devicon-css3-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Sass",
        icon: (
          <i
            className="devicon-sass-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Redux",
        icon: (
          <i
            className="devicon-redux-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <i
            className="devicon-tailwindcss-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Typescript",
        icon: (
          <i
            className="devicon-typescript-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
    ],
  },
  {
    type: "Back-end",
    list: [
      {
        name: "Mongodb",
        icon: (
          <i
            className="devicon-mongodb-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <i
            className="devicon-postgresql-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Nodejs",
        icon: (
          <i
            className="devicon-nodejs-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
    ],
  },
  {
    type: "Other",
    list: [
      {
        name: "Sprite Sheet Animations",
        icon: (
          <i id="animation" className="devicon-animations-plain colored" widht="45px"
          height="45px">
            {<Dog />}
          </i>
        ),
      },
      {
        name: "Github",
        icon: (
          <i
            className="devicon-github-plain colored"
            widht="45px"
            height="45px"
            />
        ),
      },
      {
        name: "Git",
        icon: (
          <i
            className="devicon-git-plain colored"
            widht="45px"
            height="45px"
            />
        ),
      },
      {
        name: "Scrum",
        icon: (
          <img
            src={scrum}
            className="scrum"
            alt="scrum"
            widht="45px"
            height="45px"
          />
        ),
      },
      {
        name: "Nextjs",
        icon: (
          <i
            className="devicon-nextjs-plain colored"
            widht="45px"
            height="45px"
            />
        ),
      },
      {
        name: "Trello",
        icon: (
          <i
            className="devicon-trello-plain colored"
            widht="45px"
            height="45px"
          />
        ),
      },
    ],
  },
];

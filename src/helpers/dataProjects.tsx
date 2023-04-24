import { ReactElement } from "react";

export interface Project {
  projectName: string;
  projectImage: ReactElement;
  projectLogo?: ReactElement;
  projectBanner?: string;
  projectDescription: string;
  projectLongDescription?: string;
  projectSs?: string;
  projectLink?: string;
  projectCodeLink?: string;
  tools?: string[];
  extraResources?: string[];
}

export const projectList: Project[] = [
  {
    projectName: "Social Rot",
    projectImage: (
      <svg
        className="project-card__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.67 78.36"
      >
        <path
          fill="#f60"
          d="M49.77 1.5v21h-3.84q-4.32-18.28-21-18.28A18.86 18.86 0 0012.89 8q-4.83 3.81-4.83 8.67a7.53 7.53 0 003.42 6.52q3.42 2.39 16.17 4.08 28 3.46 28 25.49a24.91 24.91 0 01-7.26 18.28 24.43 24.43 0 01-18 7.31q-10.59 0-20.53-8.72l-6.58 5.64H0V47.62h3.28q8.06 26.52 27.09 26.52a20.87 20.87 0 0013.12-4.59Q49.4 65 49.4 58.77c0-3.43-1.17-6-3.52-7.78s-8.67-3.37-19-4.87Q.56 42.27.56 22.68A21.07 21.07 0 017.64 6.52 24.57 24.57 0 0124.93 0 24.9 24.9 0 0143 7.13a26.44 26.44 0 003.86-5.63z"
        />
      </svg>
    ),
    projectLogo: (
      <svg
        className="project-presentation__logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55.67 78.36"
      >
        <path
          fill="#f60"
          d="M49.77 1.5v21h-3.84q-4.32-18.28-21-18.28A18.86 18.86 0 0012.89 8q-4.83 3.81-4.83 8.67a7.53 7.53 0 003.42 6.52q3.42 2.39 16.17 4.08 28 3.46 28 25.49a24.91 24.91 0 01-7.26 18.28 24.43 24.43 0 01-18 7.31q-10.59 0-20.53-8.72l-6.58 5.64H0V47.62h3.28q8.06 26.52 27.09 26.52a20.87 20.87 0 0013.12-4.59Q49.4 65 49.4 58.77c0-3.43-1.17-6-3.52-7.78s-8.67-3.37-19-4.87Q.56 42.27.56 22.68A21.07 21.07 0 017.64 6.52 24.57 24.57 0 0124.93 0 24.9 24.9 0 0143 7.13a26.44 26.44 0 003.86-5.63z"
        />
      </svg>
    ),
    projectBanner:
      "https://img.freepik.com/free-vector/work-office-computer-man-woman-business-character-marketing-online-employee-technology-business-man-cartoon-co-working-flat-design-freelance_1150-41790.jpg?w=826&t=st=1681354430~exp=1681355030~hmac=fefa8613276b62679b7600bcbc8857c1b511587bc38beeeb8733e17c10cf222f",
    projectDescription:
      "This project began as a Facebook copy, but I also use it to show my progress with new technologies",
    projectLongDescription:
      "This Project helped me to have a better understanding of Html5 tags and good practices; Css3 selectors; and vanilla JavaScript fetching as well as creating HTML tags within it",
    projectLink: "#",
    projectCodeLink: "#",
    projectSs: "",
    tools: ["Html5", "Css3", "JavaScript"],
    extraResources: ["freepik", "GithubPages"],
  },
  {
    projectName: "Guess game",
    projectImage: (
      <svg
        fill="currentColor"
        viewBox="0 0 100 100"
        id="Layer_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="project-card__svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M93.998,45.312c0-3.676-1.659-7.121-4.486-9.414c0.123-0.587,0.184-1.151,0.184-1.706c0-4.579-3.386-8.382-7.785-9.037 c0.101-0.526,0.149-1.042,0.149-1.556c0-4.875-3.842-8.858-8.655-9.111c-0.079-0.013-0.159-0.024-0.242-0.024 c-0.04,0-0.079,0.005-0.12,0.006c-0.04-0.001-0.079-0.006-0.12-0.006c-0.458,0-0.919,0.041-1.406,0.126 c-0.846-4.485-4.753-7.825-9.437-7.825c-5.311,0-9.632,4.321-9.632,9.633v65.918c0,6.723,5.469,12.191,12.191,12.191 c4.46,0,8.508-2.413,10.646-6.246c0.479,0.104,0.939,0.168,1.401,0.198c2.903,0.185,5.73-0.766,7.926-2.693 c2.196-1.927,3.51-4.594,3.7-7.51c0.079-1.215-0.057-2.434-0.403-3.638c3.796-2.691,6.027-6.952,6.027-11.621 c0-3.385-1.219-6.635-3.445-9.224C92.731,51.505,93.998,48.471,93.998,45.312z M90.938,62.999c0,3.484-1.582,6.68-4.295,8.819 c-2.008-3.196-5.57-5.237-9.427-5.237c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5c3.341,0,6.384,2.093,7.582,5.208 c0.41,1.088,0.592,2.189,0.521,3.274c-0.138,2.116-1.091,4.051-2.685,5.449c-1.594,1.399-3.641,2.094-5.752,1.954 c-0.594-0.039-1.208-0.167-1.933-0.402c-0.74-0.242-1.541,0.124-1.846,0.84c-1.445,3.404-4.768,5.604-8.465,5.604 c-5.068,0-9.191-4.123-9.191-9.191V16.399c0-3.657,2.975-6.633,6.632-6.633c3.398,0,6.194,2.562,6.558,5.908 c-2.751,1.576-4.612,4.535-4.612,7.926c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5c0-3.343,2.689-6.065,6.016-6.13 c3.327,0.065,6.016,2.787,6.016,6.129c0,0.622-0.117,1.266-0.359,1.971c-0.057,0.166-0.084,0.34-0.081,0.515 c0.001,0.041,0.003,0.079,0.007,0.115c-0.006,0.021-0.01,0.035-0.01,0.035c-0.118,0.465-0.006,0.959,0.301,1.328 c0.307,0.369,0.765,0.569,1.251,0.538c0.104-0.007,0.208-0.02,0.392-0.046c3.383,0,6.136,2.753,6.136,6.136 c0,0.572-0.103,1.159-0.322,1.849c-0.203,0.635,0.038,1.328,0.591,1.7c2.434,1.639,3.909,4.329,4.014,7.242 c0,0.004-0.001,0.008-0.001,0.012c0,5.03-4.092,9.123-9.122,9.123s-9.123-4.093-9.123-9.123c0-0.829-0.672-1.5-1.5-1.5 s-1.5,0.671-1.5,1.5c0,6.685,5.438,12.123,12.123,12.123c2.228,0,4.31-0.615,6.106-1.668C89.88,57.539,90.938,60.212,90.938,62.999 z"></path>
            <path d="M38.179,6.766c-4.684,0-8.59,3.34-9.435,7.825c-0.488-0.085-0.949-0.126-1.407-0.126c-0.04,0-0.079,0.005-0.12,0.006 c-0.04-0.001-0.079-0.006-0.12-0.006c-0.083,0-0.163,0.011-0.242,0.024c-4.813,0.253-8.654,4.236-8.654,9.111 c0,0.514,0.049,1.03,0.149,1.556c-4.399,0.655-7.785,4.458-7.785,9.037c0,0.554,0.061,1.118,0.184,1.706 c-2.827,2.293-4.486,5.738-4.486,9.414c0,3.159,1.266,6.193,3.505,8.463c-2.227,2.589-3.446,5.839-3.446,9.224 c0,4.669,2.231,8.929,6.027,11.621c-0.347,1.204-0.482,2.423-0.402,3.639c0.19,2.915,1.503,5.582,3.699,7.509 c2.196,1.928,5.015,2.879,7.926,2.693c0.455-0.03,0.919-0.096,1.4-0.199c2.138,3.834,6.186,6.247,10.646,6.247 c6.722,0,12.191-5.469,12.191-12.191V16.399C47.811,11.087,43.49,6.766,38.179,6.766z M44.811,82.317 c0,5.068-4.123,9.191-9.191,9.191c-3.697,0-7.02-2.2-8.464-5.604c-0.241-0.567-0.793-0.914-1.381-0.914 c-0.154,0-0.311,0.023-0.465,0.074c-0.724,0.235-1.338,0.363-1.933,0.402c-2.119,0.139-4.158-0.556-5.751-1.954 c-1.594-1.398-2.547-3.333-2.685-5.449c-0.076-1.16,0.125-2.336,0.598-3.495c0.007-0.017,0.005-0.036,0.011-0.053 c1.342-3.056,4.225-4.953,7.597-4.953c0.829,0,1.5-0.672,1.5-1.5s-0.671-1.5-1.5-1.5c-3.938,0-7.501,2.007-9.548,5.239 c-2.701-2.139-4.277-5.327-4.277-8.802c0-2.787,1.06-5.46,2.978-7.549c1.796,1.053,3.879,1.668,6.107,1.668 c6.685,0,12.123-5.438,12.123-12.123c0-0.829-0.671-1.5-1.5-1.5s-1.5,0.671-1.5,1.5c0,5.03-4.092,9.123-9.123,9.123 s-9.123-4.093-9.123-9.123c0-0.002-0.001-0.004-0.001-0.006c0.103-2.915,1.578-5.607,4.013-7.248 c0.553-0.372,0.793-1.064,0.591-1.699c-0.22-0.691-0.322-1.278-0.322-1.85c0-3.376,2.741-6.125,6.195-6.125 c0.007,0,0.015,0,0.022,0c0.103,0.014,0.206,0.027,0.311,0.034c0.485,0.03,0.948-0.171,1.254-0.542 c0.307-0.372,0.417-0.868,0.294-1.334c0-0.001-0.003-0.014-0.008-0.031c0.003-0.035,0.006-0.067,0.007-0.095 c0.005-0.18-0.022-0.359-0.081-0.529c-0.242-0.707-0.359-1.352-0.359-1.972c0-3.342,2.688-6.065,6.016-6.129 c3.328,0.065,6.016,2.787,6.016,6.13c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5c0-3.391-1.861-6.35-4.612-7.926 c0.364-3.346,3.16-5.908,6.558-5.908c3.657,0,6.632,2.976,6.632,6.633V82.317z"></path>
          </g>
        </g>
      </svg>
    ),
    projectLogo: (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 392.404 392.404"
        className="project-presentation__logo"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill="#FFFFFF"
            d="M289.981,370.747V358.4c0-39.434,13.964-78.416,39.305-109.705 c23.208-28.962,31.418-51.135,30.901-87.467c0-76.8-62.513-139.313-139.313-139.313S81.561,84.428,81.561,161.228v32.388 c0,2.457-0.84,4.913-2.392,6.853l-35.103,43.507h26.57c6.012,0,10.925,4.848,10.925,10.925v32.517 c0,7.24,5.883,13.123,13.123,13.123h28.832c6.012,0,10.925,4.848,10.925,10.925v59.345h155.539V370.747z"
          ></path>{" "}
          <path
            fill="#56ACE0"
            d="M305.496,222.707c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925h26.246 c1.745-4.848,3.103-9.891,4.202-14.933h-49.842c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925h52.364 c0-1.034,0.129-2.004,0.129-3.038c0-64.84-52.687-117.527-117.527-117.527S103.541,96.194,103.541,161.034v43.96L89.9,222.125 h13.705v56.566h52.945v70.335h112.097c2.069-41.18,17.455-81.261,43.895-113.972c3.168-3.879,5.947-7.952,8.469-12.218h-15.515 V222.707z"
          ></path>{" "}
          <g>
            {" "}
            <path
              fill="#194F82"
              d="M226.305,62.255c-27.669-3.491-53.139,18.747-53.139,47.451c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925c1.228-16.679,12.218-26.958,28.962-25.794c11.636,1.293,21.463,11.055,22.82,22.82 c1.228,11.507-4.913,22.238-15.515,26.828c-12.8,5.56-21.204,18.554-21.204,33.164v21.463c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-21.463c0-5.818,3.232-11.055,7.952-13.123c19.394-8.339,30.901-28.121,28.574-49.196 C265.933,82.36,248.284,64.646,226.305,62.255z"
            ></path>{" "}
            <path
              fill="#194F82"
              d="M220.939,207.451c-6.012,0-10.925,4.848-10.925,10.925v8.727c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-8.727C231.799,212.364,226.951,207.451,220.939,207.451z"
            ></path>{" "}
            <path
              fill="#194F82"
              d="M220.939,0C132.05,0,59.775,72.275,59.775,161.099v28.509l-46.998,58.246 c-2.651,3.232-3.168,7.758-1.293,11.507c1.745,3.814,5.624,6.206,9.826,6.206h38.465v21.657c0,19.265,15.709,34.909,34.909,34.909 h18.036v59.345c0,6.012,4.848,10.925,10.925,10.925h177.261c6.012,0,10.925-4.848,10.925-10.925v-23.273 c0-34.457,12.218-68.525,34.457-96.065c23.079-28.509,35.75-64.453,35.75-101.236C382.038,72.275,309.763,0,220.939,0z M329.222,248.63c-25.341,31.354-39.305,70.335-39.305,109.77v12.347H134.442v-59.345c0-6.012-4.848-10.925-10.925-10.925H94.62 c-7.24,0-13.123-5.883-13.123-13.123v-32.517c0-6.012-4.848-10.925-10.925-10.925h-26.57l35.103-43.507 c1.552-1.939,2.392-4.331,2.392-6.853v-32.388c0-76.8,62.513-139.313,139.313-139.313s139.313,62.513,139.313,139.313 C360.769,197.43,352.494,219.669,329.222,248.63z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    projectBanner:
      "https://img.freepik.com/free-vector/connecting-teams-concept-landing-page_52683-27129.jpg?w=740&t=st=1681355165~exp=1681355765~hmac=18db220a6a3dd4fed01411b1a1370a6bf2923a8256637d467eff85683e26c33f",
    projectDescription:
      "With this project I learn how to properly use JavaScript to have a correct user interaction",
    projectLongDescription:
      "I learned more about object oriented programming by creating this simple guess game, I try as much as I can to avoid bugs and also helped to practice more responsive design",
    projectLink: "#",
    projectCodeLink: "#",
    projectSs: "",
    tools: ["Html5", "Css3", "JavaScript"],
    extraResources: ["SVGRepo", "GithubPages"],
  },
  {
    projectName: "Html, Css + Javascript Vanilla Portfolio",
    projectImage: <svg className="project-card__img"></svg>,
    projectDescription: "This is a fb Copy",
  },
  {
    projectName: "React task manager",
    projectImage: <svg className="project-card__img"></svg>,
    projectDescription: "This is a fb Copy",
  },
  {
    projectName: "React trip page",
    projectImage: <svg className="project-card__img"></svg>,
    projectDescription: "This is a fb Copy",
  },
  {
    projectName: "React Pokedex",
    projectImage: <svg className="project-card__img"></svg>,
    projectDescription: "This is a fb Copy",
  },
];

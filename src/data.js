const TTTLogo = "/assets/New-Logo.png";
const portLogo = "/assets/portfolio-logo.jpg";
const reactLogo = "/assets/react-logo.png";
const ffLogo = "/assets/funky-friday-logo.png";
const redBaboonLogo = "/assets/redbaboon-logo.png";
const a1 = "/assets/a1.png";
const a2 = "/assets/a2.png";
const a3 = "/assets/a3.png";
const a4 = "/assets/a4.png";
const a5 = "/assets/a5.png";
const b1 = "/assets/b1.png";
const b2 = "/assets/b2.png";
const b3 = "/assets/b3.png";
const b4 = "/assets/b4.png";
const c1 = "/assets/c1.png";
const c2 = "/assets/c2.png";
const c3 = "/assets/c3.png";
const d1 = "/assets/d1.png";
const d2 = "/assets/d2.png";
const d3 = "/assets/d3.png";
const d4 = "/assets/d4.png";
const e1 = "/assets/e1.png";
const e2 = "/assets/e2.png";
const e3 = "/assets/e3.png";
const e4 = "/assets/e4.png";
const e5 = "/assets/e5.png";

export default [
  {
    id: 1,
    image: ffLogo,
    title: "Funky Friday",
    displayImages: [e1, e2, e3, e4, e5],
    text: `<p>FunkyFriday is a unique album rating app with a simple premise: you can't see any album's rating until you've rated it yourself. We developed this idea after realising how much people's perceptions can be skewed by seeing overall ratings beforehand.</p>
    <br>
    <p>With FunkyFriday, we aimed to apply everything we learned = RedBaboon while taking our development to the next level. While similar in some ways (again hosted on Vercel, using MongoDB and Next.js), we adopted a more professional approach this time. We implemented agile methodologies, using Excalidraw for UX design where we mapped out user journeys, discussed features, and planned functionality before implementation.</p>
    <br>
    <p>After finalising the UX design, we used Jira's Kanban board to create epics and break them down into manageable tickets. We assigned tickets to each other, working both independently and through pair programming sessions. Each feature went through GitHub pull requests with code reviews before merging into master - establishing a proper development workflow.</p>
    <br>
    <p>We maintain weekly standups to review progress and plan upcoming work. This represents the most professional project I've worked on to date, and it's still actively evolving. I'm applying all my university knowledge and past experience to this ongoing development, and I'm excited to see where we take it as we're still in the early stages of production.</p>
    <br>
    <p>Click the link in the header to explore the app yourself.</p>`,
    condensedText:
      "FunkyFriday is an album rating app where users rate albums without seeing others' ratings. Built with Next.js and MongoDB, it follows agile methodologies and professional workflows.",
    gitHubLink: "https://funkyfriday.vercel.app",
    hoverColour: "hover:border-green-800",
  },
  {
    id: 2,
    image: redBaboonLogo,
    title: "RedBaboon",
    displayImages: [d1, d2, d3, d4],
    text: `<p>RedBaboon is a climbing tracker app that I developed with a friend. 
    While climbing, we wanted a way to log our climbs on the go to track our progress over time. Although plenty of existing apps offer this functionality, we decided to take on the challenge of building our own.</p>  
    
    <br>  

    <p>Since we climb as a group, we already had at least eight test users who provided valuable feedback during development. 
    The app is hosted on Vercel and uses MongoDB as the database, with Google Auth for login functionality.</p>  
    <br>  
    <p>We collaborated on the app, gradually adding features such as climb logging, user posts, analytics, and climb/post management (editing and deleting). This was my first time working with Next.js, and it taught me a lot about the framework’s structure. We designed the app with mobile-first in mind since climbers typically log routes on their phones while bouldering so it’s optimised for smaller screens.</p>  
    <br>  
    <p>Developing RedBaboon was both a rewarding and enjoyable experience. In fact, we enjoyed it so much that we took our collaboration further by working on our next project: Funky Friday.</p>  
    <br>  
    <p>Click the link in the header to explore the app yourself.</p>`,
    condensedText:
      "RedBaboon is a mobile-first climbing tracker app built with Next.js, MongoDB, and Google Auth. It allows users to log climbs, track progress, and interact with posts.",
    gitHubLink: "https://redbaboon.vercel.app",
    hoverColour: "hover:border-red-900",
  },
  {
    id: 3,
    image: portLogo,
    title: "Portfolio website",
    displayImages: [c1, c2, c3],
    text: `<p>This portfolio website serves as a showcase for my projects and professional skills. I designed it with a clean, minimalist aesthetic to ensure visitors can easily explore my work and background.</p><br/>

<p>My programming journey began with Java during university studies. Though JavaScript shares some syntax similarities with Java, adapting to React's component-based architecture proved challenging. This learning curve inspired me to enroll in a comprehensive React course to develop these new skills.</p><br/>

<p>Following numerous guided projects from the course, this portfolio marks my first fully independent web development attempt built without tutorial assistance. I further challenged myself by implementing all styling exclusively with Tailwind CSS. Additionally, this represents my first experience deploying a website using Vercel's platform.</p>
<br/>
<p>During my time working on my portfolio, I went through numerous designs and redesigns. Some of the images showcase what the original website looked like, along with some of the concepts I created in Exalidraw. Initially, I just had logos in the menu with titles.

 However, after receiving some feedback and thinking it over, I realized that this approach showed too little information and wouldn't effectively interest anyone who wanted to quickly see what I've accomplished.</p>
<br/>
<p>I then created more designs in Exalidraw and decided to implement project cards that provide a quick overview of each project, with the option to click through for more detailed information. I also refined the styling, reduced the size of certain images to improve readability, and worked on overall improvements to my website.</p>
<br/>
<p>This project showed me how valuable it is to continuously work on and improve your projects. Click the link in the header to check out the GitHub repository.</p>`,
    condensedText:
      "My portfolio website showcases my projects and skills, built independently using React and styled with Tailwind CSS. It represents my transition from Java to web development.",
    gitHubLink: "https://milosz-wrobel.vercel.app",
    hoverColour: "hover:border-black",
  },
  {
    id: 4,
    image: reactLogo,
    title: "React Websites",
    displayImages: [b1, b2, b3, b4],
    text: `<p>This portfolio showcases various React projects I've developed throughout my learning process.</p><br/>

<p>While these projects originated from following a React course (meaning the concepts weren't my own), completing them provided me with the fundamental skills I later applied to original work.</p><br/>

<p>The collection demonstrates a range of React development techniques - from basic component creation to more sophisticated application building.</p><br/>

<p>It includes simpler implementations like calculator interfaces alongside more complex systems such as the AI-powered Tic Tac Toe game.</p><br/>

<p>You can explore all these projects by clicking the GitHub link in the header.</p>`,
    condensedText:
      "A collection of React projects created during my learning journey, showcasing skills from simple components to advanced applications like a Tic Tac Toe game with AI.",
    gitHubLink: "https://github.com/MiloszWrobel?tab=repositories",
    hoverColour: "hover:border-teal-400",
  },
  {
    id: 5,
    image: TTTLogo,
    title: "Tic-Tac-Toe",
    displayImages: [a3, a2, a1, a4, a5],
    text: `<p>This Tic Tac Toe web application provides an interactive gaming experience featuring both player-versus-player and player-versus-computer gameplay options.</p><br/>

<p>The project began as part of a React development course I was taking. After completing the initial requirements - which only included two-player functionality - I decided to expand the project further by implementing an AI opponent.</p><br/>

<p>Through the game's menu interface, players can select either traditional two-player mode or challenge the computer at three distinct difficulty levels. The AI's behavior varies significantly between easy (random moves), medium (opportunistic wins), and hard (strategic Minimax algorithm) settings.</p><br/>

<p>The advanced difficulty mode utilizes a dedicated Minimax algorithm component that analyzes potential moves to provide a formidable challenge. At the easiest level, the computer makes random selections, while the medium difficulty adds basic win detection to capitalize on immediate opportunities.</p><br/>

<p>Built with React, the application employs useState hooks to manage game state, track player information, and monitor board positions. Separate TwoPlayer and AiGame components handle the different modes, each with their own GameBoard displays and GameOver notifications. A comprehensive move Log component maintains a complete history of gameplay.</p><br/>

<p>You can explore this project further by clicking the GitHub button in the header.</p>`,
    condensedText:
      "This Tic Tac Toe website offers player-versus-player and player-versus-AI modes with three AI difficulty levels. It uses React for state management and features components for game boards, logs, and end-game messages. The hard AI employs the Minimax algorithm for strategic gameplay.",
    gitHubLink: "https://github.com/MiloszWrobel/Tic-Tac-Toe-Project-Revisit",
    hoverColour: "hover:border-black",
  },
];

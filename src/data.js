const TTTLogo = "/assets/New-Logo.png"
const portLogo = "/assets/portfolio-logo.jpg"
const reactLogo = "/assets/react-logo.png"
const ffLogo = "/assets/funky-friday-logo.png"
const redBaboonLogo = "/assets/redbaboon-logo.png"
const a1 = "/assets/a1.png"
const a2 = "/assets/a2.png"
const a3 = "/assets/a3.png"
const a4 = "/assets/a4.png"
const a5 = "/assets/a5.png"
const b1 = "/assets/b1.png"
const b2 = "/assets/b2.png"
const b3 = "/assets/b3.png"
const b4 = "/assets/b4.png"
const c1 = "/assets/c1.png"
const c2 = "/assets/c2.png"
const c3 = "/assets/c3.png"
const d1 = "/assets/d1.png"
const d2 = "/assets/d2.png"
const d3 = "/assets/d3.png"
const d4 = "/assets/d4.png"
const e1 = "/assets/e1.png"
const e2 = "/assets/e2.png"
const e3 = "/assets/e3.png"
const e4 = "/assets/e4.png"
const e5 = "/assets/e5.png"

export default [
  {
    id: 1,
    image: TTTLogo,
    title: "Tic-Tac-Toe",
    displayImages: [a1, a2, a3, a4, a5],
    text: `<p> This Tic Tac Toe website offers a versatile and engaging game experience with both player-versus-player and player-versus-AI game modes.

    Initially, this website originated = a React course that I've been actively studying. However, once I finished programming the website, I took it upon myself to continue working on it. Originally, the game was only playable with two players, and there was no AI mode.
    
    Naturally, I thought to myself that that was the next step I should take when working on a game such as this.
    
    Users can select their preferred mode = a Menu component, which provides options for the two-player mode or an AI opponent. For the AI games, players can choose = three difficulty levels: easy, medium, and hard, which adjust the AI's decision-making strategy.
    
    </p> <br/> <p> The hard AI difficulty is controlled using a separate Minimax component that enhances gameplay by employing strategic logic to create a challenging opponent. The easy difficulty simply selects a random available square, and the medium difficulty does the same unless it detects a winning move, which it will always take.
    
    The app is built with React functionalities such as state management (useState) for tracking game states, player names, and selected squares, creating a responsive and interactive experience.
    
    The TwoPlayer and AiGame components manage distinct game boards, each equipped with its own GameBoard component for rendering the grid and a GameOver component for displaying end-game messages. The app also includes a Log component to record each move, giving players a detailed history of their gameplay.
  
    </p> <br/> <p> You can follow the button below this text container to take a look at this project on my GitHub page, or alternatively, you can select the other button, which will take you directly to the website so that you can check it out for yourself.</p>`,
    gitHubLink: "https://github.com/MiloszWrobel/Tic-Tac-Toe-Project-Revisit",
  },
  {
    id: 2,
    image: reactLogo,
    title: "React Websites",
    displayImages: [b1, b2, b3, b4],
    text: `<p> This is a collection of various React projects that I have created during my learning journey. 
    
    All of these projects originated = following a React course, so while they are not my own ideas, completing them has taught me all the essential skills that I later used to create my own projects. 
    
    Each project showcases different aspects of React development, = simple components to more complex applications. 
    
    Some are simple websites, such as calculators, while others are more advanced, such as the Tic Tac Toe game with an AI opponent. 
    
    </p> <br/> <p> You can follow the button below to take a look at all of these projects on my GitHub page.</p>`,
    gitHubLink: "https://github.com/MiloszWrobel?tab=repositories",
  },
  {
    id: 3,
    image: portLogo,
    title: "Portfolio website",
    displayImages: [c1, c2, c3],
    text: `<p> This is my portfolio website, which I created to showcase my projects and skills.
    I wanted to create a simple and clean design that would allow visitors to easily navigate through my work and learn more about me.<p>
    <br> 
    <p>During my university studies, I primarily programmed in Java. While JavaScript and Java share some similarities, developing websites in React presented a significant challenge for me. This motivated me to invest in a dedicated React course to strengthen my skills.</p>
    <br>
    <p>After building various projects through the course, this portfolio represents one of my first completely independent web development projects
    created without tutorials or external guidance. I added an extra challenge by implementing all styling using Tailwind CSS rather than traditional CSS, pushing myself to learn this modern utility-first framework. This is also the first website that I made that was deployed using vercel.</p>
  `,
    gitHubLink: "https://milosz-wrobel.vercel.app",
  },
  {
    id: 4,
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
    <p>Click the button below to explore the app yourself.</p>`,
    gitHubLink: "https://redbaboon.vercel.app",
  },
  {
    id: 5,
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
    <p>Click the button below to explore the app yourself.</p>`,
    gitHubLink: "https://funkyfriday.vercel.app",
  },
]

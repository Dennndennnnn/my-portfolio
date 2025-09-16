import portfolioImg from "../assets/portfolio.jpg";
import inventoryImg from "../assets/inventory.jpg";
import gameImg from "../assets/game.jpg";

const projects = [
  { 
    title: "Portfolio Website", 
    desc: "I designed and developed my own portfolio website to showcase my skills and projects as a student developer. I built it using HTML, CSS, and JavaScript, making sure it’s responsive and easy to navigate.",
    image: portfolioImg
  },
  { 
    title: "Inventory System", 
    desc: "I created an inventory system that allows users to manage stocks, track items, and update quantities efficiently. I developed this project using Python and JavaScript to practice and improve my problem-solving skills.",
    image: inventoryImg
  },
  { 
    title: "Game Development Project", 
    desc: "I developed a simple 2D game using JavaScript where I focused on game logic, interactivity, and user engagement. This project helped me explore the basics of game design and improved my programming creativity.",
    image: gameImg
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href="#" className="btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

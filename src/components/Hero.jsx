import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profilePic} alt="John Deniell" className="hero-pic" />
      <h1>Hello, I’m <span>John Deniell</span></h1>
      <p>Web Developer | Designer | Creator</p>
      <a href="#projects" className="btn">View My Work</a>
    </section>
  );
}
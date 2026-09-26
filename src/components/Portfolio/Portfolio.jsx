import "./Portfolio.css";
function Portfolio() {
  const projects = [
    {
      title: "My Portfolio Website",
      description: "เว็บไซต์ Portfolio ส่วนตัว พัฒนาด้วย React",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
    },
    {
      title: "Web Design Project",
      description: "การออกแบบหน้าเว็บไซต์ด้วย HTML และ CSS",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
    },
    {
      title: "Programming Project",
      description: "โปรเจกต์ฝึกเขียนโปรแกรมและพัฒนาทักษะ",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700",
    },
  ];

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <p>Some of my projects</p>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
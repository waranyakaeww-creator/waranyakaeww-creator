import "./Number.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Number() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 3,
      title: "Projects",
    },
    {
      number: 5,
      title: "Skills",
    },
    {
      number: 2,
      title: "Years Learning",
    },
  ];

  return (
    <section id="number" ref={ref}>
      <h2>My Achievements</h2>

      <div className="number-list">
        {stats.map((item, index) => (
          <div className="number-card" key={index}>
            <h3>
              {inView ? (
                <CountUp end={item.number} duration={2} />
              ) : (
                0
              )}
              +
            </h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Number;
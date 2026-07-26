import "./News.css";

const news = [
  {
    date: "12 July 2026",
    title: "Annual Science Exhibition 2026",
    text: "Students showcased innovative projects focusing on sustainability and technology."
  },
  {
    date: "08 July 2026",
    title: "Inter School Football Championship",
    text: "Our senior boys' team secured first place in the city-level tournament."
  },
  {
    date: "01 July 2026",
    title: "Admissions Open",
    text: "Applications are now open for the 2026–27 academic session."
  }
];

function News() {
  return (
    <section className="news">
      <div className="container">

        <div className="section-title">
          <span>Latest News</span>
          <h2>News & Events</h2>
        </div>

        <div className="news-grid">

          {news.map((item, index) => (
            <div className="news-card" key={index}>
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#">Read More →</a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default News;
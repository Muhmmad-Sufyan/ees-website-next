import Link from "next/link";

const newsItems = [
  {
    id: 1,
    category: "CURRICULUM",
    categoryColor: "#075154",
    image: "/assets/img/pages/home/banner-images/banner-1.1.jpeg",
    date: "October 24, 2023",
    title: "2024 Academic Curriculum Model Unveiled",
    link: "/resources",
  },
  {
    id: 2,
    category: "TRAINING",
    categoryColor: "#2d7a7d",
    image: "/assets/img/services/teacher-training-program-icon.png",
    date: "October 15, 2023",
    title: "Annual Educators Symposium: Empowering the Future",
    link: "/resources",
  },
  {
    id: 3,
    category: "DIGITAL",
    categoryColor: "#075154",
    image: "/assets/img/pages/home/banner-images/banner-2.1.jpeg",
    date: "October 06, 2023",
    title: "AlifLaila Digital Library Reaches 1M Downloads",
    link: "/resources",
  },
  {
    id: 4,
    category: "MEDIA",
    categoryColor: "#2d7a7d",
    image: "/assets/img/pages/home/banner-images/banner-3.1.jpeg",
    date: "September 28, 2023",
    title: "New Animated Series 'Values of Life' Premieres",
    link: "/resources",
  },
];

export default function LatestNews() {
  return (
    <section className="latest-news-section ptb-80">
      <div className="container">
        <div className="latest-news-header">
          <div>
            <span className="latest-news-label">STAY INFORMED</span>
            <h2 className="latest-news-title">
              LATEST <em>UPDATES</em> & NEWS
            </h2>
          </div>
          <Link href="/resources" className="latest-news-view-all">
            VIEW ALL NEWS <i className="fa fa-arrow-right"></i>
          </Link>
        </div>

        <div className="row">
          {newsItems.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div
                className="latest-news-card"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="latest-news-card-img">
                  <img src={item.image} alt={item.title} />
                  <span
                    className="latest-news-badge"
                    style={{ backgroundColor: item.categoryColor }}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="latest-news-card-body">
                  <p className="latest-news-date">
                    <i className="fa fa-calendar-o"></i> {item.date}
                  </p>
                  <h4 className="latest-news-card-title">{item.title}</h4>
                  <Link href={item.link} className="latest-news-read-more">
                    READ MORE <i className="fa fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

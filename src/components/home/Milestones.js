export default function Milestones() {
  const stats = [
    {
      icon: "fa-graduation-cap",
      value: "500+",
      label: "PARTNER SCHOOLS",
      description: "Delivering quality education across various regions.",
    },
    {
      icon: "fa-book",
      value: "1M+",
      label: "BOOKS PUBLISHED",
      description: "Curriculum tailored for indigenous thought & values.",
    },
    {
      icon: "fa-users",
      value: "15k+",
      label: "TRAINED TEACHERS",
      description: "Empowering educators with modern pedagogical skills.",
    },
    {
      icon: "fa-globe",
      value: "12+",
      label: "CITIES REACHED",
      description: "Expanding our footprint for educational reform.",
    },
  ];

  const institutions = [
    "HUDA INST",
    "BEACON ACADEMY",
    "SOCIETY FOUND",
    "CITY SCHOOLS",
  ];

  return (
    <section className="milestones-section ptb-80">
      <div className="container">
        <div className="milestones-header" data-aos="fade-down" data-aos-duration="1000">
          <span className="milestones-label">OUR MILESTONES</span>
          <h2 className="milestones-title">
            Measuring Our <em>Impact</em>
          </h2>
          <div className="milestones-divider"></div>
        </div>

        <div className="row milestones-cards">
          {stats.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="milestone-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div className="milestone-icon">
                  <i className={`fa ${stat.icon}`}></i>
                </div>
                <h3 className="milestone-value">{stat.value}</h3>
                <span className="milestone-label">{stat.label}</span>
                <p className="milestone-desc">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="milestones-trusted" data-aos="fade-up" data-aos-duration="1000">
          <span className="trusted-label">TRUSTED BY LEADING INSTITUTIONS</span>
          <div className="trusted-marquee">
            <div className="trusted-marquee-track">
              {[...institutions, ...institutions].map((name, i) => (
                <div className="trusted-logo-item" key={i}>
                  <div className="trusted-logo-circle"></div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

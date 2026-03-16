import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="home-services-area services-area ptb-80"
    >
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            We want to create pockets in the current education system where
            our goals of academic excellence as well as traditional wisdom
            would be achieved, where individuality would not be ignored, and
            aesthetics of life would be emphasized. Our paramount goal is
            serving the society and the nation. In order to achieve these
            educational goals, Ehya has adopted a multi-pronged strategy.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link href="/services">
              <div className="single-services">
                <div className="services-img">
                  <img
                    src="/assets/img/services/comprehensive-curriculum-icon.png"
                    alt="Comprehensive Curriculum"
                  />
                </div>
                <div className="services-content">
                  <h3>Comprehensive Curriculum</h3>
                  <p>
                    We are trying to develop a comprehensive curriculum
                    according to our ideology. It is being designed to fill the
                    gaps that we have discussed in our Diagnosis.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link href="/services">
              <div className="single-services mt-20 sec-ser">
                <div className="services-img">
                  <img
                    src="/assets/img/services/teacher-training-program-icon.png"
                    alt="Teacher Training Program"
                  />
                </div>
                <div className="services-content">
                  <h3>Teacher Training Program</h3>
                  <p>
                    The main purpose of our teacher training program is to
                    convert a normal educated person into a professional
                    teacher, who can guide students in their academic endeavors
                    and can act as a mentor and role model for them.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-md-6">
            <Link href="/services">
              <div className="single-services">
                <div className="services-img">
                  <img
                    src="/assets/img/services/home-study-icon.png"
                    alt="HOME STUDY"
                  />
                </div>
                <div className="services-content">
                  <h3>HOME STUDY</h3>
                  <p>
                    A number of parents prefer home schooling over the
                    conventional modes of educating children. In the West, it
                    has been a common practice since the last three decades.
                    Home schooling has its own share of problems, which if not
                    addressed properly, can be more damaging than rewarding for
                    children.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

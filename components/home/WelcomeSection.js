export default function WelcomeSection({ OwlCarousel, daily_quotes }) {
  return (
    <section id="welcome" className="welcome-area ptb-80 pb-80">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 text-justify order-md-0 order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <h2>
                Welcome to <span>EHYA</span>
              </h2>
              <p>
                The ideological foundation behind the initiation of Ehya has
                been derived from the teachings of eminent Muslim thinkers
                such as Dr. Allama Muhammad Iqbal, a great visionary, literary
                prodigy and philosopher of the 20th century; Dr. Muhammad Rafi
                ud Din, an eminent scholar who believed that the social
                theories of west are challenging the very foundations of our
                religion; and the likes of Hasan Askari, Saleem Ahmad and
                Ahmed Javed, among others.
              </p>
            </div>
            <p>
              We look inwards for inspiration – and we don&#39;t have to look very
              far because we have a rich intellectual heritage to draw upon.
              All our efforts are directed to:
            </p>
            <ul className="customList customListDisc">
              <li>
                Create a mechanism to assist and facilitate students, teachers,
                authors, educationists, parents, etc.
              </li>
              <li>
                Fill in the existing education-centric gaps by providing an
                equal set of prospects to help students in finding their
                purpose of life.
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-md-6 order-md-1 order-0 pb-xs-25"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="row">
              <OwlCarousel
                className="inspiration-slider owl-theme"
                loop
                items={1}
                nav={false}
                autoplayTimeout={3000}
                mouseDrag={true}
                autoplay={true}
                margin={30}
                responsiveClass={true}
                dots={true}
                navText={[
                  "<i className='fa fa-angle-left'></i>",
                  "<i className='fa fa-angle-right'></i>",
                ]}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="single-author">
                    <div className="pic">
                      <img
                        src="/assets/img/welcome/allama-muhammad-iqbal.jpeg"
                        alt="Allama Muhammad Iqbal"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-author">
                    <div className="pic">
                      <img
                        src="/assets/img/welcome/ahmed-javed.jpeg"
                        alt="Ahmed Javed"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-author">
                    <div className="pic">
                      <img
                        src="/assets/img/welcome/dr-rafiuddin.jpeg"
                        alt="Dr. Rafiuddin"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-author">
                    <div className="pic">
                      <img
                        src="/assets/img/welcome/saleem-ahmed.jpeg"
                        alt="Saleem Ahmed"
                      />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 order-md-2 order-2 pb-xs-25"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="row">
              <OwlCarousel
                className="inspiration-slider owl-theme"
                loop
                items={1}
                nav={false}
                autoplayTimeout={3000}
                mouseDrag={true}
                autoplay={true}
                margin={30}
                responsiveClass={true}
                dots={true}
                navText={[
                  "<i className='fa fa-angle-left'></i>",
                  "<i className='fa fa-angle-right'></i>",
                ]}
              >
                {daily_quotes.map((quote, index) => (
                  <div className="col-lg-12 col-md-12" key={index}>
                    <div className="single-author">
                      <div className="pic"></div>
                      <div className="author-quote">
                        <p>
                          <span className="insp-heading">Think &#x1F4AC;</span>
                          &ldquo;{quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

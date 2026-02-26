import { useState } from "react";

export default function WhatDrivesUs({ OwlCarousel }) {
  const [showDriveUs, setShowDriveUs] = useState(false);

  return (
    <section id="welcome2" className="welcome-area pb-80">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 text-justify pb-xs-25"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="section-title">
              <h2>WHAT DRIVES US?</h2>
            </div>
            <p>
              The abject failure of our education sector to achieve its
              individual and collective goals drives us to rethink and reform
              the present scenario that consequently will nourish the
              community.
            </p>
            <p>
              Unfortunately, our education sector has failed to achieve its
              individual &amp; collective goals to reform, nourish and serve the
              community. The current education system has not only failed to
              produce individuals who have the potential to change the course
              of history but also failed in addressing the shortcomings and
              challenges faced in the current times. This dismal state of
              affairs casts a shadow over the future of not only the
              youngsters but also the whole society.
            </p>
            <p>
              Most of our students, even graduates, lack proficiency in
              languages. They neither use nor understand idiomatic Urdu or
              English. Our youth lack the skillset to comprehend and grasp the
              ideologies of the greatest thinkers; can it be imagined that the
              majority of them ploughing through the works of the great
              scholars?
            </p>

            {showDriveUs ? (
              <>
                <p>
                  The current system perpetuates the existing social and
                  intellectual inequalities and cultural alienation; students
                  hailing from the International Cambridge system hold
                  expertise in reading and writing skills in English but lack
                  understanding of their own language, culture and
                  civilization. Likewise, the products of public education lack
                  an understanding of English and world cultures. Undue focus
                  on STEM (science, technology, engineering, and mathematics)
                  and ignoring humanities deviates us from being an enriched
                  society.
                </p>
                <p>
                  Ehya Education Services (EES) understands that the need of
                  the hour is to play a positive part in addressing the core
                  education issues at hand, and this is only possible by facing
                  these challenges upfront with meaningful discourse and
                  action.
                </p>
                <a
                  onClick={() => setShowDriveUs(false)}
                  className="btn btn-primary-outlined"
                >
                  Read Less
                </a>
              </>
            ) : (
              <a
                onClick={() => setShowDriveUs(true)}
                className="btn btn-primary-outlined"
              >
                Read More
              </a>
            )}
          </div>
          <div
            className="col-lg-3 col-md-12 pt-3"
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
                margin={30}
                autoplayHoverPause={true}
                responsiveClass={true}
                dots={false}
                navText={[
                  "<i className='fa fa-angle-left'></i>",
                  "<i className='fa fa-angle-right'></i>",
                ]}
              >
                <div className="col-lg-12 col-md-12">
                  <div className="single-author">
                    <div className="pic driveUs">
                      <img
                        src="/assets/img/welcome/drive-us.png"
                        alt="book-img"
                      />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

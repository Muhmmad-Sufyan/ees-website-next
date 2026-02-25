"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "@/styles/services.css";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Services() {
  return (
    <>
      <WaterWave className="service-ripple">
        {(methods) => (
          <div className="page-title service-image ripple-effect jquery-ripples">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <h1>Services</h1>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li className="active">Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </WaterWave>

      <section id="services" className="services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Services</span></h2>
            <p className="text-justify">
              We want to create pockets in the current education system where our goals of academic
              excellence as well as traditional wisdom would be achieved, where individuality would not be ignored,
              and aesthetics of life would be emphasized. Our paramount goal is serving the society and the nation.
              In order to achieve these educational goals, Ehya has adopted a multi-pronged strategy.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 position-relative">
              <div className="single-services single-services-detail">
                <div className="services-img services-img-detail">
                  <img src="/assets/img/services/comprehensive-curriculum.png" alt="Comprehensive Curriculum"/>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="services-text">
                <h3>Comprehensive Curriculum</h3>
                <p>
                  We are trying to develop a comprehensive curriculum according to our ideology.
                  It is being designed to fill the gaps that we have discussed in our Diagnosis.
                  Its salient features are:
                </p>
                <ul className="customList customListDisc mt-2 mb-4">
                  <li>
                    Our curriculum is based on Islamic World View and epistemology.
                    The whole orientation of our curriculum is Islamic. However, it doesn&#39;t mean that it lack
                    in modern standards in any respect.
                  </li>
                  <li>
                    We are trying that our curriculum would enable the students to explore surroundings and
                    inner-self, so that they can achieve excellence.
                  </li>
                  <li>
                    We are trying to develop curriculum related to our society and connected with our own tradition.
                  </li>
                  <li>
                    Our curriculum is more focused on knowledge instead of information.
                    We believe that every individual cannot possess apt amount of
                    information about everything and it is absolutely not necessary to aim
                    for such a mundane goal. But it is important to be fully aware of oneself
                    and the duties one needs to perform to dwell in a particular society or cultural setup.
                  </li>
                  <li>
                    Subject-centric approach is devised in the development of our curriculum to ensure that
                    the curriculum of Urdu incorporates Urdu literature not Islamic studies, ethics etc.
                    and the same goes for other subjects like Science, Islamic Studies, history etc.
                  </li>
                  <li>
                    We strive to come up with a curriculum that develops aesthetics and critical thinking
                    in students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="services-text">
                <h3>Teacher Training Program</h3>
                <p>
                  The main purpose of our teacher training program is to convert a normal educated person into
                  a professional teacher, who can guide students in their academic endeavors and can act as a mentor
                  and role model for them. The need of the hour is to train our teachers and to assist them in
                  achieving as well as maintaining the standards of quality education. Professional
                  development is vital to enhance educational standards and can act as a
                  catalyst of change in our educational milieu. We understand the
                  significance of teacher training and development and hence through
                  our program we aspire to maximize as well as enhance the role of
                  educators by nurturing different aspects of their personality. Our training and grooming program
                  will allow them to become aware of the big picture about knowledge, one that will teach children
                  to not only become better human beings but also understand the sanctity of this profession.
                  Unfortunately, teaching in our education system is all about preparing students for exams and
                  subsequently for the job market.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 position-relative">
              <div className="single-services single-services-detail">
                <div className="services-img services-img-detail">
                  <img src="/assets/img/services/teacher-training-program.png" alt="Teacher Training Program"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 position-relative">
              <div className="single-services single-services-detail">
                <div className="services-img services-img-detail">
                  <img src="/assets/img/services/reading-materials.png" alt="READING MATERIALS"/>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="services-text">
                <h3>READING MATERIALS</h3>
                <p>
                  The different stakeholders that are involved in the process of education mostly
                  lacks the academic depth as well as unaware of the true meaning and purpose of
                  our education. Being ignorant of the related debates about education and having
                  living in historical vacuum they are unable to see the big picture about education.
                  Moreover, the real needs of our society, the needs of individuals, the goals of education,
                  what went wrong in education etc. are the topics that every concerned person should be aware of.
                  These issues cannot be addressed thoroughly in the textbooks so a separate set of reading materials
                  would be developed which mostly include writings of renowned thinkers. Fortunately, there are a lot of
                  readings, essays, articles and books present both in Urdu and English that needs to be considered.
                  These reading materials would facilitate the students, teachers, parents and school management etc.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="services-text">
                <h3>HOME STUDY</h3>
                <p>
                  A number of parents prefer home schooling over the conventional modes of educating children.
                  In the West, it has been a common practice since the last three decades.
                  Home schooling has its own share of problems, which if not addressed properly, can be
                  more damaging than rewarding for children.
                </p>
                <p>
                  Common problems that parents face in home schooling are: lack of consistency,
                  inappropriate curriculum selection, no understanding of assessment, little or no acquaintance
                  with educational theories and pedagogy and competency issues
                </p>
                <p>
                  EES offers numerous solutions such as facilitating parents by providing them with a comprehensive
                  system that includes curriculum selection, capacity building for parents, systematic assessment
                  practices and assurance of consistency.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 position-relative">
              <div className="single-services single-services-detail">
                <div className="services-img services-img-detail">
                  <img src="/assets/img/services/home-study.png" alt="HOME STUDY"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

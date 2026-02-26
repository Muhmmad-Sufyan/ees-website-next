import Link from "next/link";

export default function TextbooksSection() {
  return (
    <section className="curriculum-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div
              className="section-title"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h2>
                Our <span>Textbooks</span>
              </h2>
              <p>
                We have developed textbooks according to the actual need of
                our society.
              </p>
            </div>
          </div>
        </div>
        <div className="curr-cards">
          <div className="row">
            <div className="col-md-6">
              <div className="curr-item yellow-bg">
                <h2>Islamic Studies</h2>
                <p className="position-relative">
                  Islamic Studies not only holds a critical importance for the
                  survival of our national identity, but it is also a religious
                  duty. Though the curriculum of Islamic Studies and textbooks
                  provide a plethora of information about Islam, no effort is
                  made to effectively teach the religion and inspire students
                  to practice it. These are designed to help students memorize
                  material and pass exams.
                  <Link href="/products#_Islamic_Studies_">
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="curr-item blue-bg">
                <h2>Urdu</h2>
                <p className="position-relative">
                  The mastery of own language is essential because it serves as
                  a means of expression and a tool for gratifying one&#39;s
                  aesthetic aspirations. In our country, the reliance on the
                  English language eroded the prestige of Urdu to the verge of
                  extinction for decades. Urdu is confined to the context of a
                  subject only. Its content and teaching are given scant
                  consideration which has resulted in individuals having little
                  or no command over the language.
                  <Link href="/products#_Urdu_">
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 order-md-0 order-1">
              <div className="curr-item yellow-bg blue-bg-1">
                <h2>Science</h2>
                <p className="position-relative">
                  Science, when taught as a subject, must inculcate in a
                  student some abilities that serves as the purpose of teaching
                  this subject. Science is about observation of surrounding,
                  studying the phenomena related to physical world,
                  understanding fundamental laws governing changes within
                  ourselves and the world outside. Regrettably, Science when
                  taught in our education system fails to develop any basic
                  ability presumed to be associated with the teaching of
                  science.
                  <Link href="/products#_Science_">
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 order-md-1 order-0">
              <div className="curr-item blue-bg yellow-bg-1">
                <h2>Social Studies</h2>
                <p className="position-relative">
                  Human beings are a complex creation of Allah. Yet they are
                  the most efficient creation, who resides in complex and
                  diverse social settings. These social settings are affected
                  by multiple factors, ethnical diversity, different
                  environmental conditions, different cultures and cultural
                  backgrounds and a variety of geographical regions etc. To
                  understand human society and drive it towards betterment,
                  Social Studies is an important subject taught at school level
                  around the globe.
                  <Link href="/products#_Social_Studies_">
                    <i className="fa fa-chevron-right"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="curr-btn">
            <Link href="/products" className="btn btn-primary-outlined">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

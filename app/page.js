"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import $ from "jquery";
if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
}
import AOS from "aos";
import Lightbox from "react-image-lightbox";
import "@/styles/home.css";
import quotes from "@/data/quotes.json";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "500px" }} />,
});

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const daily_quotes = quotes
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 4);

  const [showDriveUs, setShowDriveUs] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleNewCollectionClick = () => {
    document.getElementById("new-collection").scrollIntoView();
  };

  const newCollectionOptions = {
    loop: true,
    items: 5,
    dots: true,
    autoplay: true,
    nav: false,
    autoplayTimeout: 3000,
    responsiveClass: true,
    margin: 30,
    autoplayHoverPause: true,
    mouseDrag: true,
    responsive: {
      0: { items: 2 },
      768: { items: 4 },
      1200: { items: 5 },
    },
    navText: [
      "<i className='fa fa-angle-left'>q</i>",
      "<i className='fa fa-angle-right'></i>",
    ],
  };

  return (
    <>
      <OwlCarousel
        id="home"
        className="home-slides owl-theme"
        loop
        items={1}
        dots={false}
        autoplay={true}
        nav={true}
        autoplayTimeout={5000}
        responsiveClass={true}
        margin={30}
        mouseDrag={true}
        navText={[
          "<i className='fa fa-angle-left'><</i>",
          "<i className='fa fa-angle-right'>></i>",
        ]}
        onTranslate={() => {
          window.jQuery &&
            window
              .jQuery(".main-banner h4")
              .removeClass("animated fadeInDown")
              .css("opacity", "0");
          window.jQuery &&
            window
              .jQuery(".main-banner h1")
              .removeClass("animated fadeInUp")
              .css("opacity", "0");
          window.jQuery &&
            window
              .jQuery(".main-banner p")
              .removeClass("animated zoomIn")
              .css("opacity", "0");
          window.jQuery &&
            window
              .jQuery(".main-banner .btn")
              .removeClass("animated fadeInDown")
              .css("opacity", "0");
        }}
        onTranslated={() => {
          window.jQuery &&
            window
              .jQuery(".main-banner h4")
              .addClass("animated fadeInDown")
              .css("opacity", "1");
          window.jQuery &&
            window
              .jQuery(".main-banner h1")
              .addClass("animated fadeInUp")
              .css("opacity", "1");
          window.jQuery &&
            window
              .jQuery(".main-banner p")
              .addClass("animated zoomIn")
              .css("opacity", "1");
          window.jQuery &&
            window
              .jQuery(".main-banner .btn")
              .addClass("animated fadeInDown")
              .css("opacity", "1");
        }}
      >
        <div className="main-banner item-bg-one item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-sm-12">
                    <div className="main-banner-text">
                      <h1 className="animated fadeInUp">
                        Rethink Refine <span> Revive</span>
                      </h1>
                      <p>
                        We aim to redefine and realign the meaning, purpose and
                        methodology of education in Islamic paradigm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner item-bg-two item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-sm-12">
                    <div className="main-banner-text">
                      <h1 className="animated fadeInUp">
                        Our <span>Inspiration</span>
                      </h1>
                      <p>
                        We look inwards for inspiration – and we don&#39;t have to
                        look very far because we have a rich intellectual
                        heritage to draw upon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner item-bg-three item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-sm-12">
                    <div className="main-banner-text">
                      <h1 className="animated fadeInUp">
                        Our <span>Products</span>
                      </h1>
                      <p>Check out our entire range.</p>
                      <a
                        onClick={handleNewCollectionClick}
                        className="btn btn-primary"
                      >
                        New Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>

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

      <section className="books-w"></section>

      <section id="about" className="diagnosis-area ptb-80">
        <div className="container">
          <div className="section-title" data-aos="fade-down">
            <h2>
              Our <span>Diagnosis</span>
            </h2>
            <p>
              The world in which we live is constructed on the ideas that were
              developed in the West around five hundred years ago. Those ideas
              and theories rejects metaphysical discourses including religion.
              All the knowledge that surrounds us has been influenced by the
              same set of ideologies in one way or the other, particularly the
              ones that became popular in relatively recent times. Muslims, in
              this present stage of history, are the consumers of knowledge
              rather than producers and hence are on the receiving end of its
              ideological onslaught.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="diagnosis-content" data-aos="fade-right">
                <div className="section-title">
                  <h2>
                    The Genesis of <span>Modern World View</span>
                  </h2>
                  <p>
                    The advancements in knowledge from the fifteenth to the
                    twentieth century led to new notions regarding Man, Universe
                    and the Absolute Reality as well as gave birth to new
                    paradigms and perspectives...
                  </p>
                </div>
                <div className="section-title">
                  <h2>
                    Theoratical Influence of <span>Western Knowledge</span>
                  </h2>
                  <p>
                    When modern knowledge is communicated in religious societies
                    like ours it produces individuals who are confused and
                    bifurcated between worldly matters and religious affairs...
                  </p>
                </div>
                <div className="section-title">
                  <h2>
                    The Educational System of <span>Pakistan</span>
                  </h2>
                  <p>
                    Education is the cornerstone of any country&#39;s development.
                    The Education System of Pakistan is neglected to assume its
                    part in national development...
                  </p>
                </div>
                <Link
                  href="/diagnosis"
                  className="btn btn-primary-outlined"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="diagnosis-img1">
                <img
                  src="/assets/img/writing-img.jpeg"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ideology-section ptb-80 bg-f6f6f6">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2>
              The Ideology of <span>EHYA</span>
            </h2>
            <p>
              Ehya believes that education should be based upon indigenous
              thoughts and values. The points at which Akbar and Iqbal differed
              with Sir Syed are very valuable. Moreover, the critique of Iqbal
              on the West are an integral part of Ehya&#39;s ideology and working.
              Key components of the framework that would form the foundation the
              education system based on Ehya&#39;s core values include the
              following.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Relevance</h4>
                  <p>
                    To create a cohesive society, a thorough knowledge of its
                    culture, customs, and festivals is key factor. A
                    &ldquo;model&rdquo; individual for Ehya is someone who is an
                    active member of the Muslim Ummah and a vibrant part of the
                    local community.
                  </p>
                  <span>1</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Assessment</h4>
                  <p>
                    Individuals cannot be expected to become true seekers of
                    knowledge if an assessment system fails to train the mind to
                    think beyond its memory level. The assessment system should
                    be teacher-centered, and student&#39;s creativity should not be
                    suppressed for the sake of standardized assessments. Students
                    should be provided with avenues to discover new horizons so
                    that they can understand their value and mission on Earth. If
                    one aspect of their personality is weak, then some other
                    vital aspect of their personality should be nurtured.
                  </p>
                  <span>2</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>STEM Based Education vs. Social Sciences</h4>
                  <p>
                    Importance of science and STEM based education in the present
                    times cannot be negated, but humanities and social sciences
                    should also be given due importance. Learning of science
                    begins with observations, general understanding of the
                    environment and practical applications before bombarding
                    pupils with technical jargon. Students must be trained to
                    achieve a know-how of their surroundings by digging deeper
                    into the realities that surround them and manifest the
                    sublime authority and power of Almighty Allah. Moreover, the
                    focus of education must shift from being economic centric to
                    person centric. STEM based education is not the rationale
                    approach for our society. It also means to inculcate
                    developmental prospects for an individual in the domain of
                    education.
                  </p>
                  <span>3</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Developing Creativity and Aesthetics</h4>
                  <p>
                    New ways should be devised to refine creativity and
                    aesthetics in an individual. Teaching of good literature is
                    important in this regard, however the real task is to find
                    appropriate literature for children belonging to different
                    age groups. The human mind cannot reach its maturity without
                    developing an appreciation of beauty in words and worlds.
                    Inculcation of local and Muslim literature, calligraphy,
                    architecture and other forms of aesthetics in the education
                    process is therefore necessary to achieve this goal. Studying
                    in outdoor milieus can encourage children to
                    think-out-of-box as well as develop vital life skills.
                  </p>
                  <span>4</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Tradition Vs Modernity</h4>
                  <p>
                    Modernity aspires to define the past and determine the future
                    in its own paradigm. In order to break the shackles of
                    modernity, one must be acquainted and inspired by prominent
                    personalities in the course of history, religious or academic
                    texts or writings and cultural values that lie beyond the
                    horizon of time. Moreover, connecting modern history with the
                    salient features of Islamic history are an essential
                    requisite of our curriculum. The role of Muslims in history
                    as well as in the present times is highlighted in our
                    curriculum.
                  </p>
                  <span>5</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Academic Excellence</h4>
                  <p>
                    In our education system a student is not treated as a mature
                    individual till the age of 20 and even more. In Pakistan,
                    unfortunately, even a 25 years old educated individual lacks
                    the ability to critically analyze academic text or writings.
                    Students should be coached so that they are intellectually
                    mature by the age of 18 and are able to conduct critical
                    analysis. By this age, they must have explored themselves and
                    should be clear about their future endeavors.
                  </p>
                  <span>6</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Islamic Ideology</h4>
                  <p>
                    The ideal curriculum in an Islamic society would lead
                    learners to grasp the actual meaning of their Islamic
                    identity, allowing them to be religious as well as patriotic
                    so that they may understand their true purpose on Earth. It
                    must include elements that are necessary to formulate worldly
                    perspectives within the Islamic paradigm, so that they can
                    find answers to the questions that arise due to the dichotomy
                    of knowledge to which they are exposed.
                  </p>
                  <span>7</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <Link href="/ideology">
                <div
                  className="single-ideology"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h4>Individualistic Approach vs. Mass Education</h4>
                  <p>
                    The contemporary mass education system is highly influenced
                    by nationalism being imposed through the power exercised by
                    the states and is mainly the servant of capital and power. It
                    is imperative to have an individual-centric approach that can
                    produce children who are capable of discovering their true
                    talents and potentials. A well-groomed person can excel in
                    his/her field of interest and possesses the ability to polish
                    his/her innate capabilities. Collective goals are also
                    important but they need to be added in due proportion in the
                    curriculum.
                  </p>
                  <span>8</span>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/ideology" className="btn btn-primary-outlined">
              Read More
            </Link>
          </div>
        </div>
      </section>

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

      <section className="books-area ptb-80" id="new-collection">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h4>Latest Edition</h4>
            <h2>
              Our New <span>Collection</span>
            </h2>
          </div>

          <div className="row">
            <OwlCarousel
              className="books-slider owl-theme"
              {...newCollectionOptions}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div className="col-lg-12 col-md-12" key={num}>
                  <div className="single-book">
                    <div className="pic">
                      <img
                        src={`/assets/img/books/book-${num}.jpeg`}
                        alt="book-img"
                        onClick={() => {
                          setIsOpen(true);
                          setImage(`/assets/img/books/book-${num}.png`);
                        }}
                      />
                    </div>
                    <a href="#">
                      <div className="book-info">
                        <h3 className="title">
                          Quisque quis sapien eget tellus
                        </h3>
                        <span className="price">$24</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => setIsOpen(false)}
          onImageLoad={() => window.dispatchEvent(new Event("resize"))}
        />
      )}
    </>
  );
}

export default Home;

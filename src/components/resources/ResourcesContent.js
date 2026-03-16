"use client";

import Link from "next/link";

const storyCollections = [
  {
    title: "The Golden Falcon",
    subtitle: "Afsana Collection",
    image: "/assets/img/resources/collection (3).png",
    color: "#FDF2E9",
  },
  {
    title: "Whispering Woods",
    subtitle: "Afsana Collection",
    image: "/assets/img/resources/collection (4).png",
    color: "#ECF4F1",
  },
  {
    title: "Starlight Dreams",
    subtitle: "Afsana Collection",
    image: "/assets/img/resources/collection (1).png",
    color: "#F1F5F9",
  },
  {
    title: "The Magic Chef",
    subtitle: "Afsana Collection",
    image: "/assets/img/resources/collection (2).png",
    color: "#F5F3FF",
  },
];

const classroomMaterials = [
  {
    title: "Weekly Worksheet",
    subtitle: "Practice Materials",
    image: "/assets/img/svgicon/file.svg",
  },
  {
    title: "Study Notes",
    subtitle: "Reference Guides",
    image: "/assets/img/svgicon/menu-encli.svg",
  },
  {
    title: "Teacher Guide",
    subtitle: "Instructor Resources",
    image: "/assets/img/svgicon/file-tick.svg",
  },
  {
    title: "Activity Sheet",
    subtitle: "Interactive Learning",
    image: "/assets/img/svgicon/line-pencil.svg",
  },
];

const videoLibrary = [
  {
    title: "History of Ancient Civilizations",
    subject: "Social Studies",
    duration: "15:30",
  },
  {
    title: "History of Ancient Civilizations",
    subject: "Social Studies",
    duration: "12:45",
  },
  {
    title: "History of Ancient Civilizations",
    subject: "Social Studies",
    duration: "18:20",
  },
  {
    title: "History of Ancient Civilizations",
    subject: "Social Studies",
    duration: "14:10",
  },
];

const academicResearch = [
  {
    title: "Digital Pedagogy in Early Childhood Education",
    author: "Dr. Sarah Johnson",
    date: "June 2024",
    tagColor: "#e8f5e9",
    description:
      "Integration of interactive digital tools in primary classrooms and their long-term impact on cognitive development.",
  },
  {
    title: "Cross-Cultural Communication in Modern Curriculum",
    author: "Prof. Ahmed Khan",
    tagColor: "#fff3e0",
    description:
      "Analysis of how cultural sensitivity in textbooks contributes to higher inclusivity in diverse environments.",
  },
];

const curriculumResources = [
  {
    id: 1,
    title: "Modern Physics",
    subtitle: "Grade 11-12",
    subject: "PHYSICS",
    bookTitle: "Advanced Physics",
    bookSubject: "Science Curriculum",
    color: "#2A4D45",
    textColor: "#fff",
  },
  {
    id: 2,
    title: "Pure Algebra",
    subtitle: "Humanities",
    subject: "MATH",
    bookTitle: "Core Algebra",
    bookSubject: "Math Reference",
    color: "#D9822A",
    textColor: "#fff",
  },
  {
    id: 3,
    title: "Global Atlas",
    subtitle: "Illustrated",
    subject: "GEOGRAPHY",
    bookTitle: "Physical Geography",
    bookSubject: "Social Science",
    color: "#475569",
    textColor: "#fff",
  },
  {
    id: 4,
    title: "Plant Life",
    subtitle: "Botany Basics",
    subject: "BIOLOGY",
    bookTitle: "Biological Studies",
    bookSubject: "Natural Science",
    color: "#2E6A5B",
    textColor: "#fff",
  },
  {
    id: 5,
    title: "Plant Life",
    subtitle: "Botany Basics",
    subject: "BIOLOGY",
    bookTitle: "Biological Studies",
    bookSubject: "Natural Science",
    color: "#2E6A5B",
    textColor: "#fff",
  },
];

export default function ResourcesContent() {
  return (
    <>
      {/* ===== Story Collections Section ===== */}
      <section className="res-section res-section--light">
        <div className="container">
          <div className="res-section-header">
            <div>
              <span className="res-label">FROM AFSANA</span>
              <h2 className="res-title">Story Collections</h2>
            </div>
            <Link href="/resources" className="res-view-all">
              View All <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
          <div className="row">
            {storyCollections.map((story, index) => (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <div className="res-story-card">
                  <div
                    className="res-story-card__img"
                    style={{ backgroundColor: story.color }}
                  >
                    <img src={story.image} alt={story.title} />
                  </div>
                  <div className="res-story-card__info">
                    <h4>{story.title}</h4>
                    <span>{story.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Classroom Material Section ===== */}
      <section className="res-section res-section--gray">
        <div className="container">
          <div className="res-section-header">
            <div>
              <span className="res-label">FROM EHYA CLASSMATE</span>
              <h2 className="res-title">Classroom Material</h2>
            </div>
            <Link href="/resources" className="res-view-all">
              View All <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
          <div className="row">
            {classroomMaterials.map((material, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="res-material-card">
                  <div className="res-material-card__icon">
                    <div className="res-material-card__icon-circle">
                      <span className="down-icon">
                        <img
                          src="/assets/img/svgicon/dowloadesvg.svg"
                          alt="icons"
                        />
                      </span>
                      <img
                        className="mainImg"
                        src={material.image}
                        alt={material.title}
                      />
                    </div>
                  </div>
                  <div className="res-material-card__info">
                    <h4>{material.title}</h4>
                    <span>{material.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Video Library Section ===== */}
      <section className="res-section res-section--light">
        <div className="container">
          <div className="res-section-header">
            <div>
              <span className="res-label">FROM EHYA KIDS TV</span>
              <h2 className="res-title">Video Library</h2>
            </div>
            <Link href="/resources" className="res-view-all">
              View All <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
          <div className="row">
            {videoLibrary.map((video, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="res-video-card">
                  <div className="res-video-card__thumb">
                    <div className="res-video-card__play">
                      <i className="fa fa-play"></i>
                    </div>
                    <div className="res-video-card__duration">
                      {video.duration}
                    </div>
                  </div>
                  <div className="res-video-card__info">
                    <h4>{video.title}</h4>
                    <span>{video.subject}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Academic Research Section ===== */}
      <section className="res-section res-section--gray">
        <div className="container">
          <div className="res-section-header">
            <div>
              <span className="res-label">FROM ITESSAL JOURNAL</span>
              <h2 className="res-title">Academic Research</h2>
            </div>
            <Link href="/resources" className="res-view-all">
              View All <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
          <div className="res-research-list">
            {academicResearch.map((article, index) => (
              <div className="res-research-item" key={index}>
                <div className="res-research-item__content">
                  <h4>{article.title}</h4>
                  <div className="res-research-item__meta">
                    <span className="res-research-item__author">
                      By {article.author}
                    </span>
                    {article.date && (
                      <span className="res-research-item__date">
                        {article.date}
                      </span>
                    )}
                  </div>
                  <p>{article.description}</p>
                </div>
                <div className="res-research-item__action">
                  <Link href="/resources" className="res-read-btn">
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Curriculum Resources Section ===== */}
      <section className="res-section res-section--light">
        <div className="container">
          <div className="res-section-header">
            <div>
              <span className="res-label">FROM EHYA PUBLICATIONS</span>
              <h2 className="res-title">Curriculum Resources</h2>
            </div>
            <Link href="/resources" className="res-view-all">
              View All <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
          <div className="res-curriculum-grid">
            {curriculumResources.map((book, index) => (
              <div className="res-curriculum-card" key={index}>
                <div
                  className="res-curriculum-card__thumb"
                  style={{ backgroundColor: book.color, color: book.textColor }}
                >
                  <div
                    className="res-curriculum-card__cover"
                    style={{ border: "5px solid #FFFFFF0D" }}
                  >
                    <span className="res-curriculum-card__subject">
                      {book.subject}
                    </span>
                    <div>
                      <h4>{book.title}</h4>
                      <span className="res-curriculum-card__subtitle">
                        {book.subtitle}
                      </span>
                    </div>
                    <div
                      className="res-curriculum-card__line"
                      style={{
                        backgroundColor:
                          book?.id === 2?"#1A3A34":"#D9822A",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="res-curriculum-card__info">
                  <h5>{book.bookTitle}</h5>
                  <span>{book.bookSubject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

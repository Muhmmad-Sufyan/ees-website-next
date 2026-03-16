import Link from "next/link";

export default function DiagnosisPreview() {
  return (
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
  );
}

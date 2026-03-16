export default function HeroCarousel({ OwlCarousel, handleNewCollectionClick }) {
  return (
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
        document.querySelectorAll(".main-banner h4").forEach((el) => {
          el.classList.remove("animated", "fadeInDown");
          el.style.opacity = "0";
        });
        document.querySelectorAll(".main-banner h1").forEach((el) => {
          el.classList.remove("animated", "fadeInUp");
          el.style.opacity = "0";
        });
        document.querySelectorAll(".main-banner p").forEach((el) => {
          el.classList.remove("animated", "zoomIn");
          el.style.opacity = "0";
        });
        document.querySelectorAll(".main-banner .btn").forEach((el) => {
          el.classList.remove("animated", "fadeInDown");
          el.style.opacity = "0";
        });
      }}
      onTranslated={() => {
        document.querySelectorAll(".main-banner h4").forEach((el) => {
          el.classList.add("animated", "fadeInDown");
          el.style.opacity = "1";
        });
        document.querySelectorAll(".main-banner h1").forEach((el) => {
          el.classList.add("animated", "fadeInUp");
          el.style.opacity = "1";
        });
        document.querySelectorAll(".main-banner p").forEach((el) => {
          el.classList.add("animated", "zoomIn");
          el.style.opacity = "1";
        });
        document.querySelectorAll(".main-banner .btn").forEach((el) => {
          el.classList.add("animated", "fadeInDown");
          el.style.opacity = "1";
        });
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
  );
}

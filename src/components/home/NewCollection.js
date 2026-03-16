import { useState } from "react";
import Lightbox from "react-image-lightbox";

export default function NewCollection({ OwlCarousel }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");

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

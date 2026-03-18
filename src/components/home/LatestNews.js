"use client";
import Link from "next/link";
import { useGetPublicBlogs } from "@/hooks";

export default function LatestNews() {
  const { data, isLoading } = useGetPublicBlogs({ per_page: 4 });
  const blogs = data?.data || [];

  return (
    <section className="latest-news-section ptb-80">
      <div className="container">
        <div className="latest-news-header">
          <div>
            <span className="latest-news-label">STAY INFORMED</span>
            <h2 className="latest-news-title">
              LATEST <em>UPDATES</em> & NEWS
            </h2>
          </div>
          <Link href="/resources" className="latest-news-view-all">
            VIEW ALL NEWS <i className="fa fa-arrow-right"></i>
          </Link>
        </div>

        <div className="row">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div className="col-lg-3 col-md-6" key={i}>
                  <div className="latest-news-card">
                    <div className="latest-news-card-img skeleton-img"></div>
                    <div className="latest-news-card-body">
                      <div className="skeleton-text" style={{ width: "60%", height: 12, marginBottom: 10 }}></div>
                      <div className="skeleton-text" style={{ width: "90%", height: 16, marginBottom: 8 }}></div>
                      <div className="skeleton-text" style={{ width: "40%", height: 12 }}></div>
                    </div>
                  </div>
                </div>
              ))
            : blogs.map((blog) => (
                <div className="col-lg-3 col-md-6" key={blog.id}>
                  <div
                    className="latest-news-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="latest-news-card-img">
                      <img src={blog.banner_image_url} alt={blog.title} />
                      {blog.categories?.[0] && (
                        <span
                          className="latest-news-badge"
                          style={{ backgroundColor: "#075154" }}
                        >
                          {blog.categories[0].name}
                        </span>
                      )}
                    </div>
                    <div className="latest-news-card-body">
                      <p className="latest-news-date">
                        <i className="fa fa-calendar-o"></i>{" "}
                        {blog.published_at
                          ? new Date(blog.published_at).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "2-digit",
                            })
                          : "-"}
                      </p>
                      <h4 className="latest-news-card-title">{blog.title}</h4>
                      <Link href={`/blog/${blog.slug}`} className="latest-news-read-more">
                        READ MORE <i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

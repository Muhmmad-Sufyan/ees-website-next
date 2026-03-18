"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetAuthors, useGetCategories, useGetTags } from "@/hooks";
import { BlogRepo } from "@/repos";
import showToast from "@/utils/showToast";

const dummyBlogs = [
  {
    title: "Transforming Education Through Digital Innovation",
    slug: "transforming-education-digital-innovation",
    content:
      "<p>In an era where technology is reshaping every aspect of our lives, education stands at the forefront of this transformation. At Ehya Education, we believe that digital tools can bridge the gap between traditional learning and modern educational needs.</p><p>Our digital initiatives have reached thousands of students across Pakistan, providing them with access to quality educational content regardless of their geographical location. From interactive learning modules to comprehensive digital libraries, we are committed to making education accessible to all.</p><p>The integration of technology in classrooms has shown remarkable results, with students demonstrating improved engagement and better learning outcomes. Our teacher training programs ensure that educators are well-equipped to leverage these digital tools effectively.</p>",
    meta_title: "Transforming Education Through Digital Innovation - Ehya Education",
    meta_description: "Discover how Ehya Education is leveraging digital innovation to transform the educational landscape in Pakistan.",
    image: "/assets/img/pages/home/banner-images/banner-1.1.jpeg",
  },
  {
    title: "Empowering Teachers: The Key to Quality Education",
    slug: "empowering-teachers-quality-education",
    content:
      "<p>Teachers are the backbone of any educational system. At Ehya Education, we recognize that empowering teachers with the right skills and resources is essential for delivering quality education to students.</p><p>Our comprehensive teacher training programs focus on modern pedagogical techniques, classroom management strategies, and the effective use of educational technology. We have trained hundreds of educators who are now making a positive impact in their communities.</p><p>Through workshops, seminars, and ongoing professional development programs, we ensure that teachers stay updated with the latest educational practices and methodologies. Our goal is to create a ripple effect where well-trained teachers inspire and nurture the next generation of learners.</p>",
    meta_title: "Empowering Teachers for Quality Education - Ehya Education",
    meta_description: "Learn about Ehya Education's teacher training programs and how they are shaping the future of education in Pakistan.",
    image: "/assets/img/pages/home/banner-images/banner-2.1.jpeg",
  },
  {
    title: "Building a Brighter Future Through Curriculum Development",
    slug: "building-brighter-future-curriculum-development",
    content:
      "<p>A well-designed curriculum is the foundation of effective education. At Ehya Education, our curriculum development team works tirelessly to create educational content that is engaging, relevant, and aligned with modern educational standards.</p><p>Our curriculum integrates values-based learning with academic excellence, ensuring that students not only acquire knowledge but also develop strong moral character. We collaborate with educators, subject matter experts, and community leaders to create content that resonates with learners.</p><p>From textbooks to digital resources, our curriculum covers a wide range of subjects and is designed to cater to diverse learning needs. We continuously update and improve our materials based on feedback and the latest educational research.</p>",
    meta_title: "Curriculum Development for a Brighter Future - Ehya Education",
    meta_description: "Explore Ehya Education's approach to curriculum development and how it is building a brighter future for students.",
    image: "/assets/img/pages/home/banner-images/banner-3.1.jpeg",
  },
];

async function fetchImageAsFile(url, filename) {
  const res = await fetch(url);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type });
}

export default function SeedBlogsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const { data: authorsData } = useGetAuthors({ page: 1, per_page: 100 });
  const { data: categoriesData } = useGetCategories({ page: 1, per_page: 100 });
  const { data: tagsData } = useGetTags({ page: 1, per_page: 100 });

  const authors = authorsData?.data || [];
  const categories = categoriesData?.data || [];
  const tags = tagsData?.data || [];

  const handleSeed = async () => {
    if (authors.length === 0 || categories.length === 0 || tags.length === 0) {
      showToast("error", "Please create at least one author, category, and tag first.");
      return;
    }

    setLoading(true);
    setResults([]);
    const authorId = authors[0].id;
    const categoryIds = categories.slice(0, 1).map((c) => c.id);
    const tagIds = tags.slice(0, 2).map((t) => t.id);

    for (const blog of dummyBlogs) {
      try {
        const imageFile = await fetchImageAsFile(blog.image, blog.image.split("/").pop());

        const formData = new FormData();
        formData.append("title", blog.title);
        formData.append("slug", blog.slug);
        formData.append("author_id", authorId);
        formData.append("content", blog.content);
        formData.append("meta_title", blog.meta_title);
        formData.append("meta_description", blog.meta_description);
        formData.append("status", "published");
        categoryIds.forEach((id) => formData.append("category_ids[]", id));
        tagIds.forEach((id) => formData.append("tag_ids[]", id));
        formData.append("banner_image", imageFile);

        await BlogRepo.create(formData);
        setResults((prev) => [...prev, { title: blog.title, success: true }]);
      } catch (err) {
        setResults((prev) => [...prev, { title: blog.title, success: false, error: err?.response?.data?.message || err.message }]);
      }
    }

    setLoading(false);
    showToast("success", "Seeding complete!");
  };

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Seed Dummy Blogs</h2>
        <button className="btn-add" onClick={() => router.push("/admin/blog")}>
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>

      <div style={{ background: "#fff", borderRadius: 10, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
        <p style={{ marginBottom: 16, color: "#555" }}>
          This will create 3 dummy blog posts using images from the public folder.
          It will use the first available author, category, and tags.
        </p>

        <button
          className="btn-save"
          onClick={handleSeed}
          disabled={loading}
          style={{ marginBottom: 20 }}
        >
          {loading ? "Seeding..." : "Seed 3 Blogs"}
        </button>

        {results.length > 0 && (
          <div>
            {results.map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 14px",
                  marginBottom: 8,
                  borderRadius: 8,
                  background: r.success ? "#e8f5e9" : "#fde8e8",
                  color: r.success ? "#2e7d32" : "#e53935",
                  fontSize: 14,
                }}
              >
                {r.success ? "✓" : "✗"} {r.title}
                {r.error && <span style={{ marginLeft: 8, fontSize: 12 }}>({r.error})</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

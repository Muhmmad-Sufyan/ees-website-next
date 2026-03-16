export default function BlogPage() {
  const blogs = [
    { id: 1, title: "The Future of Islamic Education", author: "Dr. Ahmed", category: "Education", date: "2026-03-10", status: "Published" },
    { id: 2, title: "Redefining Learning Methodology", author: "Prof. Yusuf", category: "Research", date: "2026-03-08", status: "Published" },
    { id: 3, title: "Digital Initiatives in Schools", author: "Sarah Khan", category: "Technology", date: "2026-03-05", status: "Draft" },
    { id: 4, title: "Community Engagement Programs", author: "Dr. Ahmed", category: "Community", date: "2026-03-01", status: "Published" },
    { id: 5, title: "New Curriculum Development", author: "Prof. Yusuf", category: "Education", date: "2026-02-28", status: "Draft" },
  ];

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Blog Posts</h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Add New Post
        </button>
      </div>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.category}</td>
                <td>{blog.date}</td>
                <td>
                  <span className={`badge-status ${blog.status === "Published" ? "badge-published" : "badge-draft"}`}>
                    {blog.status}
                  </span>
                </td>
                <td>
                  <div className="actions">
                    <button className="btn-edit" title="Edit">
                      <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn-delete" title="Delete">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

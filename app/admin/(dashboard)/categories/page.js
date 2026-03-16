export default function CategoriesPage() {
  const categories = [
    { id: 1, name: "Education", slug: "education", posts: 12, description: "Articles related to education and learning" },
    { id: 2, name: "Research", slug: "research", posts: 8, description: "Research papers and findings" },
    { id: 3, name: "Technology", slug: "technology", posts: 5, description: "Digital and tech-related content" },
    { id: 4, name: "Community", slug: "community", posts: 7, description: "Community engagement and events" },
    { id: 5, name: "Ideology", slug: "ideology", posts: 4, description: "Islamic ideology and principles" },
  ];

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Categories</h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Add Category
        </button>
      </div>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Posts</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.name}</td>
                <td>{cat.slug}</td>
                <td>{cat.posts}</td>
                <td>{cat.description}</td>
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

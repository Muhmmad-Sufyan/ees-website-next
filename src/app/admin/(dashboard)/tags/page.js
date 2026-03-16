export default function TagsPage() {
  const tags = [
    { id: 1, name: "Islamic Education", slug: "islamic-education", posts: 15 },
    { id: 2, name: "Curriculum", slug: "curriculum", posts: 9 },
    { id: 3, name: "E-Learning", slug: "e-learning", posts: 6 },
    { id: 4, name: "Teacher Training", slug: "teacher-training", posts: 4 },
    { id: 5, name: "Youth Development", slug: "youth-development", posts: 7 },
    { id: 6, name: "Workshops", slug: "workshops", posts: 3 },
  ];

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Tags</h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Add Tag
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag, index) => (
              <tr key={tag.id}>
                <td>{index + 1}</td>
                <td>{tag.name}</td>
                <td>{tag.slug}</td>
                <td>{tag.posts}</td>
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

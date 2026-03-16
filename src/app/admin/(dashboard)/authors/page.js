export default function AuthorsPage() {
  const authors = [
    { id: 1, name: "Dr. Ahmed", email: "ahmed@ehya.edu", role: "Senior Editor", posts: 18 },
    { id: 2, name: "Prof. Yusuf", email: "yusuf@ehya.edu", role: "Contributor", posts: 12 },
    { id: 3, name: "Sarah Khan", email: "sarah@ehya.edu", role: "Editor", posts: 9 },
    { id: 4, name: "Ali Hassan", email: "ali@ehya.edu", role: "Contributor", posts: 5 },
    { id: 5, name: "Fatima Zahra", email: "fatima@ehya.edu", role: "Senior Editor", posts: 14 },
  ];

  return (
    <div className="admin-content">
      <div className="admin-table-header">
        <h2>Authors</h2>
        <button className="btn-add">
          <i className="fa fa-plus"></i> Add Author
        </button>
      </div>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Posts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={author.id}>
                <td>{index + 1}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
                <td>{author.role}</td>
                <td>{author.posts}</td>
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

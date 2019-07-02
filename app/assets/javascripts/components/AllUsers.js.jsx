const AllUsers = props => {
  var users = props.users.map(user => {
    return (
      <div key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.profile_pic}</p>
      </div>
    );
  });
  return <div>{users}</div>;
};

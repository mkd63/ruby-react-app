import React from "react"

class AllUsers extends React.Component{
  getInitialState() {
    return { items: [] };
  },
  componentDidMount() {
    $.getJSON("/api/v1/items.json", response => {
      this.setState({ users: response });
    });
  },

  render() {
    var users= this.state.users.map((user) => {
        return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.profile_pic}</p>
            </div>
        )
    });

    return(
        <div>
            {users}
        </div>
    )
}

export default AllUsers

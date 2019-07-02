class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
  }
  handleFormSubmit(name, profile_pic) {
    let body = JSON.stringify({
      user: { name: name, profile_pic: profile_pic }
    });
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        this.addNewUser(user);
      });
  }
  addNewUser(user) {
    this.setState({
      fruits: this.state.users.concat(user)
    });
  }
  componentDidMount() {
    fetch("/api/v1/users.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ users: data });
      });
  }
  render() {
    return (
      <div>
        <NewUser handleFormSubmit={this.handleFormSubmit} />
        <AllUsers users={this.state.users} />
      </div>
    );
  }
}

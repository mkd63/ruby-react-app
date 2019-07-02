class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false,
      name: "",
      profilePic: ""
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
        console.log(user.name);
        this.addNewUser(user.name, user.profile_pic);
      });
  }
  addNewUser(name, profilePic) {
    this.setState({
      uploaded: true,
      name: name,
      profilePic: profilePic
    });
    console.log("refresh");
  }
  render() {
    return (
      <div className="userStats">
        {!this.state.uploaded && (
          <NewUser handleFormSubmit={this.handleFormSubmit} />
        )}
        {this.state.uploaded && (
          <DisplayUser
            name={this.state.name}
            profilePic={this.state.profilePic}
          />
        )}
      </div>
    );
  }
}

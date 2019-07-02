class DisplayUser extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="display">
        <h1 className="cyp">Your Profile</h1>
        <h1 className="name"> {this.props.name}</h1>
        <img className="profilePic" src={this.props.profilePic} />
      </div>
    );
  }
}

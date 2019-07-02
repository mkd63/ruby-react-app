class DisplayUser extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.profilePic} />
      </div>
    );
  }
}

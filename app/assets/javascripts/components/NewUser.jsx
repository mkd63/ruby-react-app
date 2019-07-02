class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {},
      imageBase64: ""
    };
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.getBase64 = this.getBase64.bind(this);
  }

  onFilesAdded(event) {
    const files = event.target.files;
    this.getBase64(files[0]);
  }

  getBase64(file) {
    let reader = new FileReader();
    const self = this;
    reader.readAsDataURL(file);
    reader.onload = function() {
      let fields = self.state.formFields;
      fields.profile_pic = reader.result;
      self.setState({ formFields: fields, imageBase64: reader.result });
      console.log(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }

  render() {
    return (
      <div>
        <h3 className="cyp">Create Your Profile</h3>
        <form
          class="profile-form"
          onSubmit={e => {
            e.preventDefault();
            this.props.handleFormSubmit(
              this.state.formFields.name.value,
              this.state.formFields.profile_pic
            );
            e.target.reset();
          }}
        >
          <input
            ref={input => (this.state.formFields.name = input)}
            placeholder="Enter your name"
            required
          />
          <input
            ref={this.fileInputRef}
            className="FileInput"
            type="file"
            onChange={this.onFilesAdded}
          />
          <button>Submit</button>
        </form>
        <img src={this.state.imageBase64} />
      </div>
    );
  }
}

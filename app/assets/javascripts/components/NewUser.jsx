const NewUser = props => {
  let formFields = {};

  return (
    <div>
      <h2 className="cyp">Create Your Profile</h2>
      <form
        class="profile-form"
        onSubmit={e => {
          props.handleFormSubmit(
            formFields.name.value,
            formFields.profile_pic.value
          );
          e.target.reset();
        }}
      >
        <input
          ref={input => (formFields.name = input)}
          placeholder="Enter the name of the item"
          required
        />
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

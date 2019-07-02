const NewUser = props => {
  let formFields = {};

  return (
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
        ref={input => (formFields.profile_pic = input)}
        placeholder="Enter a description"
        required
      />
      <button>Submit</button>
    </form>
  );
};

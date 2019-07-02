const NewUser = props => {
  let formFields = {};

  return (
    <form
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
      />
      <input
        ref={input => (formFields.profile_pic = input)}
        placeholder="Enter a description"
      />
      <button>Submit</button>
    </form>
  );
};

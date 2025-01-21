const AddBusinessPost = () => {
  const handleAddBusiness = () => {};

  return (
    <div>
      <h1>AddBusinessPost</h1>
      <form onSubmit={handleAddBusiness}>
        <input className="" placeholder="business name"></input>
        <input className="" placeholder="description"></input>
        <input className="" placeholder="owner name"></input>
        <button type="submit">Add business</button>
      </form>
    </div>
  );
};

export default AddBusinessPost;

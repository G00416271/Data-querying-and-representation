// create.js

import { useState } from "react";


//create movie function 
function Create() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }

//Form 
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} //UseEffect Change 
          />
        </div>
        <input type="submit" value="Add Movie" /> 
      </form>
    </div>
  );
}

export default Create;
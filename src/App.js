import './App.css';
import React , { useState , useRef } from 'react'

function App() {
  // SHOW
  const [tabs, setTabs] = useState([
    {id : 0 , name :  "car"},
    {id : 1 , name :  "bus"},
    {id : 2 , name :  "bike"},
  ])

  const resetInput = useRef(null)

  // CREATE
  const handleSubmit = (e) =>  {
    e.preventDefault();
    const id = tabs.length ;
    const name = e.target.new.value ; 
    setTabs([...tabs, {id , name}])
    if(resetInput.current){resetInput.current.value = ""}
  }

  // EDIT
  const handleUpdate = (e, id) => {
    e.preventDefault();
    const name = e.target.update.value;
    const newTabs = tabs.map((item)=>
      item.id === id ? { name  } : item
    )
    setTabs(newTabs)
  }
  // DELETE
  const handleDelete = (id) => {
    const newTabs = tabs.filter((item) => 
      item.id !== id
    )
    setTabs(newTabs);
  }

  // Progress bar
  // const [progress, setProgress] = useState(0);

  // const handleAdd25 = () => {
  //   setProgress((prevProgress) =>
  //     prevProgress <= 100 ? prevProgress + 25 : prevProgress = 25
  //   ); 
  // };

  // Progress bar
  // const [progress, setProgress] = useState(0);

  // const handleAdd25 = () => {
  //   setProgress((prevProgress) =>
  //     prevProgress <= 100 ? prevProgress + 25 : prevProgress = 25
  //   ); 
  // };
  
  // Progress bar
  // const [progress, setProgress] = useState(0);

  // const handleAdd25 = () => {
  //   setProgress((prevProgress) =>
  //     prevProgress <= 100 ? prevProgress + 25 : prevProgress = 25
  //   ); 
  // };

  return (
    <div className="text-center">
      <h1 className="mt-2">List :</h1>
      {tabs.map((data) => (
        <div key={data.id}>
          <p className="fw-bold text-capitalize">{data.name}</p>
          <form
            onSubmit={(e) => handleUpdate(e, data.id)}
            className="container d-flex"
          >
            <input
              defaultValue={data.name}
              name="update"
              className="form-control"
            />
            <button type="submit" className="btn btn-success me-2">
              Apply
            </button>
            <button
              onClick={() => handleDelete(data.id)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </form>
        </div>
      ))}
      <h1>Add :</h1>
      <form onSubmit={handleSubmit} className="container d-flex">
        <input
          name="new"
          type="text"
          className="form-control"
          ref={resetInput}
        />
        <button className="btn btn-success">Add</button>
      </form>

      <h1 className="mt-2"> Progress bar </h1>
      <div
        class="progress mx-4"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class={`progress-bar w-${progress}`}></div>
      </div>
      <button onClick={handleAdd25} className="btn btn-primary mt-2">
        Add 25
      </button>
    </div>
  );
}

export default App

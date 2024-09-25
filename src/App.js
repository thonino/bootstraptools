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
  const [progress, setProgress] = useState(0);

  const handleAdd25 = () => {
    setProgress((prevProgress) =>
      prevProgress <= 100 ? prevProgress + 25 : prevProgress = 25
    ); 
  };

  // Toast 




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

      <h1 className="mt-2 text-success"> alert </h1>
      <div class="alert alert-primary container" role="alert">
        A simple primary alert !
      </div>

      <h1 className="mt-2 text-success"> Spinner </h1>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <h1 className="mt-2 text-warning"> Button group</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-success">
          Left
        </button>
        <button type="button" className="btn btn-warning">
          Middle
        </button>
        <button type="button" className="btn btn-danger">
          Right
        </button>
      </div>

      <h1 className="mt-2 text-primary"> Progress bar </h1>
      <div
        className="progress mx-4"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className={`progress-bar w-${progress}`}></div>
      </div>
      <button onClick={handleAdd25} className="btn btn-primary mt-2">
        Add 25
      </button>

      <h1 className="mt-2 text-primary"> Card </h1>
      <div className="d-flex justify-content-center mb-4">
        <div className="card w-25 ">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/14/09/19/meditation-8314420_960_720.png"
            className="card-img-top d"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App

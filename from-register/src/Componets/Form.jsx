import React from "react";


import "../App.css";
import { useState } from "react";
const options = [
  { id: 1, name: ' Traveling' },
  { id: 2, name: "dancing" },
  { id: 3, name: "singing" },
];
function Form() {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleCheckbox = (id) => {
    const newCheckedOptions = checkedOptions.slice();
    const index = newCheckedOptions.indexOf(id);

    if (index === -1) {
      newCheckedOptions.push(id);
    } else {
      newCheckedOptions.splice(index, 1);
    }

    setCheckedOptions(newCheckedOptions);
  };
    const [data, setdata] = useState([{
        names:"",
        email: "",
        password: "",
        address:"",
        city:"",
        satate:"",
        zip:"",
        gender:"master",

      }]);
      function handleChange(evt) {
        const value = evt.target.value;
        setdata({
          ...data,
          [evt.target.name]: value
          
          
        }
       );
       console.log(evt.target.value);
       console.log(data);
      }
    
      
  return (
    <>
    <form action="" ></form>
      <div className="container-fluid bg-dark text-light py-3">
        <header className="text-center">
          <h1 className="display-6">Welcome to our page</h1>
        </header>
      </div>
      <section className="container my-2 bg-dark w-50 text-light p-2">
        <form className="row g-3 p-3">
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">
              
              name
            </label>
            <input
              type="text"
              className="form-control"
              
              name="names"
              value={data.names}
              onChange={handleChange}
             
             
            />
          </div>

          <div className="col-md-9">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" name="email"   value={data.email}
              onChange={handleChange} 
           />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              value={data.password}
              onChange={handleChange}
             
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={data.address}
              onChange={handleChange}
             
            />
          </div>

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" name="city"   value={data.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select" name="satate"   value={data.satate}
              onChange={handleChange} >
              <option selected>Select </option>
              <option>Gujarat</option>
              <option>Andhra Pradesh</option>
              <option> Assam</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" name="zip"   value={data.zip}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-10">
            <label for="inputZip" className="data form-label" >
              gender
            </label>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="gender"
                value="female"
                checked={data.gender === "female"}
                onChange={handleChange}
               
              
              />
              <label className="form-check-label" for="inlineCheckbox1">
                female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="gender"
                value="male"
                checked={data.gender1 === "male"}
                onChange={handleChange}
              />
              <label className="form-check-label" for="inlineCheckbox1">
                male
              </label>
            </div>
          </div>
          <div className="col-md-10">
          <label className="data form-label" >Hobbies</label>
          {options.map((option) => (

        <label key={option.id}>
         
          <input
            type="checkbox"
            checked={checkedOptions.includes(option.id)}
            onChange={() => handleCheckbox(option.id)}
            className="m-3"
          />
          {option.name}
        </label>
      ))}

      <p>Checked options: {checkedOptions.map((id) => options.find((option) => option.id === id).name).join(', ')}</p>
    </div>
          {/* <div className="col-md-6">
            <label className="form-label">Hobbies</label>
            <div className="btn-group" role="group">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck1"
                autocomplete="on"
                name="drop1"
               
              />
              <label className="btn btn-Light " for="btncheck1">
                {" "}
                Dancing
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autocomplete="off"
                name="drop2"
               
              />
              <label className="btn " for="btncheck2">
                {" "}
                Reading
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btncheck3"
                autocomplete="off"
                name="drop3"
              
              />
              <label className="btn " for="btncheck3">
                {" "}
                Traveling
              </label>
            </div>
          </div> */}

          <div className="col-md-4">
            <label for="validationDefault01" className="date form-label">
              {" "}
              B_Date
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              
              required
              name="date"
              value={data.date}
              onChange={handleChange}
            />

             
          
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary " id="box">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;

import React from 'react'
import {useFormik}  from    "formik"

const initialValues = {
    names:"",
    email:"",
    password:"",
    address:"",
    city:"",
    satate:"",
    zip:"",
    gender:"",
    date:""
  };
 
  const onSubmit = (values) => {
    console.log('Form submitted:', values);
  };
function Form1() {
    
      
 
        const formik = useFormik({
          initialValues: initialValues,
          
          onSubmit: onSubmit,
        });
      
        
        
          
        
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
    <div className="container-fluid bg-dark text-light py-3">
      <header className="text-center">
        <h1 className="display-6">Welcome to our page</h1>
      </header>
    </div>
    <section className="container my-2 bg-dark w-50 text-light p-2">
      <form className="row g-3 p-3">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            
            name
          </label>
          <input
            type="text"
            className="form-control"
            name="names"
          value={formik.values.names}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
           
           
          />
        </div>

        <div className="col-md-9">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" name="email"  value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         
           
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
           
           
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" name="city"  value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select" name="satate"   value={formik.values.satate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} >
            <option selected>Select </option>
            <option>Gujarat</option>
            <option>Andhra Pradesh</option>
            <option> Assam</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" name="zip" value={formik.values.zip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          />
        </div>
        {/* <div className="col-md-10">
          <label htmlFor="inputZip" className="data form-label" >
            gender
          </label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
              value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
             
             
            
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="gender"
             
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
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
         
          
          className="m-3"
        />
        {option.name}
      </label>
    ))}

    {/* <p>Checked options: {checkedOptions.map((id) => options.find((option) => option.id === id).name).join(', ')}</p> 
  </div> */}
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
            <label className="btn btn-Light " htmlFor="btncheck1">
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
            <label className="btn " htmlFor="btncheck2">
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
            <label className="btn " htmlFor="btncheck3">
              {" "}
              Traveling
            </label>
          </div>
        </div> */}

        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="date form-label">
            {" "}
            B_Date
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            
            required
            name="date"
            value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
           
          />

           
        
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary " id="box" >
            Submit
          </button>
        </div>
      </form>
    </section>
    </form>
  </>

  )
}

export default Form1
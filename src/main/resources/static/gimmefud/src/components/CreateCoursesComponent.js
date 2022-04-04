import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CustomerService from "../services/CoursesService";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../CreateCoursesPage.css';




const CreateCoursesComponent = () => {
    const [course_name, setCourseName] = useState('');
    const[rname, setRname   ] = useState('');
    const[meal_type, setMealType] = useState('');
    const[meal_price, setMealPrice] = useState('');

   
    const navigate = useNavigate();

  const handleSelect=(e) =>{
    console.log(e);
    setMealType(e)
  }
  

    const saveCourse = (e) => {
        e.preventDefault();
        
        const course = { course_name, rname, meal_type, meal_price};
        CustomerService.create(course)
        .then(response => {
            console.log("Course added successfully", response.data);
            navigate("/CreationSuccesfull");
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
    }




  return (
    <div className="container"> 
        <h1> Create course  </h1>
    <div className="createCourses">
    <form  class = "row g-3">
        

<div class = "col-md-6">
    <label for = "inputRname" class="form-label">Restaurant name</label>
    <input
    type="text"
    class="form-control"
    id="rname"
    value={rname}
    onChange={(e) => setRname(e.target.value)}
    placeholder="Restaurant name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputCourseName" class="form-label">Name of course</label>
    <input
    type="text"
    class="form-control"
    id="course_name"
    value={course_name}
    onChange={(e) => setCourseName(e.target.value)}
    placeholder="Name of course"
    name="s" 
    />
</div>



<div class = "col-md-6">
    <label for = "inputPriceRange" class="form-label">Price</label>
    <input
    type="text"
    class="form-control"
    id="price_range"
    value={meal_price}
    onChange={(e) => setMealPrice(e.target.value)}
    placeholder="Price"
    name="s" 
    />
</div>
<div>Use dropdown menu below to choose type of meal</div>
<DropdownButton
alignRight
title={meal_type}
id="dropdown-menu-align-right"
onSelect={handleSelect}
>
  <Dropdown.Item eventKey="Main course">Main course</Dropdown.Item>
  <Dropdown.Item eventKey="Side">Side</Dropdown.Item>
  <Dropdown.Item eventKey="Dessert">Dessert</Dropdown.Item>
  <Dropdown.Item eventKey="Drink">Drink</Dropdown.Item>
</DropdownButton>


  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input"
       type="checkbox" id="gridCheck" />
      <label class="form-check-label"
       for="gridCheck">
        My information is correct
      </label>
    </div>
  </div>
<div class="col-12">
<button  onClick={(e) => saveCourse(e)} type="submit" class = "btn btn-primary">Add course</button>

    </div>   
    </form>
                
                
                 </div>
        </div>
  )
}

export default CreateCoursesComponent;
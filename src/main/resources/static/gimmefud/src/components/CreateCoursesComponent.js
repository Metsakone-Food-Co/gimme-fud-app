import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import CoursesService from "../services/CoursesService";

const CreateCoursesComponent = () => {
    const[coursename, setCourseName] = useState('');
    const[rname, setRname] = useState('');
    const[mealname, setMealName] = useState('');
    const[mealtype, setMealType] = useState('');
    const[mealprice, setMealPrice] = useState('');
    

    const saveCourse = (e) => {
        e.preventDefault();
        
        const course = {coursename, rname, mealname, mealtype, mealprice};
        CoursesService.create(course)
            .then(response => {
                console.log("Course added successfully", response.data);
              
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }

  return (
    <div className="container"> 
        <h1> Create course  </h1>
    <div className="createCourse">
    <form  class = "row g-3">
        
<div class = "col-md-6">
    <label for = "inputcoursename" class="form-label">Courses name</label>
    <input
    type="text"
    class="form-control"
    id="coursename"
    value={coursename}
    onChange={(e) => setCourseName(e.target.value)}
    placeholder="CourseName"
    name="s" 
    />
</div>


<div class = "col-md-6">
    <label for = "inputrestaurantname" class="form-label">Restaurant name</label>
    <input
    type="text"
    class="form-control"
    id="rname"
    value={rname}
    onChange={(e) => setRname(e.target.value)}
    placeholder="rname"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealName" class="form-label">Meal Name</label>
    <input
    type="text"
    class="form-control"
    id="mealname"
    value={mealname}
    onChange={(e) => setMealName(e.target.value)}
    placeholder="Meal name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "inputMealType" class="form-label">Meal type</label>
    <input
    type="text"
    class="form-control"
    id="mealtype"
    value={mealtype}
    onChange={(e) => setMealType(e.target.value)}
    placeholder="Meal name"
    name="s" 
    />
</div>

<div class = "col-md-6">
    <label for = "MealPrice" class="form-label">MealPrice</label>
    <input
    type="text"
    class="form-control"
    id="mealprice"
    value={mealprice}
    onChange={(e) => setMealPrice(e.target.value)}
    placeholder="Meal price"
    name="s" 
    />
</div>



<div class="col-12">
    <button  onClick={(e) => saveCourse(e)} type="submit" class = "btn btn-primary">Add me</button>

    </div>   

    
    </form>
                
                
                 </div>
        </div>
  )
}

export default CreateCoursesComponent;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantService from '../services/RestaurantService';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Badge} from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import { BsCartPlus} from "react-icons/bs";
import { MdFastfood } from "react-icons/md";







const ListRestaurantComponent = () => {

  const [restaurants, setRestaurants] = useState([]);

  const init = () => {
    RestaurantService.getAll()
      .then(response => {
        console.log('Printing restaurants', response.data);
        setRestaurants(response.data);
      })
      .catch(error => {
        console.log('vituiksmän', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);


  return (
    <div className="container">
      
       <div class="card text-white">
       <img src="ruokakuva.png" class="card-img" alt= "background" width="100%" height="400px"/>
       <div class="card-img-overlay">
       <h3>List of Restaurants</h3>
   
       </div>
       </div>
       

        <Row xs={1} md={3} className="g-4">
          {restaurants.map(restaurant =>(
            <tr key={restaurant.rname}>
                
                <Card style={{ width: '18rem'  }} >
                <Card.Body style={{border: '50px'}}>
              <Card.Img variant="top" src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/w_1280,c_limit/the-ultimate-hamburger.jpg"/>
            
             <Card.Title  >{restaurant.rname} <BsCartPlus /></Card.Title>

              <Card.Text>
              <p>Opening hours: {restaurant.service_hours}</p> </Card.Text>
              <Card.Text>
              <p>Price Range: {restaurant.price_range} </p> 
              </Card.Text>
              
      
                <button type="button" class="btn btn-outline-secondary"> Tilaa <BsCartPlus/></button>
                <Card.Link href="#">Give Feedback</Card.Link>
                <Card.Text>
              
                <Badge bg="light" text="info">{restaurant.rtype}<MdFastfood/></Badge>
                  
                </Card.Text>
           
                
             
     
              </Card.Body>
              </Card>
              
            </tr>
          ))
          }
          </Row>
       <div class="downcont">
      
       </div>
       
        
      </div>
 
  );
}

export default ListRestaurantComponent;

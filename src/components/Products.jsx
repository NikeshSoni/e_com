
import { useState , useEffect } from "react";
import {Container , Row , Button} from 'react-bootstrap';
import Header from "./Navbar";
import App from "../App";

const Products = ({setStoreApi , filterData}) => {
    
    useEffect( () => {
        const  apiData = async () => {
            try {
                const data = await fetch('https://fakestoreapi.com/products')
                const ChangeJson = await data.json();
                const dataSet =  setStoreApi(ChangeJson)
            } catch (error) {
                console.log(error);
                return alert('Cheak Your Internet Connection')
            }
        }
        apiData()
    },[])

    return(
              <>
                <Container>
                    <Row className="row gap-2">
                        {filterData.map( (items,index) => {
                            return (
                                <div className="card d-flex justify-content-center align-items-center col-md-5 col-5 col-lg-2 mx-auto mt-4" key={index}>
                                    <div className="productsImg mx-auto d-flex justify-content-center align-items-center">
                                            <img src={items.image} className="commanWidth" />
                                    </div>
                                    <div className="productsTitle text-center">
                                            <p className="my-3 commanFonts">{items.title}</p>
                                    </div>

                                    <div className="my-2">
                                            <p> Price - $ {items.price}</p>
                                    </div>
                                    
                                    <Button className="my-2"  variant="info">
                                        Add To Cart
                                    </Button>
                                </div>
                            )
                        })}
                        </Row>
                </Container>
           
              </>
    )
}

export default Products
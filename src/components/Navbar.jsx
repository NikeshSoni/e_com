import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Products from './Products';
import {useEffect , useState} from 'react'



const Header = () => {

   

    const [storeApi , setStoreApi ] = useState([]);
    const [filter , setFilter ] = useState('');
    const [filterData , setFilterData ] = useState([])

    useEffect( () => {
        setFilterData(
            storeApi.filter(  (data) =>
                data.title.toLowerCase().includes(filter.toLowerCase())
            )
        )

    } , [filter , storeApi]);
   
    return(
       <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm">
                <Container className='gap-5'>
                        <Link className='fs-5 text-decoration-none text-dark' to="/">e_com</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto gap-4">
                                <Link className='fs-6 text-decoration-none text-dark' to="/">Home</Link>
                                <Link className='fs-6 text-decoration-none text-dark' to="/cart">Cart</Link>
                            </Nav>
                            <Nav>
                                <Link className='fs-6 text-decoration-none text-dark' to="/cart">Cart Score = 0</Link>
                            </Nav>

                            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 my-4" />
                    </Navbar.Collapse>
                </Container>
             </Navbar>

             <Products  
                    storeApi={storeApi} 
                    setStoreApi={setStoreApi} 
                    filter={filter}
                    setFilter={setFilter}
                    filterData={filterData}
                    setFilterData={setFilterData}
             />
       </>

      
    )
}

export default Header
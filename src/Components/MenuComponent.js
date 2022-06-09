import React, { useState } from 'react'
import { Card, CardImgOverlay, CardImg, CardTitle, Container, Row } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import Header from './Header';
import Footer from './Footer';
import DISHES from './Dishes';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const MenuComponent = () => {
  const [selected, setselected] = useState(null)

  const Display = (item) => {
    setselected(item)
    console.log(item)
  }

  const menu = DISHES.map((item) => (
    <div key={item.id} className=" mt-3 mb-3" onClick={() => Display(item)} >
      <Card className="pointer" data-aos="fade-right" data-aos-duration='1000'>

        <CardImg
          alt="Card image cap"
          src={item.image}

        />
        <CardImgOverlay>
          <CardTitle tag="h5" className='card_title'>
            {item.name}
          </CardTitle>
        </CardImgOverlay>

      </Card>
    </div>
  ))

  return (
    <>
      <Header />
      <Container >
        <Breadcrumb>
          <div className='breadcrumbs mt-2 p-2'>
            <BreadcrumbItem ><a href="/" style={{ textDecoration: 'none', color: '#512DA8' }}>Home</a></BreadcrumbItem>
            <BreadcrumbItem active style={{ color: '#9575CD' }}>Menu</BreadcrumbItem>
          </div>
        </Breadcrumb>
        <Row lg={2} >
          {menu }
          <DishDetail select={selected} />
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default MenuComponent
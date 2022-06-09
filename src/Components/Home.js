import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container , Row} from 'reactstrap';
import DISHES from './Dishes';
import Leaders from './Leader';
import Promotions from './Promotion';
import Header from './Header';
import Footer from './Footer';

const RenderCard = ({ item }) => {

    return (
        // <Card data-aos="fade-up" data-aos-duration='1000'>
        //     <CardImg src={item.image} alt={item.name} />
        //     <CardBody>
        //         <CardTitle>{item.name}</CardTitle>
        //         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        //         <CardText>{item.description}</CardText>
        //     </CardBody>
        // </Card>

        <Card data-aos="fade-up" data-aos-duration='1000'>
            <CardImg src={item.image} alt={item.name} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">
              {item.name}
              </CardTitle>
              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
              <CardText>
              {item.description}
              </CardText>
            </CardBody>
          </Card>
    );

}

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Row >
            <div className="container mt-3 mb-5"  >
                <div className="row align-items-start" >
                    <div className="col-12 col-md m-1"  >
                        <RenderCard item={DISHES.filter((dish) => dish.featured)[0]} />
                    </div>
                    <div className="col-12 col-md m-1"  >
                        <RenderCard item={Promotions.filter((promo) => promo.featured)[0]} />
                    </div>
                    <div className="col-12 col-md m-1"  >
                        <RenderCard item={Leaders.filter((leader) => leader.featured)[0]} />
                    </div>
                </div>
            </div>
            </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
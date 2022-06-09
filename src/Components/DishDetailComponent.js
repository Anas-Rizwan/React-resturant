import React from 'react'
import Dishes from './Dishes'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const DishDetail = (props) => {

  return (

    props.select != null
      ?
      <>
        <div className=" mt-3 mb-3 " >
          <Card data-aos="fade-up" data-aos-duration='1000'>
            <CardImg alt="Card image cap" src={props.select.image} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">
                {props.select.name}
              </CardTitle>
              <CardText>
                {props.select.description}
              </CardText>
            </CardBody>
          </Card>
        </div>

        <div className=" mt-3 mb-3" data-aos="fade-up" data-aos-duration='1000' >

          <h3>Comments</h3>
          {Dishes.map((v) => {
            return (
              v.id == props.select.id ?
                v.comments.map((t) => {
                  return (
                    <>
                      <div key={t.id} className='mt-3 mb-4 m-1'>
                        <h5 >{t.comment}</h5>
                        <h5 className='mt-3'>-- {t.author}  {t.date}</h5>
                      </div>
                    </>
                  )
                })

                :
                <div>

                </div>
            )
          }
          )}

        </div>
      </>
      :
      <div></div>
  )
}

export default DishDetail
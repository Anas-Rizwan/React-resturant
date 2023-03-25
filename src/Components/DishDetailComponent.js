import React, { useState } from 'react'
import Dishes from './Dishes'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { GoPencil } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { formschema } from '../Schemas';

const DishDetail = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = {
    Rating: '',
    Name: '',
    Comment: '',

  }
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: formschema,
    onSubmit: (values, action) => {
      action.resetForm()
      console.log(values);
     
    }
  })

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
              v.id === props.select.id ?
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
          <div className='btn_div' onClick={handleShow}>
            {/* <img src="assets/images/pencil.png" style={{ tintColor: "red" }} /> */}
            <GoPencil className='icon' />
            <button variant="light" className='button_btn' >Submit Comment</button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Submit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="input-block">
                    <label htmlFor="Rating" className="input-label">
                      Rating
                    </label>
                    <input
                      type="number"
                      step="1"
                      min='1'
                      max='5'
                      autoComplete="off"
                      name="Rating"
                      id="Rating"
                      placeholder="Rating"
                      value={values.Rating}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Rating && touched.Rating ? (
                      <p className="form-error">{errors.Rating}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="Name" className="input-label">
                      Your Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="Name"
                      id="Name"
                      placeholder="Name"
                      value={values.Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Name && touched.Name ? (
                      <p className="form-error" style={{color:"red"}}>{errors.Name}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="Comment" className="input-label">
                      Comment
                    </label>
                    <textarea
                      rows="5"
                      type="name"
                      autoComplete="off"
                      name="Comment"
                      id="Comment"
                      placeholder="Comment"
                      value={values.Comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Comment && touched.Comment ? (
                      <p className="form-error">{errors.Comment}</p>
                    ) : null}
                  </div>
                </div>
              </form>


            </Modal.Body>
            
            <Modal.Footer style={{justifyContent:"flex-start "}}>
              <Button variant="primary"  onClick={handleSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </>
      :
      <div></div>
  )
}

export default DishDetail
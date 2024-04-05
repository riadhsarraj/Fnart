
import React from 'react';
import './reservation.css'
import img from '../image/zzz.jpg'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5">

      <MDBCard  className='a'>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={img} alt="login form" className='rounded-start w-100' />
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                
                <span className="h1 fw-bold mb-0">Reservation</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Full name' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Phone' id='formControlLg' type='number' size="lg"/>
                <div class="select">
                <div
                  class="selected"
                  data-default="Event"
                  data-one="option-1"
                  data-two="option-2"
                  data-three="option-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    class="arrow"
                  >
                    <path
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>
                  </svg>
                </div>
                <div class="options">
                  <div title="Event">
                    <input id="all" name="option" type="radio" checked="true" />
                    <label class="option" for="Event" data-txt="Event"></label>
                  </div>
                  <div title="option-1">
                    <input id="option-1" name="option" type="radio" />
                    <label class="option" for="option-1" data-txt="option-1"></label>
                  </div>
                  <div title="option-2">
                    <input id="option-2" name="option" type="radio" />
                    <label class="option" for="option-2" data-txt="option-2"></label>
                  </div>
                  <div title="option-3">
                    <input id="option-3" name="option" type="radio" />
                    <label class="option" for="option-3" data-txt="option-3"></label>
                  </div>
                </div>
              </div>


              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;

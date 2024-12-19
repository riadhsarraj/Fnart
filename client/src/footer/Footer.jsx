import React, { useEffect } from 'react';
import "./footer.css";
import logo from '../image/logo.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
 

  return (
    <div className='footer'>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/groups/1099054401287439' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
         
          <a href='https://www.instagram.com/fnart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='whatsapp' />
          </a>
        
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <img src={logo} alt="" />
              <p>
              "FNART - Explorez la nature, élargissez vos horizons. Notre passion pour la nature vous offre des expériences enrichissantes et des formations inoubliables en plein air."
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Event
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Gallery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Reservation
                </a>
              </p> <p>
                <a href='#!' className='text-reset'>
                Shop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Tunisia, Sousse, 5021
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                fnart@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 216 53590787
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 216 58660004
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

    </div>
  );
}

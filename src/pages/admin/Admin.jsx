import React from 'react'
import { GrLocation } from 'react-icons/gr'
import FormImg from '../../images/formImg.png'
import Delivery from '../../components/delivery/Delivery'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'

const Admin = () => {
  return (
    <div className='admin-page'>
      <ScrollToTop/>
      <div className="admin-panel">
        <div className="container">
          <div className="admin-panel__title">
            <h5>How can help you ?</h5>
            <h2>Admin panel</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
          </div>
          <ul className="admin-panel__list">
            <li>
              <h3>01. Visit Feedback</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>
            <li>
              <h3 className='admin-panel__list-heading'>03. Billing Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>
          </ul>
          <ul className="admin-panel__list">
            <li>
              <h3>02. Employer Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>
            <li>
              <h3>04.General Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div>
          <iframe 
            src="https://yandex.uz/map-widget/v1/?ll=69.203532%2C41.285835&z=17.05"
            width="100%" 
            height="400" 
            style={{border: "none", borderRadius: "15px"}}
          >
          </iframe>
          </div>
      </div>
      <div className="map-section">
        <div className="container">
          <div className="map__card">
            <h3>Office</h3>
            <ul>
              <li>
                205 North Michigan Avenue, Suite 810
              </li>
              <li>
                Chicago, 60601, USA
              </li>
              <li>
                <span>Phone:</span> (123) 456-7890
              </li>
              <li>
                <span>Email:</span> contact@Evara.com
              </li>
            </ul>
            <button>
              <GrLocation />
              <span>View map</span>
            </button>
          </div>
          <div className="map__card">
            <h3>Office</h3>
            <ul>
              <li>
                205 North Michigan Avenue, Suite 810
              </li>
              <li>
                Chicago, 60601, USA
              </li>
              <li>
                <span>Phone:</span> (123) 456-7890
              </li>
              <li>
                <span>Email:</span> contact@Evara.com
              </li>
            </ul>
            <button>
              <GrLocation />
              <span>View map</span>
            </button>
          </div>
          <div className="map__card">
            <h3>Office</h3>
            <ul>
              <li>
                205 North Michigan Avenue, Suite 810
              </li>
              <li>
                Chicago, 60601, USA
              </li>
              <li>
                <span>Phone:</span> (123) 456-7890
              </li>
              <li>
                <span>Email:</span> contact@Evara.com
              </li>
            </ul>
            <button>
              <GrLocation />
              <span>View map</span>
            </button>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="container">
          <div className="form__content">
            <form>
              <h5>Contact form</h5>
              <h2>Drop Us a Line</h2>
              <p>Your email address will not be published. Required fields are marked *</p>
              <div>
                <input required type="text" placeholder='First Name'/>
                <input required type="email" placeholder='Your Email'/>
              </div>
              <div>
                <input required type="tel"  placeholder='Your Phone'/>
                <input type="text" placeholder='Subject'/>
              </div>
              <textarea cols="30" rows="8"></textarea>
              <button>Send message</button>
            </form>
            <img src={FormImg} alt="form img" />
          </div>
        </div>
      </div>
      <div style={{marginBottom: "172px", marginTop: "50px"}}>
        <Delivery/>
      </div>
    </div>
  )
}

export default Admin
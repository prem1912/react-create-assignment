import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow = "<";
var rightArrow = ">"

var status = {
  1: 'suspended',
  2: 'completed',
  3: 'cancelled'
}

var Appointments = {
  'name': 'Allen Ford',
  'employeeid': 1234567890,
  'appointmenton': new Date(79834723894723).toLocaleString(),
  'email': 'premshaw197@gmail.com',
  'phone': 1234567890,
  order_info: {
    'status': status[1],
    'Door': 'Mark',
    'Time': new Date(19348938200).toLocaleString(),
  },
  person: {
    'avatar': 'https://www.w3schools.com/howto/img_avatar.png',
    'title': 'Hey! lets become successful together',
    'description': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
  },
};

const App = () => {
  return (
    <div className="site-container">
    <div className="order-details">
      <div className="nav">
        <div className="nav-container">
          <a className="nav-arrows" href='#'>{arrow}</a>
          <h1 className="nav-title">{appointment.name}</h1>
          <span className="nav-text">{appointment.employeeid}</span>
          <button className="btn">Print</button>
        </div>
      </div>
      <div className="container">
        <div className="customer-info-block">
          <p className="text">
            <span>Appointment on </span>
            {appointment.appointmenton}
          </p>
          <p className="text">
            <span>Email : </span>
            {appointment.email}
          </p>
          <p className="text">
            <span>Phone : </span>
            {appointment.phone}
          </p>
        </div>
        <div className="order-info-block">
          <div className="unit one-third">
            <p className="text text-status">Status</p>
            <p className="text order-status">{appointment.order_info.status}</p>
          </div>
          <div className="unit one-third">
            <p className="text text-status">Door</p>
            <p className="text order-status">{appointment.order_info.Door}</p>
          </div>
          <div className="unit one-third">
            <p className="text text-status">Time</p>
            <p className="text order-status">{appointment.order_info.Time}</p>
          </div>
        </div>
        <ul className="product-list-block">
          <li className="product">
            <label className="img custom-checkbox">
              <input type="checkbox" className="product-input" value=""></input>
              <span className="custom-checkbox-indicator"></span>
              <img className="avatar" src={appointment.person.avatar} width="100px" height="100px" alt="profile image" />
            </label>
            </li>
            <li>
            <a href="#" className="product-desc">
            <span className="product-arrow arrow">{rightArrow}</span>
              <div className="product-info">
                <h3 className="product-title">{appointment.person.title}</h3>
                <p className="text-help">{appointment.person.description}</p>
              </div>
            </a>
            </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default App;

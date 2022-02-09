import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className="container">
        <div className="profile-image">
          <img className="profile-img" src={employee.profileImg} alt="profile image" width="100px" height="100px" />
        </div>
        <div className="profile-details-info">
          <div className="profile-name">
            <h1 className="p-name">{employee.name}</h1>
          </div>

          <div className="profile-details">
            <label>Location</label>
            <strong>{employee.location}</strong>
          </div>
          <div className="profile-details">
            <label>Blood Group</label>
            <strong>{employee.bloodGroup}</strong>
          </div>
          <div className="profile-details">
            <label>Age</label>
            <strong>{employee.age}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App;

import { Link } from "react-router-dom";
import image from "../assets/woman.jpg";

function AppointmentSection() {
  return (
    <div className="appointment">
      <div className="appointment_left">
        <img className="appointment_img" src={image} alt="Appointment" />
      </div>
      <div className="appointment_right">
        <h1 className="heading">Lets Go</h1>
        <h1 className="sub-heading">BOOK APPOINTMENT</h1>
        <p>
          Book an appointment today and let us transform your spar visit to an
          experience. You’ll leave feeling pretty on the outside and, more
          importantly, beautiful on the inside. Go from a 9 to a 10!
        </p>
        <Link to="/book_appointment">
          <button className="booknow">Book now &rarr;</button>
        </Link>
      </div>
    </div>
  );
}

export default AppointmentSection;

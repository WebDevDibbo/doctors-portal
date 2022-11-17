import React from "react";
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section className="mt-72 mb-20"
    style={{
        background: `url(${appointment})`,
        
    }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src={doctor}
            className="hidden md:block lg:w-1/2 -mt-32"
            alt=""
          />
          <div className="px-5 py-10 lg:pr-20">
            <h4 className="text-primary font-bold text-xl ">Appointment</h4>
            <h1 className="text-4xl font-semibold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold text-white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;

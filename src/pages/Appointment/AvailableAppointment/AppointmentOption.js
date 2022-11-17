import React from "react";

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl bg-gray-200">
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center mt-4">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary bg-secondary uppercase text-white font-bold"
            onClick={()=>setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;

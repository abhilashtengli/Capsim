import React from "react";

const CapsimAddress = () => {
  return (
    <div className="lg:w-[70%] mx-auto mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.685842202988!2d83.29867449999999!3d17.712294900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39430053a0e035%3A0xb16e4004835e5640!2sCapsim%20Exports!5e0!3m2!1sen!2sin!4v1727335276296!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        title="googleMap"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl  border-2 "
      ></iframe>
    </div>
  );
};

export default CapsimAddress;

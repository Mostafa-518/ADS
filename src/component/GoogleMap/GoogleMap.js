import React from "react";

function GoogleMap({ latitude, longitude }) {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1588690958350!5m2!1sen!2sbd`;

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <iframe
        src={src}
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

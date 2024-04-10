import React from "react";
import QRCode from "react-qr-code";

const QRComp = ({value, data}) => {
 
  return (
    <div>

      
     
        <QRCode
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={'www.google.com'}
          viewBox={`0 0 256 256`}
        />
    </div>
  );
};

export default QRComp;

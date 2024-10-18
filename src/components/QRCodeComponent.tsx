import React from "react";
import QRCode from "react-qr-code";

export default function QRCodeComponent() {
  const upiId = "8935802137@paytm";
  const payeeName = "Kumar Ritu Raj";
  const amount = "1.0";
  const currency = "INR";

  const upiLink = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=${currency}`;
  return (
    <div style={{ textAlign: "center", marginTop: "4px" }}>
      <QRCode
        value={upiLink}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H" // Error correction level (L, M, Q, H)
      />
    </div>
  );
}

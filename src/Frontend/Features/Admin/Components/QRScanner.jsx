import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/QRScanner.css";
import bgImage from "../assets/event-banner.avif"; // background image

const QRScanner = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render((decodedText) => {
      scanner.clear().catch(() => {});

      let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
      let studentName = "";

      // 1️⃣ JSON QR → {"name":"sanika"}
      try {
        const parsed = JSON.parse(decodedText);
        if (parsed.name) studentName = parsed.name;
      } catch {
        // 2️⃣ URL QR → https://qr-codes.io/sanika
        if (decodedText.startsWith("http")) {
          studentName = decodedText.split("/").pop();
        }
        // 3️⃣ Plain text QR → sanika
        else {
          studentName = decodedText;
        }
      }

      studentName = studentName.trim().toLowerCase();

      if (!studentName) {
        setMessage("❌ Invalid QR Code");
        return;
      }

      if (attendance.includes(studentName)) {
        setMessage(`⚠️ Attendance already marked for ${studentName}`);
        return;
      }

      attendance.push(studentName);
      localStorage.setItem("attendance", JSON.stringify(attendance));
      setMessage(`✅ Attendance marked for ${studentName}`);
    });

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="qr-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="qr-card">
        <h2>Scan QR to Mark Attendance</h2>
        <div id="qr-reader" className="camera-box"></div>
        {message && <p className="qr-message">{message}</p>}
      </div>
    </div>
  );
};

export default QRScanner;

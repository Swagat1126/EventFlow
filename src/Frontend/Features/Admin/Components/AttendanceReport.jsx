import { useEffect, useState } from "react";
import "../styles/AttendanceReport.css";

const AttendanceReport = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("attendance")) || [];
    setAttendance(data);
  }, []);

  return (
    <div className="report-wrapper">
      <div className="report-card">
        <h1 className="report-title">Attendance Report</h1>

        {attendance.length === 0 ? (
          <div className="no-data">
            <p>No attendance marked yet</p>
          </div>
        ) : (
          <table className="report-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>
                    <span className="status-badge">Present</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AttendanceReport;

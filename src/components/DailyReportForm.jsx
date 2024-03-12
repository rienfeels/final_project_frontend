import React from "react";
import "./DailyReportForm.css";

const DailyReportForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      date_submitted: e.target.date_submitted.value,
      road_name: e.target.road_name.value,
      contractor: e.target.contractor.value,
      workers: parseInt(e.target.workers.value, 10),
      job_time_arrived: e.target.jobTimeArrived.value,
      job_time_finished: e.target.jobTimeFinished.value,
      color: e.target.color.value,
      material: e.target.material.value,
      line_type: e.target.line_type.value,
      white: {
        footage: parseFloat(e.target.white_footage.value),
        size: e.target.white_size.value,
      },
      yellow: {
        footage: parseFloat(e.target.yellow_footage.value),
        size: e.target.yellow_size.value,
      },
      dotEmplyoee: e.target.dotEmplyee.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/daily-reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Report submitted successfully");
      } else {
        console.error("Report submission failed", response.statusText);
      }
    } catch (error) {
      console.error("Error during report submission:", error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date_submitted" required />
        </label>

        <label>
          Road:
          <input type="text" name="road_name" required />
        </label>

        <label>
          Contractor:
          <input type="text" name="contractor" required />
        </label>

        <label>
          Workers:
          <input type="number" name="workers" required />
        </label>

        <label>
          Job Time Arrived:
          <input type="time" name="jobTimeArrived" required />
        </label>

        <label>
          Job Time Finished:
          <input type="time" name="jobTimeFinished" required />
        </label>

        {/* Color Section */}
        <label>
          Color:
          <div>
            <label>
              <input type="radio" name="color" value="white" required />
              White
            </label>
            <label>
              <input type="radio" name="color" value="yellow" required />
              Yellow
            </label>
          </div>
        </label>

        {/* Material Section */}
        <label>
          Material:
          <div>
            <label>
              <input type="radio" name="material" value="paint" required />
              Paint
            </label>
            <label>
              <input type="radio" name="material" value="thermo" required />
              Thermo
            </label>
          </div>
        </label>

        {/* Line Type Section */}
        <label>
          Line Type:
          <div>
            <label>
              <input type="radio" name="line_type" value="solid" required />
              Solid
            </label>
            <label>
              <input type="radio" name="line_type" value="skip" required />
              Skip
            </label>
          </div>
        </label>

        {/* White Section */}
        <label>
          White:
          <div>
            <label>
              Footage:
              <input type="number" name="white_footage" step="0.01" required />
            </label>
            <label>
              Size:
              <input type="text" name="white_size" required />
            </label>
          </div>
        </label>

        {/* Yellow Section */}
        <label>
          Yellow:
          <div>
            <label>
              Footage:
              <input type="number" name="yellow_footage" step="0.01" required />
            </label>
            <label>
              Size:
              <input type="text" name="yellow_size" required />
            </label>
          </div>
        </label>

        {/* ... (remaining form fields) */}

        <label>
          DOT Employee:
          <input type="text" name="dotEmployee" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DailyReportForm;

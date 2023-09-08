import { useEffect, useState } from "react";
import { doors } from "./Data.js";

const dropDownData = {
  widths: [0, 72, 60, 56, 58, 64, 54, 68, 70, 62],
  heights: [0, 28, 32, 36, 30, 34],
};

const { widths, heights } = dropDownData;

function App() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [door, setDoor] = useState("");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const filterOriginalData = () => {
    const data = doors.products.filter(
      (e) =>
        e.type.toLowerCase() === type.toLowerCase() &&
        e.doorType.toLowerCase() === door.toLowerCase() &&
        e.dimensions.length == height &&
        e.dimensions.width == width
    );
    console.log("data", data);

    setFilteredData(data);
  };
  console.log(step);

  useEffect(() => {
    console.log("width", width);
    console.log("height", height);
    if (step === 4) {
      console.log("function called");
      filterOriginalData();
    }
  }, [step]);
  return (
    <div>
      <div>
        <div
          style={{
            width: "1024px",
            margin: "0 208px", // 208px left and right margin
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center", // Center the content vertically
            gap: "44px",
            height: "144px",
            backgroundColor: "#fff",
            padding: "20px", // Add padding if needed
            borderRadius: "8px", // Add border radius if needed
            boxShadow: "0px 25px 55px rgba(126, 126, 126, 0.15)", // Add box shadow if needed
          }}
        >
          <p>{`You are currently in step ${step}/4`}</p>
        </div>
        <div>
          {step === 1 ? (
            <FirstScreen setStep={setStep} setType={setType} type={type} />
          ) : null}
        </div>
        <div>
          {step === 2 ? (
            <SecondScreen setStep={setStep} setDoor={setDoor} type={type} />
          ) : null}
        </div>
        <div>
          {step === 3 ? (
            <ThirdScreen
              setStep={setStep}
              setHeight={setHeight}
              setWidth={setWidth}
              type={type}
              door={door}
            />
          ) : null}
        </div>
        <div>
          {step === 4 ? (
            <FourthScreen
              setStep={setStep}
              door={door}
              type={type}
              height={height}
              width={width}
              filteredData={filteredData}
            />
          ) : null}
        </div>

        <div
          style={{
            width: "1024px",
            margin: "0 208px", // 208px left and right margin
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center", // Center the content vertically
            gap: "44px",
            height: "144px",
            backgroundColor: "#fff",
            padding: "20px", // Add padding if needed
            borderRadius: "8px", // Add border radius if needed
            boxShadow: "0px 25px 55px rgba(126, 126, 126, 0.15)", // Add box shadow if needed
          }}
        >
          <div
            style={{
              width: "100px", // Set the width of the box
              height: "100px", // Set the height of the box
              backgroundColor: "#F16622", // Set the background color
              display: "flex",
              justifyContent: "center", // Center content horizontally
              alignItems: "center", // Center content vertically
              borderRadius: "8px", // Add border radius if needed
              color: "#fff",
            }}
          >
            {`${type}`}
          </div>
          {door === null ? null : (
            <div
              style={{
                color: "#fff",
                width: "100px", // Set the width of the box
                height: "100px", // Set the height of the box
                backgroundColor: "#69B34C", // Set the background color
                display: "flex",
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                borderRadius: "8px", // Add border radius if needed
              }}
            >
              {`${door}`}
            </div>
          )}
          {width > 0 ? (
            <div
              style={{
                color: "#fff",
                width: "100px", // Set the width of the box
                height: "100px", // Set the height of the box
                backgroundColor: "#007BFF", // Set the background color
                display: "flex",
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                borderRadius: "8px", // Add border radius if needed
              }}
            >
              {`dimenstions = ${height * width} `}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

function FirstScreen({ setStep, setType, type }) {
  return (
    <div
      style={{
        width: "300px", // Reduced the width of the box
        height: "70px", // Set the height of the box
        backgroundColor: "#FFF", // Set the background color of the box
        border: "2px solid #333", // Add a border
        padding: "20px", // Add padding inside the box
        display: "flex", // Use flexbox to align content
        alignItems: "center", // Vertically center content
        justifyContent: "space-between", // Evenly distribute content horizontally
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", // Add box shadow
        marginLeft: "600px",
      }}
    >
      <button
        style={{
          width: "100px",
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#F16622",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          setType("Shower");
        }}
      >
        Shower
      </button>
      <button
        style={{
          width: "100px",
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#F16622",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          setType("Tub");
        }}
      >
        Tub
      </button>
    </div>
  );
}

function SecondScreen({ setStep, setDoor, type }) {
  return (
    <div
      style={{
        width: "300px", // Reduced the width of the box
        height: "70px", // Set the height of the box
        backgroundColor: "#FFF", // Set the background color of the box
        border: "2px solid #333", // Add a border
        padding: "20px", // Add padding inside the box
        display: "flex", // Use flexbox to align content
        alignItems: "center", // Vertically center content
        justifyContent: "space-between", // Evenly distribute content horizontally
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", // Add box shadow
        marginLeft: "600px",
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#F16622",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          setDoor("Swing");
        }}
      >
        Swing
      </button>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#F16622",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          setDoor("Slide");
        }}
      >
        Slide
      </button>
      {type !== "" && (
        <p>
          {" "}
          Products left :
          {
            doors.products.filter(
              (value) => value.type.toLowerCase() === type.toLowerCase()
            ).length
          }
        </p>
      )}
    </div>
  );
}

function ThirdScreen({ setStep, setWidth, setHeight, type, door }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px", // Set the width of the box
        height: "200px", // Set the height of the box
        backgroundColor: "#FFF", // Set the background color of the box
        border: "2px solid #333", // Add a border
        padding: "20px", // Add padding inside the box
        marginLeft: "500px", // Add margin around the box
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", // Add box shadow
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <label htmlFor="heightSelect">Height:</label>
        <select
          id="heightSelect"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          style={{ marginLeft: "10px" }}
        >
          {heights.map((value, i) => (
            <option key={i}>{value}</option>
          ))}
        </select>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <label htmlFor="widthSelect">Width:</label>
        <select
          id="widthSelect"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
          style={{ marginLeft: "10px" }}
        >
          {widths.map((value, i) => (
            <option key={i}>{value}</option>
          ))}
        </select>
      </div>
      <button
        onClick={() => {
          setStep(4);
        }}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#F16622",
          color: "#FFF",
          border: "none",
          cursor: "pointer",
        }}
      >
        Confirm your Selections
      </button>
      {type !== "" && door !== "" && (
        <p>
          {" "}
          Products left :
          {
            doors.products.filter(
              (value) =>
                value.type.toLowerCase() === type.toLowerCase() &&
                value.doorType.toLowerCase() === door.toLowerCase()
            ).length
          }
        </p>
      )}
    </div>
  );
}

function FourthScreen({ door, type, width, length, filteredData }) {
  console.log("filteredData", filteredData);

  return (
    <div
      style={{
        width: "500px", // Set the width of the box
        margin: "20px auto", // Center the box horizontally and add margin for spacing
        padding: "20px", // Add padding inside the box
        backgroundColor: "#FFF", // Set the background color of the box
        border: "2px solid #333", // Add a border
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", // Add box shadow
      }}
    >
      {filteredData.length === 0 ? (
        <p>No Products found</p>
      ) : (
        filteredData.map((value, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={value.imageURL}
              alt={`Image ${idx}`}
              style={{
                width: "291px", // Set the width of the image
                height: "100%", // Set the height of the image
                marginRight: "20px", // Add margin between the image and text
              }}
            />
            <div>
              <p>{value.type}</p>
              <p>{value.doorType}</p>
              <p>{value.dimensions.length}</p>
              <p>{value.dimensions.width}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

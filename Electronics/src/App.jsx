import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <from>
        <div className="reactForm">
          <table>
            <tr>
              <th colspan="3">Name of Inspector</th>
              {/* <th>Guarantor's account no</th>
              <th>Account no </th> */}
            </tr>
            <tr>
              <td colspan="2">
                {/* <label htmlFor="Tenant">Tenant Name</label> */}
                <br />
                <input type="text" placeholder="Tenant Name " id="Tenant" />
              </td>
              <td>
                {/* <label htmlFor="firstFatherName">Father Name</label> */}
                <br />
                <input
                  type="text"
                  placeholder="Father Name "
                  id="firstFatherName"
                />
              </td>
              {/* <td></td> */}
            </tr>
            <tr>
              <td colspan="3">
                {/* <label htmlFor="firstHomeAddress">Home Address</label> */}
                <br />
                <input
                  type="text"
                  placeholder="Home Address"
                  id="firstHomeAddress"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                {/* <label htmlFor="firstGuarantor">First guarantor</label> */}
                <br />
                <input
                  type="text"
                  placeholder="First guarantor"
                  id="frstGuarantor"
                />
              </td>
              <td>
                {/* <label htmlFor="firstGuaranFather">Father Name</label> */}
                <br></br>

                <input
                  type="text"
                  placeholder="Father Name "
                  id="firstGuaranFather"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                {/* <label htmlFor="secGuarantor">Second guarantor</label> */}
                <br />
                <input
                  type="text"
                  placeholder="Second guarantor"
                  id="secGuarantor"
                />
              </td>
              <td colspan="2">
                {/* <label
                  htmlFor="
                secFatherName"
                >
                  Father Name
                </label> */}
                <br></br>
                <input
                  type="text"
                  placeholder="Father Name "
                  id="secFatherName"
                />
              </td>
            </tr>
            <tr>
              <td colspan="3">
                {/* <label htmlFor="SecHomeAddress">Home Address</label> */}
                <br />
                <input
                  type="text"
                  placeholder="Home Address"
                  id="secHomeAddress"
                />
              </td>
            </tr>
            {/* <tr>
             <td colspan="0  ">
                <input type="text" className="zia" />
              </td>
              <td>
                <input type="text" className="zia" />
              </td>
              <td>
                <input type="text" className="zia" />
              </td>
              <td>
                <input type="text" className="zia" />
              </td>
              <td>
                <input type="text" className="zia" />
              </td>
            </tr> */}
            <div className="btn">
              <button type="submit">submit</button>
            </div>
          </table>
        </div>
      </from>
    </>
  );
}

export default App;

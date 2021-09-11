import React, { useEffect } from "react";
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import axios from 'axios'

const Home = () => {
  const appName = useSelector((state) => {
    return state?.localStorage?.appName;
  }, shallowEqual);

    const [data, setData] = useState([])

    const getDataAction = async () => {
        try {
            const res = await axios.get('/weatherforecast')
            
            setData(res?.data)
        } catch(err) {
            console.log("Err", err.message)
        }
    }

    useEffect(() => {
        getDataAction()
    }, [])



  return (
    <div className="home">
          <h2>forecast app</h2>

          <table style={{ border: "1px solid gray" }}>
              <thead>
                  <tr>
                      <th style={{ border: "1px solid gray" }}>Date</th>
                      <th style={{ border: "1px solid gray" }}>Sum</th>
                  </tr>
              </thead>
              <tbody>

                  {data?.map((item, index) =>
                      <tr style={{ border: "1px solid gray" }}>
                          <td style={{ border: "1px solid gray" }}>{item?.date}</td>
                          <td style={{ border: "1px solid gray" }}>{item?.summary}</td>
                      </tr>
                  )}

              </tbody>
          </table>

    </div>
  );
};

export default Home;

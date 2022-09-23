import React, { useState, FC, useEffect, useRef, useReducer } from "react";
import { matrixFind } from "./snip";
const Fetched = () => {
  interface Geo {
    lat: string;
    lng: string;
  }
  interface AdressInfo {
    city: string;
    geo: Geo;
    street: string;
    suite: string;
    zipcode: string;
  }
  interface CompanyInfo {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  interface Info {
    adress: AdressInfo;
    company: CompanyInfo;
    email: string;
    id: number;
    name: string;
    phone: string;
    website: string;
  }
  const [state, setS] = useState<any>(1);
  const [data, setData] = useState<Info[]>([]);
  const count = useRef(0);
  let something: boolean = true;
  import("./snip").then(matrixFind => {
  });
  matrixFind({z: []}, 10, 0)
  useEffect(() => {
    count.current += 1;
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const parse = await res.json();
      setData(parse);
    })();
  }, [state]);
  console.log(data);
  const Fetchy = () => {
    return (
      <div>
        <button
          onClick={() => {
            setS(state + 1);
          }}
        >
          {" "}
          up state
        </button>
        {state}
        {count.current}
        {data.map((e) => {
          return (
            <div key={e.id}>
              <p
                className="hey"
                style={{ boxShadow: "0px 0px 3px grey", padding: "15px" }}
              >
                {e.email}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return { Fetchy };
};
export default Fetched;

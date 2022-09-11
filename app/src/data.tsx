import React, { useState, FC, useEffect } from "react";
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
  const [data, setData] = useState<Info[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const parse = await res.json();
      setData(parse);
    })();
  }, []);
  console.log(data);
  const Fetchy = () => {
    return (
      <div>
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

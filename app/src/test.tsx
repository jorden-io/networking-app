import React, { FC, useState, useEffect } from "react";

export interface Geo {
  lat: string;
  lng: string;
}
export interface AdressInfo {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}
export interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface Info {
  adress: AdressInfo;
  company: CompanyInfo;
  email: string;
  id: number;
  name: string;
  phone: string;
  website: string;
}
const MainPoki = () => {
  const arr: Array<string | number> = [];
  arr[0] = 100;
  console.log(arr[0]);
  const [person, setPerson] = useState<Info[]>([]);
  const [short, setShort] = useState<any>();
  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const parseRes = await res.json();
      setPerson(parseRes);
      setShort(JSON.stringify(parseRes));
    })();
  }, []);
  console.log(short);
  //  console.log(person)
  const PokiDisplayer = () => {
    return (
      <div>
        {short}
        {person.map((e) => (
          <div key={e.id}>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.company.name}</p>
            <p>{e.company.catchPhrase} Phrase😁</p>
            <p>{e.company.bs}</p>
          </div>
        ))}
      </div>
    );
  };
  return { PokiDisplayer };
};

export default MainPoki;

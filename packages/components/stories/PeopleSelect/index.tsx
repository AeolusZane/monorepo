import { useState, useEffect } from "react";
import axios from "axios";
import { DataType, Select } from "../Select/Select";

const people: DataType[] = [
  { name: "Wade Cooper", value: 1 },
  { name: "Arlene Mccoy", value: 2 },
  { name: "Devon Webb", value: 3 },
  { name: "Tom Cook", value: 4 },
  { name: "Tanya Fox", value: 5 },
  { name: "Hellen Schmidt", value: 6 },
];

const PeopleSelect = () => {
  const [selected, setSelected] = useState(people[0]);
  useEffect(()=>{
    axios.get('/people').then(({data})=>{
        console.log(data);
    })
  },[])
  return (
    <Select
      data={people}
      selected={selected}
      onChange={(e) => setSelected(e)}
    />
  );
};
export default PeopleSelect;

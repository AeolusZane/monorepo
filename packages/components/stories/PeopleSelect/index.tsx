import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Select, { DataType } from "../Select";

const PeopleSelect = () => {
  const [selected, setSelected] = useState();
  const queryClient = useQueryClient();
  queryClient.getQueryCache().add;

  const query = useQuery(["people-key"], () => axios.get("/people"), {
    select: (data) => data.data.people,
    // refetchInterval: 2000,
  });

  if (query.status === "loading") return <div>{"loading"}</div>;

  if (query.status === "success") {
    return (
      <Select
        data={query.data}
        selected={query.data[0]}
        onChange={(e: any) => setSelected(e)}
      />
    );
  } else {
    return <></>;
  }

  //   useEffect(() => {
  //     axios.get("/people").then(({ data }) => {
  //       console.log(data);
  //     });
  //   }, []);
};
export default PeopleSelect;

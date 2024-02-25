import axios from "axios";
import { useEffect, useState } from "react";

export const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(response.data[count].email);
      console.log("API was called");
    }
    fetchData();
  }, [count]);

  return (
    <div>
      <p>Hello {data}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AbortControllerDemo() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  // ! using axios
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=" + userId, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setUser(res.data[0]))
      .catch((e) => {
        if (axios.isCancel(e)) {
          console.log("Api Call Canceled");
        } else console.log({ e });
      });

    return () => {
      cancelToken.cancel();
    };
  }, [userId]);

  return (
    <div style={{ paddingBottom: 100 }}>
      <h1>Abort Controller Demo</h1>
      <p> User : {user?.name}</p>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
    </div>
  );
}

// ! using fetch method
//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     fetch("https://jsonplaceholder.typicode.com/users?id=" + userId, { signal })
//       .then((res) => res.json())
//       .then((res) => setUser(res[0]))
//       .catch((e) => {
//         if (e?.aborted) console.log("Aborted Api call");
//         else console.log({ e, name: e.name });
//       });

//     return () => {
//       controller.abort(signal);
//     };
//   }, [userId]);

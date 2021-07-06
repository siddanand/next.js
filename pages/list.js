import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User_info from "./user_info";

export default function List() {
  const [list, setList] = useState([]);
  const [user, setUser] = useState("");
  const [userupdated, setUserUpdated] = useState("");
  const [status, setStatus] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setList(json);
      });
  }, []);

  function onUsername(event) {
    let username = event.target.value;
    console.log(username);
    setUser(username);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    setStatus(1);
    setUserUpdated(user);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>List of User Types:</h1>
            {list.map((item) => (
              <div key={item.id}>{item.login}</div>
            ))}
          </div>
          <div className="col-sm-6">
            <h1>Enter your Github user name:</h1>
            <form onSubmit={onSubmitHandler}>
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                onChange={onUsername}
                required
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <br />
            {status == 1 ? (
              <div>
                <User_info key={userupdated} user={userupdated} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

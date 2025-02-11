import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("false");
  const [error, setError] = useState("")

  const handleSumit = e => {
    e.preventDefault();
    setError("");
    try {
      if (username === "James" && password ==="123") {
        setLoggedIn(true);
      } else {
        throw Error;
      }
    } catch (error) {
      setError("Incorrect username or password");
      setUsername("");
      setPassword("");
  }
}

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        10 - Simple Login useReducer
      </h1>
      <form className="flex flex-col items-center justify-center gap-4 mt-4 py-2" onSubmit={handleSumit}>
        <input
          className="border rounded-lg px-2 py-1"
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded-lg px-2 py-1"
          type="password"
          autoComplete="username"
          placeholder="Username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white text-lg font-medium rounded-lg py-1 px-3" type="submit">
          Log in
        </button>
        <p className="text-red-500 text-center">{error}</p>
      </form>
    </>
  );
}

export default App;

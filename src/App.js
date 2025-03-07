import { useReducer } from "react";

const loginInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        error: "",
      };
    }
    case "success":
      return {
        ...state,
        loggedIn: true,
        password: "",
      };
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password",
        loggedIn: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState("false");
  // const [error, setError] = useState("");
  const [state, dispatch] = useReducer(loginInReducer, {
    username: "",
    password: "",
    loggedIn: false,
    error: "",
  });

  const handleSumit = (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      if (state.username === "James" && state.password === "123") {
        dispatch({ type: "success" });
      } else {
        throw Error;
      }
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        10 - Simple Login useReducer
      </h1>
      <div>
        {state.loggedIn ? (
          <>
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-center text-3xl mt-4 py-2">
                Welcome {state.username}=!
              </h2>
              <button
                className="bg-blue-600 text-white text-lg font-medium rounded-lg py-1 px-3"
                onClick={() => dispatch({ type: "logOut" })}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <form
            className="flex flex-col items-center justify-center gap-4 mt-4 py-2"
            onSubmit={handleSumit}
          >
            <input
              className="border rounded-lg px-2 py-1"
              type="text"
              autoComplete="username"
              placeholder="Username"
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.target.value,
                })
              }
            />
            <input
              className="border rounded-lg px-2 py-1"
              type="password"
              autoComplete="username"
              placeholder="Username"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.target.value,
                })
              }
            />
            <button
              className="bg-blue-600 text-white text-lg font-medium rounded-lg py-1 px-3"
              type="submit"
            >
              Log in
            </button>
            <p className="text-red-500 text-center">{state.error}</p>
          </form>
        )}
      </div>
    </>
  );
}

export default App;

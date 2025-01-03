// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return <></>;
// }

// export default App;

import { Header } from "./components/common/Header.jsx";
import { AuthProvider } from "./contex/AuthContext.jsx";
// import { UserProvider } from "./contex/userContex";
import Approutes from "./routes/Routes.jsx";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Approutes />
      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router";

import Portfolio from "./Components/Portfolio";
import UnderDeployment from "./Components/UnderDeployment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/under-deployment"
          element={<UnderDeployment />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
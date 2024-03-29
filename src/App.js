import "./style.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./pages/index";
import MaintainModal from "./components/layouts/MaintainModal";

function App() {
  return (
    <>
      <Routes>
        {routes.map((data, index) => (
          <Route
            onUpdate={() => window.scrollTo(0, 0)}
            exact={true}
            path={data.path}
            element={data.component}
            key={index}
          />
        ))}
      </Routes>

      <MaintainModal
        onShow={Boolean(
          parseInt(process.env.REACT_APP_UNDER_MAINTENANCE_GLOBAL)
        )}
        onHide={() => {}}
      />
    </>
  );
}

export default App;

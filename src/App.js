import { lazy, Suspense } from "react";
import "./App.css";
import BarLoader from "react-spinners/BarLoader";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loadingSpiner">
          <BarLoader color="#ff4001" loading={true} size={150} />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}

export default App;

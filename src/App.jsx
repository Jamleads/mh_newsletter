import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Layout from "./layouts/Layout";
import Subscribers from "./Pages/Subscribers";
import Campaign from "./Pages/Campaign";
import Post from "./Pages/Post";
import ErrorPage from "./components/ErrorPage";
import Draft from "./Pages/Draft";
import ProtectedRoute from "./layouts/ProtectedRoute";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ProtectedRoute />}>
        <Route to="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/post" element={<Post />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="errorpage" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/errorpage" />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;

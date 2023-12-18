import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/contact"
        element={<ContactUs />}
        loader={() => {
          return { myName: "Jashim", myData: "Data coming from loader" };
        }}
      />
      <Route path="/profile" element={<Profile />} />
    </Route>,
  ),
);
export default Router;

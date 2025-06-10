import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryBlog from "./components/blog/GalleryBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/gallery", element: <GalleryBlog /> },

      { path: "*", element: <div>404 - Page Not Found</div> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

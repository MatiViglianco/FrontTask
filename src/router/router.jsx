import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "../pages/TasksPage";
import TaskFormPage from "../pages/TaskFormPage";
import Navigation from "../components/Navigation";
import { Toaster } from "react-hot-toast";
import styles from "../components/globalstyles.module.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className={styles.home}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Navigate to="FrontTask/" />} />
          <Route exact path="/FrontTask/" element={<TasksPage />} />
          <Route exact path="/FrontTask-create/" element={<TaskFormPage />} />
          <Route exact path="/FrontTask/:id" element={<TaskFormPage />} />
          <Route exact path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
};
export default Router;

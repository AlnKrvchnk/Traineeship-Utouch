import { Route, Routes, Navigate } from "react-router-dom";
import { Paths } from "./Paths";
import { ToDo, ToDoDetail, NotFound } from "../components/pages/index";

const Private = () => {
  return (
    <Routes>
      <Route path={Paths.Main} element={<Navigate to={Paths.ToDo} replace />} />
      <Route
        path={Paths.SignIn}
        element={<Navigate to={Paths.ToDo} replace />}
      />
      <Route
        path={Paths.SignUp}
        element={<Navigate to={Paths.ToDo} replace />}
      />
      <Route path={Paths.ToDo} element={<ToDo />} />
      <Route path={`${Paths.ToDo}/:id`} element={<ToDoDetail />} />
      <Route path={`*`} element={<NotFound />} />
    </Routes>
  );
};

export default Private;

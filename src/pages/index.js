import { useRoutes } from "react-router-dom";
import createRoutesFromDirectoryStructure from "../create-routes-from-directory-structure";
import data from '../data.json';

const App = () => {
  const routes = createRoutesFromDirectoryStructure(data);
  const routesJsx = useRoutes(routes);
  return routesJsx;
}

export default App;

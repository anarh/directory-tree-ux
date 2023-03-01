import { NavLink } from "react-router-dom";

const getChildren = (directory) => {
  return (
      <ul>
        {directory.children && directory.children.map((child) => {
          if (child.type === "directory") {
            return <li key={child.path}>
              <details>
                <summary>{child.name}</summary> 
                {getChildren(child)}
              </details>
            </li>;
          } else {
            return <li key={child.path}>
              <NavLink to={child.path} className={({ isActive }) => isActive ? 'active' : undefined}>
                {child.name}
              </NavLink>
            </li>;
          }
        })}
      </ul>
  );
};

const renderDirectoryStructure = directory => {
  return (
    <ul>
      <li className="nav-root">
        <details open>
          <summary>{`Directory Tree UI`}</summary>
          {getChildren(directory)}
        </details>
      </li>
    </ul>
  )
};

export default renderDirectoryStructure;


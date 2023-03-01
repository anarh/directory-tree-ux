import React from "react";
import Code from "./pages/code";
import Layout from "./pages/layout";
import NoMatch from "./pages/no-match";

const getChildren = (directory) => {
    return (
      [...directory.children && directory.children.map((child) => {
        if (child.type === 'directory') {
          return {
            element: <Code />,
            path: `/${child.path}`,
            children: getChildren(child)
          };
        } else {
          const CodeBehind = React.lazy(() => import(`./code-behind/${child.path}.js`));
          return {
            element: <React.Suspense fallback={<div className="code"><div className="loader" /></div>}><CodeBehind /></React.Suspense>,
            path: `/${child.path}`
          };
        }
      })]
    );
  };

  const createRoutesFromDirectoryStructure = directory => {
    return [
      {
        path: '/',
        element: <Layout />,
        children: getChildren(directory)
      },
      { path: "*", element: <NoMatch /> }
    ];
  };
  
  export default createRoutesFromDirectoryStructure;

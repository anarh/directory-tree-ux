import React from 'react';
import { Outlet } from "react-router-dom";
import renderDirectoryStructure from "../../render-directory-structure";
import data from '../../data.json';
import Tabs from '../../components/tabs';
import BreadCrumbs from '../../components/breadcrumbs';
import Explorer from '../../components/explorer';

const Layout = () => (
  <div className="layout">
    <Explorer />
    <Tabs />
    <BreadCrumbs />
    <nav className="nav">
      {renderDirectoryStructure(data)}
    </nav>
    <Outlet />
  </div>
);

export default Layout;

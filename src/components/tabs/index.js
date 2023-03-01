import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Tabs = () => {
  let location = useLocation();
  const [tabs, setTabs] = useState([]);

  const handleClick = (e, i) => {
    if (!e.target.previousSibling.classList.contains('active-tab')) {
      e.preventDefault();
    }
    const t = tabs.filter((tab, index) => i !== index);
    setTabs([...t]);
  };

  useEffect(() => {
    if (!tabs.includes(location.pathname) && location.pathname !== '/') {
      setTabs([...tabs, location.pathname]);
    }
  }, [location, tabs]);

    return (
      <div className="tabs">
        {
          tabs.length > 0 && tabs.filter(tab => tab !== '/').map((tab, i) => {
            const t = tab.split('/');
            const tabName = t[t.length - 1];

            return (<div className="tab" key={i}>
              <NavLink 
                title={tab}
                to={tab} 
                className={({ isActive }) => isActive ? 'active-tab' : undefined}
              >
                {tabName}
              </NavLink>
              <NavLink
                title="close"
                className="close-button"
                onClick={e => handleClick(e, i)}
                to={tabs.length === 1 ? '/' : i === 0 ? tabs[i + 1] : tabs[i - 1]}
              >
                &otimes;
              </NavLink>
            </div>)
          })
        }
      </div>
    );
  };

  export default Tabs;

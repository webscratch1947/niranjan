import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToolBar } from "../../../utils/general";
import "./assets/myprojects.scss";

const projects = [
  {
    name: "RentNivas",
    tagline: "Property rental platform for India",
    desc: "A full-stack rental platform where hosts can list properties and renters can browse, search, and book real listings across India.",
    logo: "img/asset/rentnivas_logo.png",
    tags: ["React", "Rentals", "Live Site"],
    storeUrl: "rentnivas.com",
  },
  {
    name: "MGR All In One Services",
    tagline: "Home services marketplace",
    desc: "A home services marketplace for booking electricians, plumbers, salons, and more — all in one place.",
    logo: "img/asset/mgr_logo.png",
    tags: ["Services", "Booking", "Live Site"],
    storeUrl: "mgrallinoneservices.com",
  },
];

export const MyProjects = () => {
  const wnapp = useSelector((state) => state.apps.myprojects);
  const dispatch = useDispatch();

  const installAndTest = (storeUrl) => {
    // Tell the Store which app to jump straight to, then open it.
    window.__wsStoreTarget = storeUrl;
    dispatch({ type: "WNSTORE", payload: "full" });
  };

  return (
    <div
      className="myprojectsApp floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name="All My Clients Projects & Demo's"
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="myproj-body win11Scroll">
          <div className="myproj-header">
            <div className="myproj-title">All My Clients Projects &amp; Demo's</div>
            <div className="myproj-subtitle">
              Real client work, live and ready to try — install &amp; test any
              of them from the Store
            </div>
          </div>

          <div className="myproj-grid">
            {projects.map((p, i) => (
              <div className="myproj-card" key={i}>
                <div className="myproj-card-top">
                  <div className="myproj-logo-wrap">
                    <img src={p.logo} alt={p.name} className="myproj-logo" />
                  </div>
                  <div className="myproj-info">
                    <div className="myproj-name">{p.name}</div>
                    <div className="myproj-tagline">{p.tagline}</div>
                  </div>
                </div>
                <div className="myproj-desc">{p.desc}</div>
                <div className="myproj-tags">
                  {p.tags.map((t, j) => (
                    <span className="myproj-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  className="myproj-installbtn"
                  onClick={() => installAndTest(p.storeUrl)}
                >
                  Install &amp; Test
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

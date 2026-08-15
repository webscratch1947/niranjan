import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";
import "./assets/credits.scss";

export const Credits = () => {
  const wnapp = useSelector((state) => state.apps.credits);

  return (
    <div
      className="creditsApp floatTab dpShad"
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
        name="Credits & Contributors"
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="credits-body win11Scroll">
          {/* Header */}
          <div className="credits-header">
            <div className="credits-title">Credits &amp; Contributors</div>
            <div className="credits-subtitle">
              The people and projects that made this portfolio possible
            </div>
          </div>

          {/* WebScratch Card */}
          <div className="credit-card">
            <div className="credit-card-inner">
              <div className="credit-logo-wrap ws-logo-wrap">
                <img
                  src="img/asset/webscratch_logo.png"
                  alt="WebScratch"
                  className="credit-logo"
                />
              </div>
              <div className="credit-info">
                <div className="credit-badge">Design &amp; Development</div>
                <div className="credit-name">WebScratch Digital Agency</div>
                <div className="credit-desc">
                  Designed, developed, and deployed this portfolio from scratch.
                  From concept to deployment — every pixel, every component,
                  every interaction was crafted by the WebScratch team.
                </div>
                <div className="credit-tags">
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Redux</span>
                  <span className="tag">SCSS</span>
                  <span className="tag">Vercel</span>
                </div>
                <div className="credit-links">
                  <a
                    href="https://webscratch.in"
                    target="_blank"
                    rel="noreferrer"
                    className="credit-link primary"
                  >
                    <span>🌐</span> webscratch.in
                  </a>
                  <a
                    href="https://www.instagram.com/webscratchofficial/"
                    target="_blank"
                    rel="noreferrer"
                    className="credit-link"
                  >
                    <span>📸</span> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft-inspired Card */}
          <div className="credit-card">
            <div className="credit-card-inner">
              <div className="credit-logo-wrap w11-logo-wrap">
                <svg
                  viewBox="0 0 24 24"
                  width="56"
                  height="56"
                  className="credit-logo w11-logo"
                >
                  <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                  <rect x="13" y="1" width="10" height="10" fill="#7fba00" />
                  <rect x="1" y="13" width="10" height="10" fill="#00a4ef" />
                  <rect x="13" y="13" width="10" height="10" fill="#ffb900" />
                </svg>
              </div>
              <div className="credit-info">
                <div className="credit-badge open-source">Design Inspiration</div>
                <div className="credit-name">Microsoft &amp; Windows 11</div>
                <div className="credit-desc">
                  This desktop, its taskbar, start menu, and store experience
                  are inspired by the Windows 11 UI, along with Microsoft's
                  apps and design language. This is an unofficial, fan-made
                  personal portfolio — it isn't affiliated with, endorsed by,
                  or a product of Microsoft. All Microsoft names, logos, and
                  trademarks belong to their respective owners.
                </div>
                <div className="credit-tags">
                  <span className="tag os">Windows 11 UI</span>
                  <span className="tag os">Fluent Design</span>
                  <span className="tag os">Fan-made</span>
                </div>
                <div className="credit-links">
                  <a
                    href="https://www.microsoft.com/windows"
                    target="_blank"
                    rel="noreferrer"
                    className="credit-link"
                  >
                    <span>🪟</span> microsoft.com/windows
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../../utils/general";
import "./assets/aboutme.scss";

const skills = [
  { name: "React.js", icon: "⚛️", bg: "#0d6efd" },
  { name: "JavaScript (ES6+)", icon: "JS", bg: "#f0db4f", dark: true, isText: true },
  { name: "HTML5", icon: "H5", bg: "#e34f26", isText: true },
  { name: "CSS3", icon: "C3", bg: "#2965f1", isText: true },
  { name: "Tailwind CSS", icon: "🌊", bg: "#0891b2" },
  { name: "Git & GitHub", icon: "🐙", bg: "#1f2328" },
  { name: "Vite", icon: "⚡", bg: "#7c3aed" },
  { name: "UI/UX Design", icon: "🎨", bg: "#f4511e" },
];

export const Aboutme = () => {
  const wnapp = useSelector((state) => state.apps.aboutme);

  return (
    <div
      className="aboutmeApp floatTab dpShad"
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
        name="About Me"
      />
      <div className="windowScreen aboutme-body" data-dock="true">
        {/* Profile section */}
        <div className="aboutme-profile">
          <div className="aboutme-avatar-wrap">
            <img
              src="img/asset/prof_pixel.png"
              alt="Niranjan"
              className="aboutme-avatar"
            />
          </div>
          <div className="aboutme-profile-info">
            <div className="aboutme-name">Niranjan Mosuru</div>
            <div className="aboutme-role">Developer</div>
          </div>
        </div>

        <div className="aboutme-divider" />

        {/* Skills section */}
        <div className="aboutme-section-label">SKILLS</div>
        <div className="aboutme-skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-tile" key={i}>
              <div
                className="skill-icon"
                style={{
                  background: skill.bg,
                  color: skill.dark ? "#111" : "#fff",
                }}
              >
                {skill.icon}
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="aboutme-footer">
          <span className="footer-code">&lt;/&gt;</span>
          <span className="footer-text">Always building, always learning.</span>
          <div className="footer-terminal">
            <span>&gt;_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { ToolBar } from "../../utils/general";

export const IFrame = (props) => {
  const wnapp = useSelector((state) => state.apps[props.icon]);
  if (!wnapp) return null;
  var data = wnapp.data;

  return wnapp.hide ? null : (
    <div
      data-size={wnapp.size}
      className={
        "floatTab dpShad " +
        (data.invert != true ? "lightWindow" : "darkWindow")
      }
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
        name={wnapp.name}
        invert={data.invert == true ? true : null}
        noinvert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        {data.url ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              padding: "6px 14px",
              fontSize: "11px",
              lineHeight: "1.3",
              background: "#fff8e1",
              color: "#5c4a00",
              borderBottom: "1px solid #e6d38a",
              flexShrink: 0,
            }}
          >
            <span>
              This is a live embed of the real site — some features (like
              booking or checkout) may not work perfectly here.
            </span>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#0d6efd",
                fontWeight: 600,
                whiteSpace: "nowrap",
                textDecoration: "underline",
              }}
            >
              Open {data.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}{" "}
              directly ↗
            </a>
          </div>
        ) : null}
        <div className="restWindow flex-grow flex flex-col">
          <div className="flex-grow overflow-hidden">
            <iframe
              src={data.url}
              allow="camera;microphone"
              className="w-full h-full"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

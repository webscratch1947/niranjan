import icons from "./apps";

// Apps that must never appear even if saved in an old browser cache
const BANNED = ["Spotify", "Github"];

// Apps that must always be on the desktop
const REQUIRED_DESKTOP = ["About Me", "Credits"];

const readList = (key, fallback) => {
  var saved =
    localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  var list = saved || fallback;
  list = list.filter((x) => !BANNED.includes(x));
  return list;
};

var { taskbar, desktop, pinned, recent } = {
  taskbar: readList("taskbar", [
    "Settings",
    "File Explorer",
    "Browser",
    "Store",
  ]),
  desktop: (() => {
    var list = readList("desktop", [
      "About Me",
      "All My Clients Projects & Demo's",
      "Recycle Bin",
      "File Explorer",
      "Store",
      "Browser",
      "LinkedIn",
      "Instagram",
      "Facebook",
      "X",
      "Credits",
    ]);
    REQUIRED_DESKTOP.forEach((name) => {
      if (!list.includes(name)) list.unshift(name);
    });
    return list;
  })(),
  pinned: readList("pinned", [
    "Browser",
    "Get Started",
    "Task Manager",
    "Mail",
    "Settings",
    "Store",
    "Notepad",
    "Whiteboard",
    "Calculator",
    "Twitter",
    "File Explorer",
    "Terminal",
    "Discord",
    "Camera",
    "Credits",
  ]),
  recent: readList("recent", [
    "Mail",
    "Twitter",
    "Terminal",
    "File Explorer",
    "Edge",
  ]),
};

export const taskApps = icons.filter((x) => taskbar.includes(x.name));

export const desktopApps = icons
  .filter((x) => desktop.includes(x.name))
  .sort((a, b) => {
    return desktop.indexOf(a.name) > desktop.indexOf(b.name) ? 1 : -1;
  });

export const pinnedApps = icons
  .filter((x) => pinned.includes(x.name))
  .sort((a, b) => {
    return pinned.indexOf(a.name) > pinned.indexOf(b.name) ? 1 : -1;
  });

export const recentApps = icons
  .filter((x) => recent.includes(x.name))
  .sort((a, b) => {
    return recent.indexOf(a.name) > recent.indexOf(b.name) ? 1 : -1;
  });

export const allApps = icons.filter((app) => {
  return app.type === "app";
});

export const dfApps = {
  taskbar,
  desktop,
  pinned,
  recent,
};

// Clean up stale installed apps after everything is loaded.
// Runs safely after all exports are ready.
setTimeout(() => {
  try {
    var knownIcons = new Set(icons.filter(Boolean).map((a) => a && a.icon).filter(Boolean));
    var saved = JSON.parse(localStorage.getItem("installed") || "[]");
    var clean = saved.filter((a) => a && a.icon && knownIcons.has(a.icon));
    if (clean.length !== saved.length) {
      var removedNames = saved
        .filter((a) => !a || !a.icon || !knownIcons.has(a.icon))
        .map((a) => a && a.name)
        .filter(Boolean);
      localStorage.setItem("installed", JSON.stringify(clean));
      ["desktop", "taskbar", "pinned", "recent"].forEach((key) => {
        var list = JSON.parse(localStorage.getItem(key) || "null");
        if (list) {
          list = list.filter((n) => !removedNames.includes(n));
          localStorage.setItem(key, JSON.stringify(list));
        }
      });
    }
  } catch (e) {
    console.warn("cleanStaleInstalled failed:", e);
  }
}, 0);

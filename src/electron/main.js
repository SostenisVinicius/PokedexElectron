import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `file://${path.join(app.getAppPath(), "dist-react/index.html")}`
  );

  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
});

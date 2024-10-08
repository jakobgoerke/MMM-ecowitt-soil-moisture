import { Config } from "./types/Config";
import * as Log from "logger";

import "./styles/Overview.scss";
import { NotificationType } from "./types/NotificationTypes";
import { SoilSensor } from "./types/Ecowitt";

Module.register<Config>("MMM-ecowitt-soil-moisture", {
  defaults: {
    url: "",
    updateInterval: 1 * 60 * 1000,
  },

  sensors: [],

  getStyles: function () {
    return ["MMM-ecowitt-soil-moisture.css"];
  },

  start: function () {
    Log.info(`Starting module: ${this.name}`);
    this.sendSocketNotification(NotificationType.CONFIG, this.config);
  },

  socketNotificationReceived: function (type: string, payload: unknown) {
    Log.info(`received notification: ${type}`);

    switch (type) {
      case NotificationType.SOIL_SENSORS:
        this.sensors = payload as unknown as SoilSensor[];
        this.updateDom();
        break;
    }
  },

  getTemplate: function () {
    return "./templates/overview.njk";
  },

  getTemplateData: function () {
    const { sensors } = this;

    sensors.sort((a, b) => parseInt(a.humidity) - parseInt(b.humidity));

    return {
      sensors,
    };
  },
});

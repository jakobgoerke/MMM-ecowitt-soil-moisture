import * as Log from "logger";
import * as NodeHelper from "node_helper";
import { NotificationType } from "./types/NotificationTypes";
import Config from "./types/Config";
import { EcowittClient } from "./client/EcowittClient";
import { LiveDataResponse } from "./types/Ecowitt";

export default NodeHelper.create({
  client: {} as EcowittClient,
  fetchInterval: {} as number,

  start: function () {
    Log.info(`Starting node_helper for ${this.name}`);
  },

  stop: function () {
    Log.info(`Stopping node_helper for ${this.name}`);
    clearInterval(this.fetchInterval);
  },

  setupClient: function (config: Config) {
    this.client = new EcowittClient(config.url);

    this.fetchData();
    this.fetchInterval = setInterval(() => {
      this.fetchData();
    }, config.updateInterval);
  },

  socketNotificationReceived: function (
    notification: string,
    payload: unknown
  ) {
    Log.info(`Processing ${notification} notification`);

    switch (notification) {
      case NotificationType.CONFIG:
        this.setupClient(payload);
        break;
    }
  },

  fetchData: async function () {
    const data: LiveDataResponse = await this.client.getLiveData();
    this.sendSocketNotification(NotificationType.SOIL_SENSORS, data.ch_soil);
  },
});

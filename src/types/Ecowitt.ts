type TemperatureUnit = "C" | "F";

interface GatewaySensor {
  intemp: string;
  unit: TemperatureUnit;
  inhumi: string;
  abs: string;
  rel: string;
}

interface SoilSensor {
  channel: string;
  name: string;
  battery: string;
  humidity: string;
}

interface LiveDataResponse {
  wh25: GatewaySensor[];
  ch_soil: SoilSensor[];
}

export { TemperatureUnit, GatewaySensor, SoilSensor, LiveDataResponse };

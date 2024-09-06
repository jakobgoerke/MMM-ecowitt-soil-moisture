import { SoilSensor } from "./Ecowitt";

declare global {
  namespace Module {
    interface ModuleProperties<T> {
      sensors: SoilSensor[];
    }
  }
}

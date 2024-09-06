import axios, { type AxiosInstance } from "axios";
import { LiveDataResponse } from "../types/Ecowitt";

export class EcowittClient {
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private api: AxiosInstance;

  public async getLiveData(): Promise<LiveDataResponse> {
    return (await this.api.get<LiveDataResponse>(`/get_livedata_info`)).data;
  }
}

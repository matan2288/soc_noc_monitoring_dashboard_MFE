/** Shared domain types for the NOC/SOC PoA. */

export type DcId = string;

export type DcStatus = "healthy" | "attack";

export type ConnectionStatus = "connecting" | "connected" | "disconnected";

export interface DataCenter {
  id: DcId;
  name: string;
  lat: number;
  lng: number;
  status: DcStatus;
}

export interface SecurityEvent {
  id: string;
  dcId: DcId;
  ip: string;
  country: string;
  type: string;
  action: "block" | "allow";
  at: number;
}

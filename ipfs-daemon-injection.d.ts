import { InjectionToken } from "@rxdi/core";
export interface IPFS_DAEMON {
}
export declare class Options {
    port?: string;
    remote?: boolean;
    type?: 'go' | 'js' | 'proc';
}
export interface DaemonNodeInfo {
    apiHost: string;
    apiPort: string;
    gatewayHost: string;
    gatewayPort: string;
}
export declare const IPFS_DAEMON: InjectionToken<IPFS_DAEMON>;

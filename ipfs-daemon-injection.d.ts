import { InjectionToken } from "@rxdi/core";
export interface IPFS_DAEMON {
}
export declare const initIpfsDaemonOptions: {
    Addresses: {
        API: string;
        Gateway: string;
        Swarm: string[];
    };
};
export declare class Options {
    port?: string;
    remote?: boolean;
    type?: 'go' | 'js' | 'proc';
    config?: {
        Addresses?: {
            API?: string;
            Announce?: any[];
            Gateway?: string;
            NoAnnounce?: any[];
            Swarm?: string[];
        };
    };
}
export interface DaemonNodeInfo {
    apiHost: string;
    apiPort: string;
    gatewayHost: string;
    gatewayPort: string;
}
export declare const IPFS_DAEMON: InjectionToken<IPFS_DAEMON>;

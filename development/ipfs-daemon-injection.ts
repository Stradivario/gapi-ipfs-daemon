import { InjectionToken } from "@rxdi/core";

export interface IPFS_DAEMON {

}

export class Options {
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

export const IPFS_DAEMON = new InjectionToken<IPFS_DAEMON>('gapi-ipfs-daemon-injection');

import { InjectionToken } from "@rxdi/core";

export interface IPFS_DAEMON {

}
export const initIpfsDaemonOptions = {
    Addresses: {
        API: '/ip4/127.0.0.1/tcp/5001',
        Gateway: '/ip4/127.0.0.1/tcp/8080',
        Swarm: [ '/ip4/0.0.0.0/tcp/4001', '/ip6/::/tcp/4001' ]
    }
};
export class Options {
    port?: string;
    remote?: boolean = false;
    type?: 'go' | 'js' | 'proc' = 'js';
    config?: {
        Addresses?: {
            API?: string;
            Announce?: any[];
            Gateway?: string;
            NoAnnounce?: any[];
            Swarm?: string[];
        }
    } = initIpfsDaemonOptions;
}
export interface DaemonNodeInfo {
    apiHost: string;
    apiPort: string;
    gatewayHost: string;
    gatewayPort: string;
}

export const IPFS_DAEMON = new InjectionToken<IPFS_DAEMON>('gapi-ipfs-daemon-injection');

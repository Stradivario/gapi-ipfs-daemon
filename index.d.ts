import { ModuleWithServices } from "@rxdi/core";
export declare class IpfsDaemonModule {
    static forRoot(options?: {
        port: string;
        remote: boolean;
        type: 'go' | 'js' | 'proc';
    }): ModuleWithServices;
}
export * from './ipfs-daemon-injection';
export * from './ipfs-daemon-node-info';

import { ModuleWithServices } from "@rxdi/core";
import { Options } from "./ipfs-daemon-injection";
export declare class IpfsDaemonModule {
    static forRoot(options?: Options): ModuleWithServices;
}
export * from './ipfs-daemon-injection';
export * from './ipfs-daemon-node-info';
export * from './services/index';

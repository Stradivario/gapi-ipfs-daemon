import { DaemonNodeInfo } from './ipfs-daemon-injection';
export declare class IpfsDaemonInfoService {
    info: DaemonNodeInfo;
    setInfo(info: DaemonNodeInfo): void;
    getInfo(): DaemonNodeInfo;
}

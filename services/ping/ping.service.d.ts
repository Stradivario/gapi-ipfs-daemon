/// <reference types="node" />
import { IncomingMessage } from 'http';
import { Observable } from 'rxjs';
import { IpfsDaemonInfoService } from '../../ipfs-daemon-node-info';
export declare class PingService {
    private ipfsDaemonNodeInfo;
    private providers;
    constructor(ipfsDaemonNodeInfo: IpfsDaemonInfoService);
    ping(hash: string): Observable<[IncomingMessage, IncomingMessage, IncomingMessage]>;
    httpObservable(link: string): Observable<IncomingMessage>;
}

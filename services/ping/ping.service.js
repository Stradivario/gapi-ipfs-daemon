"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
const http_1 = require("http");
const https_1 = require("https");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ipfs_daemon_node_info_1 = require("../../ipfs-daemon-node-info");
let PingService = class PingService {
    constructor(ipfsDaemonNodeInfo) {
        this.ipfsDaemonNodeInfo = ipfsDaemonNodeInfo;
        this.providers = {
            infura: 'https://ipfs.infura.io/ipfs/',
            cloudflare: 'https://cloudflare-ipfs.com/ipfs/',
            ipfsOriginal: 'https://ipfs.io/ipfs/',
            thisNode: `http://${this.ipfsDaemonNodeInfo.info.gatewayHost}:${this.ipfsDaemonNodeInfo.info.gatewayPort}/ipfs/`
        };
    }
    ping(hash) {
        return this.httpObservable(`${this.providers.thisNode}${hash}`)
            .pipe(operators_1.switchMap(() => rxjs_1.combineLatest(this.httpObservable(`${this.providers.infura}${hash}`), this.httpObservable(`${this.providers.cloudflare}${hash}`), this.httpObservable(`${this.providers.ipfsOriginal}${hash}`))));
    }
    httpObservable(link) {
        return rxjs_1.Observable.create(o => {
            if (link.includes('https')) {
                https_1.get(link, (r) => o.next(r));
            }
            else {
                http_1.get(link, (r) => o.next(r));
            }
        });
    }
};
PingService = __decorate([
    core_1.Service(),
    __metadata("design:paramtypes", [ipfs_daemon_node_info_1.IpfsDaemonInfoService])
], PingService);
exports.PingService = PingService;

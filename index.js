"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var IpfsDaemonModule_1;
const core_1 = require("@rxdi/core");
const IPFSFactory = require("ipfsd-ctl");
const ipfs_daemon_node_info_1 = require("./ipfs-daemon-node-info");
const ipfs_daemon_injection_1 = require("./ipfs-daemon-injection");
const services_1 = require("./services");
let IpfsDaemonModule = IpfsDaemonModule_1 = class IpfsDaemonModule {
    static forRoot(options) {
        return {
            module: IpfsDaemonModule_1,
            services: [
                services_1.PingService,
                {
                    provide: ipfs_daemon_injection_1.IPFS_DAEMON,
                    lazy: true,
                    useFactory: () => __awaiter(this, void 0, void 0, function* () {
                        return yield new Promise((resolve) => {
                            const infoService = core_1.Container.get(ipfs_daemon_node_info_1.IpfsDaemonInfoService);
                            const logger = core_1.Container.get(core_1.BootstrapLogger);
                            const exitHandler = core_1.Container.get(core_1.ExitHandlerService);
                            IPFSFactory.create(options)
                                .spawn((err, ipfsd) => {
                                if (err) {
                                    throw err;
                                }
                                exitHandler.onExitApp(['SIGTERM'])
                                    .subscribe(() => {
                                    ipfsd.stop();
                                    ipfsd.killProcess();
                                });
                                ipfsd.api.id(function (err, id) {
                                    if (err) {
                                        throw err;
                                    }
                                    logger.log(id);
                                    logger.log(`Ipfs daemon api running at: ${ipfsd.api.gatewayHost}:${ipfsd.api.apiPort}`);
                                    logger.log(`Ipfs daemon gateway running at: ${ipfsd.api.gatewayHost}:${ipfsd.api.gatewayPort}`);
                                    infoService.setInfo({
                                        apiHost: ipfsd.api.apiHost,
                                        apiPort: ipfsd.api.apiPort,
                                        gatewayHost: ipfsd.api.gatewayHost,
                                        gatewayPort: ipfsd.api.gatewayPort
                                    });
                                    resolve(ipfsd);
                                });
                            });
                        });
                    })
                }
            ]
        };
    }
};
IpfsDaemonModule = IpfsDaemonModule_1 = __decorate([
    core_1.Module()
], IpfsDaemonModule);
exports.IpfsDaemonModule = IpfsDaemonModule;
__export(require("./ipfs-daemon-injection"));
__export(require("./ipfs-daemon-node-info"));
__export(require("./services/index"));

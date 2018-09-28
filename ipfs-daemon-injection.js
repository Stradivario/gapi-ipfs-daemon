"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rxdi/core");
exports.initIpfsDaemonOptions = {
    Addresses: {
        API: '/ip4/127.0.0.1/tcp/5001',
        Gateway: '/ip4/127.0.0.1/tcp/8080',
        Swarm: ['/ip4/0.0.0.0/tcp/4001', '/ip6/::/tcp/4001']
    }
};
class Options {
    constructor() {
        this.remote = false;
        this.type = 'js';
        this.config = exports.initIpfsDaemonOptions;
    }
}
exports.Options = Options;
exports.IPFS_DAEMON = new core_1.InjectionToken('gapi-ipfs-daemon-injection');

# @Gapi Ipfs Daemon (Beta)


##### More information about IPFS system can be find here [IPFS-WIKI](https://en.wikipedia.org/wiki/InterPlanetary_File_System)
##### For questions/issues you can write ticket [here](http://gitlab.youvolio.com/gapi/gapi-ipfs-daemon/issues)
##### This module is intended to be used with [GAPI](https://github.com/Stradivario/gapi) or [RXDI](https://github.com/rxdi/main)

## Installation and basic examples:
##### To install this Gapi module, run:

```bash
$ npm install @gapi/ipfs-daemon --save
```

## Consuming @gapi/ipfs-daemon

Without configuration

##### Import inside AppModule or CoreModule
```typescript

import { Module } from '@rxdi/core';
import { IpfsDaemonModule } from '@gapi/ipfs-daemon';

@Module({
    imports: [
        IpfsDaemonModule.forRoot(),
    ]
})
export class CoreModule { }

```

`options` can be passed

```typescript
IpfsDaemonModule.forRoot({
    port: 123456,
    remote: true | false,
    type: 'js' | 'go' | 'proc'
})
```

Interact with Ipfs-daemon

note: keep in mind that this is beta testing contribution is appreciated

```typescript
import { Inject, Service } from '@rxdi/core';
import { IPFS_DAEMON } from '@gapi/ipfs-daemon';

@Service()
export class IpfsTestService {

    constructor(
        @Inject(IPFS_DAEMON) private ipfs: IPFS_DAEMON
    ) {}

}

```

TODO: Better documentation...

Enjoy ! :)

# peercoin-rpc

Peercoin RPC for TypeScript with Response Type Enforcement

## Installing

`npm install peercoin-rpc`

## Example usage

```typescript
import PeercoinRPC from 'peercoin-rpc';

const rpc = new PeercoinRPC('http://localhost:9904');

const balance = await rpc.getBalance();
console.log(balance);
```

## License

MIT

import * as t from 'io-ts';

export const SignRawTransactionWithWalletResultDecoder = t.type({
  hex: t.string,
  complete: t.boolean,
  // TODO: errors field
});

export type SignRawTransactionWithWalletResult = t.TypeOf<typeof SignRawTransactionWithWalletResultDecoder>;

export const SendToAddressResultDecoder = t.string;

export type SendToAddressResult = t.TypeOf<typeof SendToAddressResultDecoder>;

export const LockUnspentResultDecoder = t.boolean;

export type LockUnspentResult = t.TypeOf<typeof LockUnspentResultDecoder>;

export const SendRawTransactionResultDecoder = t.string;

export type SendRawTransactionResult = t.TypeOf<typeof SendRawTransactionResultDecoder>;

export const FundRawTransactionResultDecoder = t.type({
  hex: t.string,
  fee: t.number,
  changepos: t.number
});

export type FundRawTransactionResultDecoder = t.TypeOf<typeof FundRawTransactionResultDecoder>;

export const CreateRawTransactionResultDecoder = t.string;

export type CreateRawTransactionResult = t.TypeOf<typeof CreateRawTransactionResultDecoder>;

export const GetTransactionResultDecoder = t.type({
  fee: t.union([t.number, t.undefined]),
  blockhash: t.union([t.string, t.undefined]),
});

export type GetTransactionResult = t.TypeOf<typeof GetTransactionResultDecoder>;

export const GetInfoResultDecoder = t.type({
  blocks: t.number,
});

export type GetInfoResult = t.TypeOf<typeof GetInfoResultDecoder>;

export const GetBlockchainInfoResultDecoder = t.type({
  blocks: t.number,
  headers: t.union([t.number, t.undefined]),
});

export type GetBlockchainInfoResult = t.TypeOf<typeof GetBlockchainInfoResultDecoder>;

export const GetRawTransactionAsObjectResultOutputDecoder = t.type({
  n: t.number,
  value: t.union([t.number, t.undefined]),
  scriptPubKey: t.type({
    hex: t.string,
    addresses: t.union([t.array(t.string), t.undefined]),
    type: t.union([t.literal('scripthash'), t.string]),
    reqSigs: t.union([t.number, t.undefined]),
  }),
});

export type GetRawTransactionAsObjectResultOutput = t.TypeOf<typeof GetRawTransactionAsObjectResultOutputDecoder>;

export const GetRawTransactionAsObjectResultDecoder = t.type({
  txid: t.string,
  hash: t.union([t.string, t.undefined]),
  blockhash: t.union([t.string, t.undefined]),
  vout: t.array(GetRawTransactionAsObjectResultOutputDecoder),
  vin: t.array(
    t.type({
      // NOTE: txid is undefined for coinbase tx
      txid: t.union([t.string, t.undefined]),
      // NOTE: vout is undefined for coinbase tx
      vout: t.union([t.number, t.undefined]),
    })
  ),
});

export type GetRawTransactionAsObjectResult = t.TypeOf<typeof GetRawTransactionAsObjectResultDecoder>;

export const GetBlockHashFromHeightResultDecoder = t.string;

export type GetBlockHashFromHeightResult = t.TypeOf<typeof GetBlockHashFromHeightResultDecoder>;

// If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'.
// If verbosity is 1, returns an Object with information about block <hash>.
// If verbosity is 2, returns an Object with information about block <hash> and information about each transaction.
// NOTE: This is for verbosity equals 1
export const GetBlockFromHashResultDecoder = t.type({
  tx: t.array(t.string),
  height: t.number,
});

export type GetBlockFromHashResult = t.TypeOf<typeof GetBlockFromHashResultDecoder>;

export const GetRawMempoolResultDecoder = t.array(t.string);

export type GetRawMempoolResult = t.TypeOf<typeof GetRawMempoolResultDecoder>;

export const GetNewAddressResultDecoder = t.string;

export type GetNewAddressResult = t.TypeOf<typeof GetNewAddressResultDecoder>;

export const ValidateAddressResultDecoder = t.type({
  isvalid: t.boolean,
});

export type ValidateAddressResult = t.TypeOf<typeof ValidateAddressResultDecoder>;

export const GetBalanceResultDecoder = t.number;

export type GetBalanceResult = t.TypeOf<typeof GetBalanceResultDecoder>;

export const GenerateToAddressResultDecoder = t.array(t.string);

export type GenerateToAddressResult = t.TypeOf<typeof GenerateToAddressResultDecoder>;

export const GetGetBlockchainInfoResultDecoder = t.array(
  t.type({
    blocks: t.number,
    headers: t.union([t.number, t.undefined]),
  })
);

export type GetGetBlockchainInfoResult = t.TypeOf<typeof GetGetBlockchainInfoResultDecoder>;

export const AncientGetInfoResultDecoder = t.type({
  blocks: t.number,
});

export type AncientGetInfoResult = t.TypeOf<typeof AncientGetInfoResultDecoder>;

export const ListUnspentDecoder = t.array(
  t.type({
    txid: t.string,
    vout: t.number,
    address: t.string,
    amount: t.number,
    confirmations: t.number,
    spendable: t.boolean,
    solvable: t.union([t.boolean, t.undefined]),
    safe: t.union([t.boolean, t.undefined]),
  })
);

export type ListUnspentResult = t.TypeOf<typeof ListUnspentDecoder>;

export const DumpPrivateKeyDecoder = t.string;

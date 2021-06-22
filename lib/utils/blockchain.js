import fetch from 'node-fetch';

export const getBalance = async (accountId) => {
  const res = await fetch('https://rpc.testnet.near.org', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'query',
      params: {
        request_type: 'view_account',
        finality: 'final',
        account_id: accountId,
      },
      id: 'nothing',
      jsonrpc: '2.0',
    }),
  });

  const json = await res.json();
  return json.result.amount;
};

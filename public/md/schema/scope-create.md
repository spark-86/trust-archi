# Schema: scope.create/1

## R⬢

```json
{
    "previous_hash": "abc123...",
    "protocol": "v1",
    "scope": "root.branch.scope",
    "nonce": "zyx987...",
    "record_type": "scope:create",
    "data": {
        "schema": "scope.create/1",
        "new_scope": "root.branch.scope.newscope",
        "authorities": [
            {
                "name": "Authority Name",
                "host": "sample.example.com",
                "port": 1234,
                "key": "abc123..."
            }
        ],
        "genesis": {
            "protocol": "v1",
            "scope": "root.branch.scope.newscope",
            "nonce": "zyx987...",
            "record_type": "scope:genesis",
            "data": {
                "schema": "scope.genesis/1",
                "authorities": [
                    {
                        "name": "Authority Name",
                        "host": "sample.example.com",
                        "port": 1234,
                        "key": "abc123..."
                    }
                ]
            },
            "signatures": [
                {
                    "fingerprint": "abc123...",
                    "type": "owner",
                    "signature": "abc123..."
                }
            ]
        }
    },
    "signatures": [
        {
            "fingerprint": "abc123...",
            "type": "owner",
            "signature": "abc123..."
        }
    ]
}
```

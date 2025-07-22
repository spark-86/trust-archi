# Sample Records

This is the orginial Genesis chain of records, it does contain a key error, and I'm not happy how scopes are formed, but this provides a general thesis of how it would work.

---

```json
{
    "previous_hash": "",
    "protocol": "v1",
    "scope": "",
    "nonce": "bHygucGeOOsr9bj4KxABfE7vQwnoKy_9xhqjvOJr_Gc",
    "record_type": "genesis",
    "data": {
        "name": "Trust Architect Core",
        "key": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
        "js_at": 1752941587614
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "albGE9feia_vXT4G0KlONMlTUPSI3Kd3Jp3fsV3IEM7QjHkr1VX876HRe5hwEz4ph6vaMwHnMeSJUlh3fXdIAA"
        },
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "signature": "iF_JuqNfCBaqejsuOKq_e1NNXGyK1ITNYSTJILQ_9eMjm4UkjKj621WR2VtkTg-g0bT0v1NLqJlFErSnZ--XDw",
            "type": "usher"
        }
    ],
    "at": "0",
    "current_hash": "d58sixickyicGRWM/X6mBI3vUNGHcWXQiE/3xVhfWWM="
}
```

---

```json
{
    "previous_hash": "d58sixickyicGRWM/X6mBI3vUNGHcWXQiE/3xVhfWWM=",
    "protocol": "v1",
    "scope": "",
    "nonce": "wx-ZHVjUF6v97FXFV47rSiwknpp88kiJ49a86HrkNkM",
    "record_type": "policy:set",
    "data": {
        "schema": "policy.set/1",
        "write": ["core", "root"],
        "read": ["any"],
        "mirror": ["any"],
        "grant": ["core", "root"],
        "revoke": ["core", "root"],
        "allow_records": ["scope:*", "core:*"],
        "deny_records": ["all"],
        "quorum": {
            "write": 1,
            "grant": 1,
            "revoke": 2
        }
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "NiyGniUKcIi7GvviLpXEOBQZ2FWEBfDG8jyJj2p0rDxjj0Q8pv5d8YfUSMJsNeB7Qyc_sosToxcuc0p5Nza4DA"
        },
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "signature": "qtRcG9XkoTwpzKwrf-znoQxZfmfrXgFK46PwWQUgBLWLnd7s3jACuyJ0B6OrjSwSBujrBrWX1kXS8viol2PPDA",
            "type": "usher"
        }
    ],
    "at": "69",
    "current_hash": "MrYAzsLdEckSdlf/4D+susy74RO4QjxKqPLLAlOEaAc="
}
```

---

```json
{
    "previous_hash": "MrYAzsLdEckSdlf/4D+susy74RO4QjxKqPLLAlOEaAc=",
    "protocol": "v1",
    "scope": "",
    "nonce": "GtzKft4qILR7Rqyr4ylJAm0xyFK_WuS9a-WTE5QKjbM",
    "record_type": "key:grant",
    "data": {
        "schema": "key.grant/1",
        "name": "Trust Architect Keymaster",
        "key": "ZU8xeXdzRURFQl9VSGNncXhUbV9sUVg1QXdUeUZKTlJCd0sxUTRLMzZLMA"
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "ufXF-pbWgDrpeh89_T7m_iahJnNS4t5zZ9NW1EElRRM4vG7xp2FQMyHnTizHojAz54HdEOzIBkfnnmCGFsxIDg"
        },
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "signature": "N71EeryJMIksg8kD103HyTCjvwE7GVa4KVvchTKvE3O5A1g4hyPgNIca7SYjmVyViar4SQ84zvHSu6FQoBZiBQ",
            "type": "usher"
        }
    ],
    "at": "104",
    "current_hash": "GGgX8p4uQ+irxf0BEr0eJZFsFFU9R7zoij7rD7N3eMk="
}
```

---

```json
{
    "previous_hash": "GGgX8p4uQ+irxf0BEr0eJZFsFFU9R7zoij7rD7N3eMk=",
    "protocol": "v1",
    "scope": "",
    "nonce": "U3BL-HrZJjY36pz9UE4uvcBCasB6w42NjqzVNcwXrGg",
    "record_type": "scope:create",
    "data": {
        "schema": "scope.create/1",
        "scope": "self",
        "description": "Scope for sovereign identities",
        "ushers": [
            {
                "ipAddress": "34.71.60.51",
                "port": 1984
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3000
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3001
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3002
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3003
            }
        ],
        "keys": {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "roles": ["authority", "quorum"]
        },
        "created_at": "GT[0.000000116]",
        "created_by": "Trust Architect Core"
    },
    "signatures": [
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "type": "owner",
            "signature": "KgYPuMnFEwaxa8FrDimn-3YBN8j9nJmMxf3IPSx8jSMtgn13GN2lKo5QVfjeTYhA-6XAatGPIOgkZ3pwZH5GCQ"
        },
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "signature": "vv4Eo3YxSjIqMZOitcnJG8hKlU8YOF0eg8-5A0vOocrHf4lsHNn4Gc5vLahbJR5ucepeYfeOf3HKlusfksFvCA",
            "type": "usher"
        }
    ],
    "at": "127",
    "current_hash": "zbYcU3jTICFsTfN87ZxaTvI9Wjohug4vN9eYMn9ySrA="
}
```

---

```json
{
    "previous_hash": "zbYcU3jTICFsTfN87ZxaTvI9Wjohug4vN9eYMn9ySrA=",
    "protocol": "v1",
    "scope": "self",
    "nonce": "FX6tsxNXqnE45Xsx5x3UuGD8slaORdqHoKkYDJqn5U4",
    "record_type": "scope:genesis",
    "data": {
        "schema": "scope.genesis/1",
        "keys": {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "roles": ["authority", "quorum"]
        }
    },
    "signatures": [
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "type": "owner",
            "signature": "wXfCuahY0ZF-yb4jGnjr1abXnHML0i2t2RPb1r8kb6Y_ZpXm5_h1r4ggke2Y-pHeGjGbGoegWrWL1HAnPK_LAw"
        },
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "signature": "CDOXl1Jjv_Wg2QIU5X2f8PJqp7ayFjkjLiewWVrwWuv2StMJl_MLUog4bOw_kVDRhzO0kl0EI_3ORVHP8qd_Aw",
            "type": "usher"
        }
    ],
    "at": "139",
    "current_hash": "46i+rhJx2LLvN4spOfnKR5sbbe5kWrOGu6pYwZR6lX8="
}
```

---

```json
{
    "previous_hash": "46i+rhJx2LLvN4spOfnKR5sbbe5kWrOGu6pYwZR6lX8=",
    "protocol": "v1",
    "scope": "self",
    "nonce": "VxtcUJkctdzq-4Qy0kB8WK6VoG5zHdYQCflhjaANUVY",
    "record_type": "policy:set",
    "data": {
        "schema": "policy.set/1",
        "write": ["authority", "owner"],
        "read": ["any"],
        "mirror": ["any"],
        "grant": ["authority", "owner"],
        "revoke": ["authority", "owner"],
        "allow_records": ["identity:*", "scope:*", "assert:*"],
        "deny_records": ["all"],
        "quorum": {
            "write": 1,
            "grant": 1,
            "revoke": 2
        }
    },
    "signatures": [
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "type": "owner",
            "signature": "UucxvQprExu2Lz8KMwg2EnAjWdYpLXeE5sixnON9Yoe1_YjKTK2T9Oo6dHBL9AYREBepNqbqXRBzUdjUtVQ3CQ"
        },
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "signature": "jK9ySJka4OoyjBs0vBx2ZeXES8Nj0pcn9sNC2lHu4eRKmwv-qCF_ZvAIG6ijO4p79yOVw7q_0M9xe8ibUr_8CQ",
            "type": "usher"
        }
    ],
    "at": "174",
    "current_hash": "0vJVbJFPCM//lC3ta8kCJVAycRasX0ChYqVILKRZQaY="
}
```

---

```json
{
    "previous_hash": "",
    "protocol": "v1",
    "scope": "self",
    "nonce": "PT3-y2ZsBQvr768ZJOzZoZS0rnKToPaJd09VOuhlT4o",
    "record_type": "scope:create",
    "data": {
        "schema": "scope.create/1",
        "scope": "self.0000-0000-0000-0000",
        "description": "Scope for SelfID 0000-0000-0000-0000",
        "ushers": [
            {
                "ipAddress": "34.71.60.51",
                "port": 1984
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3000
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3001
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3002
            },
            {
                "ipAddress": "34.71.60.51",
                "port": 3003
            }
        ],
        "keys": [
            {
                "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
                "roles": ["authority", "quorum"]
            }
        ],
        "created_at": "GT[0.000000197]",
        "created_by": "Veronica Hodo <0000-0000-0000-0000>"
    },
    "signatures": [
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "type": "owner",
            "signature": "12DcnCT-6CBMc15aWg5HcgidbJ4cgXyp_zYXJL0KQvom093JJduZhYijLH6iS1UVwxHrBPN41SU0nbqzrelNCQ"
        },
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "signature": "mRVYHRNALyPK_5ZqKuvZx5YhZOJxSLEsVDU4HO3yRga7TYj8KkDQ5HorTBokSxnb33CfESC8JpIEQaORiXjxCA",
            "type": "usher"
        }
    ],
    "at": "197",
    "current_hash": "QikE6K6pEPZqVubDAuNK4Cv86M64u8dDRe61GDRB4y0="
}
```

---

```json
{
    "previous_hash": "0vJVbJFPCM//lC3ta8kCJVAycRasX0ChYqVILKRZQaY=",
    "protocol": "v1",
    "scope": "self",
    "nonce": "rNeJ6TXQe_iIpeZCDACKUdElvQSU2vkwJZiRrh6bMcg",
    "record_type": "identity:claim",
    "data": {
        "schema": "identity.claim/1",
        "name_given": "Veronica",
        "name_family": "Hodo",
        "name_display": "Veronica Hodo",
        "at": "GT[0.000000220]"
    },
    "signatures": [
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "type": "owner",
            "signature": "qlD7eLaCaXAcDMFed6dmFnSjc-1UgEm8ZqHKXxSsFeleDz9ieoeAJ-B6h_ZHVViDJndvlxtiHkw47MpOiyBaDw"
        },
        {
            "fingerprint": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
            "signature": "wAXBnPnx9OOx1ZiEkTzIs9vn3jRRr3og4X_eQtSt72-8zT0Bzx1O0rI_p_izn57m0Ygm5Yv0u-nMsOPrNxbkCg",
            "type": "usher"
        }
    ],
    "at": "220",
    "current_hash": "d5qIezpK9jhLAh61z9hDze0B3IsdewX3bYoYwNrR5jc="
}
```

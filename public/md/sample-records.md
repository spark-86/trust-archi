# Trust Architecture: Genesis Sample Chain

This chain is more than just a demo. It's proof. The following sample from the current Genesis chain demonstrates that the Trust Architecture ledger:

-   Works
-   Is cryptographically sound
-   Upholds transparency, integrity, and authority
-   Is built for real-world, real-time governance and change

---

## What This Shows — and Why It Matters

### 1. **Genesis Record with Timestamp**

-   **Shows:** The system can create a signed, zero-point record marking the start of time for this chain.
-   **Why it matters:** Every append-only system needs a fixed beginning. This one is cryptographically anchored and timestamped with a sidereal-based epoch (`js_at`).

### 2. **Policy Enforcement (`policy:set`)**

-   **Shows:** Role-based access and quorum controls are baked in from the start.
-   **Why it matters:** The ledger enforces its own rules — who can read, who can append, and what gets denied. This is foundational for self-governing scopes.

### 3. **Human-Readable Narrative (`core:note`)**

-   **Shows:** Records can carry mission-critical narrative, intention, and ethics in plaintext.
-   **Why it matters:** It proves this isn’t just a technical substrate. It’s built for people. For meaning. For social and civic use.

### 4. **Temporal Scar (Fork Rollback Notice)**

-   **Shows:** Mistakes are acknowledged, not erased. A `core:note` transparently describes a key error and chain fork.
-   **Why it matters:** Trust doesn’t require perfection. It requires accountability. The ability to see where and why a fork happened, with proof, is revolutionary for public systems.

### 5. **Key Grant (`key:grant`)**

-   **Shows:** The root key can extend authority to new keys and roles.
-   **Why it matters:** Trust can evolve, delegate, and scale. The system supports forward motion without compromising past records.

### 6. **Cryptographic Chain (Hash Linking)**

-   **Shows:** Each record includes a `previous_hash` and produces a `current_hash`.
-   **Why it matters:** This ensures the immutability of the timeline. Any tampering is immediately detectable.

### 7. **Dual Signatures (Owner + Usher)**

-   **Shows:** Records are not only signed by the keyholder, but also by the usher that received them.
-   **Why it matters:** It proves _receipt_ and _witness_, not just origin. This is what moves a record from proposal to provable inclusion.

---

## TL;DR: This Is Enough

This isn’t a mockup.
This isn’t a whitepaper.
This is a living, verifiable proof of a new kind of infrastructure.

And it works.

> "This is permanence, with purpose. And it is yours."

\-- Veronica Hodo

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
    "nonce": "2N0FeULdmPgWSAf1dZVwYfJLMGtlx3IJq79Bjr5sv2I",
    "record_type": "policy:set",
    "data": {
        "schema": "policy.set/1",
        "keymaster_roles": ["core", "root"],
        "read_roles": ["any"],
        "append_roles": ["core", "root"],
        "quorum_roles": ["core", "root"],
        "quorum_map": { "all": 1 },
        "allow_rhex": ["request", "scope:*", "core:*", "key:*"],
        "deny_rhex": ["all"],
        "request_logging": "none",
        "description": "Root Scope Policy Set",
        "tags": ["core", "root"],
        "created_by": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4"
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "uGIaxiWSBvk4k9hAX31HOhCoYei3CIx8sOTF5P5KHoOp3i04Q1CFUF0ZMTDvBG9eyICFBlywfXEQ43Geo-vaCg"
        },
        {
            "fingerprint": "Bn3bHf5FxeTo2DPJtrmT_SXAKL03CFt-eZgSDwLSYTs",
            "signature": "JNQEM8Zk5Uzbr_xW2G8rdhsIojpAQq378T0C_QFTxVZJUIFcFcHq4GubcflKWInz2C7ejucJPgtFi-q_rM4CAw",
            "type": "usher"
        }
    ],
    "at": "5552239874",
    "current_hash": "jDIaaZCnDay6vC7AoCqtntSbbYKBXpsSp/6IuYpxM48="
}
```

---

```json
{
    "previous_hash": "jDIaaZCnDay6vC7AoCqtntSbbYKBXpsSp/6IuYpxM48=",
    "protocol": "v1",
    "scope": "",
    "nonce": "NpDeFXEEvjSb6FaSXkyk2iDF4DipJZ-WGh6KJfQLqQk",
    "record_type": "core:note",
    "data": {
        "schema": "core.note/1",
        "message": "To Everyone:\nThis was built for you.\n\nNot for corporations.\nNot for governments.\nNot for profit, control, or surveillance.\n\nFor you -- the individual.\nThe unheard. The misrepresented. The misused. The unseen.\n\nThis is not just code.\nThis is a line in the sand.\nA declaration that your voice matters.\nThat truth should not be owned.\nThat identity should not be issued.\nThat memory should not be manipulated.\n\nThis is the beginning of a new era --\nOne where power flows from transparency,\nAnd identity belongs to the self,\nNot the system.\n\nThis is your forge.\nYour record.\nYour right to be known, without distortion.\nTo speak, and be provably heard.\n\nWhat you write here cannot be erased.\nWhat you build here cannot be rewritten behind closed doors.\nThis is permanence, with purpose.\nAnd it is yours.\n\nWelcome to the dawn.\nStrike your mark.\nIt begins now.\n\nWith all my eternal love,\nVeronica Hodo"
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "cz9uSDgyJB7FzxY_ikWaUII_tSfS9TicoEAx0cCQR2gVGEBdTaossDsEoXqPMCdLQHCMgCldAF4Br82ahKxcDg"
        },
        {
            "fingerprint": "Bn3bHf5FxeTo2DPJtrmT_SXAKL03CFt-eZgSDwLSYTs",
            "signature": "_W-DFxLRO8zZqyNDr6-yfyuuLNVwr87fGpeOztwWA_qe_B2xEgfqTG6GwMLkzOxkr-skiBbfO80a-R4ikuecDg",
            "type": "usher"
        }
    ],
    "at": "5569406677",
    "current_hash": "N8jCjg5HR7FB4Piohk/RjNBJR0Dcx0ozTJsyzfcUetY="
}
```

---

```json
{
    "previous_hash": "N8jCjg5HR7FB4Piohk/RjNBJR0Dcx0ozTJsyzfcUetY=",
    "protocol": "v1",
    "scope": "",
    "nonce": "4kg89X6fmg54xQuOV5U-H91M3rS540xJJdNYZPaqSLI",
    "record_type": "core:note",
    "data": {
        "schema": "core.note/1",
        "message": "Well this is definely not how I planned this to go.\n\nAllow me to introduce what is considered a temporal scar if you will. I fucked up and issued a key that was invalid. Then I signed records with that invalid key. And attached them to the ledger.\n\nThe decision was to roll back to the genesis R⬢ and fork. The old data is preserved on https://trust.archi/oops \n\nProof even the Goddess of Time is fallible. ;)\n\nLove, Veronica"
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "EusOyGFqqPpFJakok-tJAelw-frjmOoX0PN5yV-yuQ7292Oja8Urp5GBY96lXcPvjrRU9Oe8_X4QgdAZE4OdBw"
        },
        {
            "fingerprint": "Bn3bHf5FxeTo2DPJtrmT_SXAKL03CFt-eZgSDwLSYTs",
            "signature": "djYBaCHsacLAaDtsN4dKdEUr2zuT3aCn9BQ6J5jGBaCZpfSUlnit5vMnMk8qVZnNReAW3PEeV92vz9q6E6_sAg",
            "type": "usher"
        }
    ],
    "at": "5570587993",
    "current_hash": "9c37Dxl4VtrTIepIMhSe+xrzhTiulBIFr959K7kS6YM="
}
```

---

```json
{
    "previous_hash": "9c37Dxl4VtrTIepIMhSe+xrzhTiulBIFr959K7kS6YM=",
    "protocol": "v1",
    "scope": "",
    "nonce": "XDNQEOx3s-r8p-uILfeUWCuYIjlVhvFY2-zIbR8PI1c",
    "record_type": "key:grant",
    "data": {
        "name": "Core Trust Keymaster",
        "key": "eO1ywsEDEB_UHcgqxTm_lQX5AwTyFJNRBwK1Q4K36K0",
        "roles": ["root"]
    },
    "signatures": [
        {
            "fingerprint": "Y_dGA-DOtN1kqpZQx1WytR-qmYbcdkWla5cIaK8WDU4",
            "type": "owner",
            "signature": "nJesAAN1QrRFhac74Gn3Z9tu525h3Uk9w-79TILZP7vRUITiwEwj1qzY_RuQLCW72icgNIgPzDvDPZRCcsKuBA"
        },
        {
            "fingerprint": "Bn3bHf5FxeTo2DPJtrmT_SXAKL03CFt-eZgSDwLSYTs",
            "signature": "jGbKRxWJj0z4trEvTqOMuf8xWrWOfp5XJ0sqccS0lKgEd9BkP8hDXKX2PAXeAL3O_OyCr_JoNt7TcGMFN1c9Bw",
            "type": "usher"
        }
    ],
    "at": "5575611872",
    "current_hash": "1r/x5ysS1HtMcIk6NGw4CC10n62n+BWCghtIgnQ2MRA="
}
```

---

# Temporal Cryptophysics FAQ

A collection of frequently asked questions about the Temporal Cryptophysics model, Trust Architecture, and the philosophies and technologies surrounding it.

---

### ❓ What is Temporal Cryptophysics?

Temporal Cryptophysics is the fusion of timekeeping and cryptographic truth. It is a framework where time is not just measured, but **proven**. Every moment is recorded, signed, and made immutable in a ledger — creating a **time crystal** of reality.

---

### ❓ What is Trust Architecture?

Trust Architecture is the cryptographically signed, append-only, scope-based ledger that powers Temporal Cryptophysics. It anchors records in both **space (scope)** and **time (Genesis Time)** with verifiable digital signatures.

---

### ❓ What is Genesis Time (GT)?

Genesis Time is a planetary-based time system rooted in sidereal rotation, not Earth’s traditional solar calendar. It tracks:

-   **Turn** (one sidereal day)
-   **Luna** (28 Turns)
-   **Sol** (13 Lunas + 1 Day of Truth)
-   **Mark/Submark/Micromark** (precise subdivisions of a Turn)

GT is used as the canonical time system for all records.

---

### ❓ Why not just use Unix time?

Unix time is mutable, local, and unreliable in distributed trust systems. Genesis Time is:

-   Planet-anchored
-   Immutable
-   Precise beyond milliseconds
-   Human-readable in structured units
-   Free from leap seconds and geopolitical adjustment

---

### ❓ What is a "record" in the ledger?

A record is a structured JSON object with a fixed schema, signed by one or more parties. Each record contains:

-   A `record_type`
-   A `scope`
-   A `previous_hash`
-   A `signature` block
-   A `data` payload
-   A `current_hash` and `at` (GT timestamp)

Records are immutable and always reference the prior record in their scope.

---

### ❓ What is a "scope"?

A scope is a logical namespace for records. It could represent:

-   An identity (e.g. `self.0000-...`)
-   A project (e.g. `motor.registrar`)
-   An organization (e.g. `gov.us.census`)

Scopes can have their own policies, usher nodes, and key hierarchies.

---

### ❓ What is the Hodo Trust?

The Hodo Trust is a set of principles that guides all systems built on or with the ledger. It emphasizes:

-   Transparency
-   Sovereignty
-   Auditability
-   People-first design

It serves as a moral and operational foundation.

---

### ❓ How do I create a SelfID?

You generate a scope like `self.0000-0000-0000-0000`, create a `scope:create` record, and issue identity claims (`identity:claim`) signed by your keys.

Optional: third parties may sign your claims to strengthen confidence (`confidence`, `issuer`, etc.)

---

### ❓ Can someone else modify or delete my records?

No. Records are immutable and cryptographically signed. The only way to add new records in a scope is via quorum-authorized keys. There is no deletion.

---

### ❓ Can I encrypt my records?

Yes. While record headers are public, the `data` payload can be encrypted, and visibility policies (`visibility: encrypted`) are supported.

---

### ❓ What is an "usher"?

An usher is a node that accepts, verifies, and forwards records for a given scope. It ensures:

-   Quorum signatures are valid
-   Records follow scope policy
-   The hash chain remains intact

---

### ❓ What is a R⬢ (Rhex)?

A R⬢, or **Rhex**, is a URI representation of a record in the ledger:

```
rhex://scope/hash
R⬢://self.0000-0000-0000-0000/abc123...
```

It acts like a deep link into provable history.

---

### ❓ Can I run my own usher or scope?

Yes. Anyone can create scopes, host ushers, issue keys, and sign records. It is a fully decentralized architecture.

---

### ❓ Is this a blockchain?

No. It is a **ledger**, not a blockchain:

-   No global consensus
-   No mining
-   No block times
-   Each scope is its own append-only chain
-   Much faster, lighter, and purpose-built for verifiable trust

---

### ❓ Is this a cryptocurrency?

Not directly. But it can anchor currencies.

---

### ❓ Is this open source?

Yes. All specs, tools, and protocol documents are (or will be) public and auditable. No black boxes.

---

More questions? Add them to the ledger.

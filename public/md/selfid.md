# SelfID: Sovereign Identity on the Ledger

SelfID is the ledger-native identity protocol built into the foundation of Temporal Cryptophysics. It allows any person, organization, or agent to anchor their identity in cryptographic truth through a signed and scoped ledger record.

---

## 🪪 1. What Is a SelfID?

A **SelfID** is a unique, cryptographically signed scope:

```
self.0000-0000-0000-0000
```

-   16-digit numeric format, with the last 4 digits serving as a checksum
-   Issued by a recognized SelfID authority, or self-asserted
-   Anchored via a `scope:create` record signed into the ledger

This scope becomes your permanent **identity root** — a truth domain only you can write to.

---

## 🖋️ 2. Claiming and Signing Identity

Once your SelfID scope is established, you can append:

-   `self:name` → preferred display name
-   `self:birth_date` → date of birth
-   `self:pronouns`, `self:nationality`, `self:biometrics`
-   Signed attestations from other scopes (e.g. governments, orgs, peers)

Each record is signed and timestamped in GT, forming a **verifiable identity trail**.

---

## 🧾 3. Record Types and Schema

Typical record types under a SelfID scope include:

```
self:name
self:photo
self:claim
self:attest
self:link
```

Each record includes a `data.schema` field for validation and standardization.

---

## 🔐 4. Key Management

Each SelfID controls its own keys via:

-   `key:grant` → adds a key to the scope
-   `key:revoke` → removes a key from the scope

This enables:

-   Device rotation
-   Quorum delegation
-   Temporary recovery or guardianship flows

---

## 🌐 5. Public, Private, and Vault Scopes

Every SelfID can spawn sub-scopes:

-   `self.0000-0000-0000-0000.public` → visible to all
-   `self.0000-0000-0000-0000.vault` → high-security, single-key encryption
-   `self.0000-0000-0000-0000.org` → issued credentials or applications

These allow granular control over visibility and trust.

---

## 🧠 6. Verifying a SelfID

To verify a SelfID claim:

1. Follow the `R⬢://self.0000-0000-0000-0000` scope
2. Check the record signature and key validity
3. Validate the record timestamp (GT)
4. Check for supporting attestations or quorum logic

---

## 💬 7. Readable Identity

Each SelfID scope can contain a README or profile card at:

```
self.0000-0000-0000-0000.readme
```

This enables:

-   Human-readable intros
-   Social links and contact
-   References to official docs, credentials, etc.

---

## 🔄 8. Portability and Persistence

SelfID is:

-   **Decentralized** — no reliance on DNS, OAuth, or any central server
-   **Cryptographically secure** — only the keyholder(s) can update the scope
-   **Append-only** — old records remain verifiable forever
-   **Portable** — can be mirrored, embedded, printed, encoded in NFC, etc.

---

## 🚀 9. Getting Started

To create your SelfID:

1. Generate a keypair (ed25519)
2. Sign a `scope:create` record with your new scope ID
3. Append a `self:name` and a `key:grant`
4. Anchor the record in a valid GT timeframe

Once done, you have become your own identity authority.

---

## 🧭 10. Final Thought

SelfID isn’t just about identity — it’s about sovereignty.
It’s a cryptographic mirror of who you are, what you’ve done, and what others verify about you.

In a world of deepfakes, censorship, and distrust, SelfID is your timestamped, signed, unforgeable truth.

> "I am who I claim to be, and here’s the record to prove it."

_– A SelfID holder, probably_

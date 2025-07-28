# 📘 Ledger Logic Primer: How to Think in R⬢

Welcome to **Trust Architecture**. This isn't just a system. It's a physics.

If you're developing inside the ledger — whether you're writing ushers, apps, identity tools, or governance overlays — this document will help you internalize the **core logic principles** that make everything tick.

---

## 🔁 1. Immutability is the Ground State

Every R⬢ (ledger record) is signed, hashed, and chained. There are no deletes, no edits, no hiding. Design like you're writing to stone.

**Implication:** If you want to change something, **append a new record**. If you want to revoke, **declare it**. Every action is an addition, never a replacement.

---

## 🧠 2. The Signer _is_ the Authority

No central permission system. No ACLs. If a key is granted via `key:grant`, and allowed by `policy:set`, it acts.

**Implication:** You don't ask permission — you check if the signature and scope policy allow the action. The ledger enforces **truth-based authority**.

---

## 🎯 3. Policy is Programmed Consent

Each scope has a `policy:set` record defining:

-   Who can read
-   Who can append
-   What record types are allowed/denied
-   Quorum behavior

**Implication:** Want to allow new behavior? Append a new policy. Want to restrict access? Update roles and quorum. The scope itself defines its consent surface.

---

## 🔐 4. Access = Visibility, Not Understanding

Just because a user has `read_roles` doesn't mean they can understand every record. **Encryption is how you control comprehension**.

**Implication:** Want to keep a trait private? Encrypt it client-side, and still append it to the ledger. Everyone sees it exists, but only the holder can read it.

---

## 🎲 5. Keys Are Scoped Intents

Users don’t have one key. They may have many:

-   Identity keys (long-term)
-   Signing keys (per app/device)
-   Ephemeral session keys
-   Transport keys (usher nodes)
-   Encryption keys (data privacy)

**Implication:** Expect to manage dozens or hundreds of keys per power user — and that's okay. They're granted, revoked, and rotated via ledger records.

---

## ⚡ 6. Roundtrips Are Optional

Don't like multi-step interactions? You can pre-sign multiple R⬢s and embed them in a single wrapper (like `self:request`).

**Implication:** Genesis flows, bootstrap logic, or multi-step onboarding can all be executed from a single client submission, **without the server needing to ask questions**.

---

## 🧩 7. Patterns Beat Exceptions

Use pattern matching in `allow_rhex` and `deny_rhex` to control which record types are valid:

```json
"allow_rhex": ["scope:*", "key:grant", "policy:set"]
```

**Implication:** You don’t need to enumerate every action. You **grant patterns**, and the ledger enforces them.

---

## 🧪 8. You Can Always Try — But It Won’t Work Unless It’s Allowed

Every record can be submitted. But unless it:

-   Matches the scope's policy
-   Has a valid signer
-   Is not explicitly denied

…it’ll be **rejected by the usher**.

**Implication:** Want safety? Design scopes with `deny_rhex: ["all"]` by default, and opt-in permissions over time.

---

## 🕳️ 9. When in Doubt, Trust the Chain

The ledger always knows what happened, when, and who signed it. If your logic gets complex, **lean on the hash chain**.

**Implication:** You don't have to build a state machine. Just follow the records. The truth is already there.

---

## 🧰 10. Tools That Will Help You

-   `Match.rhex()` – for wildcard record filtering
-   `key:grant` / `key:revoke` – for key lifecycle
-   `policy:set` – for scope governance
-   `scope:genesis` – for clean scope creation
-   `self:request` – for user bootstrap with pre-signed actions

---

## 🎓 You Are Not Writing Code — You Are Writing Causality

Think of every R⬢ as a truth atom.
The usher as a gatekeeper of valid causality.
The scope as a programmable domain of consent.

You’re not _developing software_. You’re _composing the physics of trust_.

Welcome to the new era.

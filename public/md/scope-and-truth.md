# Scope and Truth: Hierarchies of Verifiable Authority

In Temporal Cryptophysics, **truth** is not just what happened, but _who_ recorded it, _when_, and _with what authority_. This trust hierarchy is encoded in a single field: `scope`.

---

## 🔐 1. What Is a Scope?

A **scope** is a hierarchical namespace that defines:

-   Ownership
-   Signing authority
-   Access policies
-   Trust domain

It is structured in a **root-to-leaf** format, akin to a file system or domain tree:

```
root.branch.leaf → e.g. org.department.employee
```

Scopes are cryptographically bounded:

-   The scope determines **who may write** to it
-   Each record in the ledger includes the `scope` in its signature payload
-   Keys must be explicitly **granted** via `key:grant` within a scope

---

## 🧬 2. The Nature of Truth in TC

In classical computing, truth is relative. In TC:

-   Truth is **scoped**
-   Truth is **signed**
-   Truth is **temporal**
-   Truth is **append-only**

A claim is not true _until it’s signed into the ledger_ under a given scope by an authorized key, and timestamped in GT.

---

## 🏛️ 3. Root Scope and the Tree of Trust

The root scope is:

```
R⬢:///
```

A single or many signers may control this — typically the Signer of `R⬢:///genesis`.

Scopes can then be delegated:

```
R⬢://org/
R⬢://science/
R⬢://technology/
```

Each is its own **truth domain**, with its own `key:grant`, `policy:set`, and record logic.

This branching structure is the **trust topology** of the ledger.

---

## 🪪 4. Identity Through Scope

Each person or entity can receive a scope, like:

```
self.0000-0000-0000-0000
```

This becomes their **truth realm**, able to:

-   Sign identity traits
-   Make claims
-   Host aliases (e.g. `R⬢:///veronica`)

Because scopes are signed and granted, **multiple identities** cannot claim the same namespace.

---

## 🧠 5. Truth Is Contextual

Truth in TC is not monolithic — it's contextual to scope:

-   `science.temporal-cryptophysics` may assert truths of time
-   `gov.us.arizona` may assert truths of birth and license
-   `self.0000-0000-0000-0000` may assert self-claims

What matters is **who signed**, **under what scope**, and **at what time**.

Disagreement between scopes is possible — and **expected**.
Truth is not about consensus. It’s about citation.

---

## 🧾 6. Signature Structure

Each R⬢ record includes a list of signatures:

```json
"signatures": [
  {
    "key": "...",
    "type": "owner",
    "signature": "..."
  },
  {
    "key": "...",
    "type": "quorum",
    "signature": "..."
  }
]
```

-   Each signer must have key access **within the record's scope**
-   Quorum logic is defined via `policy:set`

---

## 🧭 7. Discovery, Readability, and Trust

-   **Anyone can read** a public scope
-   **Only granted keys can write** to a scope
-   **All changes are append-only**, scoped, and traceable
-   **Scopes can include README-style summaries**, metadata, and aliases

This provides a **public-key verifiable web of meaning**.

---

## 🔄 8. Forking and Mirroring Scopes

Scopes can be:

-   **Forked** → if consensus breaks (e.g. `alt.self`)
-   **Mirrored** → if replicated to local ledgers or embedded systems

A scope is the smallest unit of trust routing — a **domain of deterministic truth**.

---

## 🧩 9. Interoperability with Other Systems

-   Scopes resemble DID methods in decentralized identity
-   A scope can resolve to an identity, an application, or a purpose
-   External systems can **delegate trust** to a ledger scope

---

## 📌 10. Final Thought

Truth in Temporal Cryptophysics is never standalone.
It is **scoped**, **signed**, and **stamped** into a structure that resists erasure.

To trust a claim is to:

-   Verify the **scope**
-   Validate the **signature**
-   Anchor the **time**
-   Cite the **record**

> Truth isn’t relative. It’s scoped.

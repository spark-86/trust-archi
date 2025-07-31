# Temporal Cryptophysics Glossary

A reference list for key concepts, terminology, and notation used throughout the Temporal Cryptophysics (TC) ecosystem.

---

## 🧭 Time & Format

-   **GT** → _Genesis Time_, the universal clock of the ledger. Begins at `R⬢:///genesis`.
-   **Turn** → One sidereal rotation of Earth (≈ 86,164.1 seconds). The base unit of GT.
-   **Mark** → 1/1000th of a Turn (≈ 86.1641 seconds). Human-legible time segment.
-   **Submark** → Fractional division of a Mark (e.g. `.123`). Enables high precision.
-   **GT Float Format** → `GT[1293.2002022]`, ideal for machine logic.
-   **GT Canonical Format** → `GT[3.09.12@940]` → Sol 3, Luna 9, Turn 12 at Mark 940.

---

## 🔐 Ledger & Structure

-   **R⬢** → A signed record in the ledger. Immutable. Canonical truth.
-   **R⬢:///** → Root scope of the ledger. Controlled by the signer of `R⬢:///genesis`.
-   **Scope** → A root→leaf hierarchical namespace that defines authority.
-   **Record** → An append-only object containing fields like `scope`, `at`, `data`, `signatures`, etc.
-   **Signature** → An ed25519 signature attached to a record, proving it was written by a granted key.
-   **Quorum** → A policy-defined number of required signatures for a record to be accepted.
-   **Nonce** → A unique, random value included in each record to prevent replay attacks.
-   **Protocol** → The version of the ledger’s specification a record adheres to.
-   **Schema** → A formal definition of a record's structure and required fields, such as `scope.create/1`.

---

## 🪪 Identity

-   **SelfID** → A cryptographically scoped identity (`self.0000-0000-0000-0000`).
-   **Public Scope** → `self.0000-0000-0000-0000.public`. Open access and visibility.
-   **Vault Scope** → `self.0000-0000-0000-0000.vault`. Encrypted and private.
-   **Key Grant** → A `key:grant` record that authorizes a key to sign within a scope.
-   **Key Revoke** → A `key:revoke` record that removes signing authority.
-   **Alias** → A human-friendly redirect to a scope (e.g. `R⬢:///veronica`).

---

## 📦 Transport & Discovery

-   **R⬢://** → URI scheme for addressing ledger records and scopes.
-   **Transport Signature** → Optional outer signature applied when a record is transmitted.
-   **Mirror** → A node that stores and verifies copies of R⬢ records.
-   **Fork** → A divergence in scope lineage, forming alternate trust paths.
-   **Discovery** → The process of resolving a scope to the latest valid record tip.

---

## 📐 Theory & Context

-   **Temporal Cryptophysics** → The study and application of time as a cryptographically derived structure.
-   **Time Crystal** → The ledger structure itself, forming a mathematically perfect, immutable record of time.
-   **Canonical Truth** → A claim that is scoped, signed, and stamped in GT. Immutable and auditable.
-   **Scoped Truth** → Truth is relative to scope. Multiple truths may exist simultaneously.
-   **Append-only** → No deletions. No edits. Every action is a record.

---

## 💠 Units

-   **Vera (ᵛ)** → One millionth of a VeroCoin. Symbol: superscript ᵛ.
-   **Vint** → One billionth of a VeroCoin. Atomic-level denomination.
-   **Hodoturn** → A colloquial reference to a completed sidereal Turn of the ledger.

---

## 🧪 Meta

-   **TC** → Abbreviation for Temporal Cryptophysics.
-   **Genesis Clock** → The mathematical expression of time starting at `R⬢:///genesis`.
-   **Signer of Genesis** → The keyholder who signed the first record. Anchor of all subsequent time.
-   **Temporal Authority** → Any scope granted the power to sign time-relevant claims (e.g. clocks, location, birth, etc).

---

## 📌 Example Notation

```plaintext
R⬢://science.temporal-cryptophysics/start
GT[0.00.00@000] → Epoch
GT[4213.400233] → Machine float timestamp
```

---

> This glossary grows with the system. Scoped contributions welcome.

“Time isn’t just kept — it’s signed.”

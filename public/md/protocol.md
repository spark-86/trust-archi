### 🏛️ Trust Architecture: Genesis Key Doctrine (Protocol v1)

**Protocol Version:** v1
**Effective Scope:** `""` (root scope)
**Applies From:** GT\[0.00.00\@000.000] (the `genesis` record)

---

### 📜 Rule: Genesis Signer Implied Core

> **Whoever signs the `genesis` record in the root scope (`""`) is implicitly and eternally assigned the `core` role for that scope.**

This assignment is:

-   **Implicit** — no `key:grant` is required
-   **Immutable** — cannot be revoked or overwritten
-   **Authoritative** — defines the initial root of trust

This allows usher nodes, verifiers, and future records to:

-   Bootstrap policy evaluation without chicken-and-egg dependency
-   Trust initial `policy:set`, `scope:create`, and `key:grant` records if signed by the Genesis signer
-   Always resolve root trust back to a singular fingerprint

---

### 🔐 Operational Behavior

When evaluating any record in scope `""`, the system MUST treat the fingerprint that signed `record_type: "genesis"` at `at: "0"` as having the `core` role, even if no roles are declared.

This role is to be appended to any evaluation context (e.g., in `signQuorum`, `checkPolicy`, etc.) as if it were granted explicitly:

```js
if (
    record.scope === "" &&
    record.record_type === "genesis" &&
    record.at === "0"
) {
    const signer = record.signatures.find(
        (s) => s.type === "owner"
    )?.fingerprint;
    if (signer) {
        context.implicitRoles[signer] = ["core"];
    }
}
```

---

### 💬 Notes

-   Additional roles (e.g. `owner`, `authority`, `root`) may be granted later via `key:grant`, but `core` is automatic for the Genesis signer.
-   This rule applies **only** to the root scope `""`.
-   Scopes created via `scope:create` follow their own declared authority model.

---

### 🧠 Summary

> In Trust Architecture, trust has a fixed root: the signer of Genesis.

All policies, scopes, and records descend from that moment.
This rule ensures **there is never ambiguity** about who holds the pen at the beginning of time.

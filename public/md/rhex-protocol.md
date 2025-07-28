# Rhex Protocol: URI Format and Resolution

The `R⬢://` (Rhex) protocol defines a URI scheme for referencing records, scopes, and transport endpoints within the Trust Architecture system. It serves as the address space and discovery mechanism for all verifiable truth in Temporal Cryptophysics.

---

## 🔗 Protocol Prefix

```
R⬢://     →  The root of all scope-based addressing
```

This protocol serves as a replacement for traditional web schemes like http\://, signaling that the URI points to cryptographically signed, ledger-based content. Since Unicode characters like ⬢ are not currently permitted in URI schemes under RFC 3986, `rhex://` is the valid and standards-compliant substitute for now.

---

## 🧭 URI Format

The general form of a Rhex URI is:

```
rhex://[scope]/[record_hash_or_alias]?[query_params]
```

-   `scope` — A root→leaf dot-separated hierarchy (e.g. `self.0000-0000-0000-0000`)
-   `record_hash_or_alias` — A base64 hash of the R⬢ record, or a known alias like `readme`, `genesis`, etc.
-   `query_params` — Optional filters (e.g. `record_type=motor:define`)

### Examples

```
rhex:///genesis
rhex:///veronica
rhex://self.0000.../readme
rhex://emotor.motors.co/ab29...?record_type=motor:spec
```

---

## 🗺️ Scope Parsing

Scopes are **root-to-leaf**, with each dot representing a delegation:

```
root.branch.leaf → e.g. org.department.employee
```

This reverses the traditional DNS-style convention. The root (`rhex:///`) owns all scope issuance.

---

## 🧾 Record Resolution

To resolve a Rhex URI:

1. Parse the `scope`
2. Determine the correct `usher` or `mirror` responsible for the scope
3. Sign and submit a request using a valid key
4. Validate response:

    - Record hash matches (if specified)
    - Signatures are valid
    - Read policy is satisfied

> 🔑 **All resolution requests must be signed.** No anonymous reads.

---

## 🔐 Secure Transport Layer

While `rhex://` is a logical URI scheme, resolution requires cryptographic authentication.

### Implementation Options:

-   Native Rhex Browser (with key support)
-   Usher-backed web apps (requires local keypair)
-   Browser extensions (intercept and sign `rhex://` URIs)

Example:

```
rhex://self.0000.../readme → [signed request] → https://web.trust.archi/self.0000.../readme
```

> 🚫 Proxying `rhex://` via generic HTTP without user keys **violates trust guarantees**.

---

## 🧪 Special Aliases

| Alias     | Meaning                               |
| --------- | ------------------------------------- |
| `genesis` | The very first R⬢ record in the scope |
| `readme`  | Scope description and summary         |
| `latest`  | Most recent record in scope           |
| `tip`     | Synonym for `latest`                  |

---

## 🔄 Mutability and Redirects

-   R⬢ records are immutable
-   Aliases (like `readme`) are mutable, pointing to a `current_hash`
-   Redirects may be used by clients, but **must not** alter or obfuscate the ledger’s source of truth

---

## 🧩 Interoperability

The Rhex protocol is:

-   Cryptographically addressable
-   Compatible with QR codes, NFC, and identity chips
-   Designed for native apps, firmware, and human-readable referencing

---

> `rhex://` is not just a link. It's a signed, verifiable **coordinate in the ledger of reality**.

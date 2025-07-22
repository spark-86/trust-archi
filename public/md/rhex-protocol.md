# Rhex Protocol: URI Format and Resolution

The `R⬢://` (Rhex) protocol defines a URI scheme for referencing records, scopes, and transport endpoints within the Trust Architecture system. It serves as the address space and discovery mechanism for all verifiable truth in Temporal Cryptophysics.

---

## 🔗 Protocol Prefix

```
R⬢://     →  The root of all scope-based addressing
```

This protocol serves as a replacement for traditional web schemes like http://, signaling that the URI points to cryptographically signed, ledger-based content. Since Unicode characters like ⬢ are not currently permitted in URI schemes under RFC 3986, rhex:// is the valid and standards-compliant substitute for now.

---

## 🧭 URI Format

The general form of a Rhex URI is:

```
R⬢://[scope]/[record_hash_or_alias]
```

-   `scope` — A root→leaf dot-separated hierarchy (e.g. `self.0000-0000-0000-0000`)
-   `record_hash_or_alias` — A base64 hash of the R⬢ record, or a known alias like `readme`, `genesis`, etc.

### Examples

```
R⬢:///genesis                  → Genesis record
R⬢:///veronica                → Root alias for a SelfID
R⬢://self.0000.../readme  → Identity profile
R⬢://emotor.motors.co/ab29... → Specific motor record
```

---

## 🗺️ Scope Parsing

Scopes are **root-to-leaf**, with each dot representing a delegation:

```
root.branch.leaf → e.g. org.department.employee
```

This reverses the traditional DNS-style convention. The root (`R⬢:///`) owns all scope issuance.

---

## 🧾 Record Resolution

To resolve a Rhex URI:

1. Parse the `scope`
2. Query the local or remote ledger mirror for matching `current_hash` or `alias`
3. Validate:

    - Record hash matches
    - Signatures are valid
    - Scope authority exists

---

## 🧪 Special Aliases

| Alias     | Meaning                       |
| --------- | ----------------------------- |
| `genesis` | The very first R⬢ record      |
| `readme`  | Scope description and summary |
| `latest`  | Most recent record in scope   |
| `tip`     | Synonym for `latest`          |

---

## 🔐 Secure Transport Layer

While `R⬢://` is a logical URI scheme, implementations may:

-   Use `usher` or `mirror` HTTP/gRPC servers
-   Translate `R⬢://...` to REST/gRPC routes or local cache
-   Redirect via browser extension or native resolver

Example:

```
R⬢://self.0000.../readme → https://web.trust.archi/self.0000.../readme
```

---

## 🔄 Mutability and Redirects

-   R⬢ records are immutable
-   Aliases (like `readme`) are mutable, pointing to a `current_hash`
-   Servers can redirect, but must NEVER alter ledger content

---

## 🧩 Interoperability

The Rhex protocol is:

-   Self-resolving
-   Compatible with NFC payloads, QR codes, and hyperlinks
-   Useful for URI handlers, web extensions, and embedded firmware

---

> R⬢:// is more than a link. It's a coordinate in cryptographic truth.

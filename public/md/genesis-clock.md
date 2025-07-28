# Genesis Clock Specification

**Genesis Time (GT)** is the temporal framework of the Trust Architecture, offering a universal, cryptographically provable time structure derived from sidereal planetary rotation. It establishes a fixed point in time at `GT[0.00.00@000.000]` and provides both a machine-optimized float format and a human-friendly canonical form.

---

## ⏱️ 1. Purpose

Legacy timekeeping (UTC, Unix epoch, ISO 8601) fails to provide deterministic and cryptographically verifiable timestamps. The Genesis Clock solves this by:

-   Using **sidereal rotation**, not solar time, as its base unit
-   Eliminating time zones, leap seconds, and cultural offsets
-   Providing **floating point** and **formatted** representations
-   Anchoring the ledger to a fixed point: `R⬢:///genesis`

---

## 🧮 2. Clock Anatomy

There are **two ways** to express Genesis Time:

### A. Float Format (machine use)

```txt
GT[1293.2002022]
```

-   `1293.2002022` = Turn 1293, Mark 200.202
-   Base-10 float
-   Suitable for sorting, computation, and storage

### B. Canonical Format (human-friendly)

```txt
GT[3.09.12@940.000]
```

-   Sol = 3 → Planetary anchor (Earth)
-   Luna = 9 → Satellite phase/cycle (if applicable)
-   Turn = 12 → Full sidereal rotations since genesis
-   Mark = 940.000 → 1/1000th of a Turn (with optional submark precision)
-   All values are **zero-indexed** — meaning GT starts at:

```txt
GT[0.00.00@000.000] ← genesis epoch
```

---

## 🔁 3. Definitions

| Unit             | Meaning                                  | Notes                     |
| ---------------- | ---------------------------------------- | ------------------------- |
| **Turn**         | One sidereal rotation of Sol-3 (Earth)   | ≈ 86,164 seconds          |
| **Mark**         | 1/1000 of a Turn                         | ≈ 86.164 seconds          |
| **Submark**      | 1/1000 of a Mark                         | ≈ 0.086 seconds           |
| **Sol**          | 365 Turns                                |
| **Luna**         | 28 Turns, 13 to a Sol, plus Day of Trust |
| **Day of Trust** | 365th Turn of a Sol                      |
| **GT Float**     | Base-10 float Turn.Mark                  | Turn plus fractional Mark |

---

## 🔗 4. From Genesis to Now

Genesis Clock is **monotonic** and **forward-only** — time cannot go backward.

Each record in the ledger includes a canonical timestamp in GT:

```json
"at": "GT[712.482199]"
```

All R⬢:// records are sorted canonically by their `GT` time.

---

## 🔧 5. Conversion Logic

To convert between formats:

### From Canonical → Float:

```ts
turn = 12
mark = 940.000
floatGT = 12 + (940.000 / 1000) = 12.940000
```

### From Float → Canonical:

```ts
gt = 1293.2002022
turn = floor(gt) = 1293
mark = (gt - 1293) * 1000 = 200.202
```

Sol and Luna can be inferred by environment, though defaults are Sol=3, Luna=9.

---

## 🌍 6. Environmental Variants

The Genesis Clock is extendable to non-Earth environments:

-   **Sol Index** → Planetary anchor (e.g. Mars = Sol 4)
-   **Luna Index** → Primary satellite epoch cycle (or 0)
-   **Genesis Anchor** → R⬢:///genesis is scoped globally, but localized clocks may branch

This allows multiple **civilizational clocks** to exist, yet be reconciled cryptographically.

---

## 🕳️ 7. Temporal Integrity

GT time is:

-   **Gravity agnostic** (unaffected by relativity in computation)
-   **Locally computable** (no centralized server required)
-   **Digitally verifiable** (proofs include `at` in signature hash)
-   **Timezone-free**, **calendar-free**, and **self-consistent**

---

## 📌 8. The Epoch and Beyond

Genesis starts at:

```txt
GT[0.00.00@000.000]
```

This is the **origin point** of all time in the Trust Architecture.
Every record inherits its temporal lineage from this moment.
It is signed. It is fixed. It is **truth.**

> When you wear the clock, you carry the ledger.
> When you sign, you anchor history.

---

**See also:**

-   [Temporal Cryptophysics](/temporal-cryptophysics),
-   [Ledger as a Time Crystal](/ledger-as-time-crystal),
-   [Sample Records](/sample-records),
-   [Temporal Cryptophysics FAQ](/tc-faq)

# Staging Environment Guide for Developers

This document describes how we use the **staging** branch and staging environment for the  
`Distributed-Energy-Trading-Platform-1.0` project.

Staging is our **pre‑production** environment:

- Mirrors **production** as closely as possible (configuration, infrastructure, data model).
- Used for **integration testing, UAT, demos, and release validation**.
- Is the **only path to production**: all changes must pass through staging before they can be merged into `main`.

---

## 1. Branching Model (Quick Reference)

We use a three‑branch model:

- `main`  
  - Production branch.  
  - Always deployable.  
  - Only updated from `staging` via pull request.

- `staging`  
  - Pre‑production / UAT branch.  
  - Used for release candidates.  
  - Only updated from `develop` via pull request.

- `develop`  
  - Integration / active development branch.  
  - All feature and bugfix branches are merged here first.

Feature branches are created from `develop`:

- `feature/<short-name>`  
  e.g. `feature/vpp-tariff-engine`

Bugfix branches:

- `bugfix/<issue-id>-<short-name>`  
  e.g. `bugfix/1234-fix-net-settlement`

Hotfix branches (for production issues, rare):

- `hotfix/<short-name>`

---

## 2. When to Use Staging

Use **staging** for:

- End‑to‑end testing of **energy trading flows** (VPP/MPP, DISCOM, EV charging, tariffs).
- Verifying **time‑block logic** and net settlement under realistic conditions.
- Testing integration with **external services** (e.g. billing, authentication, telemetry) in a safe environment.
- **User acceptance testing (UAT)** with product owners / stakeholders.
- Preparing releases that will be merged into `main` and deployed to production.

You should **not**:

- Commit directly to `staging`.
- Use staging for speculative or experimental work that isn’t intended for the next release. That belongs on `develop` or feature branches.

---

## 3. From Develop to Staging: Release Candidate Flow

### 3.1. Prepare the release on `develop`

1. Update your feature / bugfix branches from `develop`:
   ```bash
   git checkout develop
   git pull origin develop

   git checkout feature/<short-name>
   git rebase develop  # or merge develop into your feature branch

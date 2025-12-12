# Create a DEVELOPER.md file
cat > DEVELOPER.md << 'EOF'
# Development Workflow Guide

## Branch Strategy
We use a 3-branch workflow:
- `main`: Production (deployed)
- `staging`: Pre-production (UAT/Testing)
- `develop`: Integration (active development)

## Branch Naming Conventions
- Feature: `feature/<short-description>` (e.g., `feature/user-auth`)
- Bugfix: `bugfix/<issue-id>-<description>` (e.g., `bugfix/1234-login-error`)
- Hotfix: `hotfix/<description>` (e.g., `hotfix/security-patch`)
- Release: `release/vX.Y.Z` (e.g., `release/v1.2.0`)

## Workflow Steps

### 1. Start a New Feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/my-feature

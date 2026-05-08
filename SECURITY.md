# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within AI Agents Academy, please report it responsibly.

**Do not open a public issue for security vulnerabilities.**

Instead, please email security concerns to the project maintainers or open a private security advisory on GitHub.

## Scope

This project is a static educational website. Security concerns primarily relate to:

- Cross-site scripting (XSS) in user-facing content
- Dependency vulnerabilities
- Content injection through lesson data

## Best Practices

When contributing, please ensure:

- No hardcoded API keys or secrets
- Dependencies are up to date
- User input is properly sanitized
- External links use `rel="noopener noreferrer"`

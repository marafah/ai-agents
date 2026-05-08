# Contributing to AI Agents Academy

Thank you for your interest in contributing to AI Agents Academy! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Use the bug report template
3. Include steps to reproduce
4. Include screenshots if applicable

### Suggesting Features

1. Check existing feature requests
2. Use the feature request template
3. Describe the feature and its use case
4. Explain how it benefits learners

### Adding Lessons

1. Create a new lesson data entry in `src/data/lessons/index.ts`
2. Add content in `src/data/lessons/content.ts`
3. Include both English and Arabic translations
4. Follow the existing lesson structure:
   - Simple definition
   - Technical definition
   - Real-world analogy
   - Step-by-step explanation
   - Code example
   - Common mistakes
   - Best practices
   - References from reliable sources

### Adding Quiz Questions

1. Add questions to `src/data/quizzes/index.ts`
2. Include bilingual question text and options
3. Provide explanations for each answer
4. Set appropriate difficulty level

### Code Contributions

1. Fork the repository
2. Create a feature branch from `main`
3. Write clean, typed TypeScript code
4. Follow the existing code style
5. Test your changes locally
6. Submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/ai-agents-academy.git
cd ai-agents-academy

# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## Code Style

- Use TypeScript with strict mode
- Use functional React components with hooks
- Use Tailwind CSS for styling
- Use CSS custom properties for theme-aware colors
- Support RTL layout for Arabic
- Keep components modular and reusable
- Use meaningful variable and function names

## Content Guidelines

- All content must be technically accurate
- Use references from reliable sources (OpenAI, Anthropic, Google AI, academic papers)
- Write clearly for beginners while maintaining technical depth
- Provide both English and Arabic translations
- Include practical code examples that are tested and working
- Avoid unsupported claims or speculation

## Commit Messages

Use clear, descriptive commit messages:

```
feat: add lesson on prompt injection security
fix: correct RTL layout issue in quiz component
docs: update README with deployment instructions
style: improve mobile layout for playground
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass
3. Request review from maintainers
4. Address review feedback
5. Wait for approval and merge

## Questions?

Open an issue with the "question" label or reach out to the maintainers.

Thank you for helping make AI education more accessible!

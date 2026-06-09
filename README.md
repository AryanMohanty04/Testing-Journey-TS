# Testing-Journey-TS
---
## Platwright
It is an open source tool by Microsoft for automating web browser testing.
- Playwright has its own library and it is also a framework
- Playwright apart from browser testing, has dedicated API for testing and interacting with web APIs.
- Playwright uses Node.js Library (Node.js -> open source, cross-platform JavaScript runtime environment) 

#### Features:-
- Cross Browser Testing:  Works with Chromium (Chrome, Edge), FireFox, Webkit (Safari)
- Cross Language Support: It supports JavaScript, TypeScript, Java, Python or C#
- Test Mobile Web: It supports mobile testing for Chrome(Android) and Safari(IOS)
- API Testing: Playwright includes built in API testing, allowing us to test backend APIs together.
- Automatic Waiting (AutoWait): Playwright waits for the elements to be ready before performing actions, reducing test flakiness (*sometimes, some test cases may fail in some run and pass in other these are called falky tests*)
- Handles Complex Elements: Easily interacts with Shadow DOM elements.
- Built-in Reports: Provides various report formats like HTML, JSON and more. It also supports third party reporting tools like Allure.
- Inspector: Helps dubugging tests by showing click points and verifying locaters in real life.
- Code generation: Codegen records our action and converts them into test scripts in any supported language.
- Tracing (Trace Viewer): Capture screenshots, records videos, retries flaky tests and logs steps automatically. Captures all the information to investigate the test failures.

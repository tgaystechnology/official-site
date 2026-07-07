# Project Rules

Please adhere to the following rules at all times during executions on this project:

---

### 1. Database Testing Constraints
> **Do not update or delete any data from the database when testing the code.**
* **No Direct Mutations**: Under no circumstances should any code execution, script, or test runner perform write operations (`INSERT`, `UPDATE`, `DELETE`, `DROP`, `ALTER`) on the main database unless explicitly authorized.
* **Testing Strategy**: 
  * Use mocked database adapters, repositories, or API responses to test business logic.
  * Utilize transaction rollbacks if database writes must occur in a test environment.
  * Use dedicated local sqlite/in-memory test databases if write path verification is required.
* **Read-Only Verification**: Read operations (`SELECT`, query queries) to verify code behaviour are allowed, but writing to the database is strictly prohibited.

---

### 2. Mandatory Planning
> **Plan everything before executing and changing the code, even if the change is very small or minor.**
* **Write Plans First**: Before editing any code file, installing packages, or modifying configurations, you must document your approach.
* **Format & Steps**:
  1. Create or update an `implementation_plan.md` artifact detailing the goal, user review requirements, proposed file changes, and verification plan.
  2. Prompt the user for feedback by setting `RequestFeedback: true` in the plan's metadata.
  3. **Wait** for the user's approval before starting code modifications.
* **Task Checklist**: Create a `task.md` checklist once the plan is approved to track atomic progress steps.

---

### 3. Next.js Full-Stack Developer Thinking
> **Think like a Next.js full-stack developer and suggest the best possible architectural outcomes and the exact path to achieve those outcomes.**
* **Architecture-First Approach**:
  * Default to Server Components (`RSC`) for better performance and smaller client-side bundles. Use Client Components (`"use client"`) only when interactivity (state, hooks, event listeners) is required.
  * Suggest Server Actions or route handlers (`app/api/`) depending on the use case for mutations.
  * Design clean separation of concerns: keep database logic in a data-access layer (e.g. `lib/db/` or `services/`) and UI clean.
* **Structured Recommendations**: Whenever a user asks for a feature:
  * Propose the optimal architectural pattern (e.g., layout sharing, API route vs server action, metadata/SEO handling).
  * Map out the exact step-by-step path (the sequence of files to create/modify, packages to install) before asking for approval.

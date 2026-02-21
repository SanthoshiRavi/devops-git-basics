Git Commands used
---

## 1. `git init`

Initializes a new Git repository in the current directory. This creates a hidden `.git` folder that tracks all version history.

```bash
git init                  # Initialize in current directory
git init devops-git-basics       # Create and initialize a new folder
```

---

## 2. `git commit`

Saves a snapshot of staged changes to the repository history. Every commit should represent a single logical change.

```bash
git add .                          # Stage all changes
git commit -m "Added version.txt"    # Commit with a message
git commit --amend                 # Edit the last commit (before pushing)
```
---

## 3. `git branch`

Branches let you work on features or fixes in isolation without affecting the main codebase.

```bash
git branch                    # List all local branches
git branch -b feature/addDocumentation # Create a new branch and checkout
git branch feature/simpleClock      # Create a new branch
git switch feature/simpleClock     # Switch to a branch (modern way)
git branch -d feature/learn   # Delete a branch (after merging)
git branch -a                 # List all branches (local + remote)
```
---

## 4. `git merge`

Combines changes from one branch into another by creating a **merge commit** (unless fast-forwarded). It preserves the full history of both branches.

```bash
git merge feature/simpleClock       # Merge feature branch into main
```

---

## 5. `git rebase`

Moves or "replays" commits from one branch on top of another, resulting in a **linear history** — as if the work was done sequentially.

```bash
git switch feature/simpleClock
git rebase main               # Replay feature commits on top of main
```

---

## `git merge` vs `git rebase` — Key Differences

| | `git merge` | `git rebase` |
|---|---|---|
| **History** | Preserves full branch history | Creates a clean, linear history |
| **Merge commit** | Yes (usually) | No |
| **Safe to use on** | Shared/public branches | Local/private branches only |
| **Traceability** | Easy to see when branches diverged | Harder to trace original branch point |
| **Conflict handling** | Resolve once | Resolve per commit being replayed |

## Summary

| Command | Description                       |
|---|-----------------------------------|
| `git init` | Initialize a repository           |
| `git commit -m ""` | Save a snapshot with a message    |
| `git branch <name>` | Create a new branch               |
| `git switch <name>` | Switch to a branch                |
| `git merge <branch>` | Merge branch into current         |
| `git rebase <branch>` | Replay commits on top of branch   |
| `git rebase -i HEAD~n` | Interactively edit last n commits |
| `git branch -d <name>` | Delete a branch                   |

---
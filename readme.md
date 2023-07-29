# Project

This is a project to test different technologies and learn how stuff works.
It's not intended to work perfectly just a place to be able to test things.

## Some of the things im trying

-   [x] Deno
-   [ ] Service workers
-   [ ] RSS feed
-   [ ] ESLint
-   [ ] Pre-commit hooks
-   [ ] ...

# Commands

### Run the program

`deno run main.ts`

### Run the program and watch for file changes

`deno task dev`

### Run format and linter on all files in the project

`deno task format`

### Run the program and watch for file changes (only the database)

`deno task database`

### Run the tests

`deno test`

### Run the benchmarks

`deno bench`

### format markdown and any compatible code samples

`deno fmt readme.md`

### format a directory of code

`deno fmt dist/`

### format stdin

`cat squareRoot.ts | deno fmt –`

# Known issues

-   There is no validation on `Json-body` when creating a new post (We just save it to the database)
-   There are no put method to update post's

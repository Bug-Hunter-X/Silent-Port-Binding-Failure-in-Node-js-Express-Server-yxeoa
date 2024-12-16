# Silent Port Binding Failure in Node.js

This repository demonstrates a common, yet frustrating, issue in Node.js: the silent failure when attempting to bind to a port that's already in use.  The server starts without throwing an error, leaving developers to hunt for the problem.

## The Problem

The provided `bug.js` file shows a simple Express.js server.  If you run this server and port 3000 is already occupied, the server will appear to start normally but will not actually be listening on that port.  No error message is thrown to alert the developer.

## The Solution

The `bugSolution.js` file demonstrates a robust solution.  It uses a `try...catch` block to handle the `EADDRINUSE` error specifically, providing a clear message to the developer and allowing for graceful handling of the situation.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js`.
3. Open another terminal and start a different server (e.g., `python -m http.server 3000` or another Node.js server on port 3000).
4. Observe that `bug.js` shows a 'Server listening on port 3000' message, but does not actually respond to requests.
5. Run `bugSolution.js` and observe that the error is handled correctly.

## Learning Points

- Always handle potential port binding errors explicitly.
- Use `try...catch` blocks to gracefully handle exceptions.
- Provide clear and informative error messages to improve debugging.

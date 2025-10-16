# Redux-Saga Mini

A tiny React + TypeScript + Vite project showing redux-saga with call, put, fork, and takeLatest without separate worker/watcher files.

## What it does
- Counter slice with sync increment/decrement
- Async increment triggered by `incrementAsyncRequested(amount)`
- Saga uses:
  - `takeLatest` to listen for requests
  - inline worker (no dedicated worker/watcher separation)
  - `call` to fake API
  - `put` to dispatch success/failure
  - `fork` to demonstrate running a background task
  - `all` to compose sagas

## Flow
1. UI dispatches `incrementAsyncRequested(5)`
2. Saga `takeLatest` catches the action and runs the inline worker
3. Worker `call(apiIncrease, 5)` waits 800ms and resolves
4. Saga `put(incrementAsyncSucceeded(5))` which updates the state
5. UI re-renders with the new count

If multiple requests fire rapidly, `takeLatest` will cancel prior ones, running only the latest.

## Run
1. Install deps

```sh
pnpm i # or: npm i / yarn
```

2. Start dev server

```sh
pnpm run dev
```

Open http://localhost:5173.

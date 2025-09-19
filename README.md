# Rolldown-Vite Bug Reproduction

This project demonstrates a bug where the `rolldown-vite` **dev server** fails to correctly resolve CommonJS dependencies of a consumed local package.

The issue occurs specifically when running `pnpm dev`. A production build created with `pnpm build` succeeds without errors.

## Key Finding

This bug is specific to how `rolldown-vite` consumes a **pre-compiled local package** (via `file:` protocol or tarball). The issue is **not reproducible** when the packages are linked in a formal monorepo setup (e.g., using a `pnpm-workspace.yaml` file), as the bundler has more context and likely resolves dependencies differently in that scenario. It is also **not reproducible** when using `vite`

## Project Construction

This reproduction case was built using standard, unmodified scaffolding commands:

1.  **`react-library`**: Created using `npx create-tsdown@latest -t react`.
2.  **`react-app`**: Created using `npm create vite@latest` with the `React` and `TypeScript` template. It was then modified to use `rolldown-vite` instead of the default `vite`.

After scaffolding, `@material-ui/icons` was added as a dependency to the library, and simple components were created to demonstrate different import behaviors. A basic routing system using `react-router-dom` was added to the `react-app` to display each test case on a separate tab.

## How to Run the Project

### Prerequisites

-   Node.js (v20.x or later recommended)
-   `pnpm` package manager

### 1. Install Library Dependencies

First, install the dependencies for the component library.

```bash
pnpm -C packages/react-library install
```

### 2. Build the Component Library

Next, build the `react-library` package. This step is crucial as it creates the `dist` directory that the `react-app` will link to.

```bash
pnpm -C packages/react-library build
```

### 3. Install Application Dependencies

Now that the library is built, you can install the dependencies for the React application. This will create a symlink to the compiled library files.

```bash
pnpm -C packages/react-app install
```

### 4. Run the React Application

Finally, start the `react-app` development server.

```bash
pnpm -C packages/react-app dev
```

The application will now be running at `http://localhost:5173`.

## Reproducing the Bug

Once the application is open in your browser:

1.  **Tab One**: This tab will render correctly. It directly imports an icon from `@material-ui/icons/Chat`.
2.  **Tab Three**: This tab will also render correctly. It imports a component from the local library which uses a proper ESM import (`@material-ui/icons/esm/Chat`).
3.  **Tab Two**: **This tab will fail.** When you click on it, the application will crash. This tab attempts to render a component from the local library that uses a CommonJS-style import (`@material-ui/icons/Chat`).

This behavior demonstrates the issue where the `rolldown-vite` dev server fails to correctly resolve CJS dependencies of another package in the dependency tree.
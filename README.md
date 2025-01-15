# Naptchat

## Development

Starting development server:

```bash
bun dev
```

> **Note:** The first time you run `bun dev`, you may be prompted for sudo/admin password. This is required by vite-plugin-mkcert to install a local certificate authority for HTTPS during development. This is a one-time setup and is safe as it only affects your development environment. For additional information, see [Vite mkcert plugin repository](https://github.com/liuweiGL/vite-plugin-mkcert). To mitigate security concerns, the plugin package is fixed at a specific version (1.17.6) after scanning its code with claude-3-5-sonnet-20241022. Please DO NOT change it without ensuring the safety.

## Building

Creating production version of the app:

```bash
bun build
```

You can preview the production build with `bun preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

import type { AttributifyAttributes } from "@unocss/preset-attributify";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace svelte.JSX {
		type HTMLAttributes = AttributifyAttributes;
	}

	declare namespace svelteHTML {
		type HTMLAttributes = AttributifyAttributes;
	}
}

export {};

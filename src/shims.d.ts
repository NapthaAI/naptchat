import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare namespace svelteHTML {
	type HTMLAttributes = AttributifyAttributes;
}

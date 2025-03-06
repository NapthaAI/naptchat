<script lang="ts">
	import { Button as ButtonPrimitive } from "bits-ui";
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn } from "../utils";

	const buttonVariants = tv({
		base: cn(
			"bg-transparent ring-offset-background focus-visible:ring-ring",
			"inline-flex items-center justify-center whitespace-nowrap rounded-md",
			"text-sm font-medium transition-colors",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
			"disabled:pointer-events-none disabled:opacity-50",
		),

		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},

			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	type Variant = VariantProps<typeof buttonVariants>["variant"];
	type Size = VariantProps<typeof buttonVariants>["size"];

	let {
		variant = "default",
		size = "default",
		builders = [],
		class: className,
		children,
		...rest
	} = $props<
		ButtonPrimitive.Props & {
			variant?: Variant;
			size?: Size;
			class?: string;
		}
	>();
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...rest}
	on:click
	on:keydown
>
	{@render children()}
</ButtonPrimitive.Root>

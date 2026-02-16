<script lang="ts">
	import { onMount } from "svelte";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();

	onMount(() => {
		// Global scroll-reveal observer for all pages
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
		);

		// Observe existing elements
		function observeAll() {
			document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
				observer.observe(el);
			});
		}

		observeAll();

		// Re-observe on DOM changes (for navigation)
		const mutationObserver = new MutationObserver(() => {
			observeAll();
		});

		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			observer.disconnect();
			mutationObserver.disconnect();
		};
	});
</script>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

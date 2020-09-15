<script lang="ts">
	import Landing from './pages/Landing.svelte'
	import Profile from './pages/Profile.svelte'
	import Portfolio from './pages/Portfolio.svelte'
	import Social from "./pages/Social.svelte";
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>

<main>
	<Landing />
	<Profile />
	<Portfolio />
	<Social />
</main>
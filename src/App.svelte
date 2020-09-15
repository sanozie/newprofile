<script lang="ts">
	import Landing from './pages/Landing.svelte'
	import Profile from './pages/Profile.svelte'
	import Portfolio from './pages/Portfolio.svelte'
	import Social from "./pages/Social.svelte";
	let mobile = window.innerWidth < 768
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>

<main>
	<Landing  />
	<Profile mobile={mobile}/>
	<Portfolio mobile={mobile}/>
	<Social />
</main>
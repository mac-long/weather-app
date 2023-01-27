<script>
	export let noColor = false;
</script>

<div class="w-full py-4 bg-gradient-to-br from-primaryDark to-primary-500" class:noColor>
	<slot />
</div>

<style>
	.noColor {
		@apply from-white to-gray-100;
	}
</style>

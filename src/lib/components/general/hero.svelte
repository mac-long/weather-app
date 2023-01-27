<script>
	export let noColor = false;
</script>

<div class="w-full py-4 h-[480px] bg-gradient-to-br from-primaryDark to-primary-500" class:noColor>
	<div class="flex flex-col items-center justify-center text-center text-white">
		<slot />
	</div>
</div>

<style lang="postcss">
	.noColor {
		@apply from-white to-gray-100;
	}
</style>

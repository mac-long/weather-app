<script>
	export let currentStep;
</script>

{#if !currentStep === 4}
	<progress value={$currentStep} max="4" />
{/if}

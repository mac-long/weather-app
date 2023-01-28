<script>
	import { currentStep } from 'store';
</script>

{#if !currentStep === 4}
	<progress value={$currentStep} max="4" />
{/if}

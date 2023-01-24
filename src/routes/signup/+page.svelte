<script>
	let currentStep = 0;
</script>

{#if currentStep === 0}
	<div class="w-screen pt-16 bg-[#333]">
		<div class="flex items-center justify-between w-full h-1/5 bg-primary">
			<div class="flex-1" />
			<h2>Add A Place</h2>
			<button class="ghost">Skip</button>
		</div>
		<div class="bg-white h-5/6">
			<h1>Welcome to Cube Weather App!</h1>
			<div>
				<!-- display -->
			</div>
			<p>p</p>
			<button>Next</button>
		</div>
	</div>
{:else if currentStep === 1}
	<h1>step 2</h1>
{:else if currentStep === 2}
	<h1>step 3</h1>
{/if}

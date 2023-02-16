<script>
		export let temp, condition
</script>

<div class="flex flex-col items-center">
	<span class="text-4xl font-extrabold  font-heading leading-[40px] tracking-[0.6px] num" class:skeleton={temp === null}>
		{temp}°
	</span>
	<span class="font-bold sksm" class:skeleton={temp === null}>{condition.text}</span>
</div>

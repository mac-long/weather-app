<script>
	export let src, alt, presentation;

	if (presentation) alt = '';
</script>

<div class="relative flex my-8 rounded-full">
	<img
		class="w-56 h-56 border-white border-[8px] rounded-full"
		{src}
		{alt}
		role={presentation ? 'presentation' : 'img'}
	/>
	<div class="absolute top-0 left-0 w-56 h-56 rounded-full bg-[url(texture.webp)] " />
</div>

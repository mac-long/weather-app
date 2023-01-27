<script>
	export let src, alt, presentation;

	if (presentation) alt = '';
</script>

<div class="relative my-8 border-white border-[12px] rounded-full">
	<img class="rounded-full w-full " {src} {alt} role={presentation ? 'presentation' : 'img'} />
	<div class="absolute top-0 left-0 w-full h-full rounded-full bg-[url(texture.webp)] " />
</div>

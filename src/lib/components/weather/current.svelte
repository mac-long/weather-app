<script>
	import { t } from 'translations';
	export let locations;
</script>

<div class="w-full py-4 bg-gradient-to-br from-primaryDark to-primary">
	<div class="flex items-center justify-center">
		<div class="text-center text-white">
			<span class="flex items-center mb-4 space-x-2 text-2xl uppercase font-heading">
				<svg
					width="23"
					height="24"
					viewBox="0 0 23 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Location white"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.445 1.04511L0.76568 9.99653L0.773607 11.1935L9.0472 14.4429L12.2966 22.7165L13.4936 22.7244L22.445 1.04511Z"
						fill="white"
					/>
				</svg>
				<span>{locations?.[0].name || 'Bournemouth'}</span>
			</span>
			<span
				>{new Date().toLocaleString('en-GB', {
					weekday: 'long',
					day: 'numeric',
					month: 'long'
				})} - {$t('base.general.today')}</span
			>
			<img
				class="mx-auto my-6 border-8 border-white rounded-full h-52 w-52"
				src="https://www.metaweather.com/static/img/weather/png/64/c.png"
				alt="Cloudy"
			/>
			<div class="flex flex-col items-center">
				<span class="text-4xl font-extrabold  font-heading leading-[40px] tracking-[0.6px] ">
					{locations?.[0].current.temp_c || 21}°
				</span>
				<span class="font-bold">{locations?.[0].condition.text || 'Sunshine'}</span>
			</div>
			<!-- TODO: Add slide counter and slides per saved location -->
		</div>
	</div>
</div>

<script>
	import { t } from 'translations';
	export let text, date;

	if (date)
		text = `${new Date().toLocaleString('en-GB', {
			weekday: 'long',
			day: 'numeric',
			month: 'long'
		})} - ${$t('base.general.today')}`;
</script>

<p class="h-[36px]">{text}</p>

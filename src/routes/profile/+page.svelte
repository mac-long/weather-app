<script>
	import CircleImage from 'components/general/circle-image.svelte';
	import Content from 'components/general/content/content.svelte';
	import Hero from 'components/general/hero.svelte';
	import ProfileForm from 'components/profile/form.svelte';
</script>

<Hero noColor>
	<CircleImage src="https://avatars.githubusercontent.com/u/115668288?v=4" profile />
</Hero>
<Content title="Your Details">
	<ProfileForm />
</Content>

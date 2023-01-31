<script>
  import Content from "components/signup/content.svelte";
  import Header from "components/signup/header.svelte";
  import Progress from "components/signup/progress.svelte";
  import { currentLocationStore, locationsSearchStore, userStore } from "store";

  export let data;
  $: $userStore = data.user;
  $: $locationsSearchStore = data.locationsList;
  $: $currentLocationStore = data.currentLocation;
</script>

<div class="container">
  <div class="content">
    <Header />
    <Progress />
    <Content />
  </div>
</div>

<style lang="postcss">
  .container {
    @apply w-screen h-screen bg-[#333] flex flex-col justify-end overflow-y-hidden;

    .content {
      @apply flex flex-col items-start w-screen h-[95%] rounded-t-[41px] relative bg-gradient-to-b from-primary-500 to-primaryDark;
    }
  }
</style>

<script>
  import Switch from "components/general/switch.svelte";
  import Bar from "components/search/bar.svelte";
  import Title from "components/signup/title.svelte";
  import { currentStep } from "store";
  import { t } from "translations";
</script>

<header>
  <div class="top">
    <div class="w-8" />
    <Title />
    <button class="w-auto ghost">{$t("base.general.button.skip")}</button>
  </div>
  {#if $currentStep === 4}
    <div class="switch">
      <Bar />
      <Switch
        options={[
          { text: "List", onClick: () => null },
          { text: "Map", onClick: () => null },
        ]}
      />
    </div>
  {/if}
</header>

<style lang="postcss">
  header {
    @apply w-full rounded-t-[41px] top-0;

    .top {
      @apply flex items-center justify-between px-10 py-5 mx-auto text-center;
    }

    .switch {
      @apply flex flex-col items-center justify-center px-12 py-2;
    }
  }
</style>

<script>
  import List from "components/search/list.svelte";
  import { currentStep } from "store";
  import { t } from "translations";
  import Form from "./form.svelte";
  import Step from "./step.svelte";
</script>

<div class="container">
  {#if $currentStep === 1}
    <Step
      title={$t("base.onboarding.step1.heading")}
      description={$t("base.onboarding.step1.paragraph")}
    >
      display
    </Step>
  {:else if $currentStep === 2}
    <Step
      title={$t("base.onboarding.step2.heading")}
      description={$t("base.onboarding.step2.paragraph")}
    >
      display
    </Step>
  {:else if $currentStep === 3}
    <Step
      title={$t("base.onboarding.step3.heading")}
      description={$t("base.onboarding.step3.paragraph")}
    >
      <Form />
    </Step>
  {:else if $currentStep === 4}
    <List />
  {/if}
</div>

<style lang="postcss">
  .container {
    @apply w-full h-full px-8 overflow-y-auto bg-white;
  }
</style>

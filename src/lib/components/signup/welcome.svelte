<script>
  import { goto } from "$app/navigation";
  import { t } from "translations";
</script>

<div class="welcome">
  <img src="cloudy.webp" alt="" role="presentation" />
  <h1 class="pb-16 text-4xl font-extrabold text-white">
    {$t("base.general.title")}
  </h1>
  <button class="secondary" on:click={() => goto("/signup")}>
    {$t("base.general.button.get_started")}
  </button>
  <button class="grey" on:click={() => goto("/login")}>
    {$t("base.general.button.login")}
  </button>
</div>

<style lang="postcss">
  .welcome {
    @apply flex flex-col items-center justify-center w-screen h-screen px-16 space-y-4 bg-primary-500;
  }
</style>

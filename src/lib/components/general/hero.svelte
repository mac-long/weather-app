<script>
  export let noColor = false,
    profile = false;
</script>

<div class="hero" class:noColor class:profile>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="postcss">
  .hero {
    @apply w-full py-4 h-[480px] bg-gradient-to-br from-primaryDark to-primary-500;

    .content {
      @apply flex flex-col items-center justify-center text-center text-white;
    }

    &.noColor {
      @apply from-white to-gray-100 h-auto bg-red-500;
    }
  }
</style>

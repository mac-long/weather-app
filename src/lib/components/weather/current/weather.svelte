<script>
  export let temp, condition;
</script>

<div class="weather">
  <span class="temp">
    {temp}°
  </span>
  <span class="font-bold">{condition}</span>
</div>

<style lang="postcss">
  .weather {
    @apply flex flex-col items-center;

    .temp {
      @apply text-4xl font-extrabold  font-heading leading-[40px] tracking-[0.6px];
    }
  }
</style>

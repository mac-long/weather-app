<script>
  export let options;
  let selected = 0;
</script>

<div class="container">
  <button
    class:active={selected === 0}
    on:click={() => ((selected = 0), options[0].onClick())}
  >
    {options[0].text}
  </button>
  <span />
  <button
    class:active={selected === 1}
    on:click={() => ((selected = 1), options[1].onClick())}
  >
    {options[1].text}
  </button>
</div>

<style lang="postcss">
  .container {
    @apply flex items-center w-full p-[3px] justify-center bg-pink-800 rounded-md space-x-1 max-w-[90vw];

    button {
      @apply w-full px-2 py-[3px] text-center font-light font-body normal-case text-white bg-transparent hover:bg-transparent;

      &.active {
        @apply bg-white text-black;
      }
    }

    span {
      @apply w-1 h-5 mx-4 bg-gray-600 opacity-50 rounded-xl;
    }
  }
</style>

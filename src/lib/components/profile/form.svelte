<script>
  import { writable } from "svelte/store";
  let edited = writable(false);
</script>

<form class="text-left">
  <label>
    <span>Name</span>
    <input type="text" value="Mac Long" />
  </label>
  <label>
    <span>Age</span>
    <input type="number" class="" value={27} />
  </label>
  <label>
    <span>Home Town</span>
    <input type="text" value="Bracknell" />
  </label>
  <label>
    <span>Favourite Weather</span>
    <input type="text" value="Sunshine" />
  </label>
  {#if $edited}
    <div class="px-6">
      <button>Edit Details</button>
    </div>
  {/if}
</form>

<style lang="postcss">
  label {
    @apply flex font-bold items-center w-full px-6 py-5 border-b border-[#f1f1f1];

    input {
      @apply flex py-5  border-none appearance-none  text-right border-b border-[#f1f1f1] focus:outline-none min-w-0 rounded-none border-none;
    }
  }
</style>

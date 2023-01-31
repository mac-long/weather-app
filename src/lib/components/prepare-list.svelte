<script>
  import { writable } from "svelte/store";

  let items = writable([
    { name: "Sunscreen", checked: true },
    { name: "Hat", checked: false },
    { name: "Sunglasses", checked: false },
    { name: "Water", checked: false },
  ]);

  const handleSubmit = (e) => {
    items.update((items) => {
      items.push({ name: e.target[0].value, checked: false });
      return items;
    });
    document.querySelector("form").reset();
  };
</script>

<ul class="text-left">
  {#each $items as item}
    <li>
      <span>{item.name}</span>
      <input type="checkbox" bind:checked={item.checked} />
    </li>
  {/each}

  <form on:submit|preventDefault={(e) => handleSubmit(e)}>
    <li>
      <input class="checklist" type="text" placeholder="Enter new item" />
      <input type="checkbox" disabled />
    </li>
  </form>
</ul>

<style lang="postcss">
  li {
    @apply flex items-center justify-between w-full px-6 py-5 border-b border-[#f1f1f1];

    span {
      @apply ml-2 font-bold;
    }

    input[type="checkbox"] {
      @apply w-6 h-6 rounded-full appearance-none border-[#f1f1f1] cursor-pointer;

      &:checked {
        @apply w-6 h-6 rounded-full bg-primary-500 text-white border-none;
      }
    }

    .checklist {
      @apply w-[90%] px-2 border-b border-[#f1f1f1] placeholder:px-0 font-bold;
    }
  }
</style>

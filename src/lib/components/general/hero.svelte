<script>
  import {page} from '$app/stores';
  import {writable} from 'svelte/store';
	export let noColor = false,
		profile = false;

  const ai = writable({
    open: false,
    text: ''
  }); 
</script>

<div
	class="w-full py-4 h-[480px] bg-gradient-to-br from-primaryDark to-primary-500"
	class:noColor
	class:profile
>
	<div class="flex flex-col items-center justify-center text-center text-white relative">
		<slot />
    {#if $page.url.pathname === '/'}
      <button class="absolute bottom-0 right-0 w-auto mr-4 mb-[1px] ghost" on:click={() => ai.set({open: true, text: "Put on sunscreen and a sweater for that blazing 21° heat 🔥🤣"})}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-robot w-8 h-8 m-0" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
        </svg>
      </button> 
       {#if $ai.open}
         <!--TODO: Add scale animation -->
         <div class="absolute bottom-8 right-10 font-bold w-64 h-24 bg-white rounded-lg shadow-lg">
           <button class="absolute top-0 right-0 text-secondary hover:text-red-400 text-2xl mr-1 bg-transparent p-0 hover:bg-transparent w-auto h-auto" on:click={() => ai.set({open: false})}>
               ×
             </button>
           <div class="flex flex-col items-center justify-center h-full">
           <!-- TODO: Add type animation -->
            <p class="text-secondary"> 
               {$ai.text}
             </p>
           </div>
         </div>
       {/if}
   {/if}
	</div>
</div>

<style lang="postcss">
	.noColor {
		@apply from-white to-gray-100 h-auto bg-red-500;
	}
  .will-change-transform {
    will-change: transform;
  }
</style>

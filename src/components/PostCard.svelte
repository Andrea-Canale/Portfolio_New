<script>
  export let title;
  export let href;
</script>

<div
  class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
>
  <h5
    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
  >
    {title}
  </h5>
  <a {href}>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Leggi
    </button>
  </a>
</div>
<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { params_anni } from '../pages/anno_scolastico/params';
</script>
<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</svelte:head>
<Navbar  >
  <NavBrand href="/Portfolio_New">
    <!--<img src="https://avatars.githubusercontent.com/u/89300322?s=200&v=4" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> --->
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio Ed.Civica</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/Portfolio_New">Home</NavLi>
    {#each params_anni as anni}
      <NavLi href={`/Portfolio_New/anno_scolastico/${anni.params.as}`}>
        {anni.params.as}
      </NavLi>
    {/each}
  </NavUl>
</Navbar>

<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>
<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
</svelte:head>
<Navbar  >
  <NavBrand href="/">
    <!--<img src="https://avatars.githubusercontent.com/u/89300322?s=200&v=4" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> --->
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio Ed.Civica</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/Portfolio_New">Home</NavLi>
    <NavLi>
      2020-2021
    </NavLi>
  </NavUl>
</Navbar>

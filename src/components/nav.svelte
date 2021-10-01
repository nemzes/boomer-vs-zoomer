<script>
  import { Link } from "svelte-routing";
  import { questions } from "../state/questions";
  export let id = "";
</script>

<nav>
  {#if id > 1}
    <Link class="navLink relative" to={`/question/${id - 1}`}>Prev</Link>
  {:else}
    <span class="navLink relative">Prev</span>
  {/if}

  {#each questions as _, idx}
    <Link class="navLink" to={`/question/${idx + 1}`}>{idx + 1}</Link>
  {/each}

  {#if id < questions.length}
    <Link class="navLink relative" to={`/question/${id + 1}`}>Next</Link>
  {:else}
    <span class="navLink relative">Next</span>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    justify-content: stretch;

    box-shadow: -2.7px 2.1px 2.7px rgba(0, 0, 0, 0.111),
      -5.7px 4.5px 8px rgba(0, 0, 0, 0.202),
      -10.4px 8.2px 19.7px rgba(0, 0, 0, 0.282),
      -47px 37px 79px rgba(0, 0, 0, 0.48);
  }

  nav :global(.navLink) {
    background-color: chocolate;
    color: whitesmoke;
    flex: 1 1 auto;
    font-size: clamp(.5rem, 2vw, 1.5rem);
    font-weight: 700;
    text-align: center;
    padding: 0.5em;
    text-decoration: none;
    line-height: 1;
  }

  nav :global(span.navLink) {
    background-color: peru;
    color: sandybrown;
  }

  nav :global(.navLink.relative) {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-top: calc(-1 * clamp(1rem, 3vw, 2rem));

    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav :global(.navLink[aria-current]) {
    background-color: cornsilk;
    color: sienna;
  }
</style>

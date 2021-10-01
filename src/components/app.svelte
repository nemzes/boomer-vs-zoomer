<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./home.svelte";
  import Nav from "./nav.svelte";
  import Scoring from "./scoring.svelte";
  import Board from "./board.svelte";
  import { questions } from "../state/questions";

  export let url = "";
</script>

<Router {url}>
  <main>

    <Route path="question/:id" let:params>
      <div class="scoring">
        <Scoring />
      </div>
      <section class="game">
        <Board current={+params.id} {questions} />
      </section>
      <div class="navigation">
        <Nav id={+params.id} />
      </div>
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </main>
</Router>

<style>
  :global(*, ::before, ::after) {
    box-sizing: border-box;
  }

  :global(body) {
    font-family: 'Rampart One';
    padding: 0;
  }

  main {
    backdrop-filter: sepia(1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }

  main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/seamless.webp);
    filter: grayscale(50%);
    z-index: -1;
  }

  .game {
    display: flex;
    flex: 1 0 auto;
  }

  .navigation {
    z-index: 1;
  }
</style>

<script>
  import { questions } from "../state/questions";

  export let id = "";
  export let current = "";
  $: q = questions[id];
</script>

<article class={`${q.type} ${current ? "current" : ""}`}>
  <section class="cardFace prompt">
    <header>
      <h1>{q.type}</h1>
      <h2>Q {id + 1}</h2>
    </header>
    <div>{@html q.prompt}</div>
  </section>
  <section class="cardFace answer">
    <header>
      <h1>{q.type}</h1>
      <h2>A {id + 1}</h2>
    </header>
    <div>{@html q.answer}</div>
  </section>
</article>

<style>
  article {
    display: contents;
  }

  section > header {
    align-items: start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: clamp(1rem, 7vmin, 4rem);
    margin: 0;
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(.8rem, 5vmin, 3rem);
    margin: 0;
  }

  .boomer .prompt {
    background: darkslateblue;
    color: ghostwhite;
  }

  .boomer .answer {
    background: cadetblue;
    color: darkslategrey;
  }

  .boomer header {
    font-family: "Luckiest Guy";
  }

  .zoomer .prompt {
    background: darksalmon;
    color: saddlebrown;
  }

  .zoomer .answer {
    background: darkred;
    color: sandybrown;
  }

  .zoomer header {
    font-family: Megrim;
  }

  .cardFace {
    backface-visibility: hidden;
    border-radius: 16px;
    padding: 2rem;
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    flex-direction: column;
  }

  .cardFace > div {
    font-size: 2rem;
    letter-spacing: -.1em;
    flex: 1 1 auto;
    overflow: hidden;
    text-align: center;
  }

  :global(.cardFace img) {
    max-height: 90%;
    max-width: 90%;
    padding: 1rem;
  }

  .prompt {
    transform: translateZ(2px);
  }

  .prompt > div {
    font-size: 7vmin;
  }

  .prompt * {
    filter: blur(0.25em);
    transition: filter 1s;
  }

  .current .prompt * {
    filter: none;
  }

  .answer {
    transform: rotateY(180deg) translateZ(1px);
    backface-visibility: visible;
  }

  .answer > div {
    font-size: clamp(1.5rem, 8vmin, 5rem);
    display: grid;
    place-content: center;
  }
</style>

<script>
  import { questions } from "../state/questions";

  export let id = "";
  export let current = "";
  $: q = questions[id];
</script>

<article class={`${q.type} ${current ? "current" : ""}`}>
  <div class="cardFace prompt">
    <h1>{q.type}</h1>
    <h2>Question {id + 1}</h2>
    <p>{q.prompt}</p>
  </div>
  <div class="cardFace answer">
    <h1>{q.type}</h1>
    <h2>Answer {id + 1}</h2>
    <p>{q.answer}</p>
  </div>
</article>

<style>
  article {
    display: contents;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    text-transform: uppercase;
  }

  .boomer .prompt {
    background: darkslateblue;
    color: ghostwhite;
  }

  .boomer .answer {
    background: cadetblue;
    color: darkslategrey;
  }

  .boomer h1 {
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

  .zoomer h1 {
    font-family: Megrim;
  }

  .cardFace {
    backface-visibility: hidden;
    border-radius: 16px;
    padding: 2rem;
    position: absolute;
    inset: 0 0 0 0;
  }

  .prompt {
    transform: translateZ(2px);
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
</style>

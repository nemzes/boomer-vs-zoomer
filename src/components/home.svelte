<script>
  import { Link } from "svelte-routing";
</script>

<section>
  <div class="panel">
    <div class="intro">Let's play</div>
    <h1>
      <span class="boomer">Boomer</span>
      <span class="vs">vs</span>
      <span class="zoomer">Zoomer</span>
    </h1>
    <div class="cta">
      <Link to={`/question/1`}>Start</Link>
    </div>
  </div>
</section>

<style>
  section {
    display: grid;
    place-content: center;
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: clamp(2rem, 8vmin, 6rem);
    margin: 1rem 0;
    text-shadow:
      0 .2em .5em rgba(10, 0, 30, .5),
      0 0 .0625em rgba(100, 10, 230, .75);
  }

  .intro, .cta {
    font-size: clamp(1rem, 4vmin, 4rem);
  }

  .intro {
    margin-top: -1.5em;
    font-family: 'Luckiest Guy';
    color: bisque;
  }

  .boomer {
    color: #D3AD7D;
    font-family: "Luckiest Guy";
  }

  .vs {
    font-size: .5em;
  }

  .zoomer {
    color: rgb(125, 201, 211);
    font-family: Megrim;
  }

  .panel {
    background-color: rgba(220, 200, 230, .75);
    border: 8px solid darkslateblue;
    box-shadow: .5rem 2rem 4rem rgba(10, 0, 30, .5);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: clamp(1rem, 2vmin, 4rem) clamp(1rem, 4vmin, 4rem);
  }
</style>

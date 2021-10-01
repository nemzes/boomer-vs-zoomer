<script>
  import { score } from "../state/score";
</script>

<section>
  <div class="scorePanel">
    <div class="scoreStatus boomer">
      <h3>Boomers</h3>
      <div class="score">{$score.boomers}</div>
    </div>
    <div class="scoreControls">
      <button on:click={score.addPointsOnDifficult("boomers")}> +3 </button>
      <button on:click={score.addPointsOnEasy("boomers")}> +1 </button>
      <button on:click={score.removePoint("boomers")}> -1 </button>
    </div>
  </div>
  <div class="scorePanel">
    <div class="scoreStatus zoomer">
      <h3>Zoomers</h3>
      <div class="score">{$score.zoomers}</div>
    </div>
    <div class="scoreControls">
      <button on:click={score.addPointsOnDifficult("zoomers")}> +3 </button>
      <button on:click={score.addPointsOnEasy("zoomers")}> +1 </button>
      <button on:click={score.removePoint("zoomers")}> -1 </button>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: space-around;
    perspective: 1000px;
    padding-top: 1rem;
  }

  button {
    cursor: pointer;
  }

  .boomer h3 {
    font-family: "Luckiest Guy";
  }

  .zoomer h3 {
    font-family: Megrim;
  }

  .scorePanel {
    line-height: 1rem;
    background-color: navajowhite;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    transform: rotateX(15deg) rotateY(-10deg);
    box-shadow: 2.7px 2.1px 2.7px rgba(0, 0, 0, 0.111),
      5.7px 4.5px 8px rgba(0, 0, 0, 0.202),
      10.4px 8.2px 19.7px rgba(0, 0, 0, 0.282),
      47px 37px 79px rgba(0, 0, 0, 0.48);
  }

  .scoreStatus {
    padding: 1rem clamp(1rem, 3vmin, 2rem);
    display: flex;
    flex: 1 0 auto;
    justify-content: space-between;
    align-items: baseline;
  }

  .score {
    font-size: clamp(1.5rem, 4vmin, 4rem);
    font-weight: 700;
    line-height: 1;
    margin-left: 1ch;
    min-width: 1ch;
    text-align: right;
  }

  .scoreControls {
    display: flex;
    justify-content: stretch;
  }

  button {
    flex: 1 1 auto;
    margin: 0;
  }

  h3 {
    font-size: clamp(1rem, 5vmin, 3rem);
    margin: 0;
  }
</style>

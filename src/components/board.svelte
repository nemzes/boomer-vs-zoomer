<script>
  import Question from "./question.svelte";

  export let questions = [];
  export let current = "";
</script>

<div class="board">
  {#each questions as _, idx}
    <input type="checkbox" id={`panel-flipped-${idx + 1}`} />
    <label
      for={`panel-flipped-${idx + 1}`}
      class="panel"
      aria-current={current === idx + 1 ? "step" : null}
      style={`--index: ${idx - current + 1}`}
    >
      <Question id={idx} current={current === idx + 1} />
    </label>
  {/each}
</div>

<style>
  .board {
    flex: 1 0 auto;
    overflow: visible;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    display: none;
  }

  .panel {
    box-shadow: 1.1px 2.3px 1.7px rgba(0, 0, 0, 0.024),
      2.4px 4.9px 4.9px rgba(0, 0, 0, 0.035),
      4.4px 8.9px 12.2px rgba(0, 0, 0, 0.046),
      20px 40px 49px rgba(0, 0, 0, 0.07);
    width: 80%;
    max-width: 60rem;
    height: 70%;
    border: 4px solid black;
    border-radius: 20px;
    position: absolute;
    transform-style: preserve-3d;
    transform: rotateX(15deg) rotateY(-10deg)
      translateX(calc(100% * var(--index) + 1rem * var(--index)));
    transition: transform 1s, box-shadow 1s;
    pointer-events: none;
  }

  .panel[aria-current] {
    pointer-events: all;
    cursor: pointer;
  }

  :checked + .panel {
    box-shadow: -1.1px 2.3px 1.7px rgba(0, 0, 0, 0.024),
      -2.4px 4.9px 4.9px rgba(0, 0, 0, 0.035),
      -4.4px 8.9px 12.2px rgba(0, 0, 0, 0.046),
      -20px 40px 49px rgba(0, 0, 0, 0.07);
    transform: rotateX(15deg) rotateY(-190deg)
      translateX(calc(-100% * var(--index) - 1rem * var(--index)));
  }

  .panel[aria-current]:hover {
    box-shadow: 2.7px 2.1px 2.7px rgba(0, 0, 0, 0.111),
      5.7px 4.5px 8px rgba(0, 0, 0, 0.202),
      10.4px 8.2px 19.7px rgba(0, 0, 0, 0.282),
      47px 37px 79px rgba(0, 0, 0, 0.48);
    transform: rotateX(12deg) rotateY(-8deg)
      translateX(calc(100% * var(--index) + 1rem * var(--index))) translateY(5%)
      translateZ(100px);
    transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  }

  :checked + .panel[aria-current]:hover {
    box-shadow: -2.7px 2.1px 2.7px rgba(0, 0, 0, 0.111),
      -5.7px 4.5px 8px rgba(0, 0, 0, 0.202),
      -10.4px 8.2px 19.7px rgba(0, 0, 0, 0.282),
      -47px 37px 79px rgba(0, 0, 0, 0.48);
    transform: rotateX(12deg) rotateY(-188deg)
      translateX(calc(-100% * var(--index) + 1rem * var(--index)))
      translateY(5%) translateZ(-100px);
  }
</style>

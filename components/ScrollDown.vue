<template>
  <div class="scroll-down-container">
    <span class="scroll-text">scroll down</span>
    <SVGDownArrow size=14 />
  </div>
</template>

<style scoped>
  @keyframes bounce {
    0% { transform: translateY(0px)  }
    50% { transform: translateY(-8px)  }
    100% { transform: translateY(0px)  }
  }

  .scroll-down-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 1.4rem;
    animation: bounce 1800ms linear infinite;
    margin-bottom: 4px;
  }
</style>
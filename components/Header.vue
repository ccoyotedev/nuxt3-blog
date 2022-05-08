<template>
  <header class="header">
    <div class="logo-container">
      <SVGCoyote :size="54"/>
    </div>
    <a class="social-link" href="https://twitter.com/ccoyotedev" target="__blank">
      <SVGTwitter :size="34" />
    </a>
    <a class="social-link" href="https://github.com/ccoyotedev" target="__blank">
      <SVGGithub :size="24" />
    </a>
  </header>
</template>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: calc((100% - 14rem) * 0.083333);
    z-index: 99;
  }

  .header:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(2, 220, 129, 0.4);
  }

  .logo-container {
    position: absolute;
    left: 7rem;
    transform: translate(-50%, 0);
    z-index: 1;
  }

  .social-link {
    opacity: 0.8;
    cursor: pointer;
    margin-left: 2.4rem;
    transition: opacity 100ms;
  }
  .social-link:hover {
    opacity: 1;
  }
</style>
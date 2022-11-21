<template>
  <div class="layout">
    <Header />
    <Sidetray />
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
  max-height: 100vh;
  font-size: 10px;
  color: white;
  padding: 0;
  margin: 0;
  font-weight: 300;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  background: radial-gradient(
      ellipse at right bottom,
      #005f7f 0,
      #054658 8%,
      #002533 30%,
      #031a26 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse at left top,
      #0d2c37 0,
      #013543 8%,
      #011d26 25%,
      #010f16 62.5%,
      #0369bb 100%
    );
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

ul {
  margin-inline-start: 0;
  padding-inline-start: 0;
}

li {
  list-style-type: none;
}

.row {
  display: flex;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
  opacity: 0.8;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5.2rem;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.layout {
  width: 100%;
  height: 100vh;
}

.content {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background: repeating-linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) calc(25% - 0.5px),
    rgba(2, 220, 129, 0.1) calc(25% - 0.5px),
    rgba(2, 220, 129, 0.1) 25%
  );
}

@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 14rem 1fr;
  }

  .content {
    background: repeating-linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) calc(8.333% - 0.5px),
      rgba(2, 220, 129, 0.1) calc(8.333% - 0.5px),
      rgba(2, 220, 129, 0.1) 8.333%
    );
  }
}
</style>

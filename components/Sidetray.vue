<template>
  <div class="sidetray">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidetray {
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sidetray:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(2, 220, 129, 0.4);
}

li a {
  display: block;
  height: 7.4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.8rem;
}
li a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(2, 220, 129, 0.4);
}
li:first-of-type a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(2, 220, 129, 0.4);
}

li:hover {
  background-color: rgba(2, 220, 129, 0.1);
}
</style>
<script setup>
  defineProps({
    items: Array
  })
</script>

<template>
  	<div class="highway-slider">
		<div class="highway-barrier">
			<ul class="highway-lane">
				<li class="highway-car" v-for="(item, i) in items" :key="i">{{ item }}</li>
				<li class="highway-car" v-for="(item, i) in items" :key="i">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
  @keyframes translateinfinite {
    100% { transform: translateY(calc(-18rem * 12))  }
  }

  .highway-slider {
    display:flex;
    justify-content:center;
    width: 100%;
    height: 100vh;
  }

	.highway-barrier {
		overflow: hidden;
		position: relative;
	}

	ul.highway-lane {
		display:flex;
    flex-direction: column;
    align-items: center;
		height: calc(18rem * 24);
    width:100%;
	}

  li.highway-car {
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    color: rgba(2, 222, 131, 0.8);
    min-height: 18rem;
    animation: translateinfinite 25s linear infinite;
    font-size: 3.2rem;
    font-weight: 400;
  }


</style>
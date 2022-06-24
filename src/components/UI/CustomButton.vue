<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background: transparent;
  border: 2px solid green;
  padding: 7px 15px;
  cursor: pointer;
  border-radius: 10%;
}

.button:hover {
  opacity: 0.5;
  transition: 0.4s all;
}
</style>
<template>
  <sui-segment v-if="length" inverted aligned="center">
    <sui-segment
      inverted
      aligned="center"
      v-if="loading && length && !finished"
    >
      <sui-icon name="notched circle" loading />
    </sui-segment>
    <sui-segment inverted aligned="center" v-if="finished">
      <p>ACABOU! VOCÊ TEM TUDO PARA MATAR O LORD VADER DE TANTO RIR!</p>
    </sui-segment>
  </sui-segment>
</template>
<script>
export default {
  name: "Footer",
  props: {
    loading: Boolean,
    finished: Boolean,
    length: Number,
  },
};
</script>

<style></style>

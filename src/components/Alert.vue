<template>
  <div>
    <transition name="slide-fade">
      <sui-grid v-if="message.show" centered>
        <sui-grid-row :columns="2">
          <sui-grid-column>
            <div :class="`ui ${message.color} message`">
              <i class="close icon" @click="closeAlert"></i>
              <div class="header">
                {{ message.title }}
              </div>
              <ul class="list">
                <li>{{ message.text }}</li>
              </ul>
            </div>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: { message: Object },
  methods: {
    closeAlert() {
      this.$emit("close-alert", false); // close alert
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

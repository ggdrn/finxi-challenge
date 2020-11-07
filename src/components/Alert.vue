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
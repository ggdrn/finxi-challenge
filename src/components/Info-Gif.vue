<template>
  <sui-modal v-model="open">
    <sui-modal-header>Informações da GIF</sui-modal-header>
    <sui-modal-content image>
      <sui-image
        wrapped
        size="medium"
        :src="gif.url"
      />
      <sui-modal-description>
        <sui-header>Default Profile Image</sui-header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button color="red" @click="$emit('close-modal', false)">
        Fechar
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
export default {
  name: "InfoGif",
  props: { open: Boolean, gif: Object },
};
</script>

<style></style>

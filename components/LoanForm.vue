<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="form.text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

    <p class="mt-3 mb-0">{{ form.text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        text: '',
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log(JSON.stringify(this.form));
    }
  }
};
</script>


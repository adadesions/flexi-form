<template>
  <div class="container">
    <LoanForm />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LoanForm from '~/components/LoanForm.vue'

export default {
  asyncData(context) {
    return { 
      msg: ''
    }
  },
  components: {
    Logo,
    LoanForm,
  },
}
</script>

<style>
.container {
  font-family: 'Sarabun', sans-serif;
  font-size: 14px;
  text-align: justify;
  background: white;
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
  word-wrap: break-word;
  padding: 1.905cm;
}

</style>

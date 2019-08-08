<template>
  <div class="container">
    <h1>Flexi-Form</h1>
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab title="Justify Text" active>
            <LoanForm />
          </b-tab>
          <b-tab title="Fill-In">
            <BlankForm />
          </b-tab>
          <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LoanForm from '~/components/LoanForm.vue'
import BlankForm from '~/components/BlankForm.vue'

export default {
  asyncData(context) {
    return { 
      msg: ''
    }
  },
  components: {
    Logo,
    LoanForm,
    BlankForm
  },
}
</script>

<style>
.container {
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;
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

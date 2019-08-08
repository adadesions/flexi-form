<template>
    <div>
        <b-form>
            <b-form-group
                id="input-firstname"
                label="Firstname"
                label-for="input-firstname"
            >
            <b-form-input
                id="input-1"
                type="text"
                v-model="form.firstname"
                required
                placeholder="e.g 'Peter'"
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-lastname"
                label="Lastname"
                label-for="input-2"
            >
            <b-form-input
                id="input-2"
                type="text"
                v-model="form.lastname"
                required
                placeholder="e.g 'Parker'"
            ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-email"
                label="Email"
                label-for="input-3"
            >
            <b-form-input
                id="input-3"
                type="email"
                v-model="form.email"
                required
                placeholder="e.g 'test@test.com'"
            ></b-form-input>
            </b-form-group>
        </b-form>

    <p>
        My firstname is 
        <span v-if="form.firstname">
            <b>
                {{form.firstname}} 
            </b>
        </span>
        <span v-else>{{dots}}</span>

        and lastname is 
        <span v-if="form.lastname">
            <b>
                {{form.lastname}}.
            </b>
        </span>
        <span v-else>{{dots}}</span>
        
        You can contact me at 
        <span v-if="form.email">
            <b>
                {{form.email}} 
            </b>
        </span>
        <span v-else>{{dots}}</span>
    </p>


    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                mobile: '',
                address: '',
            },
            dots: '............................'
        }
    }
}
</script>

<style>

</style>

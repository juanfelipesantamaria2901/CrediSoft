<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Solicitud de credito</h1>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="title-page-sub">Información Personal</h2>
            <v-form class="my-6">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    :error-messages="nameErrors"
                    label="Primer Nombre"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    :error-messages="nameErrors"
                    label="Segundo Nombre"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    :error-messages="nameErrors"
                    label="Primer Apellido"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    :error-messages="nameErrors"
                    label="Segundo Apellido"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-col>
                <v-autocomplete
                    :items="items"
                    placeholder="Tipo de documento"
                    required
                  ></v-autocomplete>
              </v-row>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    :error-messages="passwordErrors"
                    label="Numero de documento"
                    type="number"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="passwordConfirm"
                    :error-messages="passwordConfirmErrors"
                    label="Confirmation"
                    type="password"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select> -->
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>
              <v-btn class="mr-4" @click="submit"> Enviar </v-btn>
              <v-btn @click="clear"> Limpiar </v-btn>
            </v-form>
          </v-col>
          <a type="btn btn-green" href="/Formulario.html"></a>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormsPage',
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(150) },
    email: { required, email },
    password: { required },
    passwordConfirm: { required },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data: () => ({
    first: '',
    last: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    select: null,
    formHasErrors: '',
    itemRegister: ['Administrator', 'Editor', 'Publisher', 'Reviewer'],
    items: ['Cedula de ciudadanía', 'NIT', 'Cedula de extranjería', 'Pasaporte'],
    errorMessages: [],
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    passwordConfirmErrors() {
      const errors = []
      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.required &&
        errors.push('Password Confirmation is required')
      return errors
    },
    addressCheck() {
      return true
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>

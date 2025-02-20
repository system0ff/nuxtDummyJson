<template>
  <div class="flex flex-col flex-wrap gap-2 w-48">
    <div class="font-semibold text-xl pl-4">
      <h2>Form Sample</h2>
    </div>
    <div class="pl-4">
      <InputText id="in_label" placeholder="Enter e-mail" v-model="txtInput" variant="filled" size="small"  />
    </div>
    <div class="pl-4">
      <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" size="small" />
    </div>
    <div class="pl-4">
      <Button label="Ok" icon="pi pi-check" size="small" @click="showSelected()"></Button>
    </div>
    <div class="pl-4" v-if="selectedCity && show">
      You selected: {{ formvalues }}
    </div>
  </div>
</template>

<script setup lang="ts">
const show = ref(false)
const txtInput = ref('')
const selectedCity = ref()
const formvalues = ref({
  email: '',
  codeCity: ''
})
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const showSelected = () => {
  show.value = true

  formvalues.value = {
    email: txtInput.value,
    codeCity: selectedCity.value.code
  }
}
</script>

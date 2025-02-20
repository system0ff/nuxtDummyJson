<template>
  <div class="card flex flex-col gap-2">
    <div class="font-semibold text-xl">Form Sample</div>
    <div class="pl-4">
      <FloatLabel variant="in">
        <InputText id="in_label" v-model="txtInput" variant="filled" />
        <label for="in_label">In Label</label>
      </FloatLabel>
    </div>
    <div class="pl-4">
      <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
    </div>
    <div class="pl-4">
      <Button label="Ok" icon="pi pi-check" @click="showSelected()"></Button>
    </div>
    <div class="pl-4" v-if="selectedCity && show">
      You selected: {{ selectedCity }}
    </div>
  </div>
</template>

<script setup lang="ts">

const show = ref(false)
const txtInput = ref('')
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const showSelected = () => {
  show.value = true
}
</script>

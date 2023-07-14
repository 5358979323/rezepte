<template>
  <span class="container">
    <span class="text">{{ label }}</span><span class="icon" @click="$emit('delete')"><i class="bi bi-x"></i></span>
  </span>
</template>

<script>
import {onMounted, ref} from "vue";
import PouchDB from 'pouchdb-browser';

export default {
  emits: ['delete'],
  props: {
    label: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const rezepte = new ref([])

    onMounted(async () => {})

    return {

    };
  },
};
</script>

<style>
.container {
  display: compact;
  border: 1px solid black;
  margin: 2px;
  padding: 2px;
  align-items: flex-start;
}

.icon {
  cursor: pointer;
  margin-left: 5px;
  background-color: coral;
  border-radius: 5px;
  /* Stile für das Icon */
}

.text {
  /* Stile für den Text */
  white-space: nowrap; /* Text ohne Zeilenumbruch */
  overflow: hidden; /* Überlaufenden Text ausblenden */
  text-overflow: ellipsis; /* Abgeschnittenen Text mit Ellipsen anzeigen, wenn nötig */
}

</style>
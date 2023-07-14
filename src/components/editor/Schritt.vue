<template>
  <div class="p-2" id="stepForm">
    <div class="row gy-2">
      <div class="input-group">
        <input placeholder="Beschreibung" v-model="schritt.text" class="form-control">
      </div>
      <div class="input-group">
        <span class="input-group-text">Dauer</span>
        <input v-model="schritt.zeit.dauer" class="form-control" type="number" id="dauer" name="dauer" placeholder="Dauer in Minuten">
      </div>
      <div class="input-group">
        <span class="input-group-text">Typ</span>
        <select :value="schritt.zeit.typ" class="form-select" name="Typ" id="Gartyp">
          <option value="kochen">kochen</option>
          <option value="backen">backen</option>
          <option value="backen">vorbereiten</option>
        </select>
      </div>
      <div>
        Materialien:
        <Chip v-for="mat of schritt.materialien.map(m => m._id)" :label="mat" @delete="removeMaterial(schritt, mat)"/>
      </div>

      <MaterialSelection :schritt="schritt" @refresh="refresh" @save="$emit('save')"/>

      <div>
        Produkte: {{ schritt.produkte.map(p => p.produktId + ' (' + p.gewicht + 'g)').join(", ") }}
      </div>

      <ProduktSelection :schritt="schritt" @refresh="refresh"/>

    </div>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import PouchDB from "pouchdb-browser";
import {useRoute} from "vue-router";
import MaterialSelection from "./MaterialSelection.vue";
import ProduktSelection from "./ProduktSelection.vue";
import Chip from "@/components/Chip.vue";

export default {
  components: {Chip, ProduktSelection, MaterialSelection},
  emits: ['refresh', 'save', 'removeMaterial'],
  props: {
    schritt: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const $route = useRoute()
    onMounted(async () => {

    })
    return {
      save () {
        emit('save')
      },
      refresh () {
        emit('refresh')
      },
      removeMaterial(schritt, mat) {
        emit('removeMaterial', {
          schritt: schritt,
          material: mat
        })
      }
    }
  }
};
</script>

<style>
/* Stile für die Komponente hier */
</style>
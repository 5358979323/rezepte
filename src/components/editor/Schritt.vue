<template>
  <div class="p-2" id="stepForm">
    <div class="row gy-2">
      <div class="input-group">
        <input placeholder="Beschreibung" v-model="schrittText" class="form-control" aria-describedby="textSaveAddon">
        <button v-if="schritt.text !== schrittText" class="btn btn-success" type="button" id="textSaveAddon" @click="save"><i class="bi bi-save"></i></button>
      </div>
      <div class="input-group">
        <span class="input-group-text">Dauer</span>
        <input placeholder="Dauer in Minuten" v-model="schrittZeitDauer" class="form-control" aria-describedby="zeitDauerAddon">
        <button v-if="schritt.zeit.dauer !== schrittZeitDauer" class="btn btn-success" type="button" id="zeitDauerAddon" @click="save"><i class="bi bi-save"></i></button>
      </div>
      <div class="input-group">
        <span class="input-group-text">Typ</span>
        <select v-model="schritt.zeit.typ" class="form-select" name="Typ" id="Gartyp" @change="save">
          <option value="kochen">kochen</option>
          <option value="backen">backen</option>
          <option value="backen">vorbereiten</option>
        </select>
      </div>
      <div>
        Materialien:
        <div class="d-flex">
          <Chip v-for="mat of schritt.materialien.map(m => m._id)" :label="mat" @delete="removeMaterial(schritt, mat)"/>
        </div>
      </div>

      <MaterialSelection :schritt="schritt" @refresh="refresh" @save="$emit('save')"/>

      <div>
        Produkte:
        <div class="d-flex">
          <Chip v-for="p of schritt.produkte" :label="p.produktId + ' (' + p.gewicht + 'g)'" @delete="removeProdukt(schritt, p.produktId)"/>
        </div>
      </div>

      <ProduktSelection :schritt="schritt" @refresh="refresh"/>

    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive, ref, watch} from "vue";
import PouchDB from "pouchdb-browser";
import {useRoute} from "vue-router";
import MaterialSelection from "./MaterialSelection.vue";
import ProduktSelection from "./ProduktSelection.vue";
import Chip from "@/components/Chip.vue";

export default {
  components: {Chip, ProduktSelection, MaterialSelection},
  emits: ['refresh', 'save', 'removeMaterial', 'removeProdukt'],
  props: {
    schritt: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const $route = useRoute()
    const schrittText = ref(null)
    const schrittZeitDauer = ref(null)
    onMounted(async () => {
      schrittText.value = props.schritt.text
      schrittZeitDauer.value = props.schritt.zeit.dauer
    })
    watch(
        () => props.schritt.text,
        async (newVal, oldValue) => {
          if (newVal) {
            schrittText.value = newVal
          }
        }
    )
    watch(
        () => props.schritt.zeit.dauer,
        async (newVal, oldValue) => {
          if (newVal) {
            schrittZeitDauer.value = newVal
          }
        }
    )
    return {
      schrittText,
      schrittZeitDauer,
      save () {
        props.schritt.text = schrittText.value
        props.schritt.zeit.dauer = schrittZeitDauer.value
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
      },
      removeProdukt(schritt, p) {
        emit('removeProdukt', {
          schritt: schritt,
          produkt: p
        })
      }
    }
  }
};
</script>

<style>
/* Stile für die Komponente hier */
</style>
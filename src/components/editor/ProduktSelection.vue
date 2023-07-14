<template>
  <div class="input-group">
    <select v-model="selection" class="form-select" required @change="addProdukt">
      <option value="" disabled hidden>Produkt auswählen</option>
      <option v-for="p of produkte" :key="p._id">
        {{ p._id }}
      </option>
      <option label="Neues Produkt hinzufügen" :value="0"></option>
    </select>
    <SchrittProduktDialog v-if="selection !== 0" :is-open="schrittProduktDialogOpen" :produkt="selection" :schritt="schritt.nr" @close-dialog="closeSchrittProduktDialog"/>
    <NewProduktDialog :is-open="newProduktDialogOpen" @close-dialog="closeNewProduktDialog"/>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import PouchDB from "pouchdb-browser";
import {useRoute, useRouter} from "vue-router";
import SchrittProduktDialog from "@/components/editor/SchrittProduktDialog.vue";
import NewProduktDialog from "@/components/NewProduktDialog.vue";

export default {
  components: {NewProduktDialog, SchrittProduktDialog},
  emits: ['refresh'],
  props: {
    schritt: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const db = new PouchDB("Produkte")
    const rDb = new PouchDB("https://apartofnature.info/produkte", {
      auth: {
        username: "rezeptator",
        password: "IkolpingT2023"
      }
    })
    db.sync(rDb, {
      live: true,
      retry: true
    }).on('error', function (err) {
      console.log("Produkte Sync Error")
    });
    const selection = new ref('')
    const produkte = reactive([])
    const state = reactive({
      allPro: []
    })
    //
    const newProduktDialogOpen = ref(false); // Zustand zur Steuerung des Dialogs
    const openNewProduktDialog = () => {
      newProduktDialogOpen.value = true; // Öffnet den Dialog
    };
    const closeNewProduktDialog = async () => {
      newProduktDialogOpen.value = false; // Schließt den Dialog
      await loadProducts()
      emit('refresh')
    };
    const schrittProduktDialogOpen = ref(false); // Zustand zur Steuerung des Dialogs
    const openSchrittProduktDialog = () => {
      schrittProduktDialogOpen.value = true; // Öffnet den Dialog
    };
    const closeSchrittProduktDialog = () => {
      schrittProduktDialogOpen.value = false; // Schließt den Dialog
      selection.value = ''
      emit('refresh')
    };
    //
    function updateProduktSelection() {
      produkte.splice(0, produkte.length)
      if (props.schritt.produkte.length > 0) {
        produkte.push(...state.allPro.filter(p => props.schritt.produkte.map(sp => sp._id).findIndex(sp => sp === p._id) === -1))
      } else {
        produkte.push(...state.allPro)
      }
      console.debug(produkte)
    }
    async function loadProducts() {
      try {
        const result = await db.allDocs({ include_docs: true });
        state.allPro = result.rows.filter(row => !row.id.startsWith('_design/')).map(row => row.doc)
        updateProduktSelection()
      } catch (error) {
        console.error('Error retrieving products:', error)
      }
    }
    onMounted(async () => {
      await loadProducts()
    })
    return {
      selection,
      produkte,
      schrittProduktDialogOpen,
      newProduktDialogOpen,
      openSchrittProduktDialog,
      openNewProduktDialog,
      closeSchrittProduktDialog,
      closeNewProduktDialog,
      addProdukt() {
        if (!selection.value) {
          // neues Produkt anlegen
          newProduktDialogOpen.value = true
        } else {
          // produkt hinzufügen... vorher noch Menge und Preis auswählen
          schrittProduktDialogOpen.value = true
        }
        // schritt.produkte.push(selection)
      },
    }
  }
};
</script>

<style>
/* Stile für die Komponente hier */
</style>
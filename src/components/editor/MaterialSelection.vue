<template>
  <div class="input-group">
    <select v-model="selection" class="form-select" required @change="addMaterial">
      <option value="" disabled hidden>Material auswählen</option>
      <option v-for="m of materialien" :key="m._id">
        {{ m._id }}
      </option>
      <option label="Neues Material hinzufügen" :value="0"/>
    </select>
    <NewMaterialDialog :is-open="newMaterialDialogOpen" @close-dialog="closeNewMaterialDialog"/>
  </div>
</template>

<script>
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import PouchDB from "pouchdb-browser";
import NewMaterialDialog from "@/components/NewMaterialDialog.vue";

export default {
  components: {NewMaterialDialog},
  props: {
    schritt: {
      type: Object,
      required: true
    }
  },
  emits: ['save', 'refresh'],
  setup(props, { emit }) {
    const db = new PouchDB("Materialien")
    const rDb = new PouchDB("https://apartofnature.info/materialien", {
      auth: {
        username: "rezeptator",
        password: "IkolpingT2023"
      }
    })
    db.sync(rDb, {
      live: true,
      retry: true
    }).on('error', function (err) {
      console.log("Materialien Sync Error")
    });
    const selection = new ref('')
    const materialien = reactive([])
    const state = reactive({
      allMat: []
    })
    const newMaterialDialogOpen = ref(false); // Zustand zur Steuerung des Dialogs
    const openNewMaterialDialog = () => {
      newMaterialDialogOpen.value = true; // Öffnet den Dialog
    };
    const closeNewMaterialDialog = async () => {
      newMaterialDialogOpen.value = false; // Schließt den Dialog
      await loadMaterials()
      emit('refresh')
    };
    function updateMaterialSelection() {
      materialien.splice(0, materialien.length)
      console.debug(props.schritt.materialien)
      if (props.schritt.materialien.length > 0) {
        materialien.push(...state.allMat.filter(m => props.schritt.materialien.map(sm => sm._id).findIndex(sm => sm === m._id) === -1))
      } else {
        materialien.push(...state.allMat)
      }
      console.debug(materialien)
    }
    async function loadMaterials() {
      try {
        const result = await db.allDocs({ include_docs: true });
        state.allMat = result.rows.filter(row => !row.id.startsWith('_design/')).map(row => row.doc)
        updateMaterialSelection()
      } catch (error) {
        console.error('Error retrieving materials:', error)
      }
    }
    onBeforeMount(async () => {
      await loadMaterials()
    })
    return {
      selection,
      materialien,
      newMaterialDialogOpen,
      closeNewMaterialDialog,
      addMaterial() {
        if (!selection.value) {
          // neues Material anlegen
          newMaterialDialogOpen.value = true
        } else {
          // material hinzufügen
          props.schritt.materialien.push(materialien.find(m => m._id === selection.value))
          //props.schritt.materialien = props.schritt.materialien.filter(m => m)
        }
        selection.value = ''
        updateMaterialSelection()
        emit('save')
      }
    }
  }
};
</script>

<style>
/* Stile für die Komponente hier */
</style>
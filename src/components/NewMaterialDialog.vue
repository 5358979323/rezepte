<template>
  <div v-if="isOpen" class="dialog-overlay">
    <div class="dialog-content">
      <h4>Material hinzufügen</h4>
      <div class="p-2">
        <div class="pb-2">
          <label for="matName">Name</label>
          <input placeholder="Name" class="form-control" type="text" v-model="name" id="matName" required>
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="submit" @click="addMaterial">Hinzufügen</button>
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary" @click="$emit('closeDialog')">Abbrechen</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import PouchDB from "pouchdb-browser";
import {useRoute} from "vue-router";

export default defineComponent({
  emits: ['closeDialog'],
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  setup(props, {emit}) {
    const db = new PouchDB("Materialien")
    const name = ref(null)
    const material = reactive({
      _id: "",
    })
    watch(
        () => props.isOpen,
        (newVal, oldValue) => {
          if (newVal) {
            material._id = ""
          }
        }
    );
    onBeforeMount(() => {
      material._id = ""
    })
    return {
      name,
      material,
      async addMaterial() {
        try {
          material._id = name.value
          await db.put(material)
        } catch (error) {
          console.error('Error saving produkt:', error)
        }
        //
        emit('closeDialog')
      }
    }
  }
});
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  z-index: 9999;
}
</style>
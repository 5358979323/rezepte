<template>
   <div class="pb-2">
    <router-link to="/"><i class="bi bi-house"></i> Home</router-link>&nbsp;
    <span><i class="bi bi-card-list"></i> Gesammelte Produkte</span>&nbsp;
  </div>
  <div>
   
    <div v-for="produkt in daten.produkte" :key="produkt._id">
      <div class="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'heading-' + validSelector(produkt._id)">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse-' + validSelector(produkt._id)"
              :aria-expanded="false"
              :aria-controls="'collapse-' + validSelector(produkt._id)"
            >
              {{ produkt._id }}
            </button>
          </h2>
          <div
            :id="'collapse-' + validSelector(produkt._id)"
            class="accordion-collapse collapse"
            :aria-labelledby="'heading-' + validSelector(produkt._id)"
          >
            <div class="accordion-body">
              <p>Qualität: {{ produkt.qualitaet }}</p>
              <p>Herkunft: {{ produkt.herkunft }}</p>
              <p>Verpackung: {{ produkt.verpackung }}</p>
              <p>Haltbarmachung: {{ produkt.haltbarmachung }}</p>
              <p>Kategorie: {{ produkt.kategorie }}</p>
              <p>Verarbeitungsgrad: {{ produkt.verarbeitungsgrad }}</p>
              <button class="btn btn-primary" type="button" @click="navigateTo('/produkt/' + produkt._id)">
                <i class="bi bi-pen"></i> Bearbeiten
              </button>
              <button class="btn btn-warning" type="button" @click="remove(produkt._id)" disabled>
                <i class="bi bi-trash3"></i> Entfernen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, computed, ref} from "vue";
import PouchDB from 'pouchdb-browser';
import {useRoute, useRouter} from "vue-router";

const db = new PouchDB("Produkte");
const validSelector = ref("");
export default {
  props: {},
  setup(props, ctx) {
    const $router = useRouter()
    const validSelector = (id) => {
        return id.replace(/[^a-zA-Z0-9_-]/g, "");
      };
  
    const produkt = reactive({
      _id: "",
      qualitaet: "",
      verpackung: "",
      haltbarmachung: "",
      herkunft: "",
      kategorie: "",
      verarbeitungsgrad: "",
    })
    

    const daten = reactive({
      produkte: []
    });
    async function load() {
      try {
        const result = await db.allDocs({ include_docs: true });
        daten.produkte = result.rows.map(row => row.doc);
      } catch (error) {
        console.error("Fehler beim Abrufen des Produkts:", error);
      }
    }
    function remove(id) {
      const index = daten.produkte.findIndex((p) => p._id === id);
      if (index !== -1) {
        daten.produkte.splice(index, 1);
      }
      console.log("Produkt entfernen:", id);
    }
    onMounted(async () => {
      await load()
    })

    return {
      daten,
      remove,
      navigateTo(route) {
        $router.push(route)
      },
      validSelector
    }
  },
};
</script>

<style>

</style>
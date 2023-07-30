<template>
  <div v-if="isOpen" class="dialog-overlay">
    <div class="dialog-content">
      <button class="close-button" @click="$emit('closeDialog')">X</button>
      <h4>Produkt hinzufügen</h4>
      <div class="p-2">
        <div class="pb-2">
          <label for="prodName">Name</label>
          <input placeholder="Name" class="form-control" type="text" v-model="name" id="prodName" required>
        </div>
        <div class="pb-2">
        <label for="prodKategorie">Kategorie</label>
        <p>
        <div class="radio-container">
          <div class="radio-option">
            <input type="radio" id="keine" name="kategorie" value="Pflanzlich" v-model="produkt.kategorie">
            <label for="keine"> Pflanzlich</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="insekt" name="kategorie" value="Insekt" v-model="produkt.kategorie">
            <label for="insekt"> Insekt </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="milchprodukt" name="kategorie" value="Ei-/Milchprodukt" v-model="produkt.kategorie">
            <label for="milchprodukt"> Ei-/ Milchprodukt </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="innerei" name="kategorie" value="Innerei" v-model="produkt.kategorie">
            <label for="innerei"> Innerei </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="fleisch" name="kategorie" value="Fleisch" v-model="produkt.kategorie">
            <label for="fleisch"> Fleisch </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="meerestier" name="kategorie" value="Meerestier" v-model="produkt.kategorie">
            <label for="meerestier"> Meerestier </label>
          </div>
        </div>
        </p>
        </div>
        <div class="pb-2">
        <label for="prodHerkunft">Herkunft</label>
        <p>
        <div class="radio-container">
          <div class="radio-option">
            <input type="radio" id="regional" name="herkunft" value="regional" v-model="produkt.herkunft">
            <label for="regional"> regional </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="national" name="herkunft" value="national" v-model="produkt.herkunft">
            <label for="national"> national </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="eu" name="herkunft" value="EU" v-model="produkt.herkunft">
            <label for="eu"> EU </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="sp" name="herkunft" value="SP" v-model="produkt.herkunft">
            <label for="sp"> SP </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="international" name="herkunft" value="international" v-model="produkt.herkunft">
            <label for="international"> international </label>
          </div>

        </div>
        </p>
      </div>
      
        <div>
          <label for="prodQualitaet">Qualität</label>
          <p>
          <div class="radio-container">
            <div class="radio-option">
              <input type="radio" id="fragwuerdig" name="qualitaet" value="Fragwuerdig" v-model="produkt.qualitaet">
              <label for="fragwuerdig"> Fragwürdig </label>
            </div>
            <div class="radio-option">
              <input type="radio" id="konventionell" name="qualitaet" value="Konventionell" v-model="produkt.qualitaet">
              <label for="konventionell"> Konv. </label>
            </div>
            <div class="radio-option">
              <input type="radio" id="eu-bio" name="qualitaet" value="EU-Bio" v-model="produkt.qualitaet">
              <label for="eu-bio"> EU-Bio </label>
            </div>
            <div class="radio-option">
              <input type="radio" id="bio+" name="qualitaet" value="Bio+" v-model="produkt.qualitaet">
              <label for="bio+"> Bio+ </label>
            </div>
          </div>
          </p>
        </div>
      </div>
      <div class="pb-2">
        <label for="prodVerpackung">Verpackung</label>
        <p>
        <div class="radio-container">
          <div class="radio-option">
            <input type="radio" id="keine" name="verpackung" value="Keine" v-model="produkt.verpackung">
            <label for="keine"> Keine </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="papier" name="verpackung" value="Papier" v-model="produkt.verpackung">
            <label for="papier"> Papier </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="glas" name="verpackung" value="Glas" v-model="produkt.verpackung">
            <label for="glas"> Glas </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="metall" name="verpackung" value="Metall" v-model="produkt.verpackung">
            <label for="metall"> Metall </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="plastik" name="verpackung" value="Plastik" v-model="produkt.verpackung">
            <label for="plastik"> Plastik </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="mix" name="verpackung" value="Mix" v-model="produkt.verpackung">
            <label for="mix"> Mix </label>
          </div>
        </div>
        </p>

      </div>

      <div class="pb-2">
        <label for="prodSaison">Haltbarmachung</label>
        <p>
        <div class="radio-container">
          <div class="radio-option">
            <input type="radio" id="keine" name="haltbarmachung" value="Keine" v-model="produkt.haltbarmachung">
            <label for="keine"> Keine </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="kuehltheke" name="haltbarmachung" value="Kuehltheke" v-model="produkt.haltbarmachung">
            <label for="kuehltheke"> Kühltheke </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="tiefgekuehlt" name="haltbarmachung" value="Tiefgekuehlt"
              v-model="produkt.haltbarmachung">
            <label for="tiefgekuehlt"> Tiefgekühlt </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="eingemacht" name="haltbarmachung" value="Eingemacht" v-model="produkt.haltbarmachung">
            <label for="eingemacht"> Eingemacht </label>
          </div>

        </div>
        </p>
      </div>
     
      
      <div class="pb-2">
        <label for="prodVerarbeitungsgrad">Verarbeitungsgrad</label>
        <p>
        <div class="radio-container">
          <div class="radio-option">
            <input type="radio" id="roh" name="verarbeitungsgrad" value="Roh" v-model="produkt.verarbeitungsgrad">
            <label for="roh"> roh </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="geschaelt" name="verarbeitungsgrad" value="Geschnitten etc." v-model="produkt.verarbeitungsgrad">
            <label for="geschaelt"> geschält / geschnitten / gewürzt</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="gekocht" name="verarbeitungsgrad" value="Gekocht" v-model="produkt.verarbeitungsgrad">
            <label for="gekocht"> gekocht </label>
          </div>
          <div class="radio-option">
            <input type="radio" id="fertigprodukt" name="verarbeitungsgrad" value="Fertigprodukt" v-model="produkt.verarbeitungsgrad">
            <label for="fertigprodukt"> Fertigprodukt </label>
          </div>         
        </div>
        </p>
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="submit" @click="addProdukt">Hinzufügen</button>
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-primary" @click="$emit('closeDialog')">Abbrechen</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import PouchDB from "pouchdb-browser";
import { useRoute } from "vue-router";

export default defineComponent({
  emits: ['closeDialog'],
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const db = new PouchDB("Produkte")
    const name = ref(null)
    const produkt = reactive({
      _id: "",
      qualitaet: 0,
      verpackung: 0,

      haltbarmachung: 0,
      herkunft: 0,
      kategorie: 0,
      verarbeitungsgrad: 0,
    })
    watch(
      () => props.isOpen,
      (newVal, oldValue) => {
        if (newVal) {
          produkt._id = ""
        }
      }
    );
    onBeforeMount(() => {
      produkt._id = ""
    })
    return {
      name,
      produkt,
      async addProdukt() {
        try {
          produkt._id = name.value
          await db.put(produkt)
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
  width: 60%;
  max-height: 80%;
  overflow-y: auto;
}

.close-button {
  position: absolute;
  top: 50px;
  right: 230px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: red;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
}

.radio-container {
  display: flex;
  gap: 10px;
}

.radio-option {
  display: flex;
  align-items: center;

}

.radio-option input[type="radio"] {
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
}

.radio-option input[type="radio"]:checked {
  background-color: #007bff;
  border-color: #007bff;
}
</style>


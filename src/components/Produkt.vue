<template>
    <div class="pb-2">
        <router-link to="/"><i class="bi bi-house"></i> Home</router-link>&nbsp;
        <router-link to="/produkte"><i class="bi bi-card-list"></i> Produkte</router-link>&nbsp;
    </div>
    <div class="p-2">
        <div class="row gy-2">
            <div class="input-group">
                <input placeholder="Name" :disabled="newProdukt" v-model="name" class="form-control"
                    aria-describedby="nameSaveAddon">
                <button v-if="produkt._id !== name" class="btn btn-success" type="button" id="nameSaveAddon"
                    @click="save"><i class="bi bi-save"></i></button>
            </div>
        </div>
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
                <input type="radio" id="kuehltheke" name="haltbarmachung" value="Kuehltheke"
                    v-model="produkt.haltbarmachung">
                <label for="kuehltheke"> Kühltheke </label>
            </div>
            <div class="radio-option">
                <input type="radio" id="tiefgekuehlt" name="haltbarmachung" value="Tiefgekuehlt"
                    v-model="produkt.haltbarmachung">
                <label for="tiefgekuehlt"> Tiefgekühlt </label>
            </div>
            <div class="radio-option">
                <input type="radio" id="eingemacht" name="haltbarmachung" value="Eingemacht"
                    v-model="produkt.haltbarmachung">
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
                <input type="radio" id="geschaelt" name="verarbeitungsgrad" value="Geschaelt"
                    v-model="produkt.verarbeitungsgrad">
                <label for="geschaelt"> geschält / geschnitten / gewürzt</label>
            </div>
            <div class="radio-option">
                <input type="radio" id="gekocht" name="verarbeitungsgrad" value="Gekocht"
                    v-model="produkt.verarbeitungsgrad">
                <label for="gekocht"> gekocht </label>
            </div>
            <div class="radio-option">
                <input type="radio" id="fertigprodukt" name="verarbeitungsgrad" value="Fertigprodukt"
                    v-model="produkt.verarbeitungsgrad">
                <label for="fertigprodukt"> Fertigprodukt </label>
            </div>
        </div>
        </p>
    </div>
    <div class="d-grid gap-2">
        <button class="btn btn-primary" type="submit" @click="save">Speichern</button>
    </div>
</template>
  
<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PouchDB from "pouchdb-browser";
const db = new PouchDB("Produkte");

export default {
    props: {},
    setup(props, { emit }) {
        const $route = useRoute();
        const $router = useRouter();
        const name = ref(null);
        const qualitaet = ref("");
        const verpackung = ref("");
        const haltbarmachung = ref("");
        const herkunft = ref("");
        const kategorie = ref("");
        const verarbeitungsgrad = ref("");

        const newProdukt = computed(() => {
            return !($route.params.id === "");
        });

        const produkt = reactive({
            _id: "",
            qualitaet: "",
            verpackung: "",
            haltbarmachung: "",
            herkunft: "",
            kategorie: "",
            verarbeitungsgrad: "",
        });

        async function save() {
            try {
                await db.put(produkt);
                console.log("Änderungen gespeichert");
                await $router.push("/produkt/" + produkt._id);
            } catch (error) {
                console.error("Fehler beim Speichern:", error);
            }
        }

        async function load() {
            if ($route.params.id) {
                try {
                    const entry = await db.get($route.params.id);
                    for (const key of Object.keys(entry)) {
                        produkt[key] = entry[key];

                    }
                } catch (e) {
                    console.error(e);
                }
            }
        }

        onMounted(async () => {
            await load();
        });
        return {
            newProdukt,
            produkt,

            name,
            qualitaet,
            verpackung,
            haltbarmachung,
            herkunft,
            kategorie,
            verarbeitungsgrad,
            save,

        }
    }
};
</script>
  
<style>
.radio-container {
    display: flex;
    gap: 10px;
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
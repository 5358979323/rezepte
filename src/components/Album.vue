<template>
    <div>
        <h1>Gesammelte Produkte</h1>
        <ol>
            <li v-for="produkt in daten.produkte" :key="produkt._id">{{ produkt._id }}
                <button @click="removeProdukt(produkt._id)">Entfernen</button>
            </li>
        </ol>
    </div>
    <div>
        <h1>Materialien-Fundus</h1>
        <ol>
            <li v-for="material in materialDaten.materialien" :key="material._id">{{ material._id }}
                <button @click="removeMaterial(material._id)">Entfernen</button>
            </li>
        </ol>
    </div>
</template> 

<script>
import PouchDB from "pouchdb-browser";
import { reactive } from "vue";

const db = new PouchDB("Produkte");
const mdb = new PouchDB("Materialien");

async function loadDaten() {
    try {
        const result = await db.allDocs({ include_docs: true });
        const daten = result.rows.map(row => row.doc);
        return daten;
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        return [];
    }
}
async function loadMaterial() {
    try {
        const mresult = await mdb.allDocs({ include_docs: true });
        const materialDaten = mresult.rows.map(row => row.doc);
        return materialDaten;
    } catch (error) {
        console.error("Fehler beim Abrufen des Materials:", error);
        return [];
    }
};


export default {
    setup() {
        const daten = reactive({
            produkte: [],
        });


        loadDaten().then(data => {
            daten.produkte = data;
        });

        function removeProdukt(produktId) {
            const index = daten.produkte.findIndex((produkt) => produkt._id === produktId);
            if (index !== -1) {
                daten.produkte.splice(index, 1);
            }
            console.log("Produkt entfernen:", produktId);
        }
        const materialDaten = reactive({
            materialien: [],
        });


        loadMaterial().then(data => {
            materialDaten.materialien = data;
        });

        function removeMaterial(materialId) {
            const index = materialDaten.materialien.findIndex((material) => material._id === materialId);
            if (index !== -1) {
                materialDaten.materialien.splice(index, 1);
            }
            console.log("Material entfernen:", materialId);
        }
        return {
            materialDaten,
            removeMaterial,
            daten,
            removeProdukt,
        };

    },
};
</script>

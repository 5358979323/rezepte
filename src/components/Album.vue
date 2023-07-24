<template>
    <div>
        <h1>Gesammelte Produkte</h1>
        <ol>
            <li v-for="produkt in daten.produkte" :key="produkt._id">{{ produkt.name }}
                <button @click="removeProdukt(produkt.produktId)">Entfernen</button>
            </li>
        </ol>
    </div> 
</template> 
<script>
/*import { onMounted, reactive, ref } from "vue";
import PouchDB from "pouchdb-browser";
import { useRoute, useRouter } from "vue-router";

export default {

    setup() {
        const produkte = reactive([])
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

        const state = reactive({
            allPro: []
        })
        async function loadProducts() {
            produkte.push(...state.allPro)
            
         /* try {
             const result = await db.allDocs({ include_docs: true });
             state.allPro = result.rows.filter(row => !row.id.startsWith('_design/')).map(row => row.doc)

         } catch (error) {
             console.error('Error retrieving products:', error)
          }
         }
        }

        onMounted(() => {
            loadProducts();
            
            
        });

        
      
        return {
            state,
            loadProducts,
            removeProdukt
        };
    }
}; */
//return {
 //   produkte: state.produkte,
  //  removeProdukt,
//};
   // },
//};
import PouchDB from "pouchdb-browser";

const db = new PouchDB("Produkte");
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
import { reactive } from "vue";

export default {
  setup() {
    const daten = reactive({
      produkte: [],
    });

    
    loadDaten().then(data => {
      daten.produkte = data;
    });
    function removeProdukt(produktId) {
            console.log("Produkt entfernen:", produktId);
        }

    return {
      daten,
      removeProdukt,
    };
  },
};
</script>

<template>
  <div>
    <h1><i class="bi bi-house"></i> Home</h1>
    <div class="container">
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button" @click="navigateTo('/liste')"><i class="bi bi-card-list"></i>
          Rezepte</button>
        <button class="btn btn-primary" type="button" @click="navigateTo('/rezept')"><i
            class="bi bi-file-earmark-plus-fill"></i> Neues Rezept</button>
        <button class="btn btn-primary" type="button" @click="openNewProduktDialog"><i class="bi bi-cart-plus"></i> Neues
          Produkt</button>
        <button class="btn btn-primary" type="button" @click="navigateTo('/album')"><i
            class="bi bi-card-list"></i> Gesammelte Produkte und Materialien</button>
      </div>
    </div>
    <NewProduktDialog :is-open="newProduktDialogOpen" @close-dialog="closeNewProduktDialog" />
    <!-- Weitere Komponenten und Inhalt hier -->
  </div>
</template>

<script>
import NewProduktDialog from "@/components/NewProduktDialog.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { NewProduktDialog },
  setup(props, { emit }) {
    const $router = useRouter()

    const newProduktDialogOpen = ref(false); // Zustand zur Steuerung des Dialogs
    const openNewProduktDialog = () => {
      newProduktDialogOpen.value = true; // Öffnet den Dialog
    };
    const closeNewProduktDialog = async () => {
      newProduktDialogOpen.value = false; // Schließt den Dialog
      //await loadProducts()
      //emit('refresh')
    };

    return {
      newProduktDialogOpen,
      openNewProduktDialog,
      closeNewProduktDialog,
      navigateTo(route) {
        $router.push(route)
      },

    }
  }
};
</script>

<style>
/* Stile für die Komponente hier */
</style>
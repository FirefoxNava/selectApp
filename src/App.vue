<template>
  <section class="container" :class="{ containerResults: activeStatus }">
    <div class="search">
      <input
        type="text"
        placeholder="Select an item"
        v-model="inputData"
        v-on:focusin="showResults()"
        v-on:focusout="disableResults()"
        v-on:input="filterFruit(inputData)"
      />
      <div class="icon">
        <arrowIcon></arrowIcon>
      </div>
    </div>
    <ul class="results" :class="{ activeResults: activeStatus }">
      <li v-for="fruit in filteredData" :key="fruit">
        {{ fruit }}
      </li>
      <li v-if="errorStatus" class="notFound">No items were found</li>
    </ul>
  </section>
</template>

<script>
//Librerias
import axios from "axios";

//Iconos
import arrowIcon from "./components/icons/arrowIcon.vue";

export default {
  components: {
    //Iconos
    arrowIcon,
  },
  data() {
    return {
      fruitData: [],
      inputData: null,
      activeStatus: false,
      filteredData: [],
      errorStatus: false,
    };
  },
  methods: {
    //Obtener datos de servidor
    async getFruitData() {
      await axios
        .get(import.meta.env.VITE_API_URL + "/api/fruits")
        .then((response) => {
          if (response.status === 200) {
            this.fruitData = response.data.fruits;
          }
        });
    },
    filterFruit(inputData) {
      let emptyArray = [];

      //Filtrar Datos

      if (inputData) {
        //Generar un filtro en base a las letras iniciales
        emptyArray = this.fruitData.filter((item) => {
          return item
            .toLocaleLowerCase()
            .startsWith(inputData.toLocaleLowerCase());
        });
        console.log(emptyArray.length);
        this.filteredData = emptyArray;

        //Mostrar aviso de error si el filtro no contiene datos
        if (emptyArray.length === 0) {
          this.errorStatus = true;
        } else {
          this.errorStatus = false;
        }
      } else {
        this.errorStatus = false;
        this.filteredData = this.fruitData;
      }
    },
    showResults() {
      this.activeStatus = true;
      this.filterFruit(this.inputData);
    },
    disableResults() {
      this.activeStatus = false;
    },
  },
  mounted() {
    this.getFruitData();
  },
};
</script>

<style>
@import "./assets/main.css";
</style>

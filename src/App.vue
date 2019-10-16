<template>
  <main class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title">Касса буфета</h1>
        <p class="subtitle is-pre-line">
          Обслуживаемый покупатель
          Воробьев Виктор Сергеевич
          Ваш баланс
          <b>150</b> руб.
        </p>

        <ProductsTable :products="products" @change-sum="changeSum"></ProductsTable>

        <p class="subtitle">
          К оплате
          <b>{{sum}}</b> руб.
        </p>

        <div class="columns">
          <div class="column is-narrow">
            <button class="button is-link">Оплатить со счёта</button>
          </div>
          <div class="column is-narrow">
            <button class="button is-dark">Отменить всё</button>
          </div>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import ProductsTable from "./components/ProductsTable";

// как будто данные пришли с сервера и мы их спарсили в products
let products = [
  { id: 0, name: "Борщ", cost: 45.5 },
  { id: 1, name: "Картофельное пюре", cost: 35.0 },
  { id: 2, name: "Куриное филе", cost: 70.5 }
];

export default {
  name: "app",
  components: {
    ProductsTable
  },
  data() {
    return {
      products: products,
      sum: 0
    };
  },
  methods: {
    changeSum(value) {
      this.sum += value;
    }
  }
};
</script>

<style>
</style>

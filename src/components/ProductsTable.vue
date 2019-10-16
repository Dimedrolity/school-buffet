<template>
  <table class="table">
    <caption class="subtitle is-5 is-marginless has-text-left">Выбранные товары</caption>
    <thead>
      <tr>
        <th>Выбор</th>
        <th>Цена</th>
        <th>Наименование</th>
      </tr>
    </thead>

    <tbody>
      <ProductRow
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :cost="product.cost"
        @change-sum="changeSum"
      ></ProductRow>
    </tbody>
  </table>
</template>

<script>
import ProductRow from "./ProductRow";
export default {
  name: "ProductsTable",
  components: { ProductRow },

  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    changeSum(value) {
      this.$emit("change-sum", value);
    }
  }
};
</script>

<style></style>

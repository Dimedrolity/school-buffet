<template>
  <tr>
    <td>
      <div class="columns is-gapless is-vcentered">
        <button class="column is-3 button is-danger" @click="removeProduct();">−</button>
        <input class="column is-3 input has-text-centered" type="text" :value="count" />
        <button class="column is-3 button is-success" @click="addProduct();">+</button>
        <p class="column is-pre"> шт.</p>
      </div>
    </td>

    <td class="is-vertical-middle nowrap">{{cost}} руб.</td>
    <td class="is-vertical-middle nowrap">{{name}}</td>
  </tr>
</template>

<script>
export default {
  name: "Product",
  components: {},

  props: {
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    minCoint: {
      type: Number,
      required: false,
      default: 0
    },
    maxCoint: {
      type: Number,
      required: false,
      default: 9
    }
  },

  data() {
    return {
      count: 0
    };
  },

  methods: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
    changeSum(value) {
      this.$emit("change-sum", value);
    },
    addProduct() {
      if (this.count < this.maxCoint) {
        this.increaseCount();
        this.changeSum(this.cost);
      }
    },
    removeProduct() {
      if (this.count > this.minCoint) {
        this.decreaseCount();
        this.changeSum(-this.cost);
      }
    }
  }
};
</script>

<style>
</style>
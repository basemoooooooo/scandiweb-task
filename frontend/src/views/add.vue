<script setup>
import Heading from '@/components/headings/add.vue'
import Footer from '@/components/footer.vue'
import Form from '@/components/product/form.vue'
import { useRouter } from 'vue-router'

import { ref } from 'vue'
const router = useRouter()

document.title = 'Add a Product'

const isError = ref(null)
const submitHnadler = (product) => {
  // to string
  fetch('http://localhost:8080/add_product.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(() => {
      // route dynamically to /
      router.push({ path: '/' })
    })
    .catch((error) => {
      console.error(error)
      isError.value = error
    })
  console.log(JSON.stringify(product))
}
</script>

<template>
  <div class="layout">
    <Heading />
    <hr />
    <main>
      <Form :handler="submitHnadler" />
    </main>
    <hr />
    <Footer />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

input {
  color: black;
}
</style>

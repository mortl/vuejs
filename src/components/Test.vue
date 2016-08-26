<template>
   <div class="testing">
      <h2>Custom Vue component</h2>
        <div class="jumbotron">
          <ul>
            <li v-for="person of people">{{person.name}}</li>
         </ul>
        </div>
   </div>
</template>

<script>
  export default{
    data () {
      return {
        people: [
          {'name': 'Martin'},
          {'name': 'Steve'},
          {'name': 'Joe'}
        ]
      }
    }
  }

</script>


<style scoped lang="scss">
$bg-color:#7AE6EA;

  .testing {
    width:auto;
     margin-top:20px;

    li {
      list-style: none;
      display:inline-block;
      padding-right:20px;
    }
  }
</style>

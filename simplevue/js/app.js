

var list =  [
 		{text:"Overwatch"},
 		{text:"Halo"},
 		{text:"World of Warcraft"}

 	]

var HelloWorld = Vue.extend({
  template:'<h1>Hello World from Vue!</div>'
})

Vue.component('hello-world',HelloWorld)

var vm = new Vue({
 el:"#app",
 data: {
 	message:"Hello Vuejs",
 	list:list,

 },
 methods:{

 }

})




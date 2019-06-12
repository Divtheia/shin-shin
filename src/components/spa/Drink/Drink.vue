<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="fadeOut"
    >
  <div class="container drink py-5 text-success">
      <h1>飲料清單<h5 class="text-secondary d-inline px-3"><small>-- 請點選菜單價格</small></h5></h1>
      <form>
        <ul v-for="(order,index) in drinkOrder" :key='order' :index='index'>
          <li @click="deletOrder(index)" class="deletOrder">{{index+1}} - {{order.orderTitle}} {{order.orderSize}} {{order.orderPrice}}</li>
        </ul>
      </form>
      <div class="orderTitle text-right mr-5 pb-2">總共:{{priceSum}}元</div>
    <div>
    <table class="green">
    <thead>
      <th class="drinkType green">種類</th>
      <th class="drinkTitle green">名稱</th>
      <th class="drinkMprice green">M size</th>
      <th class="drinkLprice green">L size</th>
    </thead>
    <tbody>
      <tr v-for='(drink,index) in drinks' :key='drink' :index='index' class="green">
        <td class="drinkType green">{{drink.type}}</td>
        <td class="drinkTitle green">{{drink.title}}</td>
        <td class="drinkMprice green" @click="addMprice(index)">{{drink.mprice}}</td>
        <td class="drinkLprice green" @click="addLprice(index)">{{drink.lprice}}</td>
      </tr>
    </tbody>
    </table>
    </div>
  </div>
  </transition>
</template>

<script>
import { drinks } from './DrinksList.js'

export default {
  data(){
    return{
      drinks,
      drinkOrder:[],
      drinkSum:[],
      priceSum:0,
    };
  },
  methods:{
    addMprice(index){
      this.drinkOrder.push({orderTitle:this.drinks[index].title, orderSize:'中杯', orderPrice:this.drinks[index].mprice});
      this.drinkSum.push(this.drinks[index].mprice)
    },

    addLprice(index){
      this.drinkOrder.push({orderTitle:this.drinks[index].title, orderSize:'大杯', orderPrice:this.drinks[index].lprice});
      this.drinkSum.push(this.drinks[index].lprice)
    },

    deletOrder(index){
      this.drinkOrder.splice(index,1);
      this.drinkSum.splice(index,1);
    },
  },
  watch:{
    drinkSum(){
      return this.priceSum = this.drinkSum.reduce((a,b) => a+b, 0)
      }
    },
}
</script>
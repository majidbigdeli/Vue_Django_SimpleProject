<template>
  <div>Movies Page</div>
</template>

<script lang ='ts'>
import router from '../../router';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Movies extends Vue {
  public checkLoggedIn() {
    router.push('/auth');
  }

  public mounted() {

    this.checkLoggedIn();

  }


}
</script>
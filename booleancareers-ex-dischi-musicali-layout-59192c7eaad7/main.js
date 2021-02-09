let app = new Vue ({
  el: '#app',
  data: {
    cdArray: '',
  },
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        this.cdArray = result.data.response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
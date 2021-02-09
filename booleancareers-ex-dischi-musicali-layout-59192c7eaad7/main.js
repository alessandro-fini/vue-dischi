let app = new Vue ({
  el: '#app',
  data: {
    cdArray: '',
    genreArray: ['All'],
    selectedGenre: 'All'
  },
  mounted(){
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        /* array completo */
        this.cdArray = result.data.response;
        console.log(this.cdArray);
        /* array generi */
        this.cdArray.forEach((element) => {
          if (!this.genreArray.includes(element.genre)) {
            this.genreArray.push(element.genre);
            console.log(this.genreArray);
          }
          /* inserimento proprietà visible in oggetti cdArray */
          element.visible = true;
        });

        console.log(this.selectedGenre);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    genreFilter: function(option){
      this.cdArray.forEach((element) => {
        (element.genre == option) ? element.visible = true
        : (option == 'All') ? element.visible = true
        : element.visible = false;
      });
    }
  }
});
const { createApp } = Vue;

createApp({
  data() {
    return {
      maxMail : 10
    };
  },
  methods: {
    getRandomMail() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        console.log(response);
      })
    }
  },
  computed: {},
  mounted() {},
  created() {
    this.getRandomMail();
  }
}).mount("#app");

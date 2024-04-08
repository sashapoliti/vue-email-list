const { createApp } = Vue;

createApp({
  data() {
    return {
      mails : [],
      maxMails : 10
    };
  },
  methods: {
    getRandomMail() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        /* console.log(response); */
        this.mails.push(response.data.response);
      })
    }
  },
  computed: {},
  mounted() {},
  created() {
    this.getRandomMail();
  }
}).mount("#app");

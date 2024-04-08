const { createApp } = Vue;

createApp({
  data() {
    return {
      mails : [],
      maxMails : 10
    };
  },
  methods: {
    getRandomMailsList(nMax) {
      this.mails = [];
      for (let i = 0; i < nMax; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        const mail = response.data.response;        
        this.mails.push(mail);
      });
      }      
    }
  },
  created() {
    this.getRandomMailsList(this.maxMails);
  }
}).mount("#app");

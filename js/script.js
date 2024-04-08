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
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => response.data.response)
    },
    generateMails(nMax) {
      const genMails = [];
      while (genMails.length < nMax) {
        const mail = this.getRandomMail;
        genMails.push(mail);
        console.log(this.getRandomMail);
        console.log(genMails);
      }
      this.mails = [...genMails]
    }
  },
  created() {
    this.generateMails(this.maxMails);
  }
}).mount("#app");

"use strict"

Vue.createApp({

  data() {
    return {
      //lista contatti con all'interno le chat
      contatti: [
        {
          name: "Michele",
          avatar: "_1",
          messages: [
            {
              date: "10/01/2020 15:30",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            }, {
              date: "10/01/2020 15:50",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            }, {
              date: "10/01/2020 16:15",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        }, {
          name: "Fabio",
          avatar: "_2",
          messages: [
            {
              date: "20/03/2020 16:30",
              message: "Ciao come stai?",
              status: "sent",
            }, {
              date: "20/03/2020 16:30",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            }, {
              date: "20/03/2020 16:35",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        }, {
          name: "Samuele",
          avatar: "_3",
          messages: [
            {
              date: "28/03/2020 10:10",
              message: "La Marianna va in campagna",
              status: "received",
            }, {
              date: "28/03/2020 10:20",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            }, {
              date: "28/03/2020 16:15",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        }, {
          name: "Luisa",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            }, {
              date: "10/01/2020 15:50",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
      // Oggetto che rappresenta un nuovo messaggio
      newMessage: {
        date: this.currentDate(),
        message: "",
        status: "",
      },
      //contatore chat corrente
      currentChat: 0,
      // Search
      search: "",
    }
  },
  methods: {
    // Funzione selezione chat
    changeChat(i) {
      this.currentChat = i;
    },
    // Funzione che divide la data in due e ritorna solo il valore dell'orario
    currentTime(element) {
      const elementSplit = element.split(" ");
      const time = elementSplit[1];
      return time
    },
    // Funzione che ritorna la data corrente e la corregge aggiungendo lo 0 davanti
    currentDate() {
      let date = new Date();
      let day = date.getDate();
      if (day < 10) {
        day = `0${day}`;
      }
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      let year = date.getFullYear();
      let hours = date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let min = date.getMinutes();
      if (min < 10) {
        min = `0${min}`;
      }
      let current = `${day}/${month}/${year} ${hours}:${min}`;
      return current;
    },
    // Funzione per inviare un messaggio
    sendMessage() {
      const listClone = { ...this.newMessage };
      listClone.status = "sent";
      this.contatti[this.currentChat].messages.push(listClone);
      this.newMessage.message = "";
      setTimeout(this.answer, 1000);
    },
    // Funzione che si avvia al termine della funzione "sentMessage" che invia un messaggio con scritto "ok"
    answer() {
      const listClone = { ...this.newMessage };
      listClone.message = "Ok";
      listClone.status = "received";
      this.contatti[this.currentChat].messages.push(listClone);
    },
    // Funzione per eliminare un messagio
    deleteMessage(i) {
      this.contatti[this.currentChat].messages.splice(i, 1);
    }
  },
  mounted() { },
}).mount("#app");
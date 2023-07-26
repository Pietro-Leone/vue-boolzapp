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
      // contatore messaggio corrente
      messageChat: 0,
      // Search
      search: "",
      // allow Notifications
      allow: false,
      // Altezza default textarea
      txtHeight: 0,
      // Array che salva il contenuto dell'input textarea
      currentMessages: [],
    }
  },
  methods: {
    // Funzione selezione chat
    // Oltre a cambiare chat, salva il contenuto dell'input textarea e lo ripulisce
    changeChat(i) {
      this.messageChat = this.currentChat;
      this.currentChat = i;
      this.currentMessages.splice(this.messageChat, 1, this.newMessage.message);
      this.newMessage.message = this.currentMessages[this.currentChat];
    },
    // Funzione che divide la data in due e ritorna solo il valore dell'orario
    currentTime(element) {
      const elementSplit = element.split(" ");
      const time = elementSplit[1];
      return time
    },
    // Funzione che ritorna la data corrente e la corregge aggiungendo lo 0 davanti
    // In alternativa si poteva utilizzare: Intl.DateTimeFormat()
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
      this.messageChat = this.currentChat;
      const listClone = { ...this.newMessage };
      listClone.status = "sent";
      this.contatti[this.messageChat].messages.push(listClone);
      this.newMessage.message = "";
      setTimeout(this.scrollFN, 0);
      setTimeout(this.answer, 1000);
    },
    // Funzione che si avvia al termine della funzione "sentMessage" che invia un messaggio con scritto "ok"
    answer() {
      const listClone = { ...this.newMessage };
      listClone.message = "Ok";
      listClone.status = "received";
      this.contatti[this.messageChat].messages.push(listClone);
      setTimeout(this.scrollFN, 0);
    },
    // Funzione di scroll
    // In alternativa si può usare il $nextTick(){}
    scrollFN() {
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    },
    // Resize della textarea
    keyupTxt() {
      setTimeout(this.scrollTxt, 0)
    },
    // Calcola l'altezza della textarea
    scrollTxt() {
      const h = this.$refs.txtarea.scrollHeight;
      this.txtHeight = h;
    },
    // Funzione per eliminare un messagio
    deleteMessage(i) {
      this.contatti[this.currentChat].messages.splice(i, 1);
    },
    // Funzione per attivare le notifiche
    allowNotification() {
      this.allow = true;
    },

  },
  mounted() {
    // all'avvio riempe di stringhe vuote l'array del messaggio corrente
    for (let i = 0; i < this.contatti.length; i++) {
      this.currentMessages.push("")
    }
  },
}).mount("#app");
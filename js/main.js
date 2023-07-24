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
      //

    }
  },
  methods: {

  },
  mounted() {

  },
}).mount("#app");
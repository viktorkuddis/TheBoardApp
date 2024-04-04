
// Detta är columnerna som användaren börjar med:
export const startColumns = [{
    columnName: "Todos",
    columnID: 1,
    columnColor: "mediumpurple",
    markChildsAsDone: false,
}, {
    columnName: "Doing",
    columnID: 2,
    columnColor: "lightskyblue",
    markChildsAsDone: false,
}, {
    columnName: "Done",
    columnID: 3,
    columnColor: "lightgreen",
    markChildsAsDone: true,
}]



// Variabler för färgerna som erbjuds användaren: 

// colorNickName är namnet på färgen som ska erbjudas användaren.

// cssColorValue är värdet av färgen som används dynamisk i stylingen.

export const columnColors = [
    {
        colorNickName: "Röd",
        cssColorValue: "lightcoral"
    },
    {
        colorNickName: "Orange",
        cssColorValue: "lightsalmon"
    },
    {
        colorNickName: "Gul",
        cssColorValue: "palegoldenrod"
    },
    {
        colorNickName: "Grön",
        cssColorValue: "lightgreen"
    }, {
        colorNickName: "Turkos",
        cssColorValue: "turquoise"
    }, {
        colorNickName: "Blå",
        cssColorValue: "lightskyblue"
    }, {
        colorNickName: "Lila",
        cssColorValue: "mediumpurple"
    }, {
        colorNickName: "Rosa",
        cssColorValue: "plum"
    }, {
        colorNickName: "Grå",
        cssColorValue: "grey"
    }, {
        colorNickName: "Vit",
        cssColorValue: "lightgray"
    }
];


/* Här är också lite css för tesning av färgerna:
html {
  background-color: lightcoral;
  background-color: lightsalmon;
  background-color: palegoldenrod;
  background-color: lightgreen;
  background-color: turquoise;
  background-color: lightskyblue;
  background-color: mediumpurple;
  background-color: plum;
  background-color: grey;
  background-color: lightgray;
}
*/
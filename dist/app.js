"use strict";
console.log('hello automatiser');
const user = { firstname: 'Jophn', lastname: 'Doe' };
const compteur = document.querySelector('#compteur');
let i = 0;
// compteur peut avoir valeur null 
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
// Probleme compteur peut avoir une valeur null
// compteur.addEventListener('click', increment);
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
// const a: string = 'manger';
// const n: number = 3;
// const b: boolean = true;
// const d: null = null;
// //Tableau avec chaines de caractères:
// const arr: string[] = ['aze', 'aze'];
// // Tableau avec un mixte, à éviter d'utiliser:
// const arr2: any[] = ['aze, 5'];
// // Objet. Propriété optionnel en ajoutant ?
// const user: { firstname: string, lastname: string, age?: number } = { firstname: "john", lastname: "Doe" }
// // Objet avec infinité de clés:
// const user2: { firstname: string, [key: string]: string } = { firstname: "John", test: 'test', test2: 'test2' }
// // Date: (idem pour Month, ... )
// const date: Date = new Date();
// // function. IDem pour le typage du parametres des fonctions
// const cb: Function = (e: MouseEvent) => { };
// function printId(id: Number) { }
// // Void veut dire que la function ne doit rien retourner (exemple un listener)
// const cb2: Function = (e: MouseEvent): void => { };
// const cb3: (e: MouseEvent) => void = (e: MouseEvent) => {
//   return 3
// };
// // Typescript peut créer automatiquement les types.
// const essai = 5;
// const user3 = { firstname: "john", lastname: "Doe" };
// // Ne peut pas tout deviner:
// // Ici il pense const compteur: Element | null (nous on sait que c'est un bouton dans notre page HTML mais pas lui)
// const compteur = document.querySelector('#compteur');
// // Pour corriger ici on utilise as:
// const compteur2 = document.querySelector('#compteur') as HTMLButtonElement;
// // ou 
// const compteur3 = <HTMLButtonElement>document.querySelector('#compteur');
// // Symbole union: |
// // Permet de préciser possiiblité de plusieurs type:
// function printId2(id: number | string): void {
//   console.log(id.toString());
// }
// // on peut donner un nom à l'argument que l'on va recevoir: ici ArgType
// function identity<ArgType>(arg: ArgType): ArgType {
//   return arg;
// }
// const aa = identity<number>(3);
// function first<Type>(arg: Type[]): Type {
//   return arg[0];
// }
// const bb = first(["aze", "bze", "cze"]);
// console.log(bb);
// function reverse<T>(arr: readonly T[]): T[] {
//   return [...arr].reverse()
// }
// // utilisation d'un generique avec les classes 
// // ici T est un raccourci pour Type comme i, e ... dans d'autres cas.
// class Collection<T> {
//   // le constructeur doit recevoir un tableau de T
//   // privé car je ne veux pas y acceder de l'exterieur
//   constructor(private items: T[]) {
//   }
//   add(item: T) {
//     this.items.push(item)
//   }
//   // renvoi T ou null
//   first(): T | null {
//     return this.items[0] || null
//   }
// }
// const a = new Collection(['player manager', "kick off 2"])
// // idem const a = new Collection<string>(['player manager', "kick off 2"])
// // soit j'indique que c'est string et le T sera string
// // Soit je n'indique rien et T devienra que ce sont des strings.
// a.add('half life') // erreur si je met un number
// console.log(a.first())
// abstract class Geometry {
//   x = 0
//   y = 0
//   abstract surface (): number
// }
// class triangle extends Geometry {
//   x = 2
//   y = 2
//   surface () {
//     return 3
//   }
// }
// class Geometry {
//   static origin: {x: number, y: number } = { x: 0, y: 0 }
// }
// console.log(Geometry.origin);
// interface Point {
//   x: number,
//   y: number
// }
// class TwoDimensionPoint implements Point {
//   x = 15;
//   y = 12;
// }
// // ici any reçoit un objet
// // dans le cas de unknow cela ne fonctionnerait pas car
// // arg.demo, si on ne reçoit pas un objet ne fonctionnerait pas.
// function a(arg: any) {
//   // ne pourrait pas fonctionner avec unknown car on peut recevoir autre chose qu'un objet
//   arg.demo = 3
// }
// function b(arg: unknown) {
//   if (arg instanceof HTMLInputElement) {
//     arg.value = "hello";
//   }
// }
// // Ts comprend que c'est un tuple en read only grace a as const
// const a = [1, 2, 3] as const
// // On ne peut avoir que 2 éléments
// const b: [string, number] = ['tomate', 2]
// // On peut avoir autant d'éléments que l'on souhaite et mix dans n'importe quel ordre
// const c: (string | number)[] = ['tomate', 2]
// type ListItem = [string, number]
// const a: ListItem = ['tomate', 2]
// const b: ListItem = ['banane', 5]
// // function avec un parametre T et U de format tableau
// // en sortie refait un tableau avec les deux tableaux
// // si on lui envoi 2 tuple il refera un tuple (const c)
// // si on lui envoi un tuple + un tableau il fera  (const d)
// // const d: [string, number, ...number[]]
// function merge<T extends unknown[], U extends unknown[]>(a: T, b: U): [...T, ...U] {
//   return [...a, ...b]
// }
// const c = merge(a, b)
// // => const c: [string, number, string, number]
// const d = merge(a, [1, 2, 3])
// // => const d: [string, number, ...number[]]
var STEPS;
(function (STEPS) {
    STEPS[STEPS["Intro"] = 0] = "Intro";
    STEPS[STEPS["Selection"] = 1] = "Selection";
    STEPS[STEPS["Panier"] = 2] = "Panier";
    STEPS[STEPS["Paiement"] = 3] = "Paiement";
})(STEPS || (STEPS = {}));
const step = STEPS.Selection;
console.log(step);
// => return 1 (index de selection)

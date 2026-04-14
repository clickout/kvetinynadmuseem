export interface Testimonial {
  id: string;
  text: string;
  author: string;
  occasion: string;
  location: string;
  date: string;
}

/**
 * Editorální výběr doporučení — zatím hardcoded.
 * TODO: napojit na Google Places API (Places Details → reviews).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    text: "Kytice pro maminku dorazila přesně na hodinu. Vázaná tak, že ji ani nemusela překládat — jen ji postavila do vázy. Věc, kterou si pamatujete.",
    author: "Martina H.",
    occasion: "Dárková kytice",
    location: "Vinohrady",
    date: "Březen 2026",
  },
  {
    id: "t2",
    text: "Pro svatbu nás vedli od první konzultace až po odvoz kytic ze sálu. Nic jsme neřešili. Hostům se zdálo, že všechno vykvetlo samo.",
    author: "Jakub N.",
    occasion: "Svatební floristika",
    location: "Praha 2",
    date: "Únor 2026",
  },
  {
    id: "t3",
    text: "Věnec přišel ráno v den obřadu, zabalený tak, aby nebylo nic vidět. Diskrétní, důstojný. Rodina ocenila, že se nemuselo nic organizovat.",
    author: "Pavel Š.",
    occasion: "Smuteční vazba",
    location: "Vinohrady",
    date: "Leden 2026",
  },
  {
    id: "t4",
    text: "Chodím sem každý pátek. Je to pro mě jediné místo v Praze, kde člověk vidí rozdíl mezi kytkou a kyticí.",
    author: "Věra K.",
    occasion: "Stálá zákaznice",
    location: "Praha 2",
    date: "Únor 2026",
  },
  {
    id: "t5",
    text: "Poslal jsem kytici manželce k výročí — a ona mi pak celý večer popisovala, jak zvláštně voněla. Eukalyptus, růže a něco jako čerstvé seno. Dokonalá kombinace.",
    author: "Tomáš B.",
    occasion: "Dárková kytice",
    location: "Žižkov",
    date: "Leden 2026",
  },
  {
    id: "t6",
    text: "Přivedli nám doma Monsteru. Listy takhle velké, kořeny upravené, a k tomu kartička s rukopisem, kolik vody a kdy. Profesionální a přitom lidské.",
    author: "Lucie M.",
    occasion: "Pokojová rostlina",
    location: "Karlín",
    date: "Prosinec 2025",
  },
  {
    id: "t7",
    text: "Objednala jsem z druhého konce Evropy. Komunikace přes e-mail, platba okamžitě, dodání podle plánu. Kytice dorazila mamince v den narozenin — přesně ta, kterou jsem viděla na fotce v návrhu.",
    author: "Kateřina P.",
    occasion: "Dálková objednávka",
    location: "Brusel → Praha",
    date: "Listopad 2025",
  },
  {
    id: "t8",
    text: "Nevěřil jsem, že atelier dokáže na poslední chvíli zařídit kytici pro 80 lidí na firemní akci. Dokázal.",
    author: "Michal D.",
    occasion: "Firemní aranžmá",
    location: "Nové Město",
    date: "Listopad 2025",
  },
  {
    id: "t9",
    text: "V den, kdy jsem potřebovala kytici pro babičku a brečela u pultu, mi neprodali kytici — sedly jsme si. Pak jsem ji odnesla domů a babička se smála. Přesně tohle měla ráda.",
    author: "Alena V.",
    occasion: "Dárková kytice",
    location: "Vinohrady",
    date: "Říjen 2025",
  },
  {
    id: "t10",
    text: "Pivoňky v sezoně. Prostě pivoňky v sezoně. Ale sestavené tak, že jsem musel fotit, než jsem je předal.",
    author: "Ondřej K.",
    occasion: "Dárková kytice",
    location: "Vršovice",
    date: "Červen 2025",
  },
  {
    id: "t11",
    text: "Sváteční výzdoba celého bytu — stůl, komoda, okenní parapet. Přijeli, udělali, odešli. Tichý zázrak.",
    author: "Helena R.",
    occasion: "Vánoční aranžmá",
    location: "Smíchov",
    date: "Prosinec 2025",
  },
  {
    id: "t12",
    text: "Nejsem člověk, co píše recenze. Ale tady je to jiné. Je to řemeslo. A těch v Praze moc nezbylo.",
    author: "Petr H.",
    occasion: "Stálý zákazník",
    location: "Holešovice",
    date: "Leden 2026",
  },
];

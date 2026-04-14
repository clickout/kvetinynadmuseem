export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  /**
   * Článek ve strukturované podobě — pole odstavců a mezinadpisů.
   * Typ `p` = paragraf, `h2` = mezinadpis, `quote` = pull-quote, `list` = seznam.
   */
  body: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

/* ------------------------------------------------------------- */
/* 5 úvodních článků — ručně napsáno.                             */
/* ------------------------------------------------------------- */

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "jak-pecovat-o-rezane-kytice",
    title: "Jak pečovat o řezané kytice, aby vydržely 10+ dní",
    excerpt:
      "Praktický návod, jak se ke kytici chovat od okamžiku, kdy ji přinesete domů. Voda, teplota, světlo a několik triků, které známe z atelieru.",
    date: "2026-03-18",
    dateLabel: "18. března 2026",
    category: "Péče",
    readingTime: "4 min čtení",
    heroImage: "/images/produkt-pivonky.jpg",
    heroAlt: "Řezané pivoňky ve skleněné váze",
    body: [
      {
        type: "p",
        text:
          "Řezaná kytice není hotový objekt, který jste si přinesli. Je to živá věc, která se postupně mění — a tu změnu můžete zpomalit o několik dní, pokud víte jak.",
      },
      {
        type: "h2",
        text: "První hodina doma",
      },
      {
        type: "p",
        text:
          "Hned po příchodu kytici rozbalte a zkraťte stonky o 2–3 centimetry. Řez veďte ostře, pod úhlem 45°, v proudu studené vody. Tím se odkryje svěží kanálek, který saje vodu — ten, se kterým jste ji koupili, je už mírně zhojený.",
      },
      {
        type: "p",
        text:
          "Vyberte vázu, která nabízí tolik vody, aby stonky byly ponořené alespoň z jedné třetiny. Ale pozor: listy pod hladinou oškubejte. Rozkládají se rychle a kalí vodu.",
      },
      {
        type: "h2",
        text: "Voda a místo",
      },
      {
        type: "p",
        text:
          "Voda má být vlažná — studená z kohoutku je pro většinu květin šok. Přidejte buď speciální sáček výživy (dostáváte ho od nás), nebo špetku cukru a kapku octa. Cukr nakrmí květinu, ocet trochu zpomalí růst bakterií.",
      },
      {
        type: "p",
        text:
          "Vázu postavte tam, kde je chlad a stín. Ne na přímé slunce, ne vedle topení, ne k oknu s průvanem. Kytice je ráda v téměř dokonalých podmínkách, které jí dávno neposkytuje zahrada.",
      },
      {
        type: "h2",
        text: "Každý druhý den",
      },
      {
        type: "list",
        items: [
          "Kompletně vyměňte vodu — ne pouze doplňte.",
          "Vytáhněte kytici, opláchněte vázu i stonky.",
          "Zkraťte stonky o další půlcentimetr.",
          "Vraťte zpátky a zkontrolujte, jestli nejsou listy ve vodě.",
        ],
      },
      {
        type: "quote",
        text:
          "Kytice, ke které se vracíte dvakrát týdně, vám to dvojnásobně vrátí.",
      },
      {
        type: "h2",
        text: "Co dělat, když některé květy začnou odcházet",
      },
      {
        type: "p",
        text:
          "Není žádná tragédie, když jedna růže odkvete dřív než ostatní. Je tragédie nechat ji v kytici a brát s ní dolů zbytek. Vyjměte ji a nechte zbytek dodýchat čerstvěji.",
      },
      {
        type: "p",
        text:
          "Poslední dva tři dny života kytice — kdy už se některé květy sklánějí — jsou často nejkrásnější. Nezahazujte ji příliš brzy. Dojdete si pro novou, až tuhle dokoukáte.",
      },
    ],
  },

  {
    slug: "pivonky-kratka-sezona",
    title: "Pivoňky: krátká sezona, dlouhá láska",
    excerpt:
      "Pivoňky v Česku kvetou šest týdnů v roce. Proč za ně utratíte víc, jak je vybírat, a proč si zaslouží být v každé kytici, kterou si v květnu odnesete.",
    date: "2026-05-05",
    dateLabel: "5. května 2026",
    category: "Sezona",
    readingTime: "3 min čtení",
    heroImage: "/images/produkt-pivonky.jpg",
    heroAlt: "Detail rozevřené pivoňky",
    body: [
      {
        type: "p",
        text:
          "Existují květiny, které nabízíme celoročně — růže, chryzantémy, lilie. A pak jsou ty, které mají svůj čas. Pivoňky jsou nejkrásnějším příkladem druhé kategorie.",
      },
      {
        type: "h2",
        text: "Šest týdnů",
      },
      {
        type: "p",
        text:
          "Česká pivoňková sezona je krátká. Začíná kolem desátého května, vrcholí druhou polovinou května, a koncem června je po všem. Po zbytek roku pracujeme buď s dovozem ze severní polokoule (Holandsko, Anglie), nebo se sezonou na jižní polokouli — ale to jsou jiné pivoňky. Těžší. Cestou už nejsou tak čerstvé.",
      },
      {
        type: "h2",
        text: "Jak vybírat",
      },
      {
        type: "p",
        text:
          "V obchodě hledejte poupata, která jsou měkká na dotek a mají viditelnou barvu přes zelený obal. Úplně tvrdá kulička už se nerozvine — to není poupě, to je zralá, která přestala kvést. Naopak poupě, které je částečně otevřené, vydrží jen pár dní.",
      },
      {
        type: "p",
        text:
          "Dobře vybraná pivoňka se doma otevře během 24–48 hodin a drží další týden. Celý vývoj — od pomerančového poupěte k naprosto rozvitému květu s desítkami plátků — se odehraje přímo ve vaší váze.",
      },
      {
        type: "quote",
        text:
          "Pivoňka je jediná květina, která umí být nádherná pětkrát po sobě — při každém rozvíjení jinak.",
      },
      {
        type: "h2",
        text: "Proč jsou drahé",
      },
      {
        type: "p",
        text:
          "Pivoňky rostou pomalu. Rostlina potřebuje pět až sedm let, než začne pravidelně kvést. V atelieru dostáváme květy od českých pěstitelů, kteří mají půdu a čas — a těch je málo. Proto se cena jedné hlavy pohybuje kolem 90–180 Kč, podle odrůdy a velikosti.",
      },
      {
        type: "p",
        text:
          "Mimo sezonu — od července do dubna — jsou pivoňky dvakrát až třikrát dražší a mají zlomek kouzla. V ateliéru je v tomhle období nenabízíme. Čekat se vyplatí.",
      },
    ],
  },

  {
    slug: "svatba-na-vinohradech",
    title: "Svatba na Vinohradech: floristika, která nepřehluší obřad",
    excerpt:
      "Pár myšlenek o tom, jak přemýšlet o svatební floristice — když chcete, aby obřad byl o vás, a ne o kyticích.",
    date: "2026-02-12",
    dateLabel: "12. února 2026",
    category: "Svatby",
    readingTime: "5 min čtení",
    heroImage: "/images/kategorie-svatby.jpg",
    heroAlt: "Detail svatební kytice z pivoněk",
    body: [
      {
        type: "p",
        text:
          "Většina svatebních katalogů ukazuje výzdoby, kde je víc květin než lidí. Mohutné instalace, záplava okvětních plátků, oblouky z růží za statisíce korun. Jsou krásné — ale často přehluší to, kvůli čemu jste se sešli.",
      },
      {
        type: "h2",
        text: "Floristika je rámeček, ne obraz",
      },
      {
        type: "p",
        text:
          "V atelieru přemýšlíme o svatební floristice jako o rámečku. Má zdůraznit, ale nemá překřičet. Oblouk z květin nad obřadním stolem funguje nejlépe tehdy, když ho lidé zaregistrují teprve v okamžiku, kdy se rozhlédnou po ceremonii. Ne dřív.",
      },
      {
        type: "h2",
        text: "Méně míst, ale pořádně",
      },
      {
        type: "p",
        text:
          "Radši menší počet skutečně výrazných kompozic než deset průměrných. Obvykle doporučujeme:",
      },
      {
        type: "list",
        items: [
          "Kytici nevěsty — srdce celé floristiky, nejvíc péče.",
          "Oblouk nebo akcent u obřadu — jeden výrazný prvek, ne tři.",
          "Dominantu na recepčním stole — tam, kde lidé fotí.",
          "Drobné stolní aranžmá — tichá, neblokují výhled přes stůl.",
        ],
      },
      {
        type: "p",
        text:
          "Zbytek výzdoby lze řešit svíčkami, ubrusy, světlem. Nemusí všechno být z květin.",
      },
      {
        type: "quote",
        text:
          "Nejlepší svatební kytice je ta, kterou nevěsta po obřadu odmítne pustit z ruky.",
      },
      {
        type: "h2",
        text: "Vinohrady jako místo",
      },
      {
        type: "p",
        text:
          "Pokud se berete na Vinohradech — v kostele svaté Ludmily, v Novoměstské radnici nebo v některé z vinohradských vil — máte výhodu, že místo samo o sobě nese atmosféru. Historický prostor nepotřebuje být přemalován. Doporučujeme stavět floristiku do dialogu s architekturou: krémové a bílé tóny v kamenných prostorech, hlubší zeleně v dřevěných interiérech, sezonní akcenty místo exotických dovozů.",
      },
      {
        type: "p",
        text:
          "A začněte plánovat šest měsíců dopředu. Ne proto, že bychom neměli čas — ale proto, abychom mohli pro vaši sezonu objednat správné květiny od správných pěstitelů.",
      },
    ],
  },

  {
    slug: "pet-rostlin-pro-byty",
    title: "Pět pokojových rostlin pro byty do 30 m²",
    excerpt:
      "Vinohradské byty bývají malé a stinné. Tady je pět rostlin, které v takových podmínkách prosperují — nebo aspoň dlouho přežijí.",
    date: "2025-11-20",
    dateLabel: "20. listopadu 2025",
    category: "Rostliny",
    readingTime: "4 min čtení",
    heroImage: "/images/produkt-monstera.jpg",
    heroAlt: "Monstera v keramickém květináči",
    body: [
      {
        type: "p",
        text:
          "V atelieru často potkáváme lidi, kteří si chtějí pořídit rostlinu, ale mají malý byt s jedním oknem do dvora. Nechtějí skleník — chtějí jednu dobrou rostlinu. Tady je pět, které doporučujeme nejčastěji.",
      },
      {
        type: "h2",
        text: "01. Pothos (Epipremnum aureum)",
      },
      {
        type: "p",
        text:
          "Začátek pro každého. Snese stín, zapomnění, sucho i občasné přelití. Rychle roste, dá se snadno množit a vypadá dobře i ve skleněné nádobě bez půdy. Pokud si nejste jisti, jestli se o rostlinu postaráte, začněte tady.",
      },
      {
        type: "h2",
        text: "02. Sansevieria (tchynin jazyk)",
      },
      {
        type: "p",
        text:
          "Nesnese jen jedno: časté zalévání. Jinak je to rostlina, která přežije dva měsíce na dovolené, tmavou halu i suchý vzduch ze starých radiátorů. Moderní odrůdy jsou vysoké, architektonické, vypadají jako socha.",
      },
      {
        type: "h2",
        text: "03. Monstera deliciosa (mladší jedinec)",
      },
      {
        type: "p",
        text:
          "Klasika, o které se mluví tolik, že byste čekali, že je to klišé. Není. Monstera v bytě 25 m² se chová jako živý pokoj — mění se, roste, tvoří nové listy, které byt transformují. Stačí jí rozptýlené světlo a zalití jednou týdně. Pozor: časem potřebuje místo.",
      },
      {
        type: "h2",
        text: "04. ZZ plant (Zamioculcas zamiifolia)",
      },
      {
        type: "p",
        text:
          "Rostlina pro kanceláře, chodby a místa bez světla. Roste pomalu, ale neuvěřitelně odolně. Zalévat jen když je zem úplně vyschlá — což u stínu může být jednou za tři týdny.",
      },
      {
        type: "h2",
        text: "05. Philodendron 'Brasil'",
      },
      {
        type: "p",
        text:
          "Popínavá varianta s žluto-zelenou variegací. Chová se podobně jako pothos, ale má výraznější listy a působí \"dospěleji\". Ideální do knihovny nebo nad skříň, odkud spadne dolů a postupně vytvoří zelenou clonu.",
      },
      {
        type: "quote",
        text:
          "Do malého bytu nepatří dvacet rostlin. Patří tam dvě — ale takové, o které se staráte rádi.",
      },
      {
        type: "p",
        text:
          "Všechny tyhle druhy máme v atelieru skladem. Pokud si nevíte rady, kterou zvolit, stavte se — zeptáme se na byt, na světlo a na vaši zkušenost s péčí, a vybereme to, co u vás vydrží roky.",
      },
    ],
  },

  {
    slug: "smutecni-floristika-tichy-jazyk-ucty",
    title: "Smuteční floristika: tichý jazyk úcty",
    excerpt:
      "O volbě smuteční vazby se mluví málo. Pár vět o tom, co stojí za rozhodnutími, která děláme, když přijdete objednat.",
    date: "2025-10-14",
    dateLabel: "14. října 2025",
    category: "Smuteční",
    readingTime: "4 min čtení",
    heroImage: "/images/kategorie-smutecni.jpg",
    heroAlt: "Bílá smuteční vazba z lilií",
    body: [
      {
        type: "p",
        text:
          "Smuteční floristika je pravděpodobně nejtišší část naší práce. Zákazník obvykle přijde s vědomím, že si něco vybere za pár minut, a pak už chce zpátky domů. Naším úkolem je udělat rozhodnutí lehkým — ne odkládat nebo komplikovat.",
      },
      {
        type: "h2",
        text: "Barva",
      },
      {
        type: "p",
        text:
          "Bílá je tradiční a nikdy neurazí. Symbolizuje čistotu a úctu. Ale bílá není jediná volba — pokud zesnulý měl rád konkrétní barvu, klidně ji použijte. Barevnost pak není rušivá, ale je to rozloučení, ve kterém je ta osoba ještě přítomná.",
      },
      {
        type: "p",
        text:
          "Krémové a světle růžové tóny působí teple a jemně. Hluboké tmavé tóny (temně červená, fialová) jsou zvláště důstojné pro staršího zesnulého.",
      },
      {
        type: "h2",
        text: "Forma",
      },
      {
        type: "list",
        items: [
          "Věnec — tradiční, vhodný pro blízkou rodinu a oficiální zastoupení.",
          "Pietní kytice — pokládá se na rakev nebo k ní, vhodná pro přátele a kolegy.",
          "Srdce — symbolické, emocionální; často od dětí nebo partnera.",
          "Volná vazba — pro obřady, kde rodina preferuje méně formální formát.",
        ],
      },
      {
        type: "h2",
        text: "Stuha",
      },
      {
        type: "p",
        text:
          "Na stuze se obvykle píše vztah (\u201EManželce\u201C, \u201EKolegové z práce\u201C) a krátká věta (\u201ES úctou\u201C, \u201ENezapomeneme\u201C). Pomůžeme s formulací, pokud váháte. Text na stuze je jedna z věcí, které rodina během následujících dnů čte znovu a znovu — stojí za to, aby byl prostý a přesný.",
      },
      {
        type: "quote",
        text:
          "Smuteční vazba má říct jednu větu. Ne deset.",
      },
      {
        type: "h2",
        text: "Doručení",
      },
      {
        type: "p",
        text:
          "Vazbu doručujeme buď přímo na pohřební ústav, nebo na místo obřadu. V tom případě potřebujeme znát časový rámec — obvykle dorážíme 1–2 hodiny před začátkem, aby byla vazba uložena v klidu.",
      },
      {
        type: "p",
        text:
          "Pokud máte na nás otázku, na kterou se nechcete ptát v obchodě, napište nám e-mailem. Odpovídáme diskrétně a rychle.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

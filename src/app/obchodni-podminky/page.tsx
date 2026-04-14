import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Květiny nad Museem",
  description:
    "Obchodní podmínky atelieru Květiny nad Museem — objednávky, dodání, platba, odstoupení od smlouvy.",
};

export default function ObchodniPodminkyPage() {
  return (
    <LegalPage
      eyebrow="Informace"
      breadcrumbLabel="Obchodní podmínky"
      title="Obchodní podmínky"
      updatedLabel="1. 4. 2026"
      intro="Tyto obchodní podmínky upravují vztah mezi atelierem Květiny nad Museem a zákazníky, kteří si u nás objednávají kytice, floristické vazby, svatební floristiku či pokojové rostliny."
    >
      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          1 — Základní údaje
        </h2>
        <p className="text-graphite">
          Provozovatelem je atelier <strong className="text-charcoal font-normal">Květiny nad Museem</strong>,
          se sídlem Vinohradská 6, 120 00 Praha 2. IČO a DIČ doplníme po zápisu.
          Kontakt: e-mail <em>(doplníme)</em>, telefon <em>(doplníme)</em>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          2 — Objednávka a uzavření smlouvy
        </h2>
        <p className="text-graphite">
          Objednávku lze učinit osobně v atelieru na Vinohradské 6, telefonicky,
          e-mailem nebo prostřednictvím formuláře na tomto webu. Smlouva vzniká
          potvrzením objednávky ze strany atelieru — obvykle do 24 hodin, u
          svatební floristiky po úvodní konzultaci.
        </p>
        <p className="text-graphite">
          U sezónních květin si vyhrazujeme právo nabídnout adekvátní náhradu,
          pokud konkrétní druh není dostupný. O případné záměně zákazníka vždy
          informujeme předem.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          3 — Ceny a platba
        </h2>
        <p className="text-graphite">
          Všechny ceny uvedené na webu jsou včetně DPH. Cena za rozvoz se řídí
          zónami uvedenými na stránce <a href="/rozvoz" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">Rozvoz</a>.
          Platit lze hotově v atelieru, platební kartou, nebo bankovním převodem
          na základě vystavené faktury.
        </p>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Hotově nebo kartou v atelieru při osobním převzetí",
            "Bankovním převodem na základě zálohové faktury (u svateb vždy)",
            "Online kartou při objednávce přes formulář",
          ].map((item, i) => (
            <li key={i} className="relative text-graphite">
              <span aria-hidden="true" className="absolute -left-6 top-[0.85em] w-3 h-px bg-gold-champagne" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          4 — Dodání
        </h2>
        <p className="text-graphite">
          Rozvoz zajišťujeme v rámci Prahy v den objednávky (u objednávek přijatých
          do 11:00) nebo v domluveném termínu. Podrobnosti a ceny zón najdete na
          stránce <a href="/rozvoz" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">Rozvoz</a>.
          Osobní odběr je možný v otevírací době atelieru.
        </p>
        <p className="text-graphite">
          U dárkových kytic dodávaných třetí osobě předává kurýr zásilku do
          vlastních rukou. Pokud adresáta nezastihne, domluví s ním náhradní
          termín nebo vrátí kytici do atelieru k vyzvednutí.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          5 — Odstoupení od smlouvy
        </h2>
        <p className="text-graphite">
          Řezané květiny, svatební floristika a vazby zhotovené na zakázku jsou
          dle § 1837 občanského zákoníku zbožím podléhajícím rychlé zkáze a
          upraveným dle přání spotřebitele. Od takové smlouvy <strong className="text-charcoal font-normal">nelze odstoupit
          bez udání důvodu</strong> ve lhůtě 14 dnů.
        </p>
        <p className="text-graphite">
          Na pokojové rostliny v neporušeném obalu se 14denní lhůta pro
          odstoupení od smlouvy vztahuje, pokud jsou zakoupeny prostřednictvím
          online objednávky. Stornovat svatební objednávku lze dle podmínek
          sjednaných ve smlouvě o svatební floristice — obvykle s ponecháním
          zálohy pokrývající již započaté přípravy.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          6 — Reklamace
        </h2>
        <p className="text-graphite">
          Postup reklamace řezaných květin a dalšího zboží najdete na samostatné
          stránce <a href="/reklamace" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">Reklamace</a>.
          Reklamaci je třeba uplatnit neprodleně po zjištění vady, nejpozději
          však do 24 hodin od převzetí u řezaných květin.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          7 — Ochrana osobních údajů
        </h2>
        <p className="text-graphite">
          Osobní údaje zpracováváme v souladu s GDPR. Podrobnosti o rozsahu,
          účelu a době zpracování najdete v dokumentu <a href="/ochrana-osobnich-udaju" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">Ochrana osobních údajů</a>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          8 — Závěrečná ustanovení
        </h2>
        <p className="text-graphite">
          Případné spory se snažíme řešit především smírně. Pokud to nebude možné,
          má spotřebitel právo obrátit se na Českou obchodní inspekci
          (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">coi.cz</a>)
          jako subjekt mimosoudního řešení spotřebitelských sporů.
        </p>
        <p className="text-graphite">
          Tyto obchodní podmínky nabývají účinnosti dnem 1. 4. 2026.
        </p>
      </section>
    </LegalPage>
  );
}

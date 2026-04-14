import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Reklamace | Květiny nad Museem",
  description:
    "Postup při reklamaci řezaných květin, vazeb a pokojových rostlin z atelieru Květiny nad Museem.",
};

export default function ReklamacePage() {
  return (
    <LegalPage
      eyebrow="Informace"
      breadcrumbLabel="Reklamace"
      title="Reklamace"
      updatedLabel="1. 4. 2026"
      intro="Květiny jsou živé. Pokud něco není v pořádku, chceme to vědět hned — abychom to napravili dřív, než se situace zhorší."
    >
      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          1 — Kdy nás kontaktovat
        </h2>
        <p className="text-graphite">
          U <strong className="text-charcoal font-normal">řezaných květin a vazeb</strong> je
          třeba nás kontaktovat nejpozději <strong className="text-charcoal font-normal">do 24 hodin</strong> od
          převzetí. Jen tak můžeme posoudit stav květin a případně zajistit
          výměnu dřív, než dojde k přirozenému zavadnutí.
        </p>
        <p className="text-graphite">
          U <strong className="text-charcoal font-normal">pokojových rostlin</strong> platí
          obecná 24měsíční záruční doba. Reklamaci uplatněte bez zbytečného
          odkladu po zjištění vady.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          2 — Jak postupovat
        </h2>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Napište nám e-mail nebo zavolejte. Popište, v čem je problém — čím konkrétnější informace, tím rychleji umíme pomoci.",
            "Pokud je to možné, přiložte fotografii kytice nebo rostliny v původním stavu.",
            "U řezaných květin uveďte datum a čas převzetí, u rostlin datum prodeje a případně číslo objednávky nebo účtenky.",
            "Domluvíme s vámi další postup — nejčastěji výměnu, vrácení ceny, nebo úpravu vazby v atelieru.",
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
          3 — Co reklamace neřeší
        </h2>
        <p className="text-graphite">
          Abychom si předešli nedorozuměním: některé věci patří k povaze živých
          květin, nikoli k vadě:
        </p>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Přirozené zavadnutí po uplynutí běžné vázy (řezané květiny obvykle 5–10 dní podle druhu a péče)",
            "Drobné odchylky ve tvaru, barvě nebo velikosti květů — pivoňka není nikdy přesně stejná",
            "Poškození způsobené nevhodnou péčí (málo vody, přímé slunce, průvan)",
            "Ochranné sklo, které nasadí lehkou kondenzaci během transportu v chladném období",
          ].map((item, i) => (
            <li key={i} className="relative text-graphite">
              <span aria-hidden="true" className="absolute -left-6 top-[0.85em] w-3 h-px bg-gold-champagne" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-graphite">
          Praktický návod, jak s kyticí zacházet doma, najdete v deníku — <a href="/blog/jak-pecovat-o-rezane-kytice" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">Jak pečovat o řezané kytice</a>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          4 — Vyřízení reklamace
        </h2>
        <p className="text-graphite">
          Reklamaci se snažíme vyřídit okamžitě — u řezaných květin zpravidla
          během téhož dne, nejpozději do 3 pracovních dnů. Ve složitějších
          případech (svatební floristika, objemná objednávka) do 30 dnů, jak
          stanoví zákon.
        </p>
        <p className="text-graphite">
          O přijetí reklamace i jejím vyřízení vám vystavíme písemné potvrzení
          e-mailem.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          5 — Kontakt pro reklamace
        </h2>
        <p className="text-graphite">
          Atelier Květiny nad Museem<br />
          Vinohradská 6, 120 00 Praha 2<br />
          E-mail: <em>(doplníme)</em><br />
          Telefon: <em>(doplníme)</em>
        </p>
        <p className="text-graphite">
          Raději přijďte osobně, pokud to jde. Za pultem se mnohé vyřeší během
          pěti minut — a často i lépe, než přes e-mail.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          6 — Mimosoudní řešení sporů
        </h2>
        <p className="text-graphite">
          Nejste-li s vyřízením reklamace spokojeni, můžete se obrátit na Českou
          obchodní inspekci (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="underline decoration-gold-champagne underline-offset-4 hover:text-emerald-deep transition-colors">coi.cz</a>)
          jako subjekt mimosoudního řešení spotřebitelských sporů.
        </p>
      </section>
    </LegalPage>
  );
}

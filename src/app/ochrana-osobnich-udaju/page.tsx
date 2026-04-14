import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Květiny nad Museem",
  description:
    "Informace o zpracování osobních údajů v atelieru Květiny nad Museem dle GDPR.",
};

export default function OchranaOsobnichUdajuPage() {
  return (
    <LegalPage
      eyebrow="Informace"
      breadcrumbLabel="Ochrana osobních údajů"
      title="Ochrana osobních údajů"
      updatedLabel="1. 4. 2026"
      intro="S vašimi údaji zacházíme stejně pečlivě jako s květinami — jen to, co je opravdu potřeba, a jen po dobu, kdy to má smysl."
    >
      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          1 — Správce údajů
        </h2>
        <p className="text-graphite">
          Správcem osobních údajů je atelier <strong className="text-charcoal font-normal">Květiny nad Museem</strong>,
          Vinohradská 6, 120 00 Praha 2. Kontakt ve věcech ochrany osobních údajů:
          e-mail <em>(doplníme)</em>.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          2 — Jaké údaje zpracováváme
        </h2>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Identifikační a kontaktní údaje: jméno, telefon, e-mail, doručovací adresa",
            "Fakturační údaje u firemních objednávek (IČO, DIČ, adresa sídla)",
            "Obsah komunikace týkající se objednávky (zpráva ve formuláři, e-maily)",
            "Údaje o objednávkách — datum, obsah, částka, způsob platby",
            "Přihlášení k odběru zápisků (pouze e-mail, pokud sami udělíte souhlas)",
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
          3 — Proč je zpracováváme
        </h2>
        <p className="text-graphite">
          Vaše údaje používáme výhradně k tomu, abychom mohli dodat objednanou
          kytici nebo svatební floristiku, vystavit doklad a vést účetnictví v
          zákonném rozsahu. Právní základ zpracování:
        </p>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Plnění smlouvy — objednávka, dodání, reklamace",
            "Zákonné povinnosti — účetnictví, daňová evidence (10 let)",
            "Oprávněný zájem — vedení evidence objednávek a kontakty pro následné otázky",
            "Souhlas — pouze u newsletteru a fotografií svateb zveřejněných v galerii",
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
          4 — Jak dlouho údaje uchováváme
        </h2>
        <p className="text-graphite">
          Údaje z objednávek uchováváme po dobu 10 let, což vyžaduje zákon o
          účetnictví. Kontakty z formuláře, které nevedly k objednávce, mažeme
          do 6 měsíců. Odběr zápisků můžete kdykoli zrušit — po odhlášení
          odstraníme váš e-mail do 7 dnů.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          5 — Komu údaje předáváme
        </h2>
        <p className="text-graphite">
          Vaše údaje nesdílíme s nikým, kdo by je nepotřeboval k tomu, aby vám
          kytice dorazila. Konkrétně:
        </p>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Kurýrní služba rozvážející kytice v rámci Prahy (jméno, adresa, telefon adresáta)",
            "Účetní kancelář vedoucí naše účetnictví (fakturační údaje)",
            "Poskytovatel e-mailové služby (jen pokud se přihlásíte k zápiskům)",
            "Hosting a technická správa webu (bez přístupu k obsahu objednávek)",
          ].map((item, i) => (
            <li key={i} className="relative text-graphite">
              <span aria-hidden="true" className="absolute -left-6 top-[0.85em] w-3 h-px bg-gold-champagne" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-graphite">
          Údaje nikdy neprodáváme, nepronajímáme ani nepředáváme třetím stranám
          pro marketingové účely.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          6 — Vaše práva
        </h2>
        <p className="text-graphite">
          V souladu s GDPR máte právo:
        </p>
        <ul className="space-y-3 my-6 pl-6">
          {[
            "Požádat o informaci, jaké údaje o vás vedeme",
            "Požádat o opravu nepřesných údajů",
            "Požádat o výmaz, pokud už nejsou potřebné k účelu, pro který byly získány",
            "Omezit zpracování nebo vznést námitku",
            "Požádat o přenos údajů v běžně používaném formátu",
            "Podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz)",
          ].map((item, i) => (
            <li key={i} className="relative text-graphite">
              <span aria-hidden="true" className="absolute -left-6 top-[0.85em] w-3 h-px bg-gold-champagne" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-graphite">
          Napište nám a ozveme se do 30 dnů. Ve složitějších případech vás
          informujeme o prodloužení lhůty.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          7 — Cookies
        </h2>
        <p className="text-graphite">
          Tento web používá pouze technické cookies nezbytné pro jeho chod.
          Nepoužíváme reklamní ani sledovací cookies třetích stran. Anonymní
          statistiky návštěvnosti si vedeme agregovaně, bez možnosti zpětně
          identifikovat konkrétního návštěvníka.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl md:text-3xl text-emerald-deep mt-4 mb-4 tracking-tight">
          8 — Změny tohoto dokumentu
        </h2>
        <p className="text-graphite">
          Pokud dojde ke změně způsobu zpracování, aktualizujeme tento dokument
          a uvedeme datum poslední revize. Tato verze je platná od 1. 4. 2026.
        </p>
      </section>
    </LegalPage>
  );
}

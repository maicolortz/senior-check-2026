const SENIOR_DATA = {
  "de": {
    "code": "de",
    "flag": "🇩🇪",
    "countryLabel": "🇩🇪 Deutschland (Rente Klar)",
    "brandTitle": "Rente Klar — Digitaler Ruhestands- & Behörden-Assistent 2026",
    "brandSubtitle": "60-Sekunden-Diagnose · Interaktiver Rentenrechner (ohne Excel) · Offizieller Brief-Generator (A4 PDF)",
    "privacyBanner": "🔒 100% Privat (DSGVO-konform): Ihre Daten werden ausschließlich lokal auf Ihrem eigenen Gerät berechnet und niemals an einen Server gesendet oder gespeichert.",
    "privacyEquivalentEs": "100% Privado: Tus datos se calculan en tu propio dispositivo y nunca se envían ni guardan en ningún servidor.",
    "nav": {
      "tabQuiz": "1. 60-Sek.-Diagnose (4 Fragen)",
      "tabCalc": "2. Interaktiver Rechner (Ohne Excel)",
      "tabLetters": "3. Offizielle Briefe (A4 Druck / PDF)",
      "fontSizeLabel": "Schriftgröße:"
    },
    "ui": {
      "quizTitle": "MODUL 1 — Schnelldiagnose in 60 Sekunden (4 Fragen)",
      "quizIntro": "Tippen Sie auf die großen Schaltflächen. Nach Frage 4 erhalten Sie Ihre persönliche Auswertung mit den aktuellen Grenzwerten für 2026.",
      "questionProgress": "Frage {current} von 4",
      "btnBack": "← Zurück zur vorherigen Frage",
      "btnRestartQuiz": "↻ Diagnose neu starten",
      "diagResultTitle": "Ihre persönliche Ruhestands-Diagnose 2026",
      "diagThresholdLabel": "Wichtigster Grenzwert 2026:",
      "diagMoneyAtStakeLabel": "Finanzieller Spielraum / Ersparnis:",
      "diagFirstStepLabel": "Ihr erster konkreter Schritt für morgen:",
      "diagSourceLabel": "Offizielle Rechtsgrundlage 2026:",
      "btnGoCalc": "🧮 Jetzt im Rechner mit meinen Zahlen prüfen",
      "btnGoLetter": "✉️ Passendes Musterschreiben (A4) öffnen",
      "calcTitle": "MODUL 2 — Interaktiver Mobil-Rechner 2026 (Kein Excel nötig)",
      "calcIntro": "Wählen Sie Ihren Fall und passen Sie die Zahlen mit den großen „−“ und „+“ Tasten oder den Schnellwahl-Knöpfen an.",
      "selectCalcLabel": "Wählen Sie Ihre Berechnung:",
      "comparisonTitle": "Direkter Vergleich: Option A vs. Option B",
      "optionALabel": "Option A",
      "optionBLabel": "Option B",
      "plainExplanationTitle": "Was bedeutet dieses Ergebnis im Klartext?",
      "officialSourceBadge": "Geprüfte Rechtsgrundlage 2026:",
      "btnOpenMatchingLetter": "✉️ Passenden Brief für diesen Fall jetzt erstellen →",
      "lettersTitle": "MODUL 3 — Automatischer Generator für offizielle Behördenbriefe (Form-to-PDF)",
      "lettersIntro": "Wählen Sie Ihr Schreiben aus, tragen Sie Ihre Angaben in die 5 großen Felder ein und drucken oder speichern Sie das fertige DIN-A4-Schreiben als PDF.",
      "selectLetterLabel": "1. Wählen Sie das gewünschte offizielle Schreiben (6 Vorlagen):",
      "formSectionTitle": "2. Ihre persönlichen Angaben (werden fett in den Brief eingesetzt):",
      "field1Label": "1. Vor- und Nachname:",
      "field1Placeholder": "z. B. Marianne und Wolfgang Schneider",
      "field1Default": "Marianne Schneider",
      "field2Label": "2. Straße, Hausnummer, PLZ und Wohnort:",
      "field2Placeholder": "z. B. Lindenstraße 18, 50674 Köln",
      "field2Default": "Lindenstraße 18, 50674 Köln",
      "field3Label": "3. Versicherungsnummer (DRV) / Krankenversicherungs-Nr.:",
      "field3Placeholder": "z. B. 65 140858 S 042",
      "field3Default": "65 140858 S 042",
      "field4Label": "4. Empfänger-Behörde (automatisch vorausgefüllt, anpassbar):",
      "field5Label": "5. Spezifische Angaben zu Ihrem Fall (Datum, Beträge, Kinder):",
      "previewSectionTitle": "Live-Vorschau Ihres offiziellen Schreibens (DIN A4 druckfertig)",
      "btnPrintPdf": "🖨️ Brief drucken / als PDF speichern (A4)",
      "btnCopyText": "📋 Gesamten Brieftext kopieren (für DRV eService / E-Mail)",
      "copySuccessMsg": "✓ Der vollständige Brieftext wurde in Ihre Zwischenablage kopiert! Sie können ihn jetzt im DRV-Online-Portal oder in einer E-Mail einfügen.",
      "attachmentsTitle": "Anlagen zum Ankreuzen (vor dem Versand prüfen):",
      "signatureLabel": "Eigenhändige Unterschrift:"
    },
    "quiz": {
      "questions": [
        {
          "id": "q1",
          "title": "1. In welcher Altersgruppe oder Ruhestandsphase befinden Sie sich?",
          "options": [
            "58 bis 62 Jahre — Ich plane meinen Übergang in die Rente",
            "63 bis 65 Jahre — Vorzeitige Altersrente (Rente mit 63) ist mein Thema",
            "66 bis 67 Jahre — Kurz vor oder beim Start der Regelaltersrente",
            "Ab 68 Jahren — Ich beziehe bereits Rente und möchte Abzüge/Ansprüche prüfen"
          ]
        },
        {
          "id": "q2",
          "title": "2. Wie sieht Ihre aktuelle familiäre Situation aus?",
          "options": [
            "Alleinstehend (mit oder ohne Kindererziehungszeiten)",
            "Verheiratet / Eingetragene Lebenspartnerschaft (mit Kindern)",
            "Verwitwet — Ich beziehe oder beantrage Witwen-/Witwerrente",
            "Geschieden oder alleinerziehend gewesen (Kindererziehungszeiten klären)"
          ]
        },
        {
          "id": "q3",
          "title": "3. Wie hoch ist Ihre (erwartete) monatliche Bruttorente bzw. Ihr Ruhestandseinkommen?",
          "options": [
            "Unter 1.300 € brutto im Monat",
            "Zwischen 1.300 € und 1.850 € brutto im Monat",
            "Zwischen 1.850 € und 2.500 € brutto im Monat",
            "Über 2.500 € brutto im Monat (oder zusätzliche Mieteinnahmen / Betriebsrente)"
          ]
        },
        {
          "id": "q4",
          "title": "4. Welches Thema möchten Sie als Erstes rechtssicher klären?",
          "options": [
            "Rente mit 63 vs. 67: Wie hoch ist der 0,3 %-Abschlag pro Monat und wann liegt der Break-even-Punkt?",
            "9/10-Regel der KVdR & +36 Monate Kinderbonus: Wie spare ich bis zu 240 € Krankenkassenbeitrag im Monat?",
            "Witwenrente 2026: Wie viel bleibt nach dem neuen Freibetrag von 1.123,38 € (§ 97 SGB VI) netto übrig?",
            "Rentenbescheid überprüfen (§ 44 SGB X): Fehlende Ausbildungs-, Kinder- oder Pflegezeiten nachfordern"
          ]
        }
      ],
      "outcomes": [
        {
          "title": "Fokus 1: Vorzeitige Altersrente (0,3 % Abschlag/Monat & aktueller Rentenwert 42,52 €)",
          "threshold2026": "Aktueller Rentenwert 2026: 42,52 € je Entgeltpunkt | Abschlag: 0,3 % pro vorgezogenem Monat (max. 14,4 % bei 48 Monaten).",
          "moneyAtStake": "Bei 40 Entgeltpunkten (1.700,80 € Bruttorente) kostet 3 Jahre früher gehen ca. 183,69 €/Monat brutto — doch Sie erhalten zuvor 36 volle Monatsrenten (über 48.000 € netto Vorsprung!). Der rechnerische Break-even-Punkt liegt erst bei rund 91,8 Jahren (297 Monate nach dem 67. Geburtstag).",
          "firstStep": "Fordern Sie mit Formular V0210 eine besondere Rentenauskunft nach § 109 Abs. 5 SGB VI bei der Deutschen Rentenversicherung an.",
          "source": "§§ 36, 77, 187a SGB VI — Deutsche Rentenversicherung (Stand 2026, Rentenwert 42,52 €)",
          "calcIndex": 0,
          "letterIndex": 0
        },
        {
          "title": "Fokus 2: 9/10-Regel der Krankenversicherung der Rentner (KVdR) + 36 Monate je Kind",
          "threshold2026": "90 %-Pflichtgrenze in der zweiten Hälfte des Erwerbslebens (§ 5 Abs. 1 Nr. 11 SGB V) + pauschal 36 Kalendermonate je Kind (§ 5 Abs. 2 S. 3 SGB V).",
          "moneyAtStake": "2.100 € bis 3.400 € Ersparnis pro Jahr (über 35.000 € in 15 Rentenjahren), weil in der Pflicht-KVdR 0 % Krankenkassenbeiträge auf Mieteinnahmen, Zinsen, Dividenden und private Kapitalauszahlungen anfallen.",
          "firstStep": "Reichen Sie bei Ihrer Krankenkasse die Geburtsurkunden aller Kinder (auch Stief-/Pflegekinder) zur Neuberechnung der Vorversicherungszeit ein.",
          "source": "§ 5 Abs. 1 Nr. 11 und Abs. 2 SGB V — GKV-Spitzenverband / DRV (Formular R0810)",
          "calcIndex": 1,
          "letterIndex": 1
        },
        {
          "title": "Fokus 3: Witwenrente & Einkommensanrechnung (§ 97 SGB VI Freibetrag 2026)",
          "threshold2026": "Dynamischer Freibetrag 2026: 1.123,38 € netto monatlich (26,4 × 42,52 €) + 238,29 € je waisenberechtigtem Kind. Eigenes Brutto wird vorab pauschal um 14 % bereinigt (§ 18b SGB IV).",
          "moneyAtStake": "Rund 1.100 € bis 2.600 € mehr Witwenrente pro Jahr durch korrekten 14 %-Pauschalabzug vom eigenen Brutto und zeitnahen Änderungsantrag bei gesunkenem Einkommen.",
          "firstStep": "Prüfen Sie die Anlage „Einkommensanrechnung“ Ihres Witwenrentenbescheids und beantragen Sie bei Einkommensminderung ab 10 % sofort eine Neuberechnung (§ 18d SGB IV).",
          "source": "§ 97 SGB VI i.V.m. §§ 18a–18e SGB IV — Deutsche Rentenversicherung (Stand 2026)",
          "calcIndex": 2,
          "letterIndex": 2
        },
        {
          "title": "Fokus 4: Überprüfungsantrag nach § 44 SGB X (Kontenklärung & Nachzahlung bis 4 Jahre rückwirkend)",
          "threshold2026": "Kindererziehungszeiten: bis zu 3,0 Entgeltpunkte je Kind (= +127,56 € Rente/Monat je Kind ab 1992 bzw. +106,30 € vor 1992 beim Rentenwert 42,52 €).",
          "moneyAtStake": "Schon 1 einziger nachgetragener Entgeltpunkt bringt 510,24 € pro Jahr lebenslang — zuzüglich bis zu 4 Jahre rückwirkender Nachzahlung (§ 44 Abs. 4 SGB X).",
          "firstStep": "Stellen Sie einen schriftlichen Überprüfungsantrag nach § 44 SGB X in Verbindung mit dem Antrag auf Kontenklärung (V0100) und Anlage Kindererziehung (V0800).",
          "source": "§ 44 SGB X, §§ 56, 249 SGB VI — Deutsche Rentenversicherung (V0100 / V0800)",
          "calcIndex": 0,
          "letterIndex": 3
        }
      ]
    },
    "calculators": [
      {
        "id": "de_calc_1",
        "title": "1. Rente mit 63 vs. 67 (Abschlag 0,3%/Monat · Rentenwert 42,52 € · Break-even Alter)",
        "subtitle": "Berechnen Sie Ihren exakten Monatsbetrag, den Netto-Vorsprung vor dem 67. Lebensjahr und das Lebensalter, ab dem die Regelaltersrente die Frührente überholt.",
        "legalRef": "§§ 36, 77, 187a SGB VI · Aktueller Rentenwert 2026: 42,52 € je Entgeltpunkt",
        "letterIndex": 0,
        "inputs": [
          {
            "id": "ep",
            "label": "Ihre Entgeltpunkte (Rentenpunkte laut Renteninformation):",
            "unit": "EP",
            "min": 10,
            "max": 85,
            "step": 1,
            "default": 40,
            "presets": [
              30,
              35,
              40,
              45,
              52
            ]
          },
          {
            "id": "monthsEarly",
            "label": "Wie viele Monate vor der Regelaltersgrenze (67 J.) möchten Sie in Rente gehen?",
            "unit": "Monate",
            "min": 6,
            "max": 48,
            "step": 6,
            "default": 36,
            "presets": [
              12,
              24,
              36,
              48
            ]
          },
          {
            "id": "kvPvPct",
            "label": "Abzug für Kranken- & Pflegeversicherung in der KVdR (Standard ca. 11,7 %):",
            "unit": "%",
            "min": 0,
            "max": 21,
            "step": 0.5,
            "default": 11.7,
            "presets": [
              11.2,
              11.7,
              12.5,
              19.1
            ]
          }
        ]
      },
      {
        "id": "de_calc_2",
        "title": "2. 9/10-Regel der KVdR (Erwerbsleben · +36 Monate je Kind · Ersparnis vs. freiwillige GKV)",
        "subtitle": "Prüfen Sie sofort, ob Sie mit dem Kinder-Bonus (§ 5 Abs. 2 SGB V: pauschal +3 Jahre je Kind) die 90 %-Hürde für die günstige Pflichtversicherung der Rentner knacken.",
        "legalRef": "§ 5 Abs. 1 Nr. 11 & Abs. 2 Satz 3 SGB V · Formular R0810 (Meldung zur KVdR)",
        "letterIndex": 1,
        "inputs": [
          {
            "id": "workYears",
            "label": "Gesamtes Erwerbsleben (Jahre vom ersten Job/Ausbildung bis zum Rentenantrag):",
            "unit": "Jahre",
            "min": 20,
            "max": 54,
            "step": 1,
            "default": 44,
            "presets": [
              38,
              40,
              44,
              48
            ]
          },
          {
            "id": "gkvYearsSecondHalf",
            "label": "Davon Jahre in der gesetzlichen Krankenkasse (GKV) in der 2. Hälfte des Erwerbslebens:",
            "unit": "Jahre",
            "min": 5,
            "max": 27,
            "step": 1,
            "default": 16,
            "presets": [
              14,
              16,
              18,
              20
            ]
          },
          {
            "id": "childrenCount",
            "label": "Anzahl der Kinder (leiblich, Adoptiv-, Stief- oder Pflegekinder = je +36 Monate):",
            "unit": "Kinder",
            "min": 0,
            "max": 6,
            "step": 1,
            "default": 2,
            "presets": [
              0,
              1,
              2,
              3,
              4
            ]
          },
          {
            "id": "extraIncome",
            "label": "Zusätzliche Einkünfte im Ruhestand (Miete, Zinsen, Direktversicherung in €/Monat):",
            "unit": "€/Monat",
            "min": 0,
            "max": 5000,
            "step": 100,
            "default": 900,
            "presets": [
              400,
              900,
              1500,
              2500
            ]
          }
        ]
      },
      {
        "id": "de_calc_3",
        "title": "3. Witwenrente Einkommensanrechnung (§ 97 SGB VI · Freibetrag 2026: 1.123,38 €)",
        "subtitle": "Berechnen Sie Ihre auszahlbare Witwen-/Witwerrente inklusive 14 % Pauschalabzug auf die eigene Rente und dem neuen Freibetrag von 1.123,38 €.",
        "legalRef": "§ 97 SGB VI i.V.m. § 18b SGB IV · Freibetrag 2026: 1.123,38 € (+ 238,29 € je Kind)",
        "letterIndex": 2,
        "inputs": [
          {
            "id": "deceasedPension",
            "label": "Monatliche Bruttorente des verstorbenen Ehepartners:",
            "unit": "€/Monat",
            "min": 600,
            "max": 4500,
            "step": 100,
            "default": 2100,
            "presets": [
              1500,
              1800,
              2100,
              2600
            ]
          },
          {
            "id": "ownPensionBrutto",
            "label": "Ihre eigene monatliche Altersrente (Brutto):",
            "unit": "€/Monat",
            "min": 0,
            "max": 4500,
            "step": 50,
            "default": 1650,
            "presets": [
              1200,
              1500,
              1650,
              2200
            ]
          },
          {
            "id": "widowRatePct",
            "label": "Witwenrenten-Satz (55 % neues Recht / 60 % altes Recht bei Ehe vor 2002):",
            "unit": "%",
            "min": 55,
            "max": 60,
            "step": 5,
            "default": 60,
            "presets": [
              55,
              60
            ]
          },
          {
            "id": "orphanChildren",
            "label": "Anzahl waisenrentenberechtigter Kinder (+238,29 € Freibetrag je Kind):",
            "unit": "Kinder",
            "min": 0,
            "max": 5,
            "step": 1,
            "default": 0,
            "presets": [
              0,
              1,
              2
            ]
          }
        ]
      }
    ],
    "letters": [
      {
        "id": "de_let_1",
        "menuTitle": "1. Antrag auf besondere Rentenauskunft & Ausgleich rentenrechtlicher Abschläge (§ 109 Abs. 5 & § 187a SGB VI — Formular V0210)",
        "defaultRecipient": "Deutsche Rentenversicherung Bund\nRuhrstraße 2\n10709 Berlin",
        "defaultCaseDetails": "Geplanter vorzeitiger Rentenbeginn am 01.10.2026 (36 Monate vor der Regelaltersgrenze); Bitte um Berechnung des Ausgleichsbetrags nach § 187a SGB VI",
        "subject": "Antrag auf Erteilung einer besonderen Rentenauskunft über die Höhe der Beitragszahlung zum Ausgleich einer Rentenminderung (§ 109 Abs. 5 S. 4 i.V.m. § 187a SGB VI — Vordruck V0210)",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "hiermit beantrage ich, {NAME}, wohnhaft in {ADDRESS}, unter meiner Versicherungsnummer {ID_NUM}, eine verbindliche besondere Rentenauskunft gemäß § 109 Absatz 5 Satz 4 SGB VI über die Höhe der Rentenminderung bei vorzeitiger Inanspruchnahme einer Altersrente sowie über den maximal möglichen Ausgleichsbetrag nach § 187a SGB VI.",
          "Meine persönlichen Falldaten lauten wie folgt: {CASE_DETAILS}. Ich beabsichtige zu prüfen, ob ich die vorzeitige Altersrente für langjährig Versicherte nach § 36 SGB VI mit einem Abschlag von 0,3 Prozent pro Kalendermonat in Anspruch nehme oder die Rentenminderung ganz beziehungsweise teilweise durch freiwillige Sonderzahlungen ausgleiche.",
          "Bitte teilen Sie mir schriftlich mit: 1. den genauen monatlichen Brutto- und Nettobetrag meiner Altersrente zum gewünschten vorzeitigen Rentenbeginn im Vergleich zur abschlagsfreien Regelaltersrente auf Basis des aktuellen Rentenwerts (42,52 Euro je Entgeltpunkt), 2. die Anzahl der ermittelten Entgeltpunkte sowie die geminderten Zugangsfaktoren nach § 77 SGB VI und 3. den exakten Höchstbetrag, den ich gemäß § 187a SGB VI steuerbegünstigt als Teil- oder Einmalzahlung leisten kann.",
          "Ich bitte um Übersendung der detaillierten Berechnungsbögen sowie des Vordrucks V0210 an meine oben genannte Anschrift. Für eine schriftliche Eingangsbestätigung danke ich Ihnen im Voraus."
        ],
        "attachments": [
          "Kopie des aktuellen Versicherungsverlaufs / der letzten Renteninformation",
          "Ausgefüllter Vordruck V0210 (Antrag auf besondere Rentenauskunft)",
          "Kopie des Personalausweises (Vorder- und Rückseite)"
        ],
        "closing": "Mit freundlichen Grüßen"
      },
      {
        "id": "de_let_2",
        "menuTitle": "2. Antrag auf Aufnahme in die Pflicht-KVdR unter Anrechnung von +36 Monaten je Kind (§ 5 Abs. 1 Nr. 11 & Abs. 2 SGB V)",
        "defaultRecipient": "An meine gesetzliche Krankenkasse — Abteilung Mitgliedschaft & KVdR\n(Kopie an: Deutsche Rentenversicherung — Formular R0810)",
        "defaultCaseDetails": "Anrechnung von 2 Kindern (pauschal +72 Kalendermonate nach § 5 Abs. 2 Satz 3 SGB V) zur Erfüllung der 9/10-Belegungsfrist in der zweiten Hälfte des Erwerbslebens",
        "subject": "Überprüfung und Feststellung der Versicherungspflicht in der Krankenversicherung der Rentner (KVdR) gemäß § 5 Abs. 1 Nr. 11 SGB V unter Einbeziehung der Kinderpauschale nach § 5 Abs. 2 Satz 3 SGB V",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "unter Bezugnahme auf meine Versicherungsnummer {ID_NUM} beantrage ich, {NAME}, wohnhaft in {ADDRESS}, die Einstufung als pflichtversichertes Mitglied in der Krankenversicherung der Rentner (KVdR) gemäß § 5 Absatz 1 Nummer 11 SGB V bzw. die Überprüfung meiner bisherigen Einstufung als freiwilliges Mitglied.",
          "Nach § 5 Absatz 2 Satz 3 SGB V werden auf die erforderliche Neun-Zehntel-Vorversicherungszeit in der zweiten Hälfte des Erwerbslebens für jedes leibliche Kind, Adoptiv-, Stief- oder Pflegekind pauschal drei Jahre (36 Kalendermonate) angerechnet, unabhängig davon, in welcher Hälfte des Erwerbslebens das Kind geboren wurde. Zu meinem Fall: {CASE_DETAILS}.",
          "Unter Hinzurechnung dieser gesetzlichen Kinderpauschale von 36 Kalendermonaten je Kind erreiche ich die erforderliche Vorversicherungszeit von mindestens 90 Prozent in der zweiten Hälfte meines Erwerbslebens vollständig. Damit entfällt die Beitragspflicht auf private Vermietungseinkünfte, Kapitalerträge und private Kapitalauszahlungen.",
          "Ich füge diesem Schreiben die Geburtsurkunden bei und bitte Sie um einen rechtsmittelfähigen Feststellungsbescheid über meine Pflichtmitgliedschaft in der KVdR sowie um Erstattung etwaiger zu Unrecht erhobener Höchstbeiträge."
        ],
        "attachments": [
          "Kopien der Geburtsurkunden aller Kinder (für +36 Monate je Kind nach § 5 Abs. 2 SGB V)",
          "Ausgefüllte Meldung zur Krankenversicherung der Rentner (Vordruck R0810)",
          "Übersicht der bisherigen Versicherungszeiten seit Beginn der ersten Erwerbstätigkeit"
        ],
        "closing": "Mit freundlichen Grüßen"
      },
      {
        "id": "de_let_3",
        "menuTitle": "3. Antrag auf Neuberechnung der Witwen-/Witwerrente & Einkommensanrechnung (§ 97 SGB VI & § 18d SGB IV — Freibetrag 2026)",
        "defaultRecipient": "Deutsche Rentenversicherung — Dezernat Hinterbliebenenrente\nPostfach\n10704 Berlin",
        "defaultCaseDetails": "Überprüfung der Einkommensanrechnung auf meine große Witwenrente unter Berücksichtigung des Freibetrags 2026 (1.123,38 € netto) sowie des 14 %-Pauschalabzugs nach § 18b Abs. 5 SGB IV",
        "subject": "Antrag auf Überprüfung und Neuberechnung der Einkommensanrechnung bei meiner Witwen-/Witwerrente gemäß § 97 SGB VI i.V.m. §§ 18b, 18d SGB IV",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "hiermit beantrage ich, {NAME}, wohnhaft in {ADDRESS}, unter dem Aktenzeichen / der Versicherungsnummer {ID_NUM}, die Überprüfung und zeitnahe Neuberechnung der Einkommensanrechnung auf meine Hinterbliebenenrente gemäß § 97 SGB VI in Verbindung mit §§ 18a bis 18e SGB IV.",
          "Der konkrete Anlass meines Antrags lautet: {CASE_DETAILS}. Gemäß § 18b Absatz 5 SGB IV ist von meiner eigenen Bruttorente vorab ein pauschaler Abzug von 14 Prozent zur Ermittlung des fiktiven Nettoeinkommens vorzunehmen. Erst der Betrag, der den aktuellen gesetzlichen Freibetrag von 1.123,38 Euro monatlich (26,4-facher aktueller Rentenwert von 42,52 Euro, zuzüglich 238,29 Euro je waisenrentenberechtigtem Kind) übersteigt, darf zu 40 Prozent angerechnet werden.",
          "Sofern sich mein laufendes Erwerbs- oder Ersatzeinkommen im Vergleich zum Vorjahreszeitraum um mindestens 10 Prozent verringert hat, greift zudem § 18d Absatz 2 SGB IV, wonach die Einkommensminderung sofort ab dem Zeitpunkt ihres Eintritts und nicht erst zum nächsten 1. Juli zu berücksichtigen ist.",
          "Ich bitte Sie um Zusendung einer nachvollziehbaren Berechnungsanlage (Anlage zur Einkommensanrechnung) sowie um Nachzahlung der einbehaltenen Differenzbeträge auf mein Ihnen bekanntes Rentenkonto."
        ],
        "attachments": [
          "Aktueller Rentenbescheid bzw. Nachweis über das gesunkene eigene Einkommen (Vordruck R0665)",
          "Kopie des letzten Witwen-/Witwerrentenbescheids inklusive Anlage Einkommensanrechnung",
          "Ggf. Nachweis über waisenrentenberechtigte Kinder (Erhöhung des Freibetrags um 238,29 €)"
        ],
        "closing": "Mit freundlichen Grüßen"
      },
      {
        "id": "de_let_4",
        "menuTitle": "4. Überprüfungsantrag zum Rentenbescheid wegen fehlender Kindererziehungs- oder Ausbildungszeiten (§ 44 SGB X — V0100 / V0800)",
        "defaultRecipient": "Deutsche Rentenversicherung\nAbteilung Kontenklärung & Rentenfeststellung\n10709 Berlin",
        "defaultCaseDetails": "Nachmeldung von Kindererziehungszeiten (3,0 Entgeltpunkte je Kind nach § 56 SGB VI) und Berücksichtigungszeiten bis zum 10. Lebensjahr im Versicherungsverlauf",
        "subject": "Antrag auf Überprüfung meines Rentenbescheids / Versicherungsverlaufs gemäß § 44 SGB X sowie Antrag auf Feststellung von Kindererziehungszeiten (V0100 / V0800)",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "hiermit stelle ich, {NAME}, wohnhaft in {ADDRESS}, zur Versicherungsnummer {ID_NUM}, einen förmlichen Überprüfungsantrag gemäß § 44 Zehntes Buch Sozialgesetzbuch (SGB X) bezüglich meines bisherigen Rentenbescheids beziehungsweise meines aktuellen Versicherungsverlaufs.",
          "Bei der Durchsicht meiner Versicherungsunterlagen habe ich festgestellt, dass folgende rentenrechtliche Zeiten bislang unvollständig oder gar nicht berücksichtigt wurden: {CASE_DETAILS}. Nach § 44 Absatz 1 SGB X ist ein Verwaltungsakt, auch nachdem er unanfechtbar geworden ist, mit Wirkung für die Vergangenheit zurückzunehmen, soweit sich im Einzelfall ergibt, dass bei seinem Erlass das Recht unrichtig angewandt oder von einem unvollständigen Sachverhalt ausgegangen worden ist.",
          "Ich beantrage ausdrücklich die Nachtragung sämtlicher Kindererziehungszeiten nach §§ 56, 249 SGB VI, der Kinderberücksichtigungszeiten nach § 57 SGB VI bis zum vollendeten 10. Lebensjahr des Kindes sowie etwaiger schulischer und beruflicher Ausbildungszeiten.",
          "Sollte ich mich bereits im laufenden Rentenbezug befinden, beantrage ich gemäß § 44 Absatz 4 SGB X die rückwirkende Neuberechnung und Nachzahlung der höheren Altersrente für die gesetzliche Höchstdauer von bis zu vier Kalenderjahren zuzüglich Verzinsung nach § 44 SGB I."
        ],
        "attachments": [
          "Ausgefüllter Antrag auf Kontenklärung (Vordruck V0100)",
          "Ausgefüllter Antrag auf Feststellung von Kindererziehungszeiten (Vordruck V0800)",
          "Beglaubigte Kopien der Geburtsurkunden bzw. Ausbildungsnachweise / Lehrzeugnisse"
        ],
        "closing": "Mit freundlichen Grüßen"
      },
      {
        "id": "de_let_5",
        "menuTitle": "5. Antrag auf Eintragung von Entgeltpunkten für nicht erwerbsmäßige häusliche Pflege (§ 44 SGB XI & § 166 SGB VI)",
        "defaultRecipient": "Pflegekasse der pflegebedürftigen Person / Deutsche Rentenversicherung\nAbteilung Soziale Sicherung der Pflegepersonen",
        "defaultCaseDetails": "Häusliche Pflege eines Angehörigen mit Pflegegrad 3 im Umfang von mindestens 10 Stunden verteilt auf mindestens 2 Tage pro Woche",
        "subject": "Antrag auf Feststellung der Rentenversicherungspflicht als nicht erwerbsmäßige Pflegeperson gemäß § 44 SGB XI i.V.m. § 3 Satz 1 Nr. 1a und § 166 Abs. 2 SGB VI",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "hiermit zeige ich, {NAME}, wohnhaft in {ADDRESS} (meine Rentenversicherungsnummer bei der DRV: {ID_NUM}), an, dass ich als nicht erwerbsmäßig tätige Pflegeperson einen pflegebedürftigen Angehörigen ab Pflegegrad 2 in häuslicher Umgebung pflege, und beantrage die Abführung von Pflichtbeiträgen zur gesetzlichen Rentenversicherung nach § 44 SGB XI.",
          "Die konkreten Angaben zur Pflegesituation lauten: {CASE_DETAILS}. Die Pflege umfasst regelmäßig mindestens zehn Stunden wöchentlich, verteilt auf regelmäßig mindestens zwei Tage in der Woche, und wird nicht erwerbsmäßig ausgeübt. Sofern ich bereits eine Vollrente wegen Alters beziehe, habe ich zur Aktivierung der Rentenbeitragspflicht auf eine 99,99-Prozent-Teilrente nach § 42 SGB VI umgestellt.",
          "Gemäß § 166 Absatz 2 SGB VI erwirbt die Pflegeperson dadurch zusätzliche Entgeltpunkte, die sich zum 1. Juli des Folgejahres unmittelbar rentenerhöhend auswirken.",
          "Ich bitte um Zusendung des Fragebogens zur Zahlung der Beiträge zur sozialen Sicherung für nicht erwerbsmäßig tätige Pflegepersonen sowie um schriftliche Bestätigung der Beitragsmeldung an die Deutsche Rentenversicherung."
        ],
        "attachments": [
          "Fragebogen zur sozialen Sicherung der Pflegeperson (der Pflegekasse)",
          "Kopie des aktuellen Pflegegrad-Bescheids (mindestens Pflegegrad 2)",
          "Bei eigenem Altersrentenbezug: Kopie des Antrags auf 99,99 %-Teilrente (Vordruck R0240)"
        ],
        "closing": "Mit freundlichen Grüßen"
      },
      {
        "id": "de_let_6",
        "menuTitle": "6. Fristwahrender Widerspruch gegen einen fehlerhaften Rentenbescheid (§ 84 SGG — 1-Monats-Frist wahren)",
        "defaultRecipient": "Deutsche Rentenversicherung — Widerspruchsstelle\n10709 Berlin",
        "defaultCaseDetails": "Widerspruch gegen den Rentenbescheid vom 15.10.2026 wegen fehlerhafter Berechnung der Entgeltpunkte und Nichtberücksichtigung von Beitragszeiten",
        "subject": "Fristwahrender Widerspruch gemäß § 84 Sozialgerichtsgesetz (SGG) gegen Ihren Bescheid sowie Antrag auf vollständige Akteneinsicht nach § 25 SGB X",
        "salutation": "Sehr geehrte Damen und Herren,",
        "paragraphs": [
          "gegen Ihren Rentenbescheid zur Versicherungsnummer {ID_NUM} lege ich, {NAME}, wohnhaft in {ADDRESS}, hiermit fristgerecht innerhalb der einmonatigen Rechtsbehelfsfrist gemäß § 84 Sozialgerichtsgesetz (SGG) Widerspruch ein.",
          "Mein Widerspruch richtet sich insbesondere gegen folgenden Punkt: {CASE_DETAILS}. Nach meiner ersten Prüfung weicht die im Bescheid ausgewiesene Summe der Entgeltpunkte beziehungsweise die Berechnung der Abschläge und Anrechnungszeiten von den mir vorliegenden Nachweisen ab.",
          "Um den Widerspruch im Einzelnen fachlich zu begründen, beantrage ich hiermit gemäß § 25 Zehntes Buch Sozialgesetzbuch (SGB X) die Übersendung der vollständigen Berechnungsanlagen, insbesondere der detaillierten Ermittlung der Durchschnittsentgeltpunkte für beitragsfreie und beitragsgeminderte Zeiten nach §§ 71 bis 74 SGB VI.",
          "Die ausführliche schriftliche Widerspruchsbegründung werde ich unverzüglich nach Eingang der angeforderten Unterlagen nachreichen. Bitte bestätigen Sie mir den fristgerechten Eingang dieses Widerspruchs schriftlich."
        ],
        "attachments": [
          "Kopie des angefochtenen Bescheids der Deutschen Rentenversicherung",
          "Aufstellung der strittigen Versicherungszeiten / Entgeltpunkte",
          "Kopien der fehlenden Beitrags- oder Entgeltnachweise"
        ],
        "closing": "Mit freundlichen Grüßen"
      }
    ],
    "bridge": {
      "channelName": "Renten Zahlen",
      "pageTitle": "Renten Zahlen — Kostenloser 60-Sekunden-Ruhestands-Check & Rechner 2026",
      "metaDescription": "Prüfen Sie in 60 Sekunden Ihre Rente, KVdR 9/10-Regel, Mütterrente und Witwenrente anhand der gesetzlichen Werte 2026 (42,52 € Rentenwert). 100% kostenlos & DSGVO-privat.",
      "heroBadge": "🇩🇪 Unabhängiger Ruhestands- & Behörden-Schnelltest 2026 (Renten Zahlen)",
      "heroTitle": "Verlieren Sie jeden Monat Geld bei Rente, Krankenkasse (KVdR) oder Witwenrente?",
      "heroSubtitle": "Beantworten Sie 4 kurze Fragen in 45 Sekunden (große Tasten, direkt im Browser). Sie erhalten sofort Ihre persönliche Auswertung für 2026, den Live-Rechner und Ihre passende Gratis-Checkliste (0 €).",
      "trustPills": [
        "✓ 100 % Kostenloser Schnelltest",
        "✓ Gesetzliche Werte 2026 (Rentenwert 42,52 €)",
        "✓ Große Schrift (≥ 18 px) & Mobil-optimiert",
        "✓ 100 % Privat (DSGVO — keine Server-Speicherung)"
      ],
      "giftBtnPill": "0 € Gratis →",
      "videoBannerPrefix": "🎬 Passend zu Ihrem Video freigeschaltet:",
      "btnSkipToCalc": "🧮 Direkt zum Live-Rechner & den Gratis-Checklisten springen ↓",
      "btnBackToQuestions": "↑ Zurück zu den 4 Diagnose-Fragen",
      "liveCalcSectionBadge": "DIREKT AUSPROBIEREN — INTERAKTIVER LIVE-RECHNER 2026",
      "liveCalcSectionTitle": "Prüfen Sie Ihr Ergebnis sofort mit Ihren eigenen Zahlen",
      "liveCalcSectionIntro": "Tippen Sie einfach auf „−“ und „+“ oder wählen Sie einen der Schnellwahl-Knöpfe. Alle 3 Rechner für Deutschland stehen Ihnen hier sofort kostenlos zur Verfügung:",
      "step1Badge": "SCHRITT 1 — 100 % KOSTENLOSES GESCHENK FÜR SIE (0 €)",
      "step1Title": "Laden Sie jetzt Ihre passende Checkliste & Rechen-Vorlage für 0 € herunter",
      "step1Subtitle": "Wählen Sie Ihre kostenlose Arbeitshilfe (Großdruck-PDF ≥ 16,5 pt) passend zu Ihrem Ergebnis oder zum gesehenen Video. Sofort-Download ohne Kosten:",
      "step1PrimaryBtnPrefix": "🎁 Jetzt Gratis herunterladen (0 €): ",
      "step1AllGiftsLabel": "Alle 5 kostenlosen Themen-Checklisten (0 €) im Überblick — direkt anklicken:",
      "step2Badge": "SCHRITT 2 — DAS KOMPLETTSYSTEM 2026 FÜR IHREN RUHESTAND",
      "step2Title": "Rente Klar 2026 — Großdruck-Handbuch (88 S.) + Excel- & Web-Rechner + 10 Musterschreiben (DIN A4)",
      "step2Subtitle": "Für alle, die ihren Rentenbescheid, die KVdR-9/10-Regel, die Mütterrente oder die Witwenrente strukturiert gegenüber DRV und Krankenkasse prüfen und einreichen möchten.",
      "paidPackPrice": "19 €",
      "paidPackUrl": "https://maicolortizh.gumroad.com/l/rente-klar-vollversion",
      "paidPackBtnText": "📘 Komplettpaket „Rente Klar 2026“ jetzt sichern (19 €) →",
      "paidPackGuarantee": "Sofort-Download nach dem Kauf · Großdruck-Handbuch (PDF A4, ≥ 16,5 pt) · 5-Blatt Excel-Rechner (.xlsx) + Web-App · 10 druckfertige Musterschreiben (§ 44 SGB X, V0210, R0810, § 97 SGB VI)",
      "comparisonHeaders": [
        "Was Sie erhalten",
        "Gratis-Check (0 €)",
        "Komplettpaket 2026 (19 €)"
      ],
      "comparisonRows": [
        [
          "60-Sekunden-Diagnose & Themen-Checkliste (Großdruck ≥ 16,5 pt)",
          "✓ 1 Themen-Checkliste (0 €)",
          "✓ Alle 5 Themen-Module komplett"
        ],
        [
          "Großdruck-Praxishandbuch 2026 (DIN A4 PDF & DOCX)",
          "4-Seiten Kurz-Checkliste",
          "✓ Vollständiges Handbuch mit Rechenfällen"
        ],
        [
          "Interaktiver Rechner 2026 (Web-App + 5-Blatt Excel-Arbeitsmappe .xlsx)",
          "Basis-Vorschau im Browser",
          "✓ Vollversion (Web-App + Excel-Rechner .xlsx)"
        ],
        [
          "Druckfertige Musterschreiben für DRV, Krankenkasse & Finanzamt (A4 PDF)",
          "—",
          "✓ 10 kopier- & druckfertige A4-Musterschreiben"
        ]
      ],
      "legalFooter": {
        "disclaimerTitle": "⚖️ Wichtiger Rechtshinweis (Keine Rechts-, Renten- oder Steuerberatung):",
        "disclaimerText": "Dieses Angebot von „Renten Zahlen“ ist ein unabhängiges Bildungs-, Informations- und Rechenwerkzeug zur privaten Orientierung anhand der gesetzlichen Werte 2026. Es stellt keine Rechts-, Steuer- oder Rentenberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) oder Steuerberatungsgesetzes (StBerG) dar und steht in keinerlei Verbindung zur Deutschen Rentenversicherung (DRV), den gesetzlichen Krankenkassen oder Finanzbehörden. Für verbindliche Auskünfte wenden Sie sich bitte an die DRV, einen zugelassenen Rentenberater oder Steuerberater.",
        "privacyTitle": "🔒 Datenschutz (DSGVO / TDDDG):",
        "privacyText": "Alle Eingaben im 60-Sekunden-Schnelltest und im Live-Rechner werden zu 100 % lokal im Arbeitsspeicher Ihres eigenen Endgeräts (Client-Side JavaScript) berechnet. Es werden keine personenbezogenen Gesundheits- oder Finanzdaten an unsere Server übertragen oder gespeichert. Beim Klick auf einen Download-Link wechseln Sie zum Zahlungs- und Download-Anbieter Gumroad Inc.",
        "impressumTitle": "📄 Impressum & Kontakt (Anbieterkennzeichnung):",
        "impressumText": "Herausgeber: Maicol Ortiz · Digital Publishing & Senior Education · E-Mail / Leserservice: maicolortizh@gmail.com · Redaktioneller Stand: Gesetzliche Werte 2026 (Rentenwert 42,52 €)."
      },
      "outcomeToGiftEp": [
        1,
        3,
        5,
        4
      ],
      "freeGifts": [
        {
          "ep": 1,
          "code": "V01",
          "title": "Rente mit 63 oder 67: Abschlag- & Break-even-Rechner (0 €)",
          "desc": "Berechnen Sie den 0,3 %-Abschlag pro Monat, Ihren Netto-Vorsprung vor 67 und das genaue Überhol-Alter.",
          "url": "https://maicolortizh.gumroad.com/l/rente-63-oder-67-rechner-gratis"
        },
        {
          "ep": 2,
          "code": "V02",
          "title": "Rente im Ausland: Checkliste Krankenversicherung & Steuer (0 €)",
          "desc": "Was Sie vor einem längeren Auslandsaufenthalt oder Umzug bei DRV, KVdR und Finanzamt prüfen müssen.",
          "url": "https://maicolortizh.gumroad.com/l/rente-im-ausland-checkliste-gratis"
        },
        {
          "ep": 3,
          "code": "V03",
          "title": "KVdR 9/10-Regel & +36 Monate Kinder-Bonus Check (0 €)",
          "desc": "So zählen 3 Jahre pauschal je Kind (§ 5 Abs. 2 SGB V) für die günstige Pflichtversicherung der Rentner.",
          "url": "https://maicolortizh.gumroad.com/l/kvdr-9-10-regel-check-gratis"
        },
        {
          "ep": 4,
          "code": "V04",
          "title": "Mütterrente, Kindererziehung & Pflege-Punkte Check (0 €)",
          "desc": "Prüfen Sie fehlende Entgeltpunkte im Versicherungsverlauf (V0100 / V0800) und § 44 SGB X Nachzahlung.",
          "url": "https://maicolortizh.gumroad.com/l/muetterrente-minijob-check-gratis"
        },
        {
          "ep": 5,
          "code": "V05",
          "title": "Witwenrente Freibetrag 2026 (1.123,38 €) & Steuer-Check (0 €)",
          "desc": "Prüfen Sie den 14 %-Pauschalabzug (§ 18b SGB IV) und die Einkommensanrechnung nach § 97 SGB VI.",
          "url": "https://maicolortizh.gumroad.com/l/witwenrente-steuer-check-gratis"
        }
      ]
    }
  },
  "fr": {
    "code": "fr",
    "flag": "🇫🇷",
    "countryLabel": "🇫🇷 France (Retraite Clair)",
    "brandTitle": "Retraite Clair — Assistant Numérique Retraite, CSG & Succession 2026",
    "brandSubtitle": "Diagnostic en 60 secondes · Simulateur Mobile (Sans Excel) · Générateur de Lettres Officielles (PDF A4)",
    "privacyBanner": "🔒 100 % Privé (Conforme RGPD) : Vos données sont calculées sur votre propre appareil et ne sont jamais envoyées ni enregistrées sur aucun serveur.",
    "privacyEquivalentEs": "100% Privado: Tus datos se calculan en tu propio dispositivo y nunca se envían ni guardan en ningún servidor.",
    "nav": {
      "tabQuiz": "1. Diagnostic 60s (4 Questions)",
      "tabCalc": "2. Calculateur Mobile (Sans Excel)",
      "tabLetters": "3. Lettres Officielles (A4 PDF)",
      "fontSizeLabel": "Taille du texte :"
    },
    "ui": {
      "quizTitle": "MODULE 1 — Diagnostic Rapide en 60 Secondes (4 Questions)",
      "quizIntro": "Appuyez sur les grands boutons correspondant à votre situation. À la 4e question, vous obtenez votre bilan personnalisé avec les barèmes officiels 2026.",
      "questionProgress": "Question {current} sur 4",
      "btnBack": "← Revenir à la question précédente",
      "btnRestartQuiz": "↻ Recommencer le diagnostic",
      "diagResultTitle": "Votre Diagnostic Personnalisé Retraite & Patrimoine 2026",
      "diagThresholdLabel": "Seuil officiel 2026 à surveiller :",
      "diagMoneyAtStakeLabel": "Enjeu financier annuel ou successoral :",
      "diagFirstStepLabel": "Votre première démarche concrète dès demain :",
      "diagSourceLabel": "Référence légale officielle 2026 :",
      "btnGoCalc": "🧮 Calculer mon cas exact avec mes chiffres",
      "btnGoLetter": "✉️ Ouvrir la lettre officielle prête à imprimer (A4)",
      "calcTitle": "MODULE 2 — Calculateur Interactif Mobile 2026 (Sans Excel)",
      "calcIntro": "Choisissez votre situation et ajustez les montants avec les grands boutons « − » et « + » ou les boutons de sélection rapide.",
      "selectCalcLabel": "Choisissez votre simulation :",
      "comparisonTitle": "Comparaison Visuelle Directe : Option A vs Option B",
      "optionALabel": "Option A",
      "optionBLabel": "Option B",
      "plainExplanationTitle": "Explication en langage clair :",
      "officialSourceBadge": "Source officielle vérifiée 2026 :",
      "btnOpenMatchingLetter": "✉️ Générer la lettre officielle pour ce dossier →",
      "lettersTitle": "MODULE 3 — Générateur Automatique de Lettres Officielles (Form-to-PDF A4)",
      "lettersIntro": "Sélectionnez votre modèle de courrier, remplissez les 5 grandes cases ci-dessous et imprimez ou enregistrez votre lettre A4 prête à signer.",
      "selectLetterLabel": "1. Choisissez la lettre officielle dont vous avez besoin (6 modèles) :",
      "formSectionTitle": "2. Vos coordonnées et informations (insérées en gras dans la lettre) :",
      "field1Label": "1. Prénom et Nom :",
      "field1Placeholder": "Ex. : Jean-Pierre et Monique Martin",
      "field1Default": "Jean-Pierre Martin",
      "field2Label": "2. Adresse complète, Code postal et Ville :",
      "field2Placeholder": "Ex. : 14 rue de la République, 69002 Lyon",
      "field2Default": "14 rue de la République, 69002 Lyon",
      "field3Label": "3. N° de Sécurité Sociale (NIR) / Référence fiscale :",
      "field3Placeholder": "Ex. : 1 56 04 69 123 045 22",
      "field3Default": "1 56 04 69 123 045 22",
      "field4Label": "4. Organisme destinataire (pré-rempli automatiquement, modifiable) :",
      "field5Label": "5. Détails spécifiques de votre dossier (dates, montants, RFR) :",
      "previewSectionTitle": "Aperçu en direct de votre Lettre Officielle (Format A4 prêt à imprimer)",
      "btnPrintPdf": "🖨️ Imprimer / Enregistrer la Lettre en PDF (A4)",
      "btnCopyText": "📋 Copier le Texte Complet de la Lettre (pour CARSAT / Impôts / Email)",
      "copySuccessMsg": "✓ Le texte complet de votre lettre a été copié ! Vous pouvez maintenant le coller dans votre messagerie sécurisée CARSAT, Agirc-Arrco ou impots.gouv.fr.",
      "attachmentsTitle": "Pièces justificatives à joindre (à cocher avant envoi) :",
      "signatureLabel": "Signature manuscrite :"
    },
    "quiz": {
      "questions": [
        {
          "id": "q1",
          "title": "1. Dans quelle tranche d'âge ou étape de retraite vous situez-vous ?",
          "options": [
            "60 à 63 ans — Je prépare ma liquidation de retraite (carrière longue / taux plein)",
            "64 à 69 ans — Je suis retraité et j'approche du cap fiscal crucial des 70 ans",
            "70 à 77 ans — Je veux protéger mon pouvoir d'achat (CSG) et organiser ma succession",
            "78 ans et plus — Protection du conjoint survivant, frais bancaires et réversion"
          ]
        },
        {
          "id": "q2",
          "title": "2. Quelle est la composition fiscale de votre foyer (nombre de parts) ?",
          "options": [
            "1 part fiscale (Personne seule, célibataire, divorcée ou veuve)",
            "1,5 part fiscale (Personne seule avec demi-part ancien combattant, invalidité ou parent isolé)",
            "2 parts fiscales (Couple marié ou pacsé soumis à imposition commune)",
            "2,5 parts ou plus (Couple avec personne rattachée ou carte mobilité inclusion)"
          ]
        },
        {
          "id": "q3",
          "title": "3. Quel est votre Revenu Fiscal de Référence (RFR) ou votre épargne à protéger ?",
          "options": [
            "RFR inférieur à 16 755 € (seul) ou 25 701 € (couple) — Zone exonération / taux réduit CSG",
            "RFR entre 16 755 € et 26 002 € (seul) ou 25 701 € à 39 890 € (couple) — Zone médiane 6,6 %",
            "RFR supérieur à 26 002 € (seul) ou 39 890 € (couple) — Taux normal CSG 8,3 % (9,1 % total)",
            "Patrimoine ou Assurance-Vie de plus de 50 000 € à transmettre aux enfants sans surtaxe"
          ]
        },
        {
          "id": "q4",
          "title": "4. Quelle est votre priorité numéro 1 aujourd'hui ?",
          "options": [
            "Seuils de CSG Retraite 2026 : Vérifier mon taux (0 %, 3,8 %, 6,6 % ou 8,3 %) et le lissage légal",
            "Abattements Succession (100 000 €/enfant) & Assurance-Vie (152 500 € avant 70 ans vs 30 500 € après 70 ans)",
            "Frais bancaires après décès : Appliquer le plafond légal 2026 (1 % max 850 €) et débloquer 5 910 € d'obsèques",
            "Révision de pension CARSAT / Agirc-Arrco ou demande de pension de réversion (54 % / 60 %)"
          ]
        }
      ],
      "outcomes": [
        {
          "title": "Priorité 1 : Barème CSG Retraite 2026 & Mécanisme de Lissage (Art. L. 136-8 CSS)",
          "threshold2026": "Pour 1 part : Exonération 0 % sous 12 817 € | Taux réduit 3,8 % sous 16 755 € | Taux médian 6,6 % sous 26 002 €. Pour 2 parts : 0 % sous 19 661 € | 3,8 % sous 25 701 € | 6,6 % sous 39 890 €.",
          "moneyAtStake": "De 750 € à 1 680 € par an de pension nette préservée. Si vous franchissez le seuil de 3,8 % pour la 1re fois, le « lissage légal » bloque la hausse à 6,6 % pendant 1 an !",
          "firstStep": "Vérifiez la ligne « Revenu Fiscal de Référence » de votre avis d'imposition et envoyez une réclamation de taux CSG à la CARSAT et à l'Agirc-Arrco.",
          "source": "Article L. 136-8 du Code de la sécurité sociale — Circulaire CNAV / Barème officiel 2026",
          "calcIndex": 0,
          "letterIndex": 0
        },
        {
          "title": "Priorité 2 : Succession (100 000 € / enfant) & Assurance-Vie (Avant vs Après 70 ans)",
          "threshold2026": "Abattement parent-enfant : 100 000 € tous les 15 ans (Art. 779 CGI) + Don familial de sommes d'argent : 31 865 € (Art. 790 G CGI) + Assurance-Vie : 152 500 € par bénéficiaire avant 70 ans (Art. 990 I) contre 30 500 € global après 70 ans (Art. 757 B).",
          "moneyAtStake": "Jusqu'à 24 400 € à 48 000 € de droits de succession économisés en séparant les versements avant et après 70 ans.",
          "firstStep": "Ouvrez un contrat d'assurance-vie distinct pour tout versement après 70 ans et vérifiez la clause bénéficiaire démembrée ou par représentation.",
          "source": "Articles 779, 790 G, 990 I et 757 B du Code général des impôts (BOFiP 2026)",
          "calcIndex": 1,
          "letterIndex": 2
        },
        {
          "title": "Priorité 3 : Plafonnement des Frais Bancaires de Succession 2026 & Déblocage Obsèques",
          "threshold2026": "Loi n° 2025-127 : 0 € de frais sous 5 910 € d'avoirs (ou succession simple) et plafond strict de 1 % des avoirs avec un maximum absolu de 850 €. Déblocage direct obsèques jusqu'à 5 910 € (Art. L. 312-1-4 CMF).",
          "moneyAtStake": "Jusqu'à 650 € de frais bancaires abusifs remboursés et 5 910 € débloqués immédiatement sans avancer l'argent de votre poche.",
          "firstStep": "Transmettez à la banque la facture des pompes funèbres avec la lettre visant l'article L. 312-1-4 du Code monétaire et financier et le plafond légal de 1 % / 850 €.",
          "source": "Loi n° 2025-127 & Article L. 312-1-4 du Code monétaire et financier (2026)",
          "calcIndex": 2,
          "letterIndex": 1
        },
        {
          "title": "Priorité 4 : Régularisation de Carrière CARSAT / Agirc-Arrco & Pension de Réversion",
          "threshold2026": "Réversion CNAV : 54 % (sous plafond de ressources 2026 : 24 710,40 € seul / 39 536,64 € en couple) + Réversion Agirc-Arrco : 60 % SANS aucune condition de ressources.",
          "moneyAtStake": "De 1 800 € à 6 400 € par an (notamment la réversion Agirc-Arrco de 60 % souvent oubliée par les conjoints dépassant le plafond CNAV).",
          "firstStep": "Envoyez la demande de révision ou de réversion couplée CNAV / Agirc-Arrco par courrier recommandé ou via votre espace Info-Retraite.",
          "source": "Articles L. 353-1 et L. 351-1 du Code de la sécurité sociale & Accord national Agirc-Arrco",
          "calcIndex": 0,
          "letterIndex": 3
        }
      ]
    },
    "calculators": [
      {
        "id": "fr_calc_1",
        "title": "1. Seuils de CSG Retraite 2026 (RFR & Parts fiscales : 0 % · 3,8 % · 6,6 % · 8,3 %)",
        "subtitle": "Vérifiez votre tranche officielle de prélèvements sociaux (CSG + CRDS + CASA) en 2026 et calculez l'écart exact en euros avec le seuil inférieur.",
        "legalRef": "Art. L. 136-8 du Code de la sécurité sociale · Barème officiel Assurance Retraite 2026",
        "letterIndex": 0,
        "inputs": [
          {
            "id": "rfr",
            "label": "Votre Revenu Fiscal de Référence (RFR inscrit sur votre avis d'imposition en €/an) :",
            "unit": "€/an",
            "min": 8000,
            "max": 75000,
            "step": 500,
            "default": 25200,
            "presets": [
              12500,
              16500,
              25200,
              38500
            ]
          },
          {
            "id": "parts",
            "label": "Nombre de parts fiscales de votre foyer (1 = seul, 2 = couple marié/pacsé) :",
            "unit": "parts",
            "min": 1,
            "max": 4,
            "step": 0.5,
            "default": 2,
            "presets": [
              1,
              1.5,
              2,
              2.5
            ]
          },
          {
            "id": "pensionBrute",
            "label": "Pension de retraite brute totale du foyer (CARSAT + Agirc-Arrco en €/mois) :",
            "unit": "€/mois",
            "min": 700,
            "max": 7000,
            "step": 100,
            "default": 2400,
            "presets": [
              1400,
              1900,
              2400,
              3200
            ]
          }
        ]
      },
      {
        "id": "fr_calc_2",
        "title": "2. Abattements Succession & Assurance-Vie (100 000 €/enfant · 152 500 € avant 70 ans vs 30 500 € après 70 ans)",
        "subtitle": "Comparez les droits de succession payés par vos enfants selon que vous utilisez les abattements avant 70 ans (Art. 990 I) ou après 70 ans (Art. 757 B).",
        "legalRef": "Articles 779, 790 G, 990 I et 757 B du Code général des impôts (CGI 2026)",
        "letterIndex": 2,
        "inputs": [
          {
            "id": "nbChildren",
            "label": "Nombre d'enfants bénéficiaires :",
            "unit": "enfants",
            "min": 1,
            "max": 6,
            "step": 1,
            "default": 2,
            "presets": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "id": "estateHorsAV",
            "label": "Patrimoine hors assurance-vie (maison + livrets/comptes en €) :",
            "unit": "€",
            "min": 20000,
            "max": 1200000,
            "step": 20000,
            "default": 240000,
            "presets": [
              150000,
              240000,
              350000,
              500000
            ]
          },
          {
            "id": "avCapital",
            "label": "Capital placé ou à placer en Assurance-Vie (€) :",
            "unit": "€",
            "min": 10000,
            "max": 800000,
            "step": 10000,
            "default": 160000,
            "presets": [
              60000,
              120000,
              160000,
              300000
            ]
          }
        ]
      },
      {
        "id": "fr_calc_3",
        "title": "3. Frais bancaires après décès & Déblocage obsèques (Plafond 1 % / 850 € & 5 910 €)",
        "subtitle": "Calculez le plafond légal strict des frais bancaires de succession en 2026 et la somme immédiatement déblocable pour payer les obsèques sans notaire.",
        "legalRef": "Loi n° 2025-127 (plafonnement 1 % max 850 €) & Art. L. 312-1-4 Code monétaire et financier (5 910 €)",
        "letterIndex": 1,
        "inputs": [
          {
            "id": "bankBalance",
            "label": "Total des avoirs sur les comptes et livrets du défunt (€) :",
            "unit": "€",
            "min": 1000,
            "max": 300000,
            "step": 2000,
            "default": 38000,
            "presets": [
              5000,
              18000,
              38000,
              95000
            ]
          },
          {
            "id": "funeralBill",
            "label": "Montant de la facture des obsèques (€) :",
            "unit": "€",
            "min": 1500,
            "max": 12000,
            "step": 250,
            "default": 4900,
            "presets": [
              3500,
              4900,
              5910,
              7500
            ]
          }
        ]
      }
    ],
    "letters": [
      {
        "id": "fr_let_1",
        "menuTitle": "1. Demande de révision du taux de CSG sur pension de retraite & application du lissage (Art. L. 136-8 CSS)",
        "defaultRecipient": "CARSAT / Caisse Nationale d'Assurance Vieillesse (CNAV)\nService Réclamation CSG — Prélèvements Sociaux\n75951 Paris Cedex 19",
        "defaultCaseDetails": "Revenu Fiscal de Référence (RFR) de 24 850 € pour 2 parts fiscales sur mon dernier avis d'imposition ; demande d'application du taux réduit de CSG à 3,8 % (ou maintien par lissage légal)",
        "subject": "Demande de rectification du taux de Contribution Sociale Généralisée (CSG), CRDS et CASA appliqué à ma pension de retraite (Article L. 136-8 du Code de la sécurité sociale)",
        "salutation": "Madame, Monsieur,",
        "paragraphs": [
          "Je soussigné(e) {NAME}, demeurant au {ADDRESS}, immatriculé(e) sous le numéro de Sécurité sociale {ID_NUM}, vous prie par la présente de bien vouloir procéder à la vérification et à la rectification du taux de prélèvements sociaux (CSG, CRDS et CASA) appliqué sur ma pension de retraite.",
          "En effet, les éléments fiscaux de mon foyer sont les suivants : {CASE_DETAILS}. Conformément au barème officiel en vigueur en application de l'article L. 136-8, III et III bis du Code de la sécurité sociale, mon Revenu Fiscal de Référence rapporté à mon nombre de parts fiscales m'ouvre droit à l'exonération ou au taux réduit de CSG (ou au dispositif légal de lissage en cas de premier dépassement ponctuel du seuil du taux réduit).",
          "Or, je constate sur mon dernier décompte de paiement mensuel qu'un taux supérieur (6,6 % ou 8,3 % hors CRDS et CASA) a été prélevé sur ma pension brute, entraînant une retenue excessive chaque mois.",
          "Je vous demande en conséquence de bien vouloir mettre à jour mon taux de CSG dès la prochaine échéance mensuelle, de transmettre cette rectification à ma caisse complémentaire Agirc-Arrco et de procéder au remboursement intégral des sommes prélevées à tort depuis le 1er janvier."
        ],
        "attachments": [
          "Copie intégrale de mes deux derniers avis d'imposition sur le revenu (mentionnant le RFR et le nombre de parts)",
          "Copie de mon dernier relevé mensuel de paiement de pension CARSAT / Agirc-Arrco",
          "Relevé d'Identité Bancaire (RIB) pour le remboursement du trop-perçu"
        ],
        "closing": "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
      },
      {
        "id": "fr_let_2",
        "menuTitle": "2. Demande de prélèvement direct des frais d'obsèques (5 910 €) & plafonnement des frais bancaires de succession (Art. L. 312-1-4 CMF & Loi n° 2025-127)",
        "defaultRecipient": "Service Successions de la Banque\nÀ l'attention de la Direction de l'Agence bancaire",
        "defaultCaseDetails": "Règlement direct de la facture d'obsèques de 4 850 € (dans la limite légale de 5 910 €) et application stricte du plafond légal de frais de dossier succession (maximum 1 % des avoirs plafonné à 850 €, ou 0 € sous 5 910 €)",
        "subject": "Demande de règlement direct des frais d'obsèques sur les comptes du défunt (Art. L. 312-1-4 du CMF) et application du plafonnement légal des frais bancaires de succession",
        "salutation": "Madame, Monsieur le Directeur,",
        "paragraphs": [
          "Agissant en qualité d'ayant droit / proche ayant pourvu aux funérailles, je soussigné(e) {NAME}, domicilié(e) au {ADDRESS} (référence dossier / compte : {ID_NUM}), vous adresse la présente demande concernant le règlement des frais d'obsèques et la tarification appliquée au dossier de succession.",
          "Les éléments précis de ma demande sont les suivants : {CASE_DETAILS}. En vertu de l'article L. 312-1-4 du Code monétaire et financier, la personne qui a qualité pour pourvoir aux funérailles du défunt peut obtenir, sur présentation de la facture des obsèques et dans la limite des disponibilités du compte, le débit sur les comptes de paiement du défunt des sommes nécessaires au règlement de tout ou partie des frais funéraires, jusqu'à concurrence du plafond réglementaire de 5 910 euros.",
          "Par ailleurs, je vous rappelle qu'en application de la loi encadrant les frais bancaires sur succession (articles L. 312-1-4-1 et suivants du Code monétaire et financier), les frais de traitement sont totalement gratuits pour les successions simples ou inférieures à 5 910 euros, et strictement plafonnés dans tous les autres cas à 1 % du montant total des avoirs avec un plafond absolu de 850 euros.",
          "Je vous prie donc de procéder sans délai au virement de la facture d'obsèques ci-jointe et de me confirmer par écrit le respect strict du plafonnement légal des frais de succession."
        ],
        "attachments": [
          "Copie intégrale de l'acte de décès",
          "Facture originale détaillée de l'entreprise de pompes funèbres (et RIB du prestataire ou justificatif d'avance)",
          "Copie de ma pièce d'identité et justificatif du lien de parenté (livret de famille)"
        ],
        "closing": "Veuillez agréer, Madame, Monsieur le Directeur, l'expression de ma considération distinguée."
      },
      {
        "id": "fr_let_3",
        "menuTitle": "3. Déclaration de don familial exonéré (Art. 779 & 790 G CGI) & rédaction de clause bénéficiaire Assurance-Vie (Art. 990 I CGI)",
        "defaultRecipient": "Service de l'Enregistrement — Centre des Finances Publiques\n(ou Compagnie d'Assurance-Vie — Service Gestion des Clauses Bénéficiaires)",
        "defaultCaseDetails": "Utilisation du cumul d'abattements : 31 865 € (don familial de sommes d'argent Art. 790 G CGI) + 100 000 € par enfant (Art. 779 CGI) et mise à jour de la clause bénéficiaire Assurance-Vie avant 70 ans (abattement de 152 500 € par bénéficiaire Art. 990 I CGI)",
        "subject": "Notification de donation familiale exonérée de droits (Articles 779 et 790 G du CGI) et mise à jour expresse de ma clause bénéficiaire d'assurance-vie (Article 990 I du CGI)",
        "salutation": "Madame, Monsieur,",
        "paragraphs": [
          "Je soussigné(e) {NAME}, demeurant au {ADDRESS}, identifié(e) sous le numéro fiscal / contrat {ID_NUM}, vous informe par la présente des dispositions patrimoniales prises au profit de mes descendants directs conformément aux articles 779, 790 G et 990 I du Code général des impôts.",
          "Les caractéristiques de l'opération sont les suivantes : {CASE_DETAILS}. Concernant le don familial de sommes d'argent, je sollicite l'application prioritaire de l'exonération spécifique de 31 865 euros prévue à l'article 790 G du CGI (donateur âgé de moins de 80 ans au profit d'un enfant ou petit-enfant majeur), cumulable avec l'abattement général de 100 000 euros par enfant prévu à l'article 779 I du CGI renouvelable tous les quinze ans.",
          "Concernant mon contrat d'assurance-vie alimenté avant mon 70e anniversaire (article 990 I du CGI offrant un abattement de 152 500 euros par bénéficiaire désigné), je demande que ma clause bénéficiaire mentionne expressément la représentation en cas de prédécès ou de renonciation (« mes enfants vivants ou représentés, par parts égales entre eux ; à défaut mes héritiers »).",
          "Je vous remercie de bien vouloir enregistrer ces dispositions et de m'adresser un avenant ou récépissé écrit confirmant cette prise en compte."
        ],
        "attachments": [
          "Formulaire fiscal n° 2735 (Déclaration de dons manuels et de sommes d'argent) dûment complété",
          "Copie des pièces d'identité du donateur et des bénéficiaires + copie du livret de famille",
          "Copie du contrat d'assurance-vie concerné"
        ],
        "closing": "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
      },
      {
        "id": "fr_let_4",
        "menuTitle": "4. Demande de pension de réversion régime de base (54 % CARSAT) et complémentaire (60 % Agirc-Arrco sans condition de ressources)",
        "defaultRecipient": "CARSAT (Assurance Retraite) & Caisse Agirc-Arrco\nService des Pensions de Réversion",
        "defaultCaseDetails": "Demande de liquidation de ma pension de réversion au taux de 54 % (régime général CNAV) et de 60 % (régime complémentaire Agirc-Arrco sans condition de ressources) à compter du premier jour du mois suivant le décès",
        "subject": "Demande de liquidation de pension de réversion des régimes de base (Art. L. 353-1 CSS — Cerfa n° 13364) et complémentaire Agirc-Arrco",
        "salutation": "Madame, Monsieur,",
        "paragraphs": [
          "Je soussigné(e) {NAME}, demeurant au {ADDRESS}, immatriculé(e) sous le numéro de Sécurité sociale {ID_NUM}, ai l'honneur de solliciter par la présente la liquidation de mes droits à pension de réversion suite au décès de mon conjoint.",
          "Ma situation et les éléments du dossier sont les suivants : {CASE_DETAILS}. Conformément à l'article L. 353-1 du Code de la sécurité sociale pour le régime général (taux de 54 %, assorti le cas échéant de la majoration de 11,1 % prévue à l'article L. 353-6 CSS et de la majoration pour enfants) ainsi qu'aux règles de l'Accord national interprofessionnel Agirc-Arrco (taux de 60 % attribué sans aucune condition de ressources), je demande l'ouverture de mes droits.",
          "Je vous rappelle que pour l'appréciation du plafond de ressources du régime de base, mes revenus d'activité éventuels bénéficient d'un abattement légal de 30 % dès lors que j'ai atteint l'âge de 55 ans, et que les biens issus de la communauté ou de la succession du conjoint décédé sont exclus du calcul.",
          "Afin de conserver l'effet rétroactif au premier jour du mois suivant le décès (demande déposée dans le délai de douze mois), je vous prie de bien vouloir enregistrer ce dépôt et m'accuser réception de mon dossier."
        ],
        "attachments": [
          "Copie intégrale de l'acte de naissance du conjoint décédé (portant mention du mariage et du décès)",
          "Copie intégrale de mon acte de naissance et copie du livret de famille à jour",
          "Relevé d'Identité Bancaire (RIB) et copie du dernier avis d'imposition"
        ],
        "closing": "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations respectueuses."
      },
      {
        "id": "fr_let_5",
        "menuTitle": "5. Réclamation pour régularisation de relevé de carrière (Trimestres enfants, service national, chômage ou salaires oubliés)",
        "defaultRecipient": "CARSAT / CNAV — Service Régularisation de Carrière\n(et Caisse de retraite complémentaire Agirc-Arrco)",
        "defaultCaseDetails": "Régularisation de 8 trimestres de majoration de durée d'assurance pour enfants (Art. L. 351-4 CSS) et de 4 trimestres de service national / périodes salariées non reportées sur mon Relevé Individuel de Situation (RIS)",
        "subject": "Demande de régularisation de mon Relevé Individuel de Situation (RIS) et de révision du nombre de trimestres validés et points Agirc-Arrco (Articles L. 351-1 à L. 351-4 du CSS)",
        "salutation": "Madame, Monsieur,",
        "paragraphs": [
          "Je soussigné(e) {NAME}, domicilié(e) au {ADDRESS}, titulaire du numéro de Sécurité sociale {ID_NUM}, sollicite par la présente la rectification de mon Relevé Individuel de Situation (RIS) ainsi que le recalcul de mes droits à retraite de base et complémentaire.",
          "Après vérification détaillée de mon relevé de carrière, j'ai constaté les omissions suivantes : {CASE_DETAILS}. En application des articles L. 351-1, L. 351-3 (périodes assimilées : service national, maladie, chômage indemnisé) et L. 351-4 du Code de la sécurité sociale (majoration de durée d'assurance de 4 trimestres au titre de la maternité et 4 trimestres au titre de l'éducation par enfant), ces périodes doivent impérativement être intégrées à ma durée d'assurance.",
          "L'absence de ces trimestres et des points Agirc-Arrco correspondants fausse le calcul de mon taux de liquidation (décote injustifiée ou perte de surcote) ainsi que la proratisation de ma pension.",
          "Vous trouverez ci-joint les pièces justificatives probantes. Je vous demande de bien vouloir mettre à jour mon compte individuel et de m'adresser un relevé de carrière rectifié sous trente jours."
        ],
        "attachments": [
          "Copies des bulletins de salaire ou certificats de travail des périodes manquantes",
          "Copie du livret de famille (pour les trimestres maternité/éducation de chaque enfant)",
          "État signalétique et des services (pour le service national) ou attestations Pôle Emploi / France Travail"
        ],
        "closing": "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
      },
      {
        "id": "fr_let_6",
        "menuTitle": "6. Saisine de la Commission de Recours Amiable (CRA) pour contester une notification de retraite ou un refus (Art. R. 142-1 CSS)",
        "defaultRecipient": "Monsieur le Président de la Commission de Recours Amiable (CRA)\nCARSAT / CNAV",
        "defaultCaseDetails": "Contestation dans le délai légal de 2 mois de la notification de retraite du 12/10/2026 comportant une erreur sur le Salaire Annuel Moyen (SAM des 25 meilleures années) et sur le nombre de trimestres retenus",
        "subject": "Recours administratif préalable obligatoire devant la Commission de Recours Amiable (CRA) — Article R. 142-1 du Code de la sécurité sociale (Lettre recommandée avec AR)",
        "salutation": "Monsieur le Président de la Commission de Recours Amiable,",
        "paragraphs": [
          "Je soussigné(e) {NAME}, demeurant au {ADDRESS}, immatriculé(e) sous le numéro de Sécurité sociale {ID_NUM}, forme par la présente un recours gracieux et préalable obligatoire devant la Commission de Recours Amiable dans le délai réglementaire de deux mois prévu à l'article R. 142-1 du Code de la sécurité sociale.",
          "Ma contestation porte sur la décision suivante : {CASE_DETAILS}. Après examen approfondi du détail de calcul annexé à votre notification, il apparaît que plusieurs salaires revalorisés figurant parmi mes vingt-cinq meilleures années ainsi que des trimestres cotisés dûment justifiés n'ont pas été retenus dans la formule de liquidation.",
          "En conséquence, le montant mensuel brut qui m'est notifié est inférieur à mes droits légaux acquis au titre des articles L. 351-1 et R. 351-29 du Code de la sécurité sociale.",
          "Je prie la Commission de bien vouloir annuler ou réformer la décision contestée, d'ordonner une nouvelle liquidation conforme aux pièces justificatives jointes et de procéder au versement rétroactif du rappel d'arrérages depuis la date d'effet de ma retraite."
        ],
        "attachments": [
          "Copie intégrale de la notification de retraite ou de la décision contestée",
          "Tableau comparatif des trimestres et salaires omis avec justificatifs correspondants",
          "Copie des courriers de réclamation précédemment adressés à la caisse"
        ],
        "closing": "Je vous prie de croire, Monsieur le Président, à l'assurance de ma considération distinguée."
      }
    ],
    "bridge": {
      "channelName": "Calcul Retraite",
      "pageTitle": "Calcul Retraite — Diagnostic Gratuit en 60 Secondes & Simulateur 2026",
      "metaDescription": "Vérifiez en 60 secondes votre taux de CSG Retraite 2026, vos abattements de succession (152 500 € avant 70 ans), le plafond des frais bancaires (850 €) et votre pension CARSAT.",
      "heroBadge": "🇫🇷 Diagnostic Indépendant Retraite, CSG & Succession 2026 (Calcul Retraite)",
      "heroTitle": "Payez-vous trop de CSG sur votre retraite ou de frais sur votre succession en 2026 ?",
      "heroSubtitle": "Répondez à 4 questions simples en 45 secondes (grands boutons tactiles, directement dans le navigateur). Obtenez immédiatement votre bilan personnalisé 2026, le simulateur en direct et votre guide gratuit (0 €).",
      "trustPills": [
        "✓ Diagnostic 100 % Gratuit (0 €)",
        "✓ Barèmes Légaux 2026 (CNAV / CGI / CMF)",
        "✓ Grands Caractères (≥ 18 px) & Mobile",
        "✓ 100 % Privé (Conforme RGPD — aucun serveur)"
      ],
      "giftBtnPill": "0 € Gratuit →",
      "videoBannerPrefix": "🎬 Fiche gratuite correspondant à votre vidéo :",
      "btnSkipToCalc": "🧮 Aller directement au Simulateur en direct & aux Guides Gratuits (0 €) ↓",
      "btnBackToQuestions": "↑ Revenir aux 4 questions du diagnostic",
      "liveCalcSectionBadge": "SIMULATION IMMÉDIATE — CALCULATEUR INTERACTIF 2026",
      "liveCalcSectionTitle": "Testez vos propres chiffres en 5 secondes",
      "liveCalcSectionIntro": "Appuyez sur les grands boutons « − » et « + » ou sur les montants rapides ci-dessous. Les 3 simulateurs 2026 sont en accès libre :",
      "step1Badge": "ÉTAPE 1 — VOTRE FICHE PRATIQUE 100 % GRATUITE (0 €)",
      "step1Title": "Téléchargez gratuitement votre Fiche de Vérification & Simulateur (0 €)",
      "step1Subtitle": "Recevez immédiatement la fiche pratique en grands caractères (PDF A4 ≥ 16,5 pt) correspondant à votre résultat ou à la vidéo que vous venez de regarder :",
      "step1PrimaryBtnPrefix": "🎁 Télécharger gratuitement (0 €) : ",
      "step1AllGiftsLabel": "Les 5 fiches pratiques gratuites (0 €) disponibles — cliquez sur votre sujet :",
      "step2Badge": "ÉTAPE 2 — LE DOSSIER COMPLET RETRAITE CLAIR 2026",
      "step2Title": "Retraite Clair 2026 — Guide Grands Caractères (84 p.) + Simulateurs Excel & Web + 10 Lettres Prêtes à Imprimer (PDF A4)",
      "step2Subtitle": "Tout pour vérifier et faire valoir vos droits auprès de la CARSAT, de l'Agirc-Arrco, des Impôts et de votre banque avec des modèles clairs et chiffrés.",
      "paidPackPrice": "19 €",
      "paidPackUrl": "https://maicolortizh.gumroad.com/l/retraite-clair-version-complete",
      "paidPackBtnText": "📘 Obtenir le Pack Complet « Retraite Clair 2026 » (19 €) →",
      "paidPackGuarantee": "Accès immédiat · Guide pratique A4 en grands caractères ≥ 16,5 pt (PDF & DOCX) · Classeur Excel 5 onglets (.xlsx) + Simulateur Web · 10 modèles de courriers (CARSAT, Agirc-Arrco, Banque, Impôts)",
      "comparisonHeaders": [
        "Ce qui est inclus",
        "Fiche Gratuite (0 €)",
        "Pack Complet 2026 (19 €)"
      ],
      "comparisonRows": [
        [
          "Diagnostic en 60 secondes & Fiche de vérification PDF (≥ 16,5 pt)",
          "✓ 1 Fiche thématique (0 €)",
          "✓ Les 5 dossiers complets réunis"
        ],
        [
          "Guide Complet Grands Caractères 2026 (PDF A4 & DOCX)",
          "Fiche synthèse 4 pages",
          "✓ Guide intégral avec cas chiffrés"
        ],
        [
          "Simulateur 2026 (Application Web + Classeur Excel 5 onglets .xlsx)",
          "Aperçu dans le navigateur",
          "✓ Version complète (Web + Fichier Excel .xlsx)"
        ],
        [
          "Modèles de Lettres Types pour CARSAT, Banque & Impôts (PDF A4)",
          "—",
          "✓ 10 modèles prêts à compléter et signer"
        ]
      ],
      "legalFooter": {
        "disclaimerTitle": "⚖️ Mentions légales & Avertissement (Absence de conseil juridique, fiscal ou financier) :",
        "disclaimerText": "Le site « Calcul Retraite » est un outil pédagogique et informatif indépendant basé sur les barèmes légaux en vigueur en 2026. Les simulations fournies à titre purement indicatif ne constituent en aucun cas un conseil juridique, fiscal, notarial ou financier personnalisé. Ce site est totalement indépendant de l'Assurance Retraite (CNAV / CARSAT), de l'Agirc-Arrco et de la Direction générale des Finances publiques (DGFiP).",
        "privacyTitle": "🔒 Protection des données personnelles (RGPD) :",
        "privacyText": "100 % des calculs effectués sur cette page (quiz de 60 secondes et simulateur en direct) sont exécutés localement dans le navigateur de votre appareil. Aucune donnée financière ou personnelle n'est transmise ni enregistrée sur nos serveurs.",
        "impressumTitle": "📄 Éditeur & Contact :",
        "impressumText": "Éditeur : Maicol Ortiz · Digital Publishing & Senior Education · Contact / Support : maicolortizh@gmail.com · Barèmes mis à jour pour l'année 2026."
      },
      "outcomeToGiftEp": [
        1,
        3,
        2,
        5
      ],
      "freeGifts": [
        {
          "ep": 1,
          "code": "V01",
          "title": "Seuils CSG Retraite 2026 : Barème RFR & Lissage Légal (0 €)",
          "desc": "Vérifiez votre tranche (0 %, 3,8 %, 6,6 %, 8,3 %) selon votre RFR et vos parts fiscales.",
          "url": "https://maicolortizh.gumroad.com/l/seuils-csg-retraite-gratuit"
        },
        {
          "ep": 2,
          "code": "V02",
          "title": "Après un décès : Démarches, Frais bancaires (max 850 €) & Obsèques (0 €)",
          "desc": "Comment débloquer jusqu'à 5 910 € pour les obsèques et appliquer le plafond légal de 1 % / 850 €.",
          "url": "https://maicolortizh.gumroad.com/l/apres-un-deces-avant-de-vendre-gratuit"
        },
        {
          "ep": 3,
          "code": "V03",
          "title": "Épargne & Assurance-Vie : Avant 70 ans (152 500 €) vs Après 70 ans (30 500 €) — Guide 0 €",
          "desc": "Protégez votre épargne et comparez les abattements de 100 000 € par enfant, 152 500 € (Art. 990 I) et 30 500 € (Art. 757 B).",
          "url": "https://maicolortizh.gumroad.com/l/epargne-apres-60-ans-gratuit"
        },
        {
          "ep": 4,
          "code": "V04",
          "title": "Protéger le logement familial & les droits du conjoint survivant (0 €)",
          "desc": "Droit viager au logement, usufruit, pension de réversion (54 % CNAV / 60 % Agirc-Arrco).",
          "url": "https://maicolortizh.gumroad.com/l/logement-apres-un-deces-gratuit"
        },
        {
          "ep": 5,
          "code": "V05",
          "title": "Vérifier son Relevé de Carrière (RIS) : Trimestres enfants & oublis (0 €)",
          "desc": "Repérez les trimestres et points Agirc-Arrco oubliés avant ou après la liquidation de votre retraite.",
          "url": "https://maicolortizh.gumroad.com/l/verifier-sa-retraite-gratuit"
        }
      ]
    }
  },
  "pl": {
    "code": "pl",
    "flag": "🇵🇱",
    "countryLabel": "🇵🇱 Polska (Emerytura Jasno)",
    "brandTitle": "Emerytura Jasno — Cyfrowy Asystent Seniora ZUS, WZON i Bank 2026",
    "brandSubtitle": "Diagnoza w 60 sekund · Kalkulator Mobilny (Bez Excela) · Generator Pism Urzędowych do ZUS i Banku (PDF A4)",
    "privacyBanner": "🔒 100% Prywatności (Zgodność z RODO): Twoje dane są obliczane wyłącznie na Twoim własnym urządzeniu i nigdy nie są wysyłane ani zapisywane na żadnym serwerze.",
    "privacyEquivalentEs": "100% Privado: Tus datos se calculan en tu propio dispositivo y nunca se envían ni guardan en ningún servidor.",
    "nav": {
      "tabQuiz": "1. Diagnoza 60s (4 Pytania)",
      "tabCalc": "2. Kalkulator (Bez Excela)",
      "tabLetters": "3. Pisma do ZUS i Banku (PDF A4)",
      "fontSizeLabel": "Rozmiar czcionki:"
    },
    "ui": {
      "quizTitle": "MODUŁ 1 — Szybka Diagnoza w 60 Sekund (4 Pytania)",
      "quizIntro": "Dotknij dużych przycisków odpowiadających Twojej sytuacji. Po 4. pytaniu otrzymasz osobistą diagnozę z aktualnymi progami ZUS i prawa bankowego na 2026 rok.",
      "questionProgress": "Pytanie {current} z 4",
      "btnBack": "← Wróć do poprzedniego pytania",
      "btnRestartQuiz": "↻ Rozpocznij diagnozę od nowa",
      "diagResultTitle": "Twoja Osobista Diagnoza Emerytalna i Prawna 2026",
      "diagThresholdLabel": "Kluczowy limit urzędowy w 2026 r.:",
      "diagMoneyAtStakeLabel": "Ile pieniędzy jest w grze (miesięcznie / rocznie):",
      "diagFirstStepLabel": "Twój pierwszy konkretny krok na jutro rano:",
      "diagSourceLabel": "Podstawa prawna 2026:",
      "btnGoCalc": "🧮 Oblicz dokładnie mój wariant w kalkulatorze",
      "btnGoLetter": "✉️ Otwórz gotowe pismo urzędowe do wydruku (A4)",
      "calcTitle": "MODUŁ 2 — Interaktywny Kalkulator Mobilny 2026 (Bez Excela)",
      "calcIntro": "Wybierz swoją sprawę i ustaw własne kwoty za pomocą dużych przycisków „−” oraz „+” lub przycisków szybkiego wyboru.",
      "selectCalcLabel": "Wybierz kalkulator:",
      "comparisonTitle": "Bezpośrednie Porównanie Wizualne: Wariant A vs Wariant B",
      "optionALabel": "Wariant A",
      "optionBLabel": "Wariant B",
      "plainExplanationTitle": "Co ten wynik oznacza prostym językiem?",
      "officialSourceBadge": "Zweryfikowana podstawa prawna 2026:",
      "btnOpenMatchingLetter": "✉️ Wygeneruj gotowe pismo do ZUS / Banku dla tej sprawy →",
      "lettersTitle": "MODUŁ 3 — Automatyczny Generator Pism Urzędowych (Form-to-PDF A4)",
      "lettersIntro": "Wybierz wzór pisma, wpisz swoje dane w 5 dużych polach i wydrukuj lub zapisz gotowy dokument A4 jako plik PDF.",
      "selectLetterLabel": "1. Wybierz potrzebne pismo urzędowe (6 pełnych wzorów):",
      "formSectionTitle": "2. Twoje dane osobowe (zostaną wstawione pogrubioną czcionką do pisma):",
      "field1Label": "1. Imię i Nazwisko:",
      "field1Placeholder": "Np. Krystyna Kowalska",
      "field1Default": "Krystyna Kowalska",
      "field2Label": "2. Ulica, numer domu/mieszkania, Kod pocztowy i Miejscowość:",
      "field2Placeholder": "Np. ul. Słoneczna 12/4, 30-010 Kraków",
      "field2Default": "ul. Słoneczna 12/4, 30-010 Kraków",
      "field3Label": "3. Numer PESEL oraz znak świadczenia ZUS (jeśli dotyczy):",
      "field3Placeholder": "Np. PESEL: 54031801246 | Znak: E/15/0234567",
      "field3Default": "PESEL: 54031801246 | Znak: E/15/0234567",
      "field4Label": "4. Instytucja docelowa (wypełniona automatycznie, możesz zmienić):",
      "field5Label": "5. Szczegóły Twojej sprawy (kwoty, daty, numer konta lub decyzji):",
      "previewSectionTitle": "Podgląd na żywo Twojego Pisma Urzędowego (Format A4 gotowy do druku)",
      "btnPrintPdf": "🖨️ Drukuj / Zapisz Pismo w PDF (A4)",
      "btnCopyText": "📋 Kopiuj Pełny Tekst Pisma (do PUE ZUS / ePUAP / Email)",
      "copySuccessMsg": "✓ Pełny tekst pisma został skopiowany do schowka! Możesz go teraz wkleić na portalu PUE ZUS (eZUS), ePUAP lub w programie pocztowym.",
      "attachmentsTitle": "Załączniki do zaznaczenia (sprawdź przed złożeniem w ZUS / Banku):",
      "signatureLabel": "Własnoręczny podpis:"
    },
    "quiz": {
      "questions": [
        {
          "id": "q1",
          "title": "1. W jakiej grupie wiekowej lub sytuacji życiowej się znajdujesz?",
          "options": [
            "60–65 lat — Przechodzę na emeryturę lub chcę przeliczyć kapitał początkowy",
            "66–74 lata — Pobieram emeryturę ZUS i sprawdzam nowe dodatki w 2026 roku",
            "Jestem wdową / wdowcem — Chcę połączyć własną emeryturę z rentą rodzinną (Renta Wdowia)",
            "75+ lat lub wymagane wsparcie zdrowotne — Interesuje mnie Świadczenie Wspierające i bezpieczeństwo konta"
          ]
        },
        {
          "id": "q2",
          "title": "2. Jaka jest Twoja obecna sytuacja rodzinna i majątkowa?",
          "options": [
            "Wdowa / Wdowiec (uprawnienie do renty rodzinnej po zmarłym małżonku — druk ERWD)",
            "Małżeństwo posiadające wspólne lub osobne konta bankowe i oszczędności",
            "Osoba samotna (dzieci lub wnuki jako bliscy — zabezpieczenie konta bez sądu)",
            "Osoba niesamodzielna zdrowotnie (lub opiekun pomagający seniorowi w WZON/ZUS)"
          ]
        },
        {
          "id": "q3",
          "title": "3. Jaka jest przybliżona wysokość Twojej miesięcznej emerytury brutto w 2026 r.?",
          "options": [
            "Do 2 300 zł brutto miesięcznie (w okolicach najniższej emerytury 1 878,91 zł)",
            "Od 2 300 zł do 3 600 zł brutto miesięcznie",
            "Od 3 600 zł do 5 000 zł brutto miesięcznie",
            "Powyżej 5 000 zł brutto (blisko limitu 3-krotności najniższej emerytury: 5 636,73 zł)"
          ]
        },
        {
          "id": "q4",
          "title": "4. Którą sprawę chcesz załatwić w pierwszej kolejności?",
          "options": [
            "Renta Wdowia 2026/2027 (Formularz ERWD): 100% własnej + 15%/25% renty rodzinnej czy odwrotnie?",
            "Świadczenie Wspierające 2026 (Progi WZON 70–100 pkt): Jak uzyskać od 792 zł do 4 353 zł/mies. bez podatku?",
            "Konto w banku po śmierci (Art. 56 dyspozycja wkładem do ~175 000 zł bez sądu i Art. 55a koszty pogrzebu)",
            "Przeliczenie emerytury i kapitału początkowego w ZUS (Formularz ERPO — archiwalne zarobki sprzed 1999 r.)"
          ]
        }
      ],
      "outcomes": [
        {
          "title": "Priorytet 1: Renta Wdowia 2026/2027 (Formularz ZUS ERWD — 15% w 2026 r. i 25% od 2027 r.)",
          "threshold2026": "Maksymalny limit łączonych świadczeń w 2026 r.: 3-krotność najniższej emerytury = 5 636,73 zł brutto (3 × 1 878,91 zł). Renta rodzinna dla 1 osoby to 85% świadczenia zmarłego małżonka.",
          "moneyAtStake": "Od 420 zł do 1 150 zł miesięcznie więcej (od 5 040 zł do ponad 13 800 zł rocznie!) dzięki wyborowi korzystniejszego wariantu (100% + 15%/25%).",
          "firstStep": "Złóż w ZUS formularz ERWD i zaznacz opcję automatycznego wyboru korzystniejszego wariantu (100% renty rodzinnej + 15%/25% własnej lub odwrotnie).",
          "source": "Art. 95a ustawy z dnia 17 grudnia 1998 r. o emeryturach i rentach z FUS — ZUS (Formularz ERWD 2026)",
          "calcIndex": 0,
          "letterIndex": 0
        },
        {
          "title": "Priorytet 2: Świadczenie Wspierające 2026 (6 progów WZON od 70 do 100 punktów)",
          "threshold2026": "W 2026 r. uprawnia już poziom od 70 do 100 punktów potrzeby wsparcia w decyzji WZON. Kwoty wynoszą od 40% do 220% renty socjalnej (od ok. 792 zł do 4 353 zł miesięcznie na rękę — 0% podatku PIT i brak kryterium dochodowego!).",
          "moneyAtStake": "Od 9 504 zł do aż 52 236 zł rocznie dodatku wypłacanego bezpośrednio seniorowi niezależnie od pobieranej emerytury czy renty wdowiej.",
          "firstStep": "Złóż wniosek do Wojewódzkiego Zespołu ds. Orzekania o Niepełnosprawności (WZON) o ustalenie poziomu potrzeby wsparcia, a po decyzji — wniosek SWN elektronicznie do ZUS.",
          "source": "Ustawa z dnia 7 lipca 2023 r. o świadczeniu wspierającym (Dz.U. 2023 poz. 1429 — progi 70–100 pkt w 2026 r.)",
          "calcIndex": 1,
          "letterIndex": 2
        },
        {
          "title": "Priorytet 3: Ochrona Konta Bankowego — Dyspozycja wkładem na wypadek śmierci (Art. 56) i Koszty Pogrzebu (Art. 55a)",
          "threshold2026": "Limit wypłaty poza spadkiem z Art. 56 Prawa bankowego: 20-krotność przeciętnego wynagrodzenia GUS (ok. 175 000 zł w 2026 r.). Zwrot kosztów pogrzebu z konta zmarłego (Art. 55a) + zasiłek pogrzebowy ZUS (7 000 zł).",
          "moneyAtStake": "Natychmiastowy dostęp rodziny do kwoty do ~175 000 zł w 3–7 dni bez wielomiesięcznego czekania na sąd spadkowy i bez blokady środków na pogrzeb.",
          "firstStep": "Złóż w swoim banku pisemną „Dyspozycję wkładem na wypadek śmierci” (Art. 56 Prawa bankowego) na rzecz małżonka, dzieci lub wnuków.",
          "source": "Art. 55a oraz Art. 56 ustawy z dnia 29 sierpnia 1997 r. — Prawo bankowe (2026)",
          "calcIndex": 2,
          "letterIndex": 3
        },
        {
          "title": "Priorytet 4: Ponowne Przeliczenie Emerytury i Kapitału Początkowego (Formularz ZUS ERPO)",
          "threshold2026": "Każdy udokumentowany rok pracy sprzed 1999 r., studia wyższe (do 8 lat okresów nieskładkowych) lub urlop wychowawczy podnosi zwaloryzowany kapitał początkowy ponad wskaźnik płacy minimalnej.",
          "moneyAtStake": "Podwyżka emerytury o 180 zł do 620 zł miesięcznie na stałe (oraz wyrównanie za maksymalnie 3 lata wstecz w razie błędu organu rentowego — Art. 133 ustawy FUS).",
          "firstStep": "Złóż w ZUS wniosek ERPO wraz z odnalezionymi świadectwami pracy, wpisami w książeczce ubezpieczeniowej (legitymacji) lub zaświadczeniem z uczelni.",
          "source": "Art. 114 oraz Art. 173–175 ustawy o emeryturach i rentach z FUS — ZUS (Formularz ERPO)",
          "calcIndex": 0,
          "letterIndex": 1
        }
      ]
    },
    "calculators": [
      {
        "id": "pl_calc_1",
        "title": "1. Renta Wdowia 2026/2027 (Formularz ERWD : 100% własnej + 15% / 25% renty rodzinnej vs odwrotnie)",
        "subtitle": "Sprawdź, który wariant łączenia emerytury i renty rodzinnej daje wyższą wypłatę co miesiąc z uwzględnieniem limitu 3-krotności najniższej emerytury (5 636,73 zł brutto).",
        "legalRef": "Art. 95a ustawy FUS · Formularz ZUS ERWD · Limit 2026: 3 × 1 878,91 zł = 5 636,73 zł brutto",
        "letterIndex": 0,
        "inputs": [
          {
            "id": "ownPension",
            "label": "Twoja własna emerytura z ZUS brutto (zł/miesiąc):",
            "unit": "zł",
            "min": 1200,
            "max": 6500,
            "step": 100,
            "default": 2800,
            "presets": [
              1879,
              2400,
              2800,
              3600
            ]
          },
          {
            "id": "spousePension",
            "label": "Emerytura zmarłego małżonka brutto (podstawa do wyliczenia 85% renty rodzinnej):",
            "unit": "zł",
            "min": 1200,
            "max": 7500,
            "step": 100,
            "default": 3600,
            "presets": [
              2500,
              3200,
              3600,
              4500
            ]
          },
          {
            "id": "sharePct",
            "label": "Procent drugiego świadczenia (15% w 2026 r. · 25% od 1 stycznia 2027 r.):",
            "unit": "%",
            "min": 15,
            "max": 25,
            "step": 10,
            "default": 15,
            "presets": [
              15,
              25
            ]
          }
        ]
      },
      {
        "id": "pl_calc_2",
        "title": "2. Świadczenie Wspierające 2026 (Progi WZON 70–100 pkt : od 792 zł do 4 353 zł/mies.)",
        "subtitle": "Oblicz dokładną miesięczną i roczną kwotę świadczenia wspierającego na rękę (0% PIT) w zależności od liczby punktów w decyzji WZON.",
        "legalRef": "Ustawa o świadczeniu wspierającym · 6 progów WZON (70–100 pkt w 2026 r.) · Wniosek ZUS SWN",
        "letterIndex": 2,
        "inputs": [
          {
            "id": "wzonPoints",
            "label": "Liczba punktów potrzeby wsparcia w decyzji WZON (70 do 100 pkt):",
            "unit": "pkt",
            "min": 65,
            "max": 100,
            "step": 1,
            "default": 86,
            "presets": [
              72,
              77,
              82,
              86,
              92,
              96
            ]
          },
          {
            "id": "currentCareAllowance",
            "label": "Obecnie pobierany dodatek pielęgnacyjny z ZUS (standardowo ok. 348 zł/mies.):",
            "unit": "zł/mies.",
            "min": 0,
            "max": 1500,
            "step": 50,
            "default": 348,
            "presets": [
              0,
              348,
              600
            ]
          }
        ]
      },
      {
        "id": "pl_calc_3",
        "title": "3. Konto po śmierci (Art. 56 Prawo bankowe dyspozycja wkładem vs koszty pogrzebu Art. 55a)",
        "subtitle": "Porównaj natychmiastową wypłatę oszczędności dla rodziny dzięki dyspozycji wkładem na wypadek śmierci (do ~175 000 zł) i zwrotowi faktur pogrzebowych z zamrożeniem konta.",
        "legalRef": "Art. 56 oraz Art. 55a ustawy Prawo bankowe · Zasiłek pogrzebowy ZUS 2026: 7 000 zł",
        "letterIndex": 3,
        "inputs": [
          {
            "id": "accountSavings",
            "label": "Oszczędności zgromadzone na koncie bankowym i lokatach (zł):",
            "unit": "zł",
            "min": 5000,
            "max": 280000,
            "step": 5000,
            "default": 65000,
            "presets": [
              25000,
              65000,
              120000,
              175000
            ]
          },
          {
            "id": "funeralCosts",
            "label": "Kwota faktur za pogrzeb, trumnę/urnę i opłaty cmentarne (zł — Art. 55a):",
            "unit": "zł",
            "min": 4000,
            "max": 30000,
            "step": 1000,
            "default": 12000,
            "presets": [
              7000,
              10000,
              12000,
              16000
            ]
          }
        ]
      }
    ],
    "letters": [
      {
        "id": "pl_let_1",
        "menuTitle": "1. Wniosek uzupełniający do ZUS o ustalenie zbiegu świadczeń — Renta Wdowia i wybór najkorzystniejszego wariantu (Formularz ERWD — Art. 95a ustawy FUS)",
        "defaultRecipient": "Zakład Ubezpieczeń Społecznych (ZUS)\nWydział Świadczeń Emerytalno-Rentowych (właściwy Oddział ZUS)",
        "defaultCaseDetails": "Wniosek o wypłatę renty wdowiej w wariancie automatycznie najkorzystniejszym (100% renty rodzinnej + 15%/25% własnej emerytury lub 100% własnej emerytury + 15%/25% renty rodzinnej) z zachowaniem limitu 3-krotności najniższej emerytury (5 636,73 zł brutto)",
        "subject": "Wniosek o ustalenie prawa do łączenia świadczeń w zbiegu (Renta Wdowia — druk ZUS ERWD) oraz o wyliczenie i wypłatę wariantu najkorzystniejszego finansowo (Art. 95a ustawy o emeryturach i rentach z FUS)",
        "salutation": "Szanowni Państwo,",
        "paragraphs": [
          "Działając w imieniu własnym, ja niżej podpisana/y {NAME}, zamieszkała/y pod adresem {ADDRESS}, legitymująca/y się numerem PESEL / znakiem świadczenia {ID_NUM}, składam wniosek o ustalenie prawa do wypłaty świadczeń w zbiegu (tzw. renty wdowiej) na podstawie art. 95a ustawy z dnia 17 grudnia 1998 r. o emeryturach i rentach z Funduszu Ubezpieczeń Społecznych.",
          "Szczegółowe dane dotyczące mojego wniosku przedstawiają się następująco: {CASE_DETAILS}. Jednocześnie wnoszę o dokonanie przez Zakład Ubezpieczeń Społecznych symulacji porównawczej obu ustawowych wariantów zbiegu świadczeń (tj. 100% przysługującej mi renty rodzinnej po zmarłym małżonku wraz z 15% — a od 1 stycznia 2027 r. 25% — własnej emerytury, albo 100% własnej emerytury wraz z 15%/25% renty rodzinnej) i podjęcie wypłaty wariantu wyższego.",
          "Jeżeli dotychczas nie miałam/em wydanej decyzji ustalającej prawo do renty rodzinnej po zmarłym małżonku, wnoszę o jednoczesne przeliczenie uprawnień na podstawie załączonego formularza ZUS ERR oraz dokumentacji emerytalnej współmałżonka znajdującej się w aktach ZUS.",
          "Proszę o doręczenie pisemnej decyzji zawierającej szczegółowe zestawienie kwot brutto i netto obu porównywanych świadczeń oraz informację o zastosowaniu ustawowego limitu trzykrotności najniższej emerytury."
        ],
        "attachments": [
          "Wypełniony urzędowy formularz ZUS ERWD (Wniosek o ustalenie zbiegu świadczeń z rentą rodzinną)",
          "Odpis skrócony aktu małżeństwa oraz aktu zgonu małżonka (jeśli nie złożono wcześniej w ZUS)",
          "Formularz ZUS ERR (w przypadku równoczesnego występowania o ustalenie prawa do renty rodzinnej)"
        ],
        "closing": "Z poważaniem,"
      },
      {
        "id": "pl_let_2",
        "menuTitle": "2. Wniosek o ponowne przeliczenie emerytury i kapitału początkowego z uwzględnieniem zarobków sprzed 1999 r., studiów i urlopu wychowawczego (Formularz ZUS ERPO)",
        "defaultRecipient": "Zakład Ubezpieczeń Społecznych (ZUS)\nWydział Kapitału Początkowego i Świadczeń Emerytalnych",
        "defaultCaseDetails": "Ponowne przeliczenie kapitału początkowego i emerytury na podstawie odnalezionych dokumentów płacowych sprzed 1999 r. (legitymacja ubezpieczeniowa / karty wynagrodzeń), okresu studiów wyższych oraz urlopu wychowawczego (wskaźnik 1,3% za każdy rok opieki nad dzieckiem)",
        "subject": "Wniosek o ponowne ustalenie wysokości kapitału początkowego oraz przeliczenie emerytury w trybie art. 114 oraz art. 173–175 ustawy o emeryturach i rentach z FUS (Formularz ZUS ERPO)",
        "salutation": "Szanowni Państwo,",
        "paragraphs": [
          "Ja niżej podpisana/y {NAME}, zamieszkała/y w {ADDRESS} (dane identyfikacyjne: {ID_NUM}), na podstawie art. 114 ust. 1 oraz art. 174 i 175 ustawy z dnia 17 grudnia 1998 r. o emeryturach i rentach z FUS wnoszę o ponowne ustalenie wysokości mojego kapitału początkowego oraz o odpowiednie przeliczenie pobieranej przeze mnie emerytury.",
          "Podstawą mojego wniosku są nowe dowody oraz okoliczności mające bezpośredni wpływ na wysokość świadczenia: {CASE_DETAILS}. Wnoszę o zastąpienie za lata, w których dotychczas przyjęto jedynie ustawowe wynagrodzenie minimalne (z uwagi na brak zaświadczenia Rp-7), faktycznymi zarobkami wynikającymi z załączonej archiwalnej dokumentacji osobowo-płacowej oraz wpisów w legitymacji ubezpieczeniowej.",
          "Ponadto wnoszę o przeliczenie okresów opieki nad dziećmi (urlopu wychowawczego przed 1999 r.) ze wskaźnikiem 1,3% podstawy wymiaru za każdy rok (zgodnie z nowelizacją art. 174 ust. 2a ustawy FUS) oraz o pełne uwzględnienie okresów ukończonych studiów wyższych w wymiarze programowym.",
          "W przypadku stwierdzenia, że zaniżenie kapitału początkowego wynikało z błędu organu rentowego, wnoszę również o wypłatę wyrównania emerytury za okres do 3 lat wstecz zgodnie z art. 133 ust. 1 pkt 2 ustawy FUS."
        ],
        "attachments": [
          "Wypełniony formularz ZUS ERPO (Wniosek o ponowne obliczenie świadczenia emerytalno-rentowego)",
          "Oryginały lub uwierzytelnione odpisy świadectw pracy, legitymacji ubezpieczeniowej lub kart zarobkowych z archiwum",
          "Odpisy aktów urodzenia dzieci / zaświadczenie z uczelni wyższej o programowym czasie trwania studiów"
        ],
        "closing": "Z poważaniem,"
      },
      {
        "id": "pl_let_3",
        "menuTitle": "3. Wniosek do WZON o wydanie decyzji ustalającej poziom potrzeby wsparcia (70–100 pkt) oraz informacja do wniosku ZUS SWN (Świadczenie Wspierające 2026)",
        "defaultRecipient": "Wojewódzki Zespół do Spraw Orzekania o Niepełnosprawności (WZON)\n(oraz następczo: Zakład Ubezpieczeń Społecznych — druk elektroniczny SWN)",
        "defaultCaseDetails": "Ustalenie poziomu potrzeby wsparcia w skali od 70 do 100 punktów w związku z ograniczeniem samodzielności w czynnościach życia codziennego; wniosek o badanie w miejscu zamieszkania ze względu na stan zdrowia",
        "subject": "Wniosek o wydanie decyzji ustalającej poziom potrzeby wsparcia (art. 6b³ ustawy o rehabilitacji zawodowej i społecznej) celem uzyskania świadczenia wspierającego w 2026 r.",
        "salutation": "Szanowni Państwo,",
        "paragraphs": [
          "Ja niżej podpisana/y {NAME}, zamieszkała/y pod adresem {ADDRESS} (numer identyfikacyjny: {ID_NUM}), działając na podstawie ustawy z dnia 7 lipca 2023 r. o świadczeniu wspierającym, składam wniosek o wydanie decyzji ustalającej poziom potrzeby wsparcia w wymiarze punktowym uprawniającym do świadczenia wspierającego (progi 70–100 pkt obowiązujące w 2026 roku).",
          "Istotne okoliczności mojego stanu funkcjonalnego przedstawiają się następująco: {CASE_DETAILS}. W załączonym kwestionariuszu samooceny trudności w zakresie wykonywania czynności związanych z codziennym funkcjonowaniem szczegółowo wskazano czynności, które wymagają stałego wsparcia drugiej osoby ze względu na utrwalone naruszenie sprawności organizmu.",
          "Z uwagi na poważne trudności w samodzielnym poruszaniu się poza miejscem zamieszkania, wnoszę o przeprowadzenie obserwacji i oceny przez zespół ustalający bezpośrednio w moim miejscu zamieszkania albo na podstawie zgromadzonej dokumentacji medycznej.",
          "Proszę o wydanie decyzji na maksymalny przewidziany prawem okres (do 7 lat lub na stałe w przypadku trwałego braku możliwości poprawy funkcjonowania), co pozwoli mi na niezwłoczne złożenie wniosku SWN do Zakładu Ubezpieczeń Społecznych."
        ],
        "attachments": [
          "Wypełniony urzędowy wniosek WZON wraz z Kwestionariuszem samooceny trudności w codziennym funkcjonowaniu",
          "Kopia prawomocnego orzeczenia o znacznym stopniu niepełnosprawności lub niezdolności do samodzielnej egzystencji (ZUS/KRUS)",
          "Aktualna dokumentacja medyczna potwierdzająca trwałe ograniczenia sprawności ruchowej i samoobsługi"
        ],
        "closing": "Z poważaniem,"
      },
      {
        "id": "pl_let_4",
        "menuTitle": "4. Dyspozycja wkładem na wypadek śmierci (Art. 56 Prawo bankowe — wypłata do ~175 000 zł bez sądu) oraz wniosek o zwrot kosztów pogrzebu z konta zmarłego (Art. 55a)",
        "defaultRecipient": "Dyrekcja Oddziału Banku — Dział Obsługi Klienta / Dział Spadków i Dyspozycji",
        "defaultCaseDetails": "Część I: Ustanowienie dyspozycji wkładem na wypadek śmierci w trybie art. 56 Prawa bankowego | Część II (po śmierci posiadacza): Wypłata zwrotu kosztów pogrzebu na podstawie faktur w trybie art. 55a Prawa bankowego",
        "subject": "Oświadczenie w przedmiocie dyspozycji wkładem na wypadek śmierci (Art. 56 ustawy Prawo bankowe) / Wniosek o niezwłoczną wypłatę kosztów pogrzebu z rachunku bankowego (Art. 55a ustawy Prawo bankowe)",
        "salutation": "Szanowni Państwo,",
        "paragraphs": [
          "Ja niżej podpisana/y {NAME}, zamieszkała/y pod adresem {ADDRESS} (PESEL / numer rachunku: {ID_NUM}), składam niniejsze pismo w oparciu o bezwzględnie obowiązujące przepisy art. 55a oraz art. 56 ustawy z dnia 29 sierpnia 1997 r. — Prawo bankowe.",
          "Przedmiot mojej dyspozycji / wniosku obejmuje: {CASE_DETAILS}. W zakresie art. 56 Prawa bankowego wskazuję, że posiadacz rachunku oszczędnościowego, rachunku oszczędnościowo-rozliczeniowego (ROR) lub rachunku terminowej lokaty oszczędnościowej ma ustawowe prawo polecić pisemnie bankowi dokonanie — po swojej śmierci — wypłaty określonej kwoty pieniężnej na rzecz wskazanych osób bliskich (małżonka, zstępnych, wstępnych lub rodzeństwa) do łącznej wysokości dwudziestokrotności przeciętnego miesięcznego wynagrodzenia w sektorze przedsiębiorstw (ok. 175 000 zł w 2026 r.), przy czym kwota ta nie wchodzi do spadku i podlega wypłacie bez postępowania spadkowego.",
          "W przypadku występowania o zwrot kosztów pogrzebu na podstawie art. 55a Prawa bankowego wnoszę o niezwłoczną wypłatę z rachunku zmarłego kwoty wydatkowanej na organizację pochówku zgodnie z przedłożonymi imiennymi rachunkami i fakturami, do wysokości salda rachunku, bez oczekiwania na postanowienie o stwierdzeniu nabycia spadku.",
          "Proszę o pisemne potwierdzenie przyjęcia dyspozycji do systemu bankowego lub o realizację przelewu w terminie 7 dni roboczych."
        ],
        "attachments": [
          "Dowód osobisty składającego dyspozycję (przy Art. 56) lub odpis aktu zgonu posiadacza rachunku (przy Art. 55a)",
          "Oryginały imiennych faktur za koszty pogrzebu i opłaty cmentarne (w przypadku wniosku z Art. 55a)",
          "Dane identyfikacyjne osób uposażonych: imiona, nazwiska, numery PESEL i stopień pokrewieństwa (przy Art. 56)"
        ],
        "closing": "Z poważaniem,"
      },
      {
        "id": "pl_let_5",
        "menuTitle": "5. Wniosek o wyłączenie z opodatkowania (0% podatku) spadku lub darowizny w najbliższej rodzinie — przypomnienie o 6-miesięcznym terminie zgłoszenia (Druk SD-Z2 — Art. 4a ustawy SD)",
        "defaultRecipient": "Naczelnik właściwego Urzędu Skarbowego\nDział Podatku od Spadków i Darowizn",
        "defaultCaseDetails": "Zgłoszenie nabycia własności rzeczy lub praw majątkowych przez małżonka / zstępnych (dzieci, wnuki) w tzw. grupie zerowej celem skorzystania z całkowitego zwolnienia z podatku od spadków i darowizn (0% podatku bez limitu kwotowego)",
        "subject": "Zawiadomienie o nabyciu własności rzeczy lub praw majątkowych w grupie zerowej wraz z deklaracją SD-Z2 — całkowite zwolnienie z podatku na podstawie art. 4a ustawy o podatku od spadków i darowizn",
        "salutation": "Szanowny Panie Naczelniku / Szanowna Pani Naczelnik,",
        "paragraphs": [
          "Ja niżej podpisana/y {NAME}, zamieszkała/y w {ADDRESS}, identyfikująca/y się numerem PESEL {ID_NUM}, działając na podstawie art. 4a ust. 1 ustawy z dnia 28 lipca 1983 r. o podatku od spadków i darowizn, przedkładam w ustawowym terminie 6 miesięcy wypełnione zgłoszenie o nabyciu własności rzeczy lub praw majątkowych na formularzu SD-Z2.",
          "Szczegółowe dane dotyczące nabytego majątku są następujące: {CASE_DETAILS}. Jako osoba należąca do kręgu najbliższej rodziny określonego w art. 4a ust. 1 ustawy (małżonek, zstępni: dzieci, wnuki, prawnuki, wstępni, pasierb, rodzeństwo, ojczym i macocha), korzystam z pełnego, nielimitowanego kwotowo zwolnienia od podatku od spadków i darowizn.",
          "W przypadku darowizny środków pieniężnych przekraczającej kwotę wolną w I grupie podatkowej (36 120 zł w okresie 5 lat od jednej osoby), dołączam dowód przekazania środków bezpośrednio na mój rachunek płatniczy w banku lub przekazem pocztowym zgodnie z wymogiem art. 4a ust. 1 pkt 2 ustawy.",
          "Wnoszę o zarejestrowanie zgłoszenia SD-Z2 i potwierdzenie zastosowania całkowitego zwolnienia podatkowego."
        ],
        "attachments": [
          "Wypełniony urzędowy formularz SD-Z2 (Zgłoszenie o nabyciu własności rzeczy lub praw majątkowych)",
          "Potwierdzenie przelewu bankowego (w przypadku darowizny pieniężnej) lub odpis postanowienia sądu / aktu poświadczenia dziedziczenia",
          "Dokument potwierdzający stopień pokrewieństwa (jeśli nie wynika bezpośrednio z aktu notarialnego)"
        ],
        "closing": "Z poważaniem,"
      },
      {
        "id": "pl_let_6",
        "menuTitle": "6. Odwołanie od decyzji ZUS do Sądu Okręgowego — Sądu Pracy i Ubezpieczeń Społecznych (składane za pośrednictwem ZUS — 0 zł opłat sądowych)",
        "defaultRecipient": "Sąd Okręgowy — Wydział Pracy i Ubezpieczeń Społecznych\nza pośrednictwem: Zakładu Ubezpieczeń Społecznych (Oddział wydający decyzję)",
        "defaultCaseDetails": "Odwołanie w ustawowym terminie 30 dni od decyzji ZUS z dnia 10.10.2026 r. zaniżającej wysokość świadczenia emerytalnego / renty wdowiej oraz wniosek o zmianę zaskarżonej decyzji w całości",
        "subject": "Odwołanie od decyzji Zakładu Ubezpieczeń Społecznych w trybie art. 477⁹ § 1 Kodeksu postępowania cywilnego oraz art. 83 ust. 2 ustawy o systemie ubezpieczeń społecznych (wolne od opłat sądowych — art. 96 ust. 1 pkt 4 u.k.s.c.)",
        "salutation": "Wysoki Sądzie,",
        "paragraphs": [
          "Działając w imieniu własnym, ja niżej podpisana/y {NAME}, zamieszkała/y pod adresem {ADDRESS} (PESEL / znak decyzji ZUS: {ID_NUM}), na podstawie art. 477⁹ § 1 Kodeksu postępowania cywilnego wnoszę w ustawowym terminie jednego miesiąca od dnia doręczenia odwołanie od decyzji Zakładu Ubezpieczeń Społecznych.",
          "Zaskarżam przedmiotową decyzję w części / w całości w zakresie: {CASE_DETAILS}. Zaskarżonej decyzji zarzucam naruszenie przepisów prawa materialnego ustawy z dnia 17 grudnia 1998 r. o emeryturach i rentach z FUS poprzez pominięcie udokumentowanych okresów składkowych i nieskładkowych oraz błędne ustalenie podstawy wymiaru świadczenia.",
          "Na podstawie art. 83 ust. 6 ustawy o systemie ubezpieczeń społecznych wnoszę w pierwszej kolejności o uwzględnienie niniejszego odwołania przez sam Zakład Ubezpieczeń Społecznych w trybie autokontroli (w terminie 30 dni bez przekazywania akt do sądu) i wydanie nowej decyzji przyznającej świadczenie w prawidłowej wysokości wraz z ustawowymi odsetkami za opóźnienie.",
          "W razie nieuwzględnienia odwołania przez organ rentowy we własnym zakresie, wnoszę o przekazanie akt sprawy do Sądu Okręgowego — Sądu Pracy i Ubezpieczeń Społecznych oraz o zmianę zaskarżonej decyzji zgodnie z żądaniem."
        ],
        "attachments": [
          "Kopia zaskarżonej decyzji Zakładu Ubezpieczeń Społecznych",
          "Dowody z dokumentów potwierdzające zarobki, staż pracy lub uprawnienia do zbiegu świadczeń",
          "Odpis odwołania wraz z załącznikami dla strony przeciwnej (w dwóch egzemplarzach)"
        ],
        "closing": "Z poważaniem,"
      }
    ],
    "bridge": {
      "channelName": "Liczby Emerytury",
      "pageTitle": "Liczby Emerytury — Bezpłatna Diagnoza w 60 Sekund i Kalkulator ZUS 2026",
      "metaDescription": "Sprawdź w 60 sekund swój wariant Renty Wdowiej (ERWD), progi Świadczenia Wspierającego WZON (70–100 pkt), ochronę konta (Art. 56) i przeliczenie emerytury ZUS.",
      "heroBadge": "🇵🇱 Niezależny Test Emerytalny i Kalkulator 2026 (Liczby Emerytury)",
      "heroTitle": "Sprawdź w 60 sekund, jakie kwoty i ulgi w ZUS oraz banku przysługują Ci w 2026 roku",
      "heroSubtitle": "Odpowiedz na 4 proste pytania dużymi przyciskami (bezpośrednio w przeglądarce). Otrzymasz osobistą diagnozę na 2026 rok, kalkulator na żywo oraz bezpłatną listę kontrolną (0 zł).",
      "trustPills": [
        "✓ 100% Bezpłatna Diagnoza (0 zł)",
        "✓ Ustawowe Kwoty i Limity 2026",
        "✓ Duża Czcionka (≥ 18 px) na Telefon i PC",
        "✓ 100% Prywatności (RODO — brak zapisu na serwerze)"
      ],
      "giftBtnPill": "0 zł Pobierz →",
      "videoBannerPrefix": "🎬 Materiał z oglądanego odcinka jest gotowy do pobrania:",
      "btnSkipToCalc": "🧮 Przejdź od razu do Kalkulatora na żywo i Darmowych List (0 zł) ↓",
      "btnBackToQuestions": "↑ Wróć do 4 pytań diagnozy",
      "liveCalcSectionBadge": "SPRAWDŹ SWOJE KWOTY — INTERAKTYWNY KALKULATOR NA ŻYWO 2026",
      "liveCalcSectionTitle": "Policz swój wariant jednym dotknięciem ekranu",
      "liveCalcSectionIntro": "Dotknij dużych przycisków „−” i „+” lub wybierz gotową kwotę poniżej. Możesz od razu bezpłatnie przełączać między 3 kalkulatorami:",
      "step1Badge": "KROK 1 — TWÓJ BEZPŁATNY PREZENT DO POBRANIA (0 ZŁ)",
      "step1Title": "Pobierz za darmo swoją Listę Kontrolną i Kalkulator dopasowany do Twojej sprawy (0 zł)",
      "step1Subtitle": "Wybierz bezpłatny materiał w dużej czcionce (PDF A4 ≥ 16,5 pt) z odcinka lub wynikający z Twojej diagnozy. Natychmiastowy dostęp za 0 zł:",
      "step1PrimaryBtnPrefix": "🎁 Pobierz bezpłatnie (0 zł): ",
      "step1AllGiftsLabel": "Wszystkie 5 bezpłatnych poradników i list kontrolnych (0 zł) — kliknij wybrany temat:",
      "step2Badge": "KROK 2 — PEŁNY PAKIET EMERYTURA JASNO 2026",
      "step2Title": "Emerytura Jasno 2026 — Pełny Przewodnik Dużą Czcionką + Kalkulator Excel i Web + 10 Gotowych Pism do ZUS i Banku (PDF A4)",
      "step2Subtitle": "Kompletny zestaw dla seniora i rodziny: przewodnik krok po kroku, arkusz kalkulacyjny oraz gotowe wzory wniosków i odwołań (ERWD, ERPO, WZON, Art. 56 i Art. 55a Prawa bankowego, SD-Z2) gotowe do wydruku i podpisu.",
      "paidPackPrice": "49 zł",
      "paidPackUrl": "https://maicolortizh.gumroad.com/l/emerytura-jasno-pelna-wersja",
      "paidPackBtnText": "📘 Odbierz Pełny Pakiet „Emerytura Jasno 2026” (49 zł) →",
      "paidPackGuarantee": "Natychmiastowe pobranie · Przewodnik dużą czcionką ≥ 16,5 pt (PDF A4 i DOCX) · Kalkulator 5-arkuszowy Excel (.xlsx) + Aplikacja Web · 10 gotowych wzorów pism do ZUS, WZON, US i Banku",
      "comparisonHeaders": [
        "Co dokładnie otrzymujesz",
        "Pakiet Bezpłatny (0 zł)",
        "Pełna Wersja 2026 (49 zł)"
      ],
      "comparisonRows": [
        [
          "Diagnoza w 60 sekund i Lista Kontrolna PDF (duża czcionka ≥ 16,5 pt)",
          "✓ 1 Lista Kontrolna (0 zł)",
          "✓ Wszystkie 5 tematów w komplecie"
        ],
        [
          "Przewodnik krok po kroku dużą czcionką (PDF A4 i DOCX)",
          "4-stronicowa karta skrócona",
          "✓ Pełny podręcznik z przykładami wyliczeń"
        ],
        [
          "Interaktywny Kalkulator 2026 (Aplikacja Web + 5-arkuszowy plik Excel .xlsx)",
          "Podgląd w przeglądarce",
          "✓ Pełna wersja (Web + arkusz Excel .xlsx)"
        ],
        [
          "Wzory Pism Urzędowych do ZUS, WZON, Urzędu Skarbowego i Banku (PDF A4)",
          "—",
          "✓ 10 gotowych pism A4 do druku i podpisu"
        ]
      ],
      "legalFooter": {
        "disclaimerTitle": "⚖️ Ważna informacja prawna (Brak doradztwa prawnego i podatkowego):",
        "disclaimerText": "Serwis „Liczby Emerytury” to niezależne narzędzie edukacyjne i informacyjne oparte na przepisach obowiązujących w 2026 r. Prezentowane wyliczenia mają charakter wyłącznie orientacyjny i nie stanowią porady prawnej, podatkowej ani oficjalnej decyzji Zakładu Ubezpieczeń Społecznych (ZUS), WZON czy Urzędu Skarbowego. Serwis nie jest powiązany z ZUS ani żadną instytucją państwową.",
        "privacyTitle": "🔒 Ochrona danych osobowych (RODO):",
        "privacyText": "Wszystkie obliczenia w teście 60-sekundowym oraz w kalkulatorze wykonują się w 100% lokalnie na Twoim urządzeniu (w przeglądarce). Żadne kwoty emerytur ani dane osobowe nie są wysyłane ani zapisywane na naszych serwerach.",
        "impressumTitle": "📄 Wydawca i Kontakt:",
        "impressumText": "Wydawca: Maicol Ortiz · Digital Publishing & Senior Education · Kontakt / Pomoc: maicolortizh@gmail.com · Stan prawny: przepisy i wskaźniki 2026 r."
      },
      "outcomeToGiftEp": [
        4,
        1,
        2,
        5
      ],
      "freeGifts": [
        {
          "ep": 1,
          "code": "V01",
          "title": "Świadczenie Wspierające 2026: Progi 70–100 pkt WZON i Wniosek (0 zł)",
          "desc": "Sprawdź 6 progów punktowych WZON (od 792 zł do 4 353 zł/mies. bez podatku PIT) i przygotuj dokumenty.",
          "url": "https://maicolortizh.gumroad.com/l/swiadczenie-wspierajace-bezplatne"
        },
        {
          "ep": 2,
          "code": "V02",
          "title": "Konto w banku po śmierci: Dyspozycja Art. 56 i Koszty pogrzebu (0 zł)",
          "desc": "Jak zabezpieczyć do ~175 000–185 000 zł (20x przec. wynagr. GUS) bez sądu spadkowego i zwrot za pogrzeb (Art. 55a).",
          "url": "https://maicolortizh.gumroad.com/l/konto-po-smierci-bezplatne"
        },
        {
          "ep": 3,
          "code": "V03",
          "title": "Kiedy złożyć wniosek o emeryturę w ZUS: Lista kontrolna (0 zł)",
          "desc": "Najlepsze miesiące na złożenie wniosku w ZUS, waloryzacja składek i tablice dalszego trwania życia GUS.",
          "url": "https://maicolortizh.gumroad.com/l/emerytura-w-czerwcu-bezplatne"
        },
        {
          "ep": 4,
          "code": "V04",
          "title": "Pieniądze z ZUS dla rodziny i Renta Wdowia ERWD (0 zł)",
          "desc": "Porównanie wariantów 100% + 15%/25% (limit 5 636,73 zł brutto), zasiłek pogrzebowy 7 000 zł i dziedziczenie subkonta.",
          "url": "https://maicolortizh.gumroad.com/l/pieniadze-z-zus-dla-rodziny-bezplatne"
        },
        {
          "ep": 5,
          "code": "V05",
          "title": "Sprawdź przeliczenie emerytury i kapitału początkowego ERPO (0 zł)",
          "desc": "Jak odzyskać wyższą emeryturę dzięki dokumentom sprzed 1999 r., studiom i urlopowi wychowawczemu.",
          "url": "https://maicolortizh.gumroad.com/l/przeliczenie-emerytury-bezplatne"
        }
      ]
    }
  },
  "en": {
    "code": "en",
    "flag": "🇺🇸",
    "countryLabel": "🇺🇸 United States (Practical Retirement)",
    "brandTitle": "Practical Retirement — 2026 Social Security, Medicare IRMAA & RMD Assistant",
    "brandSubtitle": "60-Second Diagnosis · Mobile Interactive Calculator (No Excel) · Official SSA / IRS / Medicare Letter Generator (PDF)",
    "privacyBanner": "🔒 100% Private: Your data is calculated on your own device and is never sent to or stored on any server.",
    "privacyEquivalentEs": "100% Privado: Tus datos se calculan en tu propio dispositivo y nunca se envían ni guardan en ningún servidor.",
    "nav": {
      "tabQuiz": "1. 60s Diagnosis (4 Questions)",
      "tabCalc": "2. Mobile Calculator (No Excel)",
      "tabLetters": "3. Official Letters (Print / PDF)",
      "fontSizeLabel": "Text Size:"
    },
    "ui": {
      "quizTitle": "MODULE 1 — 60-Second Retirement Diagnosis (4 Questions)",
      "quizIntro": "Tap the large buttons below that best match your household. After Question 4, you will receive your personalized 2026 retirement action plan with verified IRS, SSA, and Medicare figures.",
      "questionProgress": "Question {current} of 4",
      "btnBack": "← Back to previous question",
      "btnRestartQuiz": "↻ Restart 60-Second Diagnosis",
      "diagResultTitle": "Your Personalized 2026 Retirement & Tax Diagnosis",
      "diagThresholdLabel": "Key 2026 Official Threshold to Watch:",
      "diagMoneyAtStakeLabel": "Estimated Annual or Lifetime Dollars at Stake:",
      "diagFirstStepLabel": "Your #1 Concrete Step to Take Tomorrow Morning:",
      "diagSourceLabel": "Verified 2026 Official Legal Source:",
      "btnGoCalc": "🧮 Open Calculator with My Numbers",
      "btnGoLetter": "✉️ Open Official Ready-to-Print Letter (PDF)",
      "calcTitle": "MODULE 2 — Interactive Mobile Calculator 2026 (No Excel Needed)",
      "calcIntro": "Choose your retirement scenario and adjust your numbers using the large '−' and '+' buttons or the one-tap preset chips.",
      "selectCalcLabel": "Select Calculator:",
      "comparisonTitle": "Direct Visual Comparison: Option A vs. Option B",
      "optionALabel": "Option A",
      "optionBLabel": "Option B",
      "plainExplanationTitle": "What This Means in Plain English:",
      "officialSourceBadge": "Verified 2026 Official Rule:",
      "btnOpenMatchingLetter": "✉️ Generate the Official Letter for This Case →",
      "lettersTitle": "MODULE 3 — Automatic Official Letter Generator (Form-to-PDF)",
      "lettersIntro": "Select the letter you need from the menu, fill in the 5 large boxes below, and click Print / Save as PDF to get a clean, ready-to-sign letter.",
      "selectLetterLabel": "1. Choose the Official Letter You Need (6 Templates):",
      "formSectionTitle": "2. Your Personal Details (inserted in bold into your letter):",
      "field1Label": "1. Full Legal Name:",
      "field1Placeholder": "e.g., Robert and Margaret Thompson",
      "field1Default": "Robert Thompson",
      "field2Label": "2. Street Address, City, State, and ZIP Code:",
      "field2Placeholder": "e.g., 742 Oakridge Drive, Columbus, OH 43215",
      "field2Default": "742 Oakridge Drive, Columbus, OH 43215",
      "field3Label": "3. Social Security Claim Number / Medicare Beneficiary ID (MBI):",
      "field3Placeholder": "e.g., Claim / MBI: XXX-XX-4829",
      "field3Default": "Claim / MBI: XXX-XX-4829",
      "field4Label": "4. Recipient Agency / Custodian (pre-filled automatically, editable):",
      "field5Label": "5. Case-Specific Details (Dates, Dollar Amounts, Life-Changing Event):",
      "previewSectionTitle": "Live Preview of Your Official Formatted Letter (Ready to Print / Save as PDF)",
      "btnPrintPdf": "🖨️ Print / Save Letter as PDF (Clean Sheet)",
      "btnCopyText": "📋 Copy Full Letter Text (for mySocialSecurity / Portal / Email)",
      "copySuccessMsg": "✓ The complete letter text has been copied to your clipboard! You can now paste it into an email, message portal, or word processor.",
      "attachmentsTitle": "Supporting Documents Checklist (Check before mailing or uploading):",
      "signatureLabel": "Authorized Signature:"
    },
    "quiz": {
      "questions": [
        {
          "id": "q1",
          "title": "1. Which age group or retirement stage are you currently in?",
          "options": [
            "Age 60 to 63 — Deciding whether to claim Social Security at 62 or wait",
            "Age 64 to 67 — Approaching Full Retirement Age (67) and Medicare enrollment",
            "Age 68 to 72 — In the golden tax window before Required Minimum Distributions (RMDs) start at 73",
            "Age 73+ — Taking RMDs and managing taxes, Medicare IRMAA, and survivor benefits"
          ]
        },
        {
          "id": "q2",
          "title": "2. What is your federal tax filing status?",
          "options": [
            "Single / Head of Household",
            "Married Filing Jointly",
            "Widowed / Qualifying Surviving Spouse",
            "Married Filing Separately"
          ]
        },
        {
          "id": "q3",
          "title": "3. What is your approximate annual combined income (AGI + 50% of Social Security)?",
          "options": [
            "Under $25,000 (Single) or Under $32,000 (Married) — 0% Social Security Tax Zone",
            "$25,000 to $44,000 — Right inside the Social Security 'Tax Torpedo' Zone (50% to 85% taxable)",
            "$44,000 to $106,000 (Single) / $212,000 (Married) — Standard Medicare & 85% SS Tax Zone",
            "Over $106,000 (Single) or Over $212,000 (Married) — Medicare IRMAA Surcharge Cliff Zone"
          ]
        },
        {
          "id": "q4",
          "title": "4. Which retirement issue do you want to solve first?",
          "options": [
            "Social Security Provisional Income & Tax Torpedo ($25k/$34k Single, $32k/$44k Married thresholds)",
            "Social Security Claiming Age 62 vs. 67 vs. 70 Break-Even Age & Survivor Protection",
            "Roth Conversion vs. RMD & Medicare IRMAA Surcharge Appeal (Form SSA-44 Life-Changing Event)",
            "Medicare Hospital 'Observation Status' vs. Inpatient 3-Midnight Rule Protection (MOON Notice)"
          ]
        }
      ],
      "outcomes": [
        {
          "title": "Focus 1: Defusing the Social Security 'Tax Torpedo' (IRC § 86 Provisional Income Thresholds)",
          "threshold2026": "Provisional Income = AGI + Tax-Exempt Interest + 50% of Social Security. Thresholds: $25,000 / $34,000 (Single) and $32,000 / $44,000 (Married Filing Jointly). Above the second threshold, up to 85% of your Social Security becomes taxable!",
          "moneyAtStake": "$1,400 to $4,200 per year in avoidable federal income taxes by drawing from Roth, cash reserves, or using Qualified Charitable Distributions (QCDs at age 70½+) instead of taxable IRA withdrawals.",
          "firstStep": "Run your Provisional Income numbers in the calculator below and submit IRS Form W-4V or a QCD instruction letter to your IRA custodian.",
          "source": "Internal Revenue Code (IRC) § 86 & IRS Publication 915 (2026 Rules)",
          "calcIndex": 0,
          "letterIndex": 1
        },
        {
          "title": "Focus 2: Social Security Claiming Age 62 vs. 67 (FRA) vs. 70 Break-Even & Spousal Strategy",
          "threshold2026": "Claiming at 62 permanently reduces your benefit by 30% (to 70% of FRA). Waiting from 67 to 70 adds a guaranteed +8% per year (+24% Delayed Retirement Credits). Exact break-even age: 78.7 years (67 vs. 62) and 82.5 years (70 vs. 67).",
          "moneyAtStake": "$85,000 to $160,000+ in cumulative lifetime and surviving spouse protection if either spouse lives past age 83.",
          "firstStep": "Compare your exact monthly PIA in the Break-Even Calculator below; if you claimed within the last 12 months and regret it, file Form SSA-521 to withdraw and reset your clock.",
          "source": "Social Security Act § 202(q) & § 202(w) — SSA Program Operations Manual System (POMS 2026)",
          "calcIndex": 1,
          "letterIndex": 2
        },
        {
          "title": "Focus 3: Roth Conversion Safe Window vs. Forced RMDs & Medicare IRMAA Appeal (Form SSA-44)",
          "threshold2026": "SECURE 2.0 Act RMD Starting Age: 73 (born 1951–1959) or 75 (born 1960+). Medicare IRMAA Tier 1 Cliff: MAGI over $106,000 (Single) or $212,000 (Married Filing Jointly) based on a 2-year tax lookback.",
          "moneyAtStake": "$1,040 to $6,200+ per year in Medicare Part B & Part D IRMAA surcharges that can be waived immediately if you retired or experienced a work reduction (Form SSA-44).",
          "firstStep": "Check your safe Roth conversion headroom below the IRMAA cliff in Module 2, and if SSA used an old high-earning tax year from before you retired, file Form SSA-44 with our cover letter.",
          "source": "SECURE 2.0 Act (IRC § 401(a)(9)) & 20 CFR § 418.1205 (SSA Form SSA-44 IRMAA Appeal)",
          "calcIndex": 2,
          "letterIndex": 0
        },
        {
          "title": "Focus 4: Medicare Hospital 'Observation Status' Trap & Skilled Nursing Coverage",
          "threshold2026": "Medicare Part A only pays for Skilled Nursing Facility (SNF) rehab after 3 consecutive midnights admitted as a formal 'Inpatient' — 'Observation Status' (Outpatient) does NOT count, leaving seniors with $12,000–$30,000 nursing bills.",
          "moneyAtStake": "Up to $209.50/day in SNF coinsurance (days 21–100) and $15,000+ in uncovered rehab stays.",
          "firstStep": "Use our Hospital Inpatient Reclassification Request Letter and always ask the attending physician to document formal Inpatient Admission before the 3rd midnight.",
          "source": "42 CFR § 412.3 (Two-Midnight Rule) & NOTICE Act (Medicare Outpatient Observation Notice - MOON)",
          "calcIndex": 2,
          "letterIndex": 4
        }
      ]
    },
    "calculators": [
      {
        "id": "en_calc_1",
        "title": "1. Social Security Provisional Income & Tax Torpedo ($25k/$34k Single · $32k/$44k Married · 0% / 50% / 85% Taxable)",
        "subtitle": "Calculate your exact IRS Provisional Income, see how much of your Social Security is taxed (0%, 50%, or 85%), and compare the tax savings of shifting $10,000 from taxable IRA withdrawals to Roth/QCD.",
        "legalRef": "IRC § 86 · IRS Publication 915 · Thresholds: $25,000 / $34,000 (Single) & $32,000 / $44,000 (Married)",
        "letterIndex": 1,
        "inputs": [
          {
            "id": "marriedFlag",
            "label": "Filing Status (0 = Single / Head of Household · 1 = Married Filing Jointly):",
            "unit": "Status (0/1)",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 1,
            "presets": [
              0,
              1
            ]
          },
          {
            "id": "ssAnnual",
            "label": "Total Annual Household Social Security Benefits ($/year):",
            "unit": "$/yr",
            "min": 8000,
            "max": 90000,
            "step": 2000,
            "default": 32000,
            "presets": [
              20000,
              28000,
              32000,
              44000
            ]
          },
          {
            "id": "otherAgi",
            "label": "Other Taxable Income (IRA/401k withdrawals, pension, interest in $/year):",
            "unit": "$/yr",
            "min": 0,
            "max": 140000,
            "step": 2000,
            "default": 28000,
            "presets": [
              12000,
              22000,
              28000,
              45000
            ]
          },
          {
            "id": "taxRate",
            "label": "Your Federal Marginal Tax Bracket (10%, 12%, 22%, or 24%):",
            "unit": "%",
            "min": 10,
            "max": 32,
            "step": 2,
            "default": 12,
            "presets": [
              10,
              12,
              22,
              24
            ]
          }
        ]
      },
      {
        "id": "en_calc_2",
        "title": "2. Social Security Claiming Age 62 vs. 67 (FRA) vs. 70 Break-Even Calculator",
        "subtitle": "Compare your monthly check and cumulative lifetime payout at Age 62 (70%), Age 67 (100%), and Age 70 (124%) based on how long you expect to live.",
        "legalRef": "Social Security Act § 202(q) & § 202(w) · Full Retirement Age 67 (1960+ Cohort) · +8%/yr Delayed Credits",
        "letterIndex": 2,
        "inputs": [
          {
            "id": "pia67",
            "label": "Your Monthly Benefit at Full Retirement Age 67 (PIA in $/month):",
            "unit": "$/mo",
            "min": 900,
            "max": 5000,
            "step": 100,
            "default": 2400,
            "presets": [
              1600,
              2000,
              2400,
              3200
            ]
          },
          {
            "id": "longevityAge",
            "label": "Target Life Expectancy Age to Compare Cumulative Total (Years):",
            "unit": "Years Old",
            "min": 72,
            "max": 95,
            "step": 1,
            "default": 84,
            "presets": [
              76,
              79,
              84,
              90
            ]
          }
        ]
      },
      {
        "id": "en_calc_3",
        "title": "3. Roth Conversion vs. RMD & Medicare IRMAA Surcharge Brackets ($106k Single / $212k Married)",
        "subtitle": "Find out your mandatory RMD at age 73, how much room you have for a Roth Conversion before hitting the Medicare IRMAA cliff, and how much you save by avoiding IRMAA surcharges.",
        "legalRef": "SECURE 2.0 Act (IRC § 401(a)(9)) · IRS Uniform Lifetime Table (26.5 at 73) · Medicare IRMAA (Form SSA-44)",
        "letterIndex": 0,
        "inputs": [
          {
            "id": "marriedIrmaa",
            "label": "Filing Status (0 = Single $106k IRMAA Cliff · 1 = Married Jointly $212k Cliff):",
            "unit": "Status (0/1)",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 1,
            "presets": [
              0,
              1
            ]
          },
          {
            "id": "iraBalance",
            "label": "Total Pre-Tax Traditional IRA & 401(k) Balance ($):",
            "unit": "$",
            "min": 100000,
            "max": 2500000,
            "step": 50000,
            "default": 650000,
            "presets": [
              300000,
              500000,
              650000,
              1000000
            ]
          },
          {
            "id": "currentMagi",
            "label": "Current Annual Modified Adjusted Gross Income (MAGI before RMD/Conversion in $/yr):",
            "unit": "$/yr",
            "min": 40000,
            "max": 300000,
            "step": 5000,
            "default": 172000,
            "presets": [
              85000,
              145000,
              172000,
              205000
            ]
          }
        ]
      }
    ],
    "letters": [
      {
        "id": "en_let_1",
        "menuTitle": "1. Medicare IRMAA Surcharge Reduction Request due to Life-Changing Event / Work Stoppage (Form SSA-44 Cover Letter)",
        "defaultRecipient": "Social Security Administration\nOffice of Income-Related Monthly Adjustment Amount (IRMAA) Appeals\nLocal Social Security Field Office",
        "defaultCaseDetails": "Formal request for recalculation of 2026 Medicare Part B and Part D IRMAA surcharges following a qualifying Life-Changing Event (Work Stoppage / Retirement) under 20 CFR § 418.1205; estimated 2026 MAGI reduced below the $106,000 Single / $212,000 Married threshold",
        "subject": "Request for New Initial Determination of Income-Related Monthly Adjustment Amount (IRMAA) Due to Life-Changing Event (Form SSA-44 — 20 CFR § 418.1205)",
        "salutation": "To Whom It May Concern at the Social Security Administration:",
        "paragraphs": [
          "I, {NAME}, residing at {ADDRESS} (Social Security / Medicare Claim Reference: {ID_NUM}), am submitting this formal cover letter together with a completed Form SSA-44 (Medicare Income-Related Monthly Adjustment Amount — Life-Changing Event) to request an immediate downward adjustment of my 2026 Medicare Part B and Part D monthly premiums.",
          "The specific facts of my Life-Changing Event are as follows: {CASE_DETAILS}. My current IRMAA determination was calculated using IRS tax return data from two years ago, prior to my qualifying Life-Changing Event under 20 CFR § 418.1205 (specifically, Work Stoppage / Work Reduction / Loss of Income-Producing Property or Pension).",
          "As documented in Step 2 and Step 3 of the enclosed Form SSA-44, my actual Modified Adjusted Gross Income (MAGI) has decreased substantially and now falls below the applicable IRMAA surcharge threshold.",
          "Please process this request using my updated income estimate, remove the Part B and Part D IRMAA surcharge retroactively to the effective month of the qualifying event, and refund any excess premiums already withheld from my monthly Social Security benefit."
        ],
        "attachments": [
          "Completed and signed Form SSA-44 (Medicare IRMAA Life-Changing Event Request)",
          "Official proof of Life-Changing Event (Employer retirement confirmation letter, final pay stub, or pension statement)",
          "Signed copy of most recent federal tax return (Form 1040 / 1040-SR) or itemized 2026 MAGI estimate"
        ],
        "closing": "Sincerely,"
      },
      {
        "id": "en_let_2",
        "menuTitle": "2. Qualified Charitable Distribution (QCD) Instruction Letter to IRA Custodian to Lower Provisional Income & Satisfy RMD (IRC § 408(d)(8))",
        "defaultRecipient": "IRA Plan Custodian — Retirement Distributions Department\n(Fidelity / Vanguard / Schwab / Bank IRA Custodian)",
        "defaultCaseDetails": "Direct trustee-to-trustee Qualified Charitable Distribution (QCD) of $6,000 from my Traditional IRA (Account ending in #4829) to a qualified 501(c)(3) charity with 0% federal or state tax withholding under IRC § 408(d)(8)",
        "subject": "Direction for Direct Qualified Charitable Distribution (QCD) from Traditional IRA Pursuant to Internal Revenue Code § 408(d)(8)",
        "salutation": "Dear IRA Distributions Administrator:",
        "paragraphs": [
          "I, {NAME}, residing at {ADDRESS} (Account / Tax ID Reference: {ID_NUM}), am over age 70½ and hereby instruct you to execute a direct Qualified Charitable Distribution (QCD) from my Traditional Individual Retirement Account pursuant to Internal Revenue Code § 408(d)(8).",
          "Please process the distribution according to these exact specifications: {CASE_DETAILS}. Because this transfer is a direct charitable distribution under IRC § 408(d)(8), it counts toward my annual Required Minimum Distribution (RMD) under IRC § 401(a)(9) while remaining completely excluded from my Adjusted Gross Income (AGI), Social Security Provisional Income (IRC § 86), and Medicare IRMAA MAGI calculation.",
          "Important instruction: Do NOT withhold any federal or state income taxes from this distribution, and make the check payable directly to the named 501(c)(3) charitable organization (not payable to me personally).",
          "Please send me a written confirmation of the completed transfer so that I may properly report the non-taxable QCD election on Line 4a/4b of my IRS Form 1040-SR."
        ],
        "attachments": [
          "Custodian IRA Distribution / Charitable Request Form (if required by financial institution)",
          "Full legal name, EIN (Employer Identification Number), and mailing address of the 501(c)(3) charity",
          "Copy of government-issued photo ID (if signature guarantee or verification is requested)"
        ],
        "closing": "Sincerely,"
      },
      {
        "id": "en_let_3",
        "menuTitle": "3. Request for Withdrawal of Social Security Application Within 12 Months to Reset Claiming Age (Form SSA-521) or Suspension at FRA",
        "defaultRecipient": "Social Security Administration\nOperations & Benefit Authorizations Center\nLocal Social Security Field Office",
        "defaultCaseDetails": "Formal request under 20 CFR § 404.640 (Form SSA-521) to withdraw my early retirement application filed within the past 12 months (or voluntary suspension of benefits at Full Retirement Age 67 under 20 CFR § 404.313 to earn +8% annual Delayed Retirement Credits)",
        "subject": "Request for Withdrawal of Application for Retirement Benefits Within 12 Months (Form SSA-521 — 20 CFR § 404.640) / Voluntary Benefit Suspension at Full Retirement Age",
        "salutation": "Dear Social Security Claims Specialist:",
        "paragraphs": [
          "I, {NAME}, residing at {ADDRESS} (Social Security Claim Number: {ID_NUM}), hereby submit this written request regarding the timing and calculation of my Social Security retirement benefits.",
          "My specific election is as follows: {CASE_DETAILS}. If I am exercising my one-time right within twelve (12) months of initial entitlement to withdraw my retirement application pursuant to 20 CFR § 404.640, I have enclosed a completed Form SSA-521 and affirm that I am prepared to repay all benefits received to date so that my record is restored as though I had never filed early.",
          "Alternatively, if I have reached Full Retirement Age (67) and am requesting voluntary suspension of my monthly retirement benefit pursuant to 20 CFR § 404.313 and Section 202(w) of the Social Security Act, please suspend my monthly payments effective the month following this request so my benefit accrues Delayed Retirement Credits at two-thirds of 1 percent per month (8 percent per year) up to age 70.",
          "Please provide me with a written confirmation notice detailing the effective date of this action and, if applicable, the exact repayment statement."
        ],
        "attachments": [
          "Completed and signed Form SSA-521 (Request for Withdrawal of Application) if within 12 months of first entitlement",
          "Copy of original Social Security Award Notice",
          "Written consent of any family member receiving auxiliary benefits on this record (if applicable)"
        ],
        "closing": "Respectfully,"
      },
      {
        "id": "en_let_4",
        "menuTitle": "4. Request for Correction of Social Security Earnings Record & Missing W-2 Wages (Form SSA-7008 — 20 CFR § 404.822)",
        "defaultRecipient": "Social Security Administration\nOffice of Earnings Operations\nP.O. Box 33026, Baltimore, MD 21290-3026",
        "defaultCaseDetails": "Correction of omitted or underreported taxed Social Security earnings on my earnings statement affecting my highest 35 indexed earning years and Primary Insurance Amount (PIA)",
        "subject": "Formal Request for Correction of Social Security Earnings Record Pursuant to 20 CFR § 404.822 (Form SSA-7008) and Recomputation of Primary Insurance Amount (PIA)",
        "salutation": "Dear Social Security Earnings Operations Specialist:",
        "paragraphs": [
          "I, {NAME}, residing at {ADDRESS}, holder of Social Security Number {ID_NUM}, am submitting this formal request along with Form SSA-7008 to correct my official Social Security earnings record and recompute my monthly Primary Insurance Amount (PIA).",
          "Upon auditing my annual Social Security Statement against my tax records, I identified the following discrepancy: {CASE_DETAILS}. Because Social Security retirement benefits are calculated using a worker's highest thirty-five (35) years of indexed earnings, the omission of these wages directly reduces my Average Indexed Monthly Earnings (AIME) and permanently lowers my monthly benefit.",
          "Pursuant to 20 CFR § 404.822(e), an earnings record may be corrected at any time—even after the statutory time limit of 3 years, 3 months, and 15 days—to conform the record to tax returns or Form W-2 wage statements filed with the Internal Revenue Service or to correct errors on the face of the record.",
          "Enclosed please find documentary proof of the wages paid and FICA taxes withheld. I request an updated Earnings Record statement and a retroactive adjustment of any underpaid monthly benefits."
        ],
        "attachments": [
          "Completed Form SSA-7008 (Request for Correction of Earnings Record)",
          "Copies of Form W-2, Form 1099, Schedule SE, or final year-end pay stubs for the disputed tax years",
          "Copy of my current mySocialSecurity Earnings Statement showing the missing or incorrect year(s)"
        ],
        "closing": "Sincerely,"
      },
      {
        "id": "en_let_5",
        "menuTitle": "5. Hospital Inpatient Admission vs. 'Observation Status' Protection Request (Medicare 3-Midnight Skilled Nursing Rule — 42 CFR § 412.3)",
        "defaultRecipient": "Hospital Utilization Review Committee & Attending Physician\nPatient Financial & Case Management Department",
        "defaultCaseDetails": "Formal request to review and reclassify hospital stay from Outpatient 'Observation Status' (MOON Notice) to formal Inpatient Admission under the Medicare Two-Midnight Rule (42 CFR § 412.3) to preserve Part A Skilled Nursing Facility (SNF) coverage",
        "subject": "Urgent Request for Utilization Review and Reclassification from Outpatient Observation Status to Formal Medicare Part A Inpatient Admission (42 CFR § 412.3)",
        "salutation": "Dear Attending Physician and Utilization Review Committee:",
        "paragraphs": [
          "I am writing on behalf of / as patient {NAME}, residing at {ADDRESS} (Medicare Beneficiary Identifier / Hospital Account: {ID_NUM}), regarding the current hospital classification of this stay.",
          "The clinical and admission details are as follows: {CASE_DETAILS}. We have been informed or received a Medicare Outpatient Observation Notice (MOON) indicating that this hospital stay is currently classified as 'Outpatient Observation' rather than a formal 'Inpatient Admission.'",
          "As you know, Medicare Part A will not cover post-hospital Skilled Nursing Facility (SNF) rehabilitation unless the beneficiary completes three (3) consecutive midnights as a formally admitted Inpatient. Under 42 CFR § 412.3 (the Two-Midnight Rule), inpatient admission is medically appropriate when the admitting physician expects the patient to require hospital care crossing at least two midnights.",
          "Given the severity of the clinical condition, nursing needs, and safety risks documented in the medical chart, we respectfully request an immediate review by the attending physician and Utilization Review Committee to enter a formal Inpatient Admission order prior to discharge."
        ],
        "attachments": [
          "Copy of the Medicare Outpatient Observation Notice (MOON) received at the hospital",
          "Summary of clinical symptoms, fall risks, and anticipated need for Skilled Nursing Facility (SNF) rehab",
          "Copy of Medicare Red, White, and Blue Card and Healthcare Power of Attorney (if signed by family representative)"
        ],
        "closing": "Respectfully submitted,"
      },
      {
        "id": "en_let_6",
        "menuTitle": "6. Request for Waiver of 25% IRS Penalty on Missed Required Minimum Distribution (RMD) Due to Reasonable Cause (IRS Form 5329 — IRC § 4974(d))",
        "defaultRecipient": "Department of the Treasury\nInternal Revenue Service Center",
        "defaultCaseDetails": "Request for full waiver of the IRC § 4974 excise tax penalty under reasonable cause after promptly taking the corrective Required Minimum Distribution (RMD) upon discovery of the shortfall",
        "subject": "Explanation of Reasonable Cause and Request for Waiver of Excise Tax on Excess Accumulation in Qualified Retirement Plan (IRS Form 5329, Part IX — IRC § 4974(d))",
        "salutation": "Dear Internal Revenue Service Examiner:",
        "paragraphs": [
          "I, {NAME}, residing at {ADDRESS} (Social Security / Taxpayer Identification Number: {ID_NUM}), am attaching this formal Statement of Reasonable Cause to IRS Form 5329 (Additional Taxes on Qualified Plans and Other Tax-Favored Accounts) to request a complete waiver of the excise tax under Internal Revenue Code § 4974(d).",
          "The facts surrounding the Required Minimum Distribution (RMD) shortfall and its immediate correction are as follows: {CASE_DETAILS}. Under IRC § 4974(d), the Secretary may waive the excise tax on any shortfall in a Required Minimum Distribution if the taxpayer establishes that the shortfall was due to reasonable error and that reasonable steps are being taken to remedy the shortfall.",
          "As soon as I discovered the calculation error / custodian processing oversight, I immediately withdrew the full corrective RMD amount from my retirement account and established automated recurring distribution instructions so that this error cannot recur in future tax years.",
          "In accordance with the IRS Form 5329 instructions, I have entered 'RC' and the shortfall amount on the dotted line next to Line 54 and respectfully request that the penalty be waived in full."
        ],
        "attachments": [
          "Completed IRS Form 5329 (Part IX completed with 'RC' reasonable cause notation)",
          "Confirmation statement from IRA / 401(k) custodian proving the corrective RMD distribution was completed",
          "Supporting documentation of reasonable cause (custodian correspondence, medical record, or calculation sheet)"
        ],
        "closing": "Under penalties of perjury, I declare that the above statement is true and correct. Sincerely,"
      }
    ],
    "bridge": {
      "channelName": "Retirement Figures",
      "pageTitle": "Retirement Figures — Free 60-Second Retirement, Social Security & Medicare Check 2026",
      "metaDescription": "Check your 2026 Social Security Provisional Income tax thresholds, claiming age break-even (62 vs 67 vs 70), Roth conversion window, and Medicare IRMAA appeal in 60 seconds.",
      "heroBadge": "🇺🇸 Independent 60-Second Retirement & Tax Check 2026 (Retirement Figures)",
      "heroTitle": "Are You Overpaying Taxes on Social Security or Missing Key 2026 Medicare & RMD Rules?",
      "heroSubtitle": "Tap 4 large buttons in 45 seconds right in your browser. See your personalized 2026 statutory check, run your numbers in the live calculator, and download your free large-print checklist ($0).",
      "trustPills": [
        "✓ 100% Free 60-Second Check ($0)",
        "✓ Statutory 2026 IRS, SSA & Medicare Thresholds",
        "✓ Large-Print Senior Design (≥ 18 px)",
        "✓ 100% Private (Calculated on Your Device)"
      ],
      "giftBtnPill": "$0 Free →",
      "videoBannerPrefix": "🎬 Matched to the video you just watched:",
      "btnSkipToCalc": "🧮 Skip Straight to the Live 2026 Calculator & Free Checklists ($0) ↓",
      "btnBackToQuestions": "↑ Back to the 4 Diagnostic Questions",
      "liveCalcSectionBadge": "TRY IT RIGHT NOW — LIVE 2026 RETIREMENT CALCULATOR",
      "liveCalcSectionTitle": "Test Your Own Numbers in 5 Seconds",
      "liveCalcSectionIntro": "Tap the large '−' and '+' buttons or select a preset amount below. All 3 interactive calculators are unlocked for you right here:",
      "step1Badge": "STEP 1 — YOUR 100% FREE EPISODE CHECKLIST & WORKSHEET ($0)",
      "step1Title": "Download Your Matching Large-Print Checklist & Worksheet for $0",
      "step1Subtitle": "Get the exact free printable worksheet (Large-Print ≥ 16.5 pt PDF) matching your diagnosis or the video you just watched:",
      "step1PrimaryBtnPrefix": "🎁 Download Free Worksheet ($0): ",
      "step1AllGiftsLabel": "All 5 Free Retirement Checklists ($0) — tap any topic to download:",
      "step2Badge": "STEP 2 — THE COMPLETE 2026 RETIREMENT SYSTEM",
      "step2Title": "Retirement One Step at a Time (2026 Edition) — Complete Large-Print Guide (86 p.) + Excel & Web Calculators + 12 Action Letters",
      "step2Subtitle": "Everything you need to review Social Security Provisional Income taxes, prepare a Medicare IRMAA appeal (Form SSA-44), plan tax-free QCDs, and protect hospital coverage.",
      "paidPackPrice": "$19",
      "paidPackUrl": "https://maicolortizh.gumroad.com/l/retirement-one-step-at-a-time",
      "paidPackBtnText": "📘 Get the Complete 2026 Pack 'Retirement One Step at a Time' ($19) →",
      "paidPackGuarantee": "Instant Download · Large-Print Step-by-Step Guide (≥ 16.5 pt PDF & DOCX) · 5-Tab Excel Calculator (.xlsx) + Web App · 12 Ready-to-Print Action Letters (SSA-44, QCD, SSA-521, SSA-7008, Hospital MOON, IRS Form 5329)",
      "comparisonHeaders": [
        "What You Get",
        "Free Check ($0)",
        "Complete 2026 Pack ($19)"
      ],
      "comparisonRows": [
        [
          "60-Second Statutory Check & Large-Print Checklist (≥ 16.5 pt PDF)",
          "✓ 1 Topic Checklist ($0)",
          "✓ All 5 Complete Topic Modules"
        ],
        [
          "Large-Print Step-by-Step Guide (2026 Rules, US Letter PDF & DOCX)",
          "4-Page Quick Summary",
          "✓ Full Printable Handbook & Case Studies"
        ],
        [
          "Interactive 2026 Calculators (Browser Web App + 5-Sheet Excel Workbook .xlsx)",
          "Browser Preview",
          "✓ Full Web App + Downloadable Excel Workbook (.xlsx)"
        ],
        [
          "Ready-to-Print Action Letters for SSA, IRS, Custodians & Hospitals (PDF)",
          "—",
          "✓ 12 Fill-in-the-Blank Formal Letters (PDF)"
        ]
      ],
      "legalFooter": {
        "disclaimerTitle": "⚖️ Important Educational Disclaimer (Not Legal, Tax, CPA, or Financial Advice):",
        "disclaimerText": "'Retirement Figures' provides independent educational materials and self-help calculation tools based on published 2026 IRS, Social Security Administration (SSA), and Medicare statutory thresholds. Nothing on this website or in our downloadable guides constitutes personalized financial, investment, legal, tax, or accounting advice. This website is not affiliated with or endorsed by the Social Security Administration (SSA), the Internal Revenue Service (IRS), Medicare (CMS), or any U.S. government agency. Always consult a licensed CPA, enrolled agent, or qualified fiduciary advisor regarding your personal situation.",
        "privacyTitle": "🔒 100% Client-Side Privacy Notice (CCPA / GDPR):",
        "privacyText": "All numbers entered into the 60-second check and interactive calculator are processed 100% locally in your own device's web browser. We never transmit, collect, or store your personal income or benefit figures on any server.",
        "impressumTitle": "📄 Publisher & Support Contact:",
        "impressumText": "Published by Maicol Ortiz · Digital Publishing & Senior Education · Reader Support: maicolortizh@gmail.com · Updated for 2026 U.S. statutory thresholds."
      },
      "outcomeToGiftEp": [
        1,
        2,
        3,
        4
      ],
      "freeGifts": [
        {
          "ep": 1,
          "code": "V01",
          "title": "Social Security Provisional Income & Tax Torpedo Check ($0)",
          "desc": "Check the $25,000/$34,000 (Single) and $32,000/$44,000 (Married) IRS thresholds and how to shield benefits.",
          "url": "https://maicolortizh.gumroad.com/l/social-security-tax-checklist-free"
        },
        {
          "ep": 2,
          "code": "V02",
          "title": "Compare Social Security Claiming Ages: 62 vs. 67 vs. 70 ($0)",
          "desc": "See the exact break-even age (78.7 and 82.5 years) and how survivor benefits protect your spouse.",
          "url": "https://maicolortizh.gumroad.com/l/social-security-claiming-ages-free"
        },
        {
          "ep": 3,
          "code": "V03",
          "title": "Before a Roth Conversion: RMD & Medicare IRMAA Check ($0)",
          "desc": "Calculate your safe Roth conversion headroom below the $106k / $212k Medicare IRMAA surcharge cliff.",
          "url": "https://maicolortizh.gumroad.com/l/roth-conversion-checklist-free"
        },
        {
          "ep": 4,
          "code": "V04",
          "title": "Before a Hospital Bill: Inpatient vs. Observation Status ($0)",
          "desc": "How to protect Medicare Part A Skilled Nursing coverage under the 3-Midnight Rule (MOON Notice).",
          "url": "https://maicolortizh.gumroad.com/l/medicare-hospital-checklist-free"
        },
        {
          "ep": 5,
          "code": "V05",
          "title": "Before You Sign an Annuity: Surrender Charges & Fees Check ($0)",
          "desc": "The essential questions to ask in writing before locking retirement savings into a complex annuity.",
          "url": "https://maicolortizh.gumroad.com/l/annuity-costs-checklist-free"
        }
      ]
    }
  },
  "nl": {
    "code": "nl",
    "flag": "🇳🇱",
    "countryLabel": "🇳🇱 Nederland (Vroeger & Familiemomenten / Erfbelasting & Pensioen)",
    "brandTitle": "Erfbelasting, Schenking & AOW Gids 2026 — Digitale Senioren Assistent",
    "brandSubtitle": "Diagnose in 60 seconden · Mobiele Rekenhulp (Zonder Excel) · Officiële Brieven Generator (Belastingdienst / SVB / Bank PDF A4)",
    "privacyBanner": "🔒 100% Privé (AVG-veilig): Uw gegevens worden uitsluitend op uw eigen apparaat berekend en nooit naar een server verzonden of opgeslagen.",
    "privacyEquivalentEs": "100% Privado: Tus datos se calculan en tu propio dispositivo y nunca se envían ni guardan en ningún servidor.",
    "nav": {
      "tabQuiz": "1. 60s Diagnose (4 Vragen)",
      "tabCalc": "2. Rekenhulp (Zonder Excel)",
      "tabLetters": "3. Officiële Brieven (PDF A4)",
      "fontSizeLabel": "Tekstgrootte:"
    },
    "ui": {
      "quizTitle": "MODULE 1 — Snelle Diagnose in 60 Seconden (4 Vragen)",
      "quizIntro": "Tik op de grote knoppen die bij uw situatie passen. Na vraag 4 ontvangt u direct uw persoonlijk overzicht met de officiële vrijstellingen en tarieven van 2026.",
      "questionProgress": "Vraag {current} van 4",
      "btnBack": "← Terug naar de vorige vraag",
      "btnRestartQuiz": "↻ Diagnose opnieuw starten",
      "diagResultTitle": "Uw Persoonlijke Pensioen- & Erfbelasting Diagnose 2026",
      "diagThresholdLabel": "Belangrijkste grensbedrag / vrijstelling in 2026:",
      "diagMoneyAtStakeLabel": "Financieel belang (besparing per jaar of voor de kinderen):",
      "diagFirstStepLabel": "Uw eerste concrete stap voor morgenochtend:",
      "diagSourceLabel": "Officiële wettelijke bron 2026:",
      "btnGoCalc": "🧮 Nu met mijn eigen bedragen doorrekenen",
      "btnGoLetter": "✉️ Open de bijbehorende officiële brief (A4 PDF)",
      "calcTitle": "MODULE 2 — Interactieve Mobiele Rekenhulp 2026 (Geen Excel nodig)",
      "calcIntro": "Kies uw onderwerp en pas de bedragen eenvoudig aan met de grote knoppen „−” en „+” of de snelkeuze-knoppen.",
      "selectCalcLabel": "Kies uw berekening:",
      "comparisonTitle": "Directe Visuele Vergelijking: Optie A vs. Optie B",
      "optionALabel": "Optie A",
      "optionBLabel": "Optie B",
      "plainExplanationTitle": "Wat betekent dit in begrijpelijke taal?",
      "officialSourceBadge": "Geverifieerde bron 2026:",
      "btnOpenMatchingLetter": "✉️ Maak direct de officiële brief voor deze situatie →",
      "lettersTitle": "MODULE 3 — Automatische Generator voor Officiële Brieven (Form-to-PDF A4)",
      "lettersIntro": "Kies de brief die u nodig heeft, vul de 5 grote velden in en druk uw brief direct af op A4-formaat of sla hem op als PDF.",
      "selectLetterLabel": "1. Kies de gewenste officiële brief (6 kant-en-klare modellen):",
      "formSectionTitle": "2. Uw persoonlijke gegevens (worden vetgedrukt in de brief geplaatst):",
      "field1Label": "1. Voor- en achternaam:",
      "field1Placeholder": "Bijv. Hendrik en Johanna de Vries",
      "field1Default": "Hendrik de Vries",
      "field2Label": "2. Straatnaam, huisnummer, postcode en woonplaats:",
      "field2Placeholder": "Bijv. Kerkstraat 42, 3512 GH Utrecht",
      "field2Default": "Kerkstraat 42, 3512 GH Utrecht",
      "field3Label": "3. Burgerservicenummer (BSN) / AOW- of Aanslagnummer:",
      "field3Placeholder": "Bijv. BSN: 1234.56.789",
      "field3Default": "BSN: 1234.56.789",
      "field4Label": "4. Ontvangende instantie (automatisch ingevuld, aanpasbaar):",
      "field5Label": "5. Specifieke gegevens van uw situatie (bedragen, datums, aantal kinderen):",
      "previewSectionTitle": "Live voorbeeld van uw Officiële Brief (A4-formaat klaar om te printen)",
      "btnPrintPdf": "🖨️ Brief Afdrukken / Opslaan als PDF (A4)",
      "btnCopyText": "📋 Volledige Tekst Kopiëren (voor MijnBelastingdienst / SVB / E-mail)",
      "copySuccessMsg": "✓ De volledige tekst van uw brief is gekopieerd! U kunt deze nu plakken in een e-mail of bericht aan uw notaris, bank of adviseur.",
      "attachmentsTitle": "Bijlagen om aan te vinken (controleer voor verzending):",
      "signatureLabel": "Handtekening:"
    },
    "quiz": {
      "questions": [
        {
          "id": "q1",
          "title": "1. In welke leeftijdsgroep of levensfase bevindt u zich?",
          "options": [
            "60 tot 66 jaar — Ik bereid mij voor op mijn AOW-leeftijd (67 jaar) en aanvullend pensioen",
            "67 tot 73 jaar — Ik ontvang AOW en wil netto meer overhouden (loonheffingskorting & schijven)",
            "74 tot 80 jaar — Ik wil belastingvrij schenken aan kinderen/kleinkinderen en erfbelasting verlagen",
            "80+ jaar of nabestaande — Ik wil de 8-maandentermijn erfbelasting, AOW-wijziging en bankzaken regelen"
          ]
        },
        {
          "id": "q2",
          "title": "2. Hoe ziet uw huishouden en gezinssituatie eruit?",
          "options": [
            "Alleenstaand (met kinderen en/of kleinkinderen)",
            "Gehuwd of geregistreerd partnerschap / samenwonend (met kinderen/kleinkinderen)",
            "Weduwe / Weduwnaar (langstlevende regeling en alleenstaanden-AOW)",
            "Alleenstaand zonder kinderen (nalatenschap voor neven, nichten, vrienden of goede doelen)"
          ]
        },
        {
          "id": "q3",
          "title": "3. Wat is uw geschatte jaarinkomen of het familievermogen (spaargeld + overwaarde woning)?",
          "options": [
            "Alleen AOW + klein aanvullend pensioen (tot € 40.857 bruto/jaar — lage AOW-belastingschijf 19,07%)",
            "AOW + hoger aanvullend pensioen (boven € 40.857 bruto/jaar — tweede schijf 37,48% & ouderenkorting)",
            "Spaargeld en overwaarde eigen woning tussen € 50.000 en € 250.000",
            "Familievermogen boven € 250.000 (10% en 20% erfbelastingschijven voor de kinderen)"
          ]
        },
        {
          "id": "q4",
          "title": "4. Welke vraag wilt u als eerste helder doorgerekend zien?",
          "options": [
            "Vrijstellingen Schenk- en Erfbelasting 2026 (Kind € 26.230 / Schenking € 6.908 & Kleinkind-legaat)",
            "AOW & Aanvullend Pensioen Netto Vergelijking 2026 (Loonheffingskorting fout voorkomen & schijfgrens € 40.857)",
            "Erfbelasting Aangifte 8-Maanden Termijn (Belastingrente van ~7% voorkomen via Voorlopige Aanslag)",
            "Bankrekening na overlijden (Uitvaartkosten vrijgeven) & SVB omzetting naar Alleenstaanden-AOW"
          ]
        }
      ],
      "outcomes": [
        {
          "title": "Prioriteit 1: Vrijstellingen Schenk- en Erfbelasting 2026 & Het Kleinkind-legaat",
          "threshold2026": "Vrijstelling erfbelasting 2026: Partner € 828.035 | Kind & Kleinkind elk € 26.230 | Jaarlijkse schenkvrijstelling kind: € 6.908/jaar (overige/kleinkind: € 2.769/jaar). Tarief kind: 10% tot € 158.669 belaste erfenis, daarboven 20%.",
          "moneyAtStake": "€ 4.500 tot € 18.500 minder erfbelasting voor uw familie door jaarlijks € 6.908 belastingvrij te schenken en in uw testament het kleinkind-legaat (€ 26.230 per kleinkind tegen 0% belasting) op te nemen.",
          "firstStep": "Bereken uw besparing in de rekenhulp hieronder en gebruik onze schenkingsovereenkomst met uitsluitingsclausule (zodat de schenking altijd binnen uw eigen familie blijft).",
          "source": "Successiewet 1956 (Art. 32 & 33) — Belastingdienst Tarieven & Vrijstellingen 2026",
          "calcIndex": 0,
          "letterIndex": 0
        },
        {
          "title": "Prioriteit 2: AOW & Aanvullend Pensioen Netto 2026 — Voorkom de Dubbele Loonheffingskorting Naheffing",
          "threshold2026": "Eerste belastingschijf AOW-gerechtigden 2026: ca. 19,07% tot € 40.857. Tweede schijf: 37,48%. Algemene heffingskorting + ouderenkorting (€ 2.067 tot inkomen € 45.308). Loonheffingskorting mag maar bij ÉÉN uitkeringsinstantie (SVB óf pensioenfonds) aanstaan!",
          "moneyAtStake": "Voorkomt een onverwachte naheffing van de Belastingdienst van € 1.450 tot € 2.980 per jaar.",
          "firstStep": "Controleer op uw betaalspecificaties van de SVB en uw pensioenfonds of de loonheffingskorting slechts op één plek op 'JA' staat en stuur zo nodig direct onze wijzigingsbrief.",
          "source": "Wet inkomstenbelasting 2001 & Sociale Verzekeringsbank (SVB Bedragen 2026)",
          "calcIndex": 1,
          "letterIndex": 2
        },
        {
          "title": "Prioriteit 3: De 8-Maandengrens bij Erfbelasting — Voorkom Hoge Belastingrente",
          "threshold2026": "Aangifte erfbelasting moet binnen 8 maanden na de overlijdensdatum binnen zijn. Daarna rekent de Belastingdienst automatisch belastingrente (ca. 6,5% tot 7,5% per jaar) over het te betalen bedrag.",
          "moneyAtStake": "€ 900 tot € 3.200 aan onnodige belastingrente bespaard wanneer de woning nog niet verkocht is of de afwikkeling langer duurt.",
          "firstStep": "Vraag vóór het verstrijken van maand 8 met onze officiële brief een Voorlopige Aanslag Erfbelasting of uitstel met rentestop aan bij de Belastingdienst.",
          "source": "Algemene wet inzake rijksbelastingen (Art. 30g AWR) — Belastingdienst Erfbelasting 2026",
          "calcIndex": 2,
          "letterIndex": 3
        },
        {
          "title": "Prioriteit 4: Vrijgave Uitvaartkosten bij de Bank & Omzetting naar Alleenstaanden-AOW bij de SVB",
          "threshold2026": "Bij overlijden van een partner stijgt het AOW-recht van de achterblijvende partner direct van het gehuwdentarief (ca. € 1.122 bruto/mnd) naar het alleenstaandentarief (ca. € 1.637 bruto/mnd) + vrijgave bankrekening voor uitvaartfacturen.",
          "moneyAtStake": "Ruim € 515 bruto per maand hogere AOW en directe betaling van de uitvaartfacturen zonder geld uit eigen zak voor te schieten.",
          "firstStep": "Gebruik onze brief voor de Nabestaandendesk van de bank en het verzoekschrift voor de Sociale Verzekeringsbank (SVB).",
          "source": "Algemene Ouderdomswet (AOW) — SVB & Richtlijn Nederlandse Vereniging van Banken (NVB 2026)",
          "calcIndex": 1,
          "letterIndex": 4
        }
      ]
    },
    "calculators": [
      {
        "id": "nl_calc_1",
        "title": "1. Vrijstellingen Schenk- en Erfbelasting 2026 (Kind € 26.230 · Schenking € 6.908 · 10% / 20% Schijven)",
        "subtitle": "Vergelijk hoeveel erfbelasting uw kinderen betalen als u niets regelt versus wanneer u gebruikmaakt van de jaarlijkse schenkvrijstelling (€ 6.908/jaar) en de kleinkindvrijstelling (€ 26.230 per kleinkind).",
        "legalRef": "Successiewet 1956 · Belastingdienst 2026: Vrijstelling kind/kleinkind € 26.230 · Schenking € 6.908 · Schijfgrens 10%/20%: € 158.669",
        "letterIndex": 0,
        "inputs": [
          {
            "id": "children",
            "label": "Aantal kinderen:",
            "unit": "kinderen",
            "min": 1,
            "max": 6,
            "step": 1,
            "default": 2,
            "presets": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "id": "grandchildren",
            "label": "Aantal kleinkinderen (elk tot € 26.230 geheel vrijgesteld van erfbelasting!):",
            "unit": "kleinkinderen",
            "min": 0,
            "max": 10,
            "step": 1,
            "default": 2,
            "presets": [
              0,
              2,
              4,
              6
            ]
          },
          {
            "id": "estateTotal",
            "label": "Totaal te vererven vermogen (spaargeld + overwaarde eigen woning in €):",
            "unit": "€",
            "min": 40000,
            "max": 1200000,
            "step": 20000,
            "default": 320000,
            "presets": [
              150000,
              250000,
              320000,
              500000
            ]
          },
          {
            "id": "giftYears",
            "label": "Aantal jaren waarin u jaarlijks € 6.908 belastingvrij per kind schenkt:",
            "unit": "jaren",
            "min": 1,
            "max": 12,
            "step": 1,
            "default": 5,
            "presets": [
              3,
              5,
              8,
              10
            ]
          }
        ]
      },
      {
        "id": "nl_calc_2",
        "title": "2. AOW & Aanvullend Pensioen Netto Vergelijking 2026 (Schijfgrens € 40.857 & Loonheffingskorting)",
        "subtitle": "Bereken uw netto maandinkomen uit AOW + aanvullend pensioen in 2026 en zie direct hoeveel naheffing u voorkomt door de loonheffingskorting op slechts één plek toe te passen.",
        "legalRef": "Belastingdienst & SVB 2026 · Schijf 1 AOW (19,07% tot € 40.857) · Schijf 2 (37,48%) · Ouderenkorting € 2.067",
        "letterIndex": 2,
        "inputs": [
          {
            "id": "livingStatus",
            "label": "Leefsituatie (0 = Alleenstaand AOW ca. € 1.637/mnd · 1 = Samenwonend/Gehuwd ca. € 1.122/mnd p.p.):",
            "unit": "Status (0/1)",
            "min": 0,
            "max": 1,
            "step": 1,
            "default": 0,
            "presets": [
              0,
              1
            ]
          },
          {
            "id": "extraPension",
            "label": "Aanvullend pensioen bruto per maand (bijv. ABP, PFZW, PME in €/maand):",
            "unit": "€/mnd",
            "min": 0,
            "max": 4500,
            "step": 100,
            "default": 1200,
            "presets": [
              500,
              900,
              1200,
              2000
            ]
          }
        ]
      },
      {
        "id": "nl_calc_3",
        "title": "3. Aangifte Erfbelasting 8-Maanden Termijn & Belastingrente Voorkomen (2026)",
        "subtitle": "Bereken hoeveel belastingrente (~7% per jaar) de erfgenamen besparen door binnen 8 maanden na overlijden een voorlopige aanslag aan te vragen.",
        "legalRef": "Art. 30g AWR · Belastingdienst Erfbelasting: 8 maanden rentevrije termijn na overlijden",
        "letterIndex": 3,
        "inputs": [
          {
            "id": "expectedTax",
            "label": "Geschatte totale erfbelasting over de nalatenschap (€):",
            "unit": "€",
            "min": 2000,
            "max": 120000,
            "step": 2000,
            "default": 22000,
            "presets": [
              8000,
              15000,
              22000,
              45000
            ]
          },
          {
            "id": "monthsAfterDeath",
            "label": "Verwachte duur tot definitieve afwikkeling / verkoop woning (maanden na overlijden):",
            "unit": "maanden",
            "min": 6,
            "max": 24,
            "step": 1,
            "default": 16,
            "presets": [
              8,
              12,
              16,
              20
            ]
          }
        ]
      }
    ],
    "letters": [
      {
        "id": "nl_let_1",
        "menuTitle": "1. Onderhandse Akte van Belastingvrije Schenking 2026 (€ 6.908 kind / € 2.769 kleinkind) inclusief harde Uitsluitingsclausule (Privéclausule)",
        "defaultRecipient": "Voor de eigen administratie van Schenker en Begunstigde (Kind / Kleinkind)\n(En ten behoeve van aangifte Schenkbelasting bij de Belastingdienst indien boven vrijstelling)",
        "defaultCaseDetails": "Jaarlijkse belastingvrije schenking 2026 van € 6.908 per kind (of € 2.769 per kleinkind) onder uitdrukkelijke toepassing van een harde uitsluitingsclausule (zodat het geschonken bedrag bij echtscheiding nooit naar een ex-partner gaat)",
        "subject": "Onderhandse Overeenkomst van Schenking 2026 met Uitsluitingsclausule (Artikel 7:175 BW & Artikel 33 Successiewet 1956)",
        "salutation": "Ondergetekenden verklaren het volgende te zijn overeengekomen:",
        "paragraphs": [
          "Ik, ondergetekende {NAME}, wonende te {ADDRESS} (BSN / referentie: {ID_NUM}), hierna te noemen 'de Schenker', verklaar hierbij uit vrijgevigheid en onverplicht te schenken aan mijn kind / kleinkind, die verklaart deze schenking dankbaar te aanvaarden.",
          "De specifieke gegevens van deze schenking in het kalenderjaar 2026 luiden als volgt: {CASE_DETAILS}. Deze schenking valt binnen de wettelijke jaarlijkse vrijstelling voor de schenkbelasting van artikel 33 van de Successiewet 1956 (in 2026: € 6.908 per kalenderjaar voor een kind en € 2.769 voor een kleinkind of derde), zodat over dit bedrag 0% schenkbelasting verschuldigd is.",
          "UITSLUITINGSCLAUSULE (PRIVÉCLAUSULE): De Schenker bepaalt hierbij uitdrukkelijk dat het geschonkene, alsmede de vruchten daarvan en alles wat door zaaksvervanging daarvoor in de plaats treedt, nimmer zal vallen in enige huwelijksgemeenschap of gemeenschap van geregistreerd partnerschap waarin de Begunstigde thans is gehuwd of in de toekomst mocht huwen, en nimmer mag worden betrokken in enig verrekenbeding bij echtscheiding.",
          "Het bedrag wordt overgemaakt op de persoonlijke bankrekening van de Begunstigde onder vermelding van 'Schenking 2026 met uitsluitingsclausule'. Beide partijen bewaren een ondertekend exemplaar van deze akte in hun administratie."
        ],
        "attachments": [
          "Bankafschrift van de overboeking met omschrijving 'Schenking 2026 met uitsluitingsclausule'",
          "Kopie identiteitsbewijs van Schenker en Begunstigde (voor eigen dossier)",
          "Indien boven € 6.908 geschonken (bijv. eenmalig verhoogde vrijstelling € 32.195 voor kind 18–40 jaar): kopie aangifte Schenkbelasting"
        ],
        "closing": "Aldus in tweevoud opgemaakt en ondertekend,"
      },
      {
        "id": "nl_let_2",
        "menuTitle": "2. Instructiebrief aan Notaris voor opname Kleinkind-legaat (€ 26.230 belastingvrij per kleinkind) en Opvullegaat in Testament",
        "defaultRecipient": "Notariskantoor — Afdeling Familierecht & Estate Planning",
        "defaultCaseDetails": "Aanpassing van mijn testament met opname van een vrijgesteld kleinkind-legaat tot het vrijstellingsbedrag van € 26.230 per kleinkind (0% erfbelasting in 2026) alsmede een flexibel opvullegaat / tweetrapsmaking om 20% erfbelasting te voorkomen",
        "subject": "Verzoek tot opstellen / wijzigen testament: Opname Kleinkind-legaat (Art. 32 lid 1 sub 4° onderdeel c Successiewet 1956) en Fiscaal Opvullegaat",
        "salutation": "Geachte heer / mevrouw de notaris,",
        "paragraphs": [
          "Hierbij verzoek ik, {NAME}, wonende te {ADDRESS} (BSN: {ID_NUM}), uw kantoor om een concept-akte op te stellen voor de actualisering van mijn uiterste wilsbeschikking (testament) op basis van de vrijstellingen en tariefschijven van de Successiewet 1956 voor het jaar 2026.",
          "Mijn specifieke wensen voor mijn nalatenschap luiden als volgt: {CASE_DETAILS}. In de eerste plaats wens ik voor elk van mijn kleinkinderen een geldlegaat op te nemen ter grootte van hun maximale fiscale vrijstelling voor de erfbelasting (in 2026: € 26.230 per kleinkind), opeisbaar bij het overlijden van de langstlevende echtgenoot/partner of onder bewind tot een door mij te bepalen leeftijd.",
          "In de tweede plaats wens ik een flexibel 'opvullegaat' en een renteclausule (6% samengestelde rente) op te nemen, zodat de langstlevende partner na het eerste overlijden optimaal gebruik kan maken van de partnervrijstelling (€ 828.035 in 2026) én de eerste 10%-schijf van de kinderen (tot € 158.669 per kind), waarmee belastingheffing tegen het 20%-tarief bij het tweede overlijden wordt geminimaliseerd.",
          "Graag ontvang ik van u een uitnodiging voor een bespreking en een kostenopgave vooraf."
        ],
        "attachments": [
          "Kopie van mijn huidige testament (indien aanwezig) en trouwboekje / partnerschapsakte",
          "Overzicht van de volledige namen en geboortedata van kinderen en kleinkinderen",
          "Globale opstelling van het vermogen (woning, WOZ-waarde, spaargeld en beleggingen)"
        ],
        "closing": "Met vriendelijke groet,"
      },
      {
        "id": "nl_let_3",
        "menuTitle": "3. Verzoek aan SVB of Pensioenfonds tot wijziging Loonheffingskorting (Voorkomen van dubbele heffingskorting en Belastingdienst-naheffing)",
        "defaultRecipient": "Sociale Verzekeringsbank (SVB) — Afdeling AOW & Loonheffing\n(of Klantenservice van mijn Aanvullend Pensioenfonds)",
        "defaultCaseDetails": "Uitschakelen (of juist inschakelen) van de loonheffingskorting met ingang van de eerstvolgende maandbetaling zodat de loonheffingskorting uitsluitend op mijn hoogste inkomen wordt toegepast en een naheffing inkomstenbelasting wordt voorkomen",
        "subject": "Verzoek tot wijziging toepassing Loonheffingskorting en Ouderenkorting op mijn AOW- / Pensioenuitkering (Wet op de loonbelasting 1964)",
        "salutation": "Geachte dames en heren,",
        "paragraphs": [
          "Hierbij verzoek ik, {NAME}, wonende te {ADDRESS}, bekend onder Burgerservicenummer (BSN) / pensioennummer {ID_NUM}, om de toepassing van de loonheffingskorting op mijn maandelijkse uitkering met ingang van de eerstvolgende betaaldatum aan te passen.",
          "De reden en exacte instructie voor mijn verzoek luiden als volgt: {CASE_DETAILS}. Omdat ik naast mijn AOW-uitkering van de Sociale Verzekeringsbank tevens een aanvullend ouderdomspensioen ontvang, leidt gelijktijdige toepassing van de loonheffingskorting en ouderenkorting bij twee uitkeringsinstanties tot een te lage maandelijkse inhouding en een hoge naheffing bij de definitieve aanslag inkomstenbelasting.",
          "Conform het voorschrift van de Belastingdienst mag de loonheffingskorting slechts bij één inhoudingsplichtige tegelijkertijd (bij voorkeur op het hoogste bruto jaarinkomen) worden toegepast.",
          "Ik verzoek u deze wijziging per de eerstvolgende maand te verwerken en mij hiervan een schriftelijke bevestiging alsmede een aangepaste bruto-netto specificatie toe te zenden."
        ],
        "attachments": [
          "Ingevuld formulier 'Model opgaaf gegevens voor de loonheffingen' (indien vereist)",
          "Kopie van mijn meest recente betaalspecificatie van de SVB / het pensioenfonds",
          "Kopie van een geldig identiteitsbewijs (met afgeschermde pasfoto)"
        ],
        "closing": "Met vriendelijke groet,"
      },
      {
        "id": "nl_let_4",
        "menuTitle": "4. Verzoek aan Belastingdienst om Voorlopige Aanslag Erfbelasting binnen 8 maanden (Belastingrente van ~7% stopzetten — Art. 30g AWR)",
        "defaultRecipient": "Belastingdienst / Nabestaandendesk — Afdeling Erfbelasting\nPostbus 4660, 5601 ER Eindhoven",
        "defaultCaseDetails": "Indiening verzoek om een voorlopige aanslag erfbelasting binnen de wettelijke termijn van 8 maanden na overlijden om het oplopen van belastingrente (ca. 6,5%–7,5% per jaar) te voorkomen in afwachting van verkoop van de woning",
        "subject": "Verzoek om oplegging Voorlopige Aanslag Erfbelasting en uitstel van definitieve aangifte ter voorkoming van belastingrente (Artikel 30g Algemene wet inzake rijksbelastingen)",
        "salutation": "Geachte inspecteur der rijksbelastingen,",
        "paragraphs": [
          "Namens de gezamenlijke erfgenamen dien ik, {NAME}, wonende te {ADDRESS} (BSN erflater / referentienummer: {ID_NUM}), hierbij binnen de wettelijke termijn van acht maanden na het overlijden een verzoek in om een voorlopige aanslag erfbelasting op te leggen.",
          "De gegevens van de nalatenschap en de geschatte verkrijgingen luiden als volgt: {CASE_DETAILS}. Hoewel de definitieve afwikkeling van de nalatenschap (waaronder de definitieve taxatie of verkoop van de tot de boedel behorende woning en de eindafrekening van bank- en zorgkosten) nog niet volledig is afgerond, wensen de erfgenamen het in rekening brengen van belastingrente ingevolge artikel 30g AWR te voorkomen.",
          "Volgens de regels van de Belastingdienst wordt er geen belastingrente berekend over het bedrag van de voorlopige aanslag indien dit verzoek vóór het verstrijken van de achtste maand na de overlijdensdatum is ingediend.",
          "Wij verzoeken u tevens om vijf maanden uitstel voor het indienen van de definitieve aangifte erfbelasting en zien de voorlopige aanslag graag op het bovengenoemde correspondentieadres van de contactpersoon tegemoet."
        ],
        "attachments": [
          "Overzicht van de geschatte omvang van de nalatenschap (WOZ-waarde woning, banksaldi en aftrekbare uitvaartkosten)",
          "Opgave van de erfgenamen met hun naam, adres, BSN en relatie tot de overledene",
          "Kopie van de akte van overlijden / verklaring van erfrecht"
        ],
        "closing": "Hoogachtend,"
      },
      {
        "id": "nl_let_5",
        "menuTitle": "5. Verzoek aan de Nabestaandendesk van de Bank tot directe betaling van Uitvaartfacturen uit de rekening van de overledene",
        "defaultRecipient": "Nabestaandendesk / Afdeling Nalatenschappen van de Bank\n(ING / Rabobank / ABN AMRO / Volksbank)",
        "defaultCaseDetails": "Rechtstreekse vrijgave en betaling van de uitvaartfacturen ter hoogte van € 6.450 ten laste van de betaal- of spaarrekening van de overledene zonder te hoeven wachten op een notariële verklaring van erfrecht",
        "subject": "Verzoek tot rechtstreekse betaling van uitvaartkosten ten laste van de bankrekening van de overledene (Conform richtlijnen Nederlandse Vereniging van Banken)",
        "salutation": "Geachte medewerkers van de Nabestaandendesk,",
        "paragraphs": [
          "Hierbij verzoek ik, {NAME}, wonende te {ADDRESS} (rekeningnummer overledene / dossiernummer: {ID_NUM}), als nabestaande en opdrachtgever van de uitvaart om de bijgevoegde originele facturen voor de uitvaart rechtstreeks te voldoen vanaf de rekening van de overledene.",
          "De specificatie van de te betalen uitvaartkosten luidt als volgt: {CASE_DETAILS}. Op grond van de geldende bancaire richtlijnen voor de afwikkeling van nalatenschappen kunnen aantoonbare kosten die direct verband houden met de begrafenis of crematie (zoals de nota van de uitvaartonderneming, kist/urne, rouwkaarten en begraafplaats- of crematoriumrechten) rechtstreeks van de geblokkeerde rekening van de overledene worden betaald, mits het saldo toereikend is.",
          "Indien het totale saldo op de rekeningen van de overledene onder de grens van € 100.000 ligt en er sprake is van de wettelijke verdeling (langstlevende echtgenoot en kinderen zonder afwijkend testament), verzoek ik u tevens mij een verklaring van uitbetaling toe te zenden zodat geen kostbare notariële verklaring van erfrecht behoeft te worden opgesteld.",
          "Graag ontvang ik binnen 5 werkdagen een bevestiging van de uitvoering van deze betaling."
        ],
        "attachments": [
          "Kopie van de officiële akte van overlijden",
          "Originele gespecificeerde factuur van de uitvaartonderneming (met IBAN van de uitvaartonderneming)",
          "Kopie van mijn geldige identiteitsbewijs"
        ],
        "closing": "Met vriendelijke groet,"
      },
      {
        "id": "nl_let_6",
        "menuTitle": "6. Melding aan de Sociale Verzekeringsbank (SVB) voor onmiddellijke omzetting naar Alleenstaanden-AOW (70% norm) na overlijden partner",
        "defaultRecipient": "Sociale Verzekeringsbank (SVB) — Afdeling AOW & Nabestaanden",
        "defaultCaseDetails": "Aanvraag tot onmiddellijke aanpassing van mijn AOW-pensioen van het gehuwdentarief (50% norm) naar het alleenstaandentarief (70% norm: ca. € 1.637 bruto/mnd in 2026) met ingang van de eerste dag van de maand van overlijden, inclusief overlijdensuitkering",
        "subject": "Verzoek tot herberekening AOW naar Alleenstaandentarief en uitbetaling Overlijdensuitkering (Algemene Ouderdomswet — AOW)",
        "salutation": "Geachte dames en heren,",
        "paragraphs": [
          "Hierbij bericht ik, {NAME}, wonende te {ADDRESS}, bekend onder Burgerservicenummer (BSN) {ID_NUM}, u omtrent het overlijden van mijn echtgenoot / geregistreerd partner / huisgenoot en verzoek ik u mijn AOW-uitkering per direct aan te passen.",
          "De gegevens met betrekking tot mijn gewijzigde leefsituatie zijn als volgt: {CASE_DETAILS}. Op grond van de Algemene Ouderdomswet (AOW) heb ik als achterblijvende AOW-gerechtigde vanaf de eerste dag van de maand waarin mijn partner is overleden recht op het hogere AOW-pensioen voor een alleenstaande (70% van het netto minimumloon in plaats van 50%).",
          "Daarnaast verzoek ik u om uitbetaling van de wettelijke eenmalige overlijdensuitkering (ter hoogte van één volledige maand bruto AOW, vrij van belasting en premies) alsmede het tot de overlijdensdag opgebouwde vakantiegeld.",
          "Gelieve mij een nieuw toekenningsbesluit met de aangepaste maandelijkse netto-uitbetaling toe te sturen."
        ],
        "attachments": [
          "Kopie van de akte van overlijden (indien het overlijden in het buitenland plaatsvond; binnen Nederland geeft de gemeente dit door via de BRP)",
          "Bevestiging van het IBAN-rekeningnummer waarop de alleenstaanden-AOW gestort dient te worden",
          "Overzicht omtrent toepassing van de loonheffingskorting in de nieuwe situatie"
        ],
        "closing": "Met vriendelijke groet,"
      }
    ],
    "bridge": {
      "channelName": "Pensioen & Erfbelasting Helder",
      "pageTitle": "Pensioen, AOW & Erfbelasting 2026 — Gratis 60-Seconden Check & Rekenhulp",
      "metaDescription": "Bereken in 60 seconden uw erfbelasting vrijstellingen 2026 (kind € 26.230, schenking € 6.908), uw netto AOW + pensioen (schijfgrens € 40.857) en download uw gratis checklist.",
      "heroBadge": "🇳🇱 Onafhankelijke 60-Seconden Check & Rekenhulp 2026 (Nederland)",
      "heroTitle": "Hoeveel Erfbelasting of Inkomstenbelasting op AOW & Pensioen kunt u in 2026 besparen?",
      "heroSubtitle": "Tik op 4 grote knoppen in 45 seconden direct in uw browser. U ziet direct uw persoonlijke diagnose voor 2026, de interactieve rekenhulp én uw gratis checklist in grote letters (€ 0).",
      "trustPills": [
        "✓ 100% Gratis Sneltest (€ 0)",
        "✓ Wettelijke Cijfers 2026 (Belastingdienst & SVB)",
        "✓ Grote Letters (≥ 18 px) op Telefoon & PC",
        "✓ 100% Privé (AVG-veilig op uw eigen apparaat)"
      ],
      "giftBtnPill": "€ 0 Gratis →",
      "videoBannerPrefix": "🎬 Gratis checklist behorend bij uw video:",
      "btnSkipToCalc": "🧮 Direct naar de Live Rekenhulp 2026 & Gratis Checklists (€ 0) ↓",
      "btnBackToQuestions": "↑ Terug naar de 4 diagnose-vragen",
      "liveCalcSectionBadge": "DIRECT DOORREKENEN — INTERACTIEVE REKENHULP 2026",
      "liveCalcSectionTitle": "Pas de bedragen aan met uw eigen situatie",
      "liveCalcSectionIntro": "Tik op de grote knoppen „−” en „+” of kies een voorbeeldsituatie. Alle 3 rekenhulpen voor 2026 zijn hier direct gratis beschikbaar:",
      "step1Badge": "STAP 1 — UW 100% GRATIS CHECKLIST & REKENHULP (€ 0)",
      "step1Title": "Download nu uw Gratis Checklist & Overzicht 2026 voor € 0",
      "step1Subtitle": "Kies uw gratis checklist in grote letters (PDF A4 ≥ 16,5 pt) passend bij uw diagnose of de bekeken video (direct te downloaden voor € 0):",
      "step1PrimaryBtnPrefix": "🎁 Nu Gratis Downloaden (€ 0): ",
      "step1AllGiftsLabel": "Alle 5 gratis checklists voor 2026 (€ 0) — klik direct op uw onderwerp:",
      "step2Badge": "STAP 2 — HET COMPLETE PAKKET VOOR NEDERLAND (2026)",
      "step2Title": "Pensioen, AOW & Erfbelasting Helder 2026 — Volledige Gids in Grote Letters (71 p.) + Excel & Web Rekenhulp + 10 Brieven (A4 PDF)",
      "step2Subtitle": "Het complete pakket voor senioren en hun familie: inclusief de volledige gids (71 pagina's), de rekenhulpen voor erfbelasting/schenking/AOW en 10 kant-en-klare brieven voor Belastingdienst, SVB, Notaris en Bank.",
      "paidPackPrice": "17 €",
      "paidPackUrl": "https://maicolortizh.gumroad.com/l/geschiedenis-in-beeld-volledige-versie",
      "paidPackBtnText": "📘 Volledig Pakket „Pensioen & Erfbelasting Helder 2026” Nu Openen (17 €) →",
      "paidPackGuarantee": "Direct te downloaden · Uitgebreide gids in grote letters ≥ 16,5 pt (71 p. PDF A4 & DOCX) · Excel Rekenhulp (.xlsx) + Web App · 10 kant-en-klare brieven (Schenking met uitsluitingsclausule, Kleinkind-legaat, Loonheffingskorting SVB, Voorlopige Aanslag)",
      "comparisonHeaders": [
        "Wat u ontvangt",
        "Gratis Checklist (€ 0)",
        "Volledig Pakket 2026 (17 €)"
      ],
      "comparisonRows": [
        [
          "60-Seconden Diagnose & Thema-Checklist (Grote letters ≥ 16,5 pt PDF)",
          "✓ 1 Checklist naar keuze (€ 0)",
          "✓ Alle 5 thema-dossiers compleet"
        ],
        [
          "Uitgebreid Handboek in Grote Letters 2026 (71 p. A4 PDF & DOCX)",
          "4-pagina samenvatting",
          "✓ Compleet boekwerk met rekenvoorbeelden"
        ],
        [
          "Interactieve Rekenhulp 2026 (Web App + 5-blads Excel-bestand .xlsx)",
          "Basisweergave in browser",
          "✓ Volledige versie (Web App + Excel .xlsx)"
        ],
        [
          "Kant-en-klare Modelbrieven voor Belastingdienst, SVB, Notaris & Bank",
          "—",
          "✓ 10 brieven (32 p. A4 PDF) klaar om te printen"
        ]
      ],
      "legalFooter": {
        "disclaimerTitle": "⚖️ Belangrijke Juridische Mededeling (Geen fiscaal, notarieel of financieel advies):",
        "disclaimerText": "„Pensioen & Erfbelasting Helder” is een onafhankelijk educatief en informatief hulpmiddel op basis van de wettelijke tarieven en vrijstellingen van 2026. De berekeningen dienen uitsluitend ter algemene oriëntatie en vormen geen persoonlijk belastingadvies, financieel advies of notarieel advies. Deze website is niet verbonden aan de Belastingdienst, de Sociale Verzekeringsbank (SVB) of andere overheidsinstanties.",
        "privacyTitle": "🔒 100% Privacy & Gegevensbescherming (AVG):",
        "privacyText": "Alle gegevens die u invult in de 60-seconden test en de rekenhulp worden voor 100% lokaal in de browser op uw eigen apparaat berekend. Er worden geen financiële of persoonlijke gegevens naar een server verzonden of opgeslagen.",
        "impressumTitle": "📄 Uitgever & Contact:",
        "impressumText": "Uitgever: Maicol Ortiz · Digital Publishing & Senior Education · Contact / Klantenservice: maicolortizh@gmail.com · Bijgewerkt volgens de Nederlandse cijfers en vrijstellingen van 2026."
      },
      "outcomeToGiftEp": [
        1,
        2,
        3,
        4
      ],
      "freeGifts": [
        {
          "ep": 1,
          "code": "V01",
          "title": "Erfbelasting & Vrijstellingen 2026: Kind (€ 26.230) & Kleinkind Check (€ 0)",
          "desc": "Stapsgewijze checklist (4 p. grote letters) over de vrijstellingen voor partner (€ 828.035), kind en kleinkind (€ 26.230).",
          "url": "https://maicolortizh.gumroad.com/l/familieverhaal-amsterdam-gratis"
        },
        {
          "ep": 2,
          "code": "V02",
          "title": "Netto AOW & Pensioen 2026: Voorkom Dubbele Loonheffingskorting (€ 0)",
          "desc": "Controleer de schijfgrens van € 40.857 (19,07%), de Zvw-bijdrage (5,26%) en zet de loonheffingskorting op slechts 1 uitkering.",
          "url": "https://maicolortizh.gumroad.com/l/familieverhaal-amsterdam-gratis"
        },
        {
          "ep": 3,
          "code": "V03",
          "title": "Belastingvrij Schenken 2026 (€ 6.908/jaar) & Uitsluitingsclausule (€ 0)",
          "desc": "Hoe u jaarlijks € 6.908 per kind en € 2.769 per kleinkind belastingvrij schenkt met schriftelijke uitsluitingsclausule.",
          "url": "https://maicolortizh.gumroad.com/l/familieverhaal-amsterdam-gratis"
        },
        {
          "ep": 4,
          "code": "V04",
          "title": "8-Maanden Termijn & Voorlopige Aanslag: Bespaar ~7% Belastingrente (€ 0)",
          "desc": "Hoe u binnen 8 maanden na overlijden een voorlopige aanslag aanvraagt en hoge belastingrente voorkomt.",
          "url": "https://maicolortizh.gumroad.com/l/familieverhaal-amsterdam-gratis"
        },
        {
          "ep": 5,
          "code": "V05",
          "title": "Bankrekening na Overlijden & Nabestaanden-Checklist 2026 (€ 0)",
          "desc": "Overzicht voor de bank, uitvaartkosten, Verklaring van Erfrecht en alle eerste stappen voor nabestaanden.",
          "url": "https://maicolortizh.gumroad.com/l/familieverhaal-amsterdam-gratis"
        }
      ]
    }
  }
};

/* ==========================================================================
   MOTOR PUENTE PÚBLICO DE CONVERSIÓN SENIOR 2026 (100% CLIENT-SIDE · GDPR)
   Soporta DE, FR, PL, EN, NL · ?lang=de|fr|pl|en|nl&v=1..5 · navigator.language
   ========================================================================== */
(function() {
  "use strict";

  const STATE = {
    lang: "de",
    fontSize: "large", // 'normal' (18px) | 'large' (20px) | 'xlarge' (22px)
    quizStep: 0,
    quizAnswers: [0, 0, 0, 0],
    quizCompleted: false,
    activeCalcIndex: 0,
    calcValues: {},
    requestedVideoEp: null // 1..5 si viene ?v=1..5 en la URL
  };

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatMoney(num, lang, decimals) {
    const d = typeof decimals === "number" ? decimals : 0;
    const val = Number(num || 0);
    if (lang === "en") {
      return "$" + val.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
    }
    if (lang === "pl") {
      return val.toLocaleString("pl-PL", { minimumFractionDigits: d, maximumFractionDigits: d }) + " zł";
    }
    if (lang === "nl") {
      return "€ " + val.toLocaleString("nl-NL", { minimumFractionDigits: d, maximumFractionDigits: d });
    }
    if (lang === "fr") {
      return val.toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d }) + " €";
    }
    return val.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d }) + " €";
  }

  function parseVideoParam() {
    try {
      const params = new URLSearchParams(window.location.search);
      const rawV = (params.get("v") || params.get("ep") || "").toUpperCase().trim();
      if (!rawV) return null;
      const numMatch = rawV.match(/[1-5]/);
      if (numMatch) {
        return Number(numMatch[0]);
      }
    } catch (e) {}
    return null;
  }

  function detectInitialLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const qLang = (params.get("lang") || "").toLowerCase().trim();
      if (qLang && SENIOR_DATA[qLang]) {
        return qLang;
      }
      if (window.FORCED_LANG && SENIOR_DATA[window.FORCED_LANG]) {
        return window.FORCED_LANG;
      }
      const hashLang = (window.location.hash || "").replace("#", "").toLowerCase().trim();
      if (hashLang && SENIOR_DATA[hashLang]) {
        return hashLang;
      }
      const navLangs = navigator.languages || [navigator.language || ""];
      for (let i = 0; i < navLangs.length; i++) {
        const shortCode = String(navLangs[i] || "").slice(0, 2).toLowerCase();
        if (SENIOR_DATA[shortCode]) {
          return shortCode;
        }
      }
    } catch (e) {}
    return window.FORCED_LANG || "de";
  }

  function initDefaultsForLanguage(langCode) {
    const data = SENIOR_DATA[langCode];
    STATE.lang = langCode;
    STATE.quizStep = 0;
    STATE.quizAnswers = [0, 0, 0, 0];
    STATE.quizCompleted = false;
    STATE.activeCalcIndex = 0;
    STATE.calcValues = {};
    data.calculators.forEach(function(calc) {
      STATE.calcValues[calc.id] = {};
      calc.inputs.forEach(function(inp) {
        STATE.calcValues[calc.id][inp.id] = inp.default;
      });
    });
  }

  function setLanguage(langCode) {
    if (!SENIOR_DATA[langCode]) return;
    initDefaultsForLanguage(langCode);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", langCode);
      window.history.replaceState({}, "", url.toString());
    } catch (e) {}
    document.documentElement.lang = langCode;
    document.title = SENIOR_DATA[langCode].bridge.pageTitle;
    renderAll();
  }

  function setFontSize(sizeKey) {
    STATE.fontSize = sizeKey;
    const htmlEl = document.documentElement;
    htmlEl.classList.remove("font-size-normal", "font-size-large", "font-size-xlarge");
    htmlEl.classList.add("font-size-" + sizeKey);
    renderTopBar();
  }

  /* ========================================================================
     CÁLCULO EN TIEMPO REAL DE LAS 15 CALCULADORAS 2026 (OPCIÓN A VS OPCIÓN B)
     ======================================================================== */
  function evaluateCalculator(lang, calcId, vals) {
    // 1. DEUTSCHLAND (DE)
    if (calcId === "de_calc_1") {
      const ep = Number(vals.ep || 40);
      const months = Number(vals.monthsEarly || 36);
      const kvPv = Number(vals.kvPvPct || 11.7);
      const rentenwert = 42.52;
      const regelBrutto = ep * rentenwert;
      const abschlagPct = months * 0.3;
      const fruehBrutto = regelBrutto * (1 - abschlagPct / 100);
      const regelNetto = regelBrutto * (1 - kvPv / 100);
      const fruehNetto = fruehBrutto * (1 - kvPv / 100);
      const vorsprungNetto = fruehNetto * months;
      const monatsDifferenzNetto = Math.max(1, regelNetto - fruehNetto);
      const breakEvenMonthsAfter67 = vorsprungNetto / monatsDifferenzNetto;
      const breakEvenAge = 67 + (breakEvenMonthsAfter67 / 12);
      return {
        kpis: [
          { label: "Regelaltersrente (mit 67 netto)", val: formatMoney(regelNetto, "de", 2) + "/Mon.", highlight: false },
          { label: "Frührente (-" + abschlagPct.toFixed(1) + "% Abschlag netto)", val: formatMoney(fruehNetto, "de", 2) + "/Mon.", highlight: true },
          { label: "Break-even Alter (Überholpunkt)", val: breakEvenAge.toFixed(1) + " Jahre", highlight: true }
        ],
        barA: {
          title: "Option A: Vorzeitige Rente (" + months + " Mon. früher · +" + formatMoney(vorsprungNetto, "de", 0) + " Netto-Vorsprung vor 67)",
          valueText: formatMoney(fruehNetto, "de", 2) + " / Monat",
          pct: Math.round((fruehNetto / regelNetto) * 100)
        },
        barB: {
          title: "Option B: Warten bis 67 (0 % Abschlag · holt den Vorsprung erst mit " + breakEvenAge.toFixed(1) + " Jahren ein)",
          valueText: formatMoney(regelNetto, "de", 2) + " / Monat",
          pct: 100
        },
        explanation: "Bei " + ep + " Entgeltpunkten (Rentenwert 2026: 42,52 €) beträgt Ihre abschlagsfreie Bruttorente " + formatMoney(regelBrutto, "de", 2) + ". Gehen Sie " + months + " Monate früher, beträgt der Abschlag " + abschlagPct.toFixed(1) + " % (" + formatMoney(regelNetto - fruehNetto, "de", 2) + " netto weniger im Monat). Dafür erhalten Sie vor dem 67. Geburtstag bereits " + months + " Monatsrenten in Höhe von insgesamt " + formatMoney(vorsprungNetto, "de", 0) + " netto ausgezahlt! Wer mit 67 startet, holt diesen Vorsprung erst im Alter von " + breakEvenAge.toFixed(1) + " Jahren auf."
      };
    }

    if (calcId === "de_calc_2") {
      const workY = Number(vals.workYears || 44);
      const gkvY = Number(vals.gkvYearsSecondHalf || 16);
      const kids = Number(vals.childrenCount || 2);
      const extraInc = Number(vals.extraIncome || 900);
      const secondHalfMonths = (workY / 2) * 12;
      const requiredMonths = Math.ceil(secondHalfMonths * 0.90);
      const baseMonths = gkvY * 12;
      const childMonths = kids * 36;
      const totalMonthsWithKids = baseMonths + childMonths;
      const pctWithoutKids = Math.min(100, (baseMonths / secondHalfMonths) * 100);
      const pctWithKids = Math.min(100, (totalMonthsWithKids / secondHalfMonths) * 100);
      const monthlySavings = Math.max(165, Math.round(extraInc * 0.191 + 95));
      const savings15Years = monthlySavings * 12 * 15;
      const passed = totalMonthsWithKids >= requiredMonths;
      return {
        kpis: [
          { label: "Erforderlich (9/10-Hürde)", val: requiredMonths + " Mon. (90%)", highlight: false },
          { label: "Ihre Zeit inkl. +" + childMonths + " Mon. Kinderbonus", val: totalMonthsWithKids + " Mon. (" + pctWithKids.toFixed(1) + "%)", highlight: passed },
          { label: "Ersparnis in 15 Rentenjahren", val: formatMoney(savings15Years, "de", 0), highlight: true }
        ],
        barA: {
          title: "Option A: Mit Kinder-Anrechnung (§ 5 Abs. 2 SGB V: +" + childMonths + " Monate) — " + (passed ? "KVdR ERFÜLLT ✓" : "Noch " + (requiredMonths - totalMonthsWithKids) + " Mon. offen"),
          valueText: pctWithKids.toFixed(1) + " % (Ersparnis " + formatMoney(monthlySavings, "de", 0) + "/Mon.)",
          pct: Math.max(15, Math.round(pctWithKids))
        },
        barB: {
          title: "Option B: Ohne Kinder-Anrechnung (Freiwillige GKV mit ~19,1 % Abzug auf Miete & Zinsen)",
          valueText: pctWithoutKids.toFixed(1) + " % (-" + formatMoney(monthlySavings, "de", 0) + "/Mon. Verlust)",
          pct: Math.max(15, Math.round(pctWithoutKids))
        },
        explanation: "Die zweite Hälfte Ihres Erwerbslebens umfasst " + secondHalfMonths + " Monate; für die 9/10-Regel benötigen Sie mindestens " + requiredMonths + " Monate (90 %). Durch die pauschale Anrechnung von +36 Monaten je Kind nach § 5 Abs. 2 S. 3 SGB V kommen " + childMonths + " Monate hinzu (" + totalMonthsWithKids + " Monate = " + pctWithKids.toFixed(1) + " %). Dadurch sparen Sie rund " + formatMoney(monthlySavings, "de", 0) + " jeden Monat (" + formatMoney(savings15Years, "de", 0) + " in 15 Jahren)!"
      };
    }

    if (calcId === "de_calc_3") {
      const decBrutto = Number(vals.deceasedPension || 2100);
      const ownBrutto = Number(vals.ownPensionBrutto || 1650);
      const ratePct = Number(vals.widowRatePct || 60);
      const kids = Number(vals.orphanChildren || 0);
      const fullWidow = decBrutto * (ratePct / 100);
      const freibetrag = 1123.38 + (kids * 238.29);
      const ownNettoFiktiv = ownBrutto * (1 - 0.14);
      const excessCorrect = Math.max(0, ownNettoFiktiv - freibetrag);
      const cutCorrect = excessCorrect * 0.40;
      const payoutCorrect = Math.max(0, fullWidow - cutCorrect);

      const excessWrongBrutto = Math.max(0, ownBrutto - freibetrag);
      const cutWrong = excessWrongBrutto * 0.40;
      const payoutWrong = Math.max(0, fullWidow - cutWrong);
      const annualGain = Math.max(0, (payoutCorrect - payoutWrong) * 12);
      return {
        kpis: [
          { label: "Gesetzlicher Freibetrag 2026", val: formatMoney(freibetrag, "de", 2), highlight: false },
          { label: "Anrechenbares Netto (-14% Abzug)", val: formatMoney(ownNettoFiktiv, "de", 2), highlight: false },
          { label: "Auszahlbare Witwenrente (Brutto)", val: formatMoney(payoutCorrect, "de", 2) + "/Mon.", highlight: true }
        ],
        barA: {
          title: "Option A: Korrekte Berechnung mit 14 % Pauschalabzug (§ 18b SGB IV) & Freibetrag " + formatMoney(freibetrag, "de", 2),
          valueText: formatMoney(payoutCorrect, "de", 2) + " / Monat",
          pct: 100
        },
        barB: {
          title: "Option B: Ohne 14 % Bereinigung / veraltete Einkommensbasis (-" + formatMoney(annualGain, "de", 0) + "/Jahr Verlust)",
          valueText: formatMoney(payoutWrong, "de", 2) + " / Monat",
          pct: Math.max(20, Math.round((payoutWrong / Math.max(1, payoutCorrect)) * 100))
        },
        explanation: "Ihre ungekürzte Witwenrente (" + ratePct + " %) beträgt " + formatMoney(fullWidow, "de", 2) + ". Von Ihrer eigenen Altersrente (" + formatMoney(ownBrutto, "de", 2) + " brutto) werden nach § 18b Abs. 5 SGB IV zunächst pauschal 14 % abgezogen (= " + formatMoney(ownNettoFiktiv, "de", 2) + " fiktives Netto). Davon bleibt der Freibetrag 2026 von " + formatMoney(freibetrag, "de", 2) + " komplett anrechnungsfrei. Sie erhalten " + formatMoney(payoutCorrect, "de", 2) + " pro Monat!"
      };
    }

    // 2. FRANCE (FR)
    if (calcId === "fr_calc_1") {
      const rfr = Number(vals.rfr || 25200);
      const parts = Number(vals.parts || 2);
      const pensionMois = Number(vals.pensionBrute || 2400);
      const halfPartsExtra = Math.max(0, (parts - 1) * 2);
      const s0 = 12817 + halfPartsExtra * 3422;
      const sReduit = 16755 + halfPartsExtra * 4473;
      const sMedian = 26002 + halfPartsExtra * 6944;

      let rateCsg = 8.3;
      let rateTotal = 9.1;
      let trancheName = "Taux Normal (8,3 % CSG / 9,1 % total)";
      if (rfr <= s0) {
        rateCsg = 0.0; rateTotal = 0.0;
        trancheName = "Exonération Totale (0 %)";
      } else if (rfr <= sReduit) {
        rateCsg = 3.8; rateTotal = 4.3;
        trancheName = "Taux Réduit (3,8 % CSG / 4,3 % total)";
      } else if (rfr <= sMedian) {
        rateCsg = 6.6; rateTotal = 7.4;
        trancheName = "Taux Médian (6,6 % CSG / 7,4 % total)";
      }

      const prelevActuelAn = pensionMois * 12 * (rateTotal / 100);
      const prelevReduitAn = pensionMois * 12 * 0.043;
      const prelevNormalAn = pensionMois * 12 * 0.091;
      const economieLissageAn = Math.round(prelevNormalAn - prelevReduitAn);
      return {
        kpis: [
          { label: "Seuil Taux Réduit 3,8% (" + parts + " parts)", val: formatMoney(sReduit, "fr", 0), highlight: false },
          { label: "Votre Taux CSG 2026 applicable", val: rateCsg.toFixed(1) + " % (" + rateTotal.toFixed(1) + "% tot.)", highlight: rateCsg <= 3.8 },
          { label: "Écart Annuel Taux Réduit vs Normal", val: formatMoney(economieLissageAn, "fr", 0) + "/an", highlight: true }
        ],
        barA: {
          title: "Option A : Pension nette annuelle avec Taux Réduit / Lissage protégé (3,8 % CSG)",
          valueText: formatMoney(pensionMois * 12 - prelevReduitAn, "fr", 0) + " net/an",
          pct: 100
        },
        barB: {
          title: "Option B : Pension nette annuelle au Taux Normal (8,3 % CSG = -" + formatMoney(economieLissageAn, "fr", 0) + "/an)",
          valueText: formatMoney(pensionMois * 12 - prelevNormalAn, "fr", 0) + " net/an",
          pct: Math.round(((pensionMois * 12 - prelevNormalAn) / (pensionMois * 12 - prelevReduitAn)) * 100)
        },
        explanation: "Pour un foyer de " + parts + " part(s), les seuils RFR 2026 sont de " + formatMoney(s0, "fr", 0) + " (0 %), " + formatMoney(sReduit, "fr", 0) + " (Taux réduit 3,8 %) et " + formatMoney(sMedian, "fr", 0) + " (Taux médian 6,6 %). Avec votre RFR de " + formatMoney(rfr, "fr", 0) + ", vous relevez de la tranche « " + trancheName + " » (prélèvement annuel : " + formatMoney(prelevActuelAn, "fr", 0) + "). Si votre RFR vient de dépasser " + formatMoney(sReduit, "fr", 0) + " pour la 1re fois, le lissage légal maintient votre taux réduit à 3,8 % !"
      };
    }

    if (calcId === "fr_calc_2") {
      const kids = Number(vals.nbChildren || 2);
      const estate = Number(vals.estateHorsAV || 240000);
      const av = Number(vals.avCapital || 160000);
      const abattSuccessionTotal = kids * 100000;
      const abattAvAvant70 = kids * 152500;
      const abattAvApres70 = 30500;

      const taxableEstateA = Math.max(0, estate - abattSuccessionTotal);
      const taxableAvA = Math.max(0, av - abattAvAvant70);
      const taxA = Math.round(taxableEstateA * 0.15 + taxableAvA * 0.20);

      const avReintegre = Math.max(0, av - abattAvApres70);
      const totalEstateB = estate + avReintegre;
      const taxableB = Math.max(0, totalEstateB - abattSuccessionTotal);
      const taxB = Math.round(taxableB * 0.20);
      const taxSaved = Math.max(0, taxB - taxA);
      const totalPatrimoine = estate + av;
      return {
        kpis: [
          { label: "Abattement Enfants (Art. 779 CGI)", val: formatMoney(abattSuccessionTotal, "fr", 0), highlight: false },
          { label: "Abattement Assurance-Vie Avant 70 ans", val: formatMoney(abattAvAvant70, "fr", 0), highlight: true },
          { label: "Économie de Droits de Succession", val: formatMoney(taxSaved, "fr", 0), highlight: true }
        ],
        barA: {
          title: "Option A : Structuration Avant 70 ans (Art. 779 + Art. 990 I) — Droits à payer : " + formatMoney(taxA, "fr", 0),
          valueText: formatMoney(totalPatrimoine - taxA, "fr", 0) + " transmis net",
          pct: 100
        },
        barB: {
          title: "Option B : Sans anticipation / Après 70 ans (Art. 757 B : 30 500 € global) — Droits : " + formatMoney(taxB, "fr", 0),
          valueText: formatMoney(totalPatrimoine - taxB, "fr", 0) + " transmis net",
          pct: Math.max(25, Math.round(((totalPatrimoine - taxB) / Math.max(1, totalPatrimoine - taxA)) * 100))
        },
        explanation: "Avec " + kids + " enfant(s), vous bénéficiez de " + formatMoney(abattSuccessionTotal, "fr", 0) + " d'abattement sur la succession (100 000 € par enfant) PLUS " + formatMoney(abattAvAvant70, "fr", 0) + " d'abattement en assurance-vie avant 70 ans (152 500 € par bénéficiaire, Art. 990 I CGI). En structurant vos versements, votre famille économise " + formatMoney(taxSaved, "fr", 0) + " d'impôts."
      };
    }

    if (calcId === "fr_calc_3") {
      const balance = Number(vals.bankBalance || 38000);
      const funeral = Number(vals.funeralBill || 4900);
      const legalFeeCap = balance < 5910 ? 0 : Math.min(850, Math.round(balance * 0.01));
      const oldUnregulatedFee = Math.min(1250, Math.max(320, Math.round(balance * 0.025)));
      const feeSaved = Math.max(0, oldUnregulatedFee - legalFeeCap);
      const directFuneralRelease = Math.min(5910, Math.min(balance, funeral));
      return {
        kpis: [
          { label: "Plafond Légal Frais Bancaires 2026", val: formatMoney(legalFeeCap, "fr", 0) + " (max 1% / 850€)", highlight: true },
          { label: "Déblocage Immédiat Obsèques", val: formatMoney(directFuneralRelease, "fr", 0), highlight: true },
          { label: "Économie sur Frais Bancaires", val: formatMoney(feeSaved, "fr", 0), highlight: false }
        ],
        barA: {
          title: "Option A : Application Loi 2025-127 (Frais plafonnés à " + formatMoney(legalFeeCap, "fr", 0) + " + " + formatMoney(directFuneralRelease, "fr", 0) + " débloqués)",
          valueText: "Frais : " + formatMoney(legalFeeCap, "fr", 0),
          pct: Math.max(15, Math.round((legalFeeCap / Math.max(1, oldUnregulatedFee)) * 100))
        },
        barB: {
          title: "Option B : Frais bancaires non réclamés / barème abusif avant plafonnement",
          valueText: "Frais : " + formatMoney(oldUnregulatedFee, "fr", 0),
          pct: 100
        },
        explanation: "Sur un total d'avoirs bancaires de " + formatMoney(balance, "fr", 0) + ", la loi plafonne strictement les frais bancaires de succession en 2026 à 1 % avec un maximum absolu de 850 € (et 0 € sous 5 910 €), soit " + formatMoney(legalFeeCap, "fr", 0) + " maximum. De plus, l'article L. 312-1-4 CMF oblige la banque à payer directement la facture d'obsèques à hauteur de " + formatMoney(directFuneralRelease, "fr", 0) + " (plafond 5 910 €)."
      };
    }

    // 3. POLSKA (PL)
    if (calcId === "pl_calc_1") {
      const own = Number(vals.ownPension || 2800);
      const spouse = Number(vals.spousePension || 3600);
      const share = Number(vals.sharePct || 15);
      const rentaRodzinna = Math.max(1878.91, Math.round(spouse * 0.85));
      const limit3x = 5636.73;

      const rawA = own + (rentaRodzinna * (share / 100));
      const rawB = rentaRodzinna + (own * (share / 100));
      const payA = Math.min(limit3x, rawA);
      const payB = Math.min(limit3x, rawB);
      const bestPay = Math.max(payA, payB);
      const singleBest = Math.max(own, rentaRodzinna);
      const monthlyGain = Math.max(0, bestPay - singleBest);
      const annualGain = monthlyGain * 12;
      const betterVariant = payB >= payA ? "Wariant B (100% renty rodzinnej + " + share + "% własnej)" : "Wariant A (100% własnej emerytury + " + share + "% renty rodzinnej)";
      return {
        kpis: [
          { label: "Wariant A (100% własnej + " + share + "% rodz.)", val: formatMoney(payA, "pl", 2), highlight: payA >= payB },
          { label: "Wariant B (100% rodz. + " + share + "% własnej)", val: formatMoney(payB, "pl", 2), highlight: payB > payA },
          { label: "Zysk Roczny z Renty Wdowiej", val: "+" + formatMoney(annualGain, "pl", 0) + "/rok", highlight: true }
        ],
        barA: {
          title: "Opcja A (Najkorzystniejszy wariant ERWD): " + betterVariant,
          valueText: formatMoney(bestPay, "pl", 2) + " brutto/mies.",
          pct: 100
        },
        barB: {
          title: "Opcja B (Bez wniosku ERWD — tylko 1 pojedyncze świadczenie)",
          valueText: formatMoney(singleBest, "pl", 2) + " brutto/mies.",
          pct: Math.round((singleBest / Math.max(1, bestPay)) * 100)
        },
        explanation: "Renta rodzinna po małżonku (85% z " + formatMoney(spouse, "pl", 0) + ") wynosi " + formatMoney(rentaRodzinna, "pl", 0) + " brutto. Wariant A daje " + formatMoney(payA, "pl", 2) + ", natomiast Wariant B daje " + formatMoney(payB, "pl", 2) + " (przy limicie ustawowym 3-krotności najniższej emerytury = 5 636,73 zł brutto). Wybierając " + betterVariant + ", zyskujesz +" + formatMoney(monthlyGain, "pl", 2) + " co miesiąc, czyli +" + formatMoney(annualGain, "pl", 0) + " rocznie!"
      };
    }

    if (calcId === "pl_calc_2") {
      const pts = Number(vals.wzonPoints || 86);
      const currentCare = Number(vals.currentCareAllowance || 348);
      let swiadczenie = 0;
      let progLabel = "Poniżej progu 70 pkt (wymagane odwołanie WZON)";
      if (pts >= 95) { swiadczenie = 4353; progLabel = "95–100 pkt (220% renty socjalnej)"; }
      else if (pts >= 90) { swiadczenie = 3562; progLabel = "90–94 pkt (180% renty socjalnej)"; }
      else if (pts >= 85) { swiadczenie = 2375; progLabel = "85–89 pkt (120% renty socjalnej)"; }
      else if (pts >= 80) { swiadczenie = 1583; progLabel = "80–84 pkt (80% renty socjalnej)"; }
      else if (pts >= 75) { swiadczenie = 1188; progLabel = "75–79 pkt (60% renty socjalnej)"; }
      else if (pts >= 70) { swiadczenie = 792;  progLabel = "70–74 pkt (40% renty socjalnej)"; }

      const totalMonthlyA = swiadczenie + currentCare;
      const annualExtra = swiadczenie * 12;
      return {
        kpis: [
          { label: "Twój Próg Punktowy WZON 2026", val: pts + " pkt", highlight: pts >= 70 },
          { label: "Świadczenie Wspierające (0% PIT)", val: formatMoney(swiadczenie, "pl", 0) + "/mies.", highlight: true },
          { label: "Roczna Wypłata na Rękę z ZUS", val: formatMoney(annualExtra, "pl", 0) + "/rok", highlight: true }
        ],
        barA: {
          title: "Wariant A: Ze Świadczeniem Wspierającym (" + progLabel + " + dodatek)",
          valueText: formatMoney(totalMonthlyA, "pl", 0) + " / miesiąc",
          pct: 100
        },
        barB: {
          title: "Wariant B: Bez wniosku WZON/SWN (tylko dotychczasowy dodatek pielęgnacyjny)",
          valueText: formatMoney(currentCare, "pl", 0) + " / miesiąc",
          pct: Math.max(12, Math.round((currentCare / Math.max(1, totalMonthlyA)) * 100))
        },
        explanation: "Przy " + pts + " punktach w decyzji WZON przysługuje próg „" + progLabel + "”, co w 2026 r. oznacza wypłatę " + formatMoney(swiadczenie, "pl", 0) + " miesięcznie (" + formatMoney(annualExtra, "pl", 0) + " rocznie) prosto na konto seniora (0% podatku PIT i bez pomniejszania emerytury)."
      };
    }

    if (calcId === "pl_calc_3") {
      const savings = Number(vals.accountSavings || 65000);
      const funeral = Number(vals.funeralCosts || 12000);
      const art56Limit = 180000;
      const art55aPayout = Math.min(savings, funeral);
      const remainingAfterFuneral = Math.max(0, savings - art55aPayout);
      const art56Payout = Math.min(art56Limit, remainingAfterFuneral);
      const totalFastAccess = art55aPayout + art56Payout;
      const frozenWithoutDisposition = Math.max(0, savings - art55aPayout);
      return {
        kpis: [
          { label: "Wypłata w 3–7 dni (Art. 56 + 55a)", val: formatMoney(totalFastAccess, "pl", 0), highlight: true },
          { label: "Limit Art. 56 (20x przec. wynagr. GUS)", val: "~175 000–185 000 zł", highlight: false },
          { label: "Zamrożone bez dyspozycji Art. 56", val: formatMoney(frozenWithoutDisposition, "pl", 0), highlight: false }
        ],
        barA: {
          title: "Opcja A: Złożona dyspozycja wkładem na wypadek śmierci (Art. 56) + zwrot faktur pogrzebowych (Art. 55a)",
          valueText: formatMoney(totalFastAccess, "pl", 0) + " dostępne od ręki",
          pct: 100
        },
        barB: {
          title: "Opcja B: Brak dyspozycji Art. 56 (Zamrożenie " + formatMoney(frozenWithoutDisposition, "pl", 0) + " do czasu sądu/notariusza)",
          valueText: "Tylko " + formatMoney(art55aPayout, "pl", 0) + " na faktury",
          pct: Math.max(15, Math.round((art55aPayout / Math.max(1, totalFastAccess)) * 100))
        },
        explanation: "Z kwoty " + formatMoney(savings, "pl", 0) + " na koncie bankowym, bez dyspozycji na wypadek śmierci bank zamrozi " + formatMoney(frozenWithoutDisposition, "pl", 0) + " na czas postępowania spadkowego. Gdy podpiszesz w banku dyspozycję z Art. 56 Prawa bankowego (limit ustawowy to 20-krotność przeciętnego wynagrodzenia GUS, czyli ok. 175 000–185 000 zł), rodzina otrzyma całe " + formatMoney(totalFastAccess, "pl", 0) + " w kilka dni bez sądu!"
      };
    }

    // 4. UNITED STATES (EN)
    if (calcId === "en_calc_1") {
      const married = Number(vals.marriedFlag || 1) >= 1;
      const ss = Number(vals.ssAnnual || 32000);
      const agi = Number(vals.otherAgi || 28000);
      const rate = Number(vals.taxRate || 12);

      const base1 = married ? 32000 : 25000;
      const base2 = married ? 44000 : 34000;
      const span1 = base2 - base1;

      function calcTaxableSS(otherInc) {
        const prov = otherInc + 0.5 * ss;
        if (prov <= base1) return 0;
        if (prov <= base2) return Math.min(0.5 * ss, 0.5 * (prov - base1));
        return Math.min(0.85 * ss, 0.85 * (prov - base2) + Math.min(0.5 * ss, 0.5 * span1));
      }

      const provCurrent = agi + 0.5 * ss;
      const taxableCurrent = Math.round(calcTaxableSS(agi));
      const agiOptimized = Math.max(0, agi - 10000);
      const taxableOptimized = Math.round(calcTaxableSS(agiOptimized));
      const ssTaxCurrent = Math.round(taxableCurrent * (rate / 100));
      const ssTaxOptimized = Math.round(taxableOptimized * (rate / 100));
      const ssTaxCut = Math.max(0, ssTaxCurrent - ssTaxOptimized);
      const ordinaryTaxSaved = Math.round((agi - agiOptimized) * (rate / 100));
      const annualTaxSaved = ssTaxCut + ordinaryTaxSaved;
      return {
        kpis: [
          { label: "Your Provisional Income", val: formatMoney(provCurrent, "en", 0), highlight: provCurrent <= base1 },
          { label: "Taxable Social Security ($)", val: formatMoney(taxableCurrent, "en", 0) + " (" + Math.round((taxableCurrent / Math.max(1, ss)) * 100) + "%)", highlight: false },
          { label: "Total Income + SS Tax Saved", val: formatMoney(annualTaxSaved, "en", 0) + "/yr", highlight: true }
        ],
        barA: {
          title: "Option A: Optimized Withdrawal ($10k via Tax-Free Roth or QCD) — Taxable SS: " + formatMoney(taxableOptimized, "en", 0),
          valueText: "SS Tax: " + formatMoney(ssTaxOptimized, "en", 0) + "/yr",
          pct: Math.max(15, Math.round((ssTaxOptimized / Math.max(1, ssTaxCurrent)) * 100))
        },
        barB: {
          title: "Option B: Unplanned Taxable IRA Withdrawal (Tax Torpedo Active) — Taxable SS: " + formatMoney(taxableCurrent, "en", 0),
          valueText: "SS Tax: " + formatMoney(ssTaxCurrent, "en", 0) + "/yr",
          pct: 100
        },
        explanation: "For " + (married ? "Married Filing Jointly ($32,000 / $44,000 thresholds)" : "Single Filers ($25,000 / $34,000 thresholds)") + ", your Provisional Income is " + formatMoney(provCurrent, "en", 0) + ". Replacing $10,000 of taxable IRA withdrawals with a Qualified Charitable Distribution (QCD) or tax-free Roth withdrawal cuts taxable Social Security from " + formatMoney(taxableCurrent, "en", 0) + " to " + formatMoney(taxableOptimized, "en", 0) + " (saving " + formatMoney(ssTaxCut, "en", 0) + " in Social Security tax plus " + formatMoney(ordinaryTaxSaved, "en", 0) + " in ordinary income tax = " + formatMoney(annualTaxSaved, "en", 0) + "/year total)."
      };
    }

    if (calcId === "en_calc_2") {
      const pia = Number(vals.pia67 || 2400);
      const liveTo = Number(vals.longevityAge || 84);
      const m62 = Math.round(pia * 0.70);
      const m67 = pia;
      const m70 = Math.round(pia * 1.24);

      const tot62 = m62 * 12 * Math.max(0, liveTo - 62);
      const tot67 = m67 * 12 * Math.max(0, liveTo - 67);
      const tot70 = m70 * 12 * Math.max(0, liveTo - 70);
      const maxTot = Math.max(tot62, tot67, tot70);
      const bestDelayedTot = Math.max(tot67, tot70);
      const bestDelayedLabel = tot70 >= tot67
        ? "Option A: Delaying to Age 70 (124% Max Benefit · Cumulative by Age " + liveTo + ")"
        : "Option A: Claiming at Full Retirement Age 67 (100% PIA · Cumulative by Age " + liveTo + ")";
      return {
        kpis: [
          { label: "Age 62 Monthly (70% of FRA)", val: formatMoney(m62, "en", 0) + "/mo", highlight: tot62 === maxTot },
          { label: "Age 67 FRA Monthly (100%)", val: formatMoney(m67, "en", 0) + "/mo", highlight: tot67 === maxTot },
          { label: "Age 70 Monthly (124% Max)", val: formatMoney(m70, "en", 0) + "/mo", highlight: tot70 === maxTot }
        ],
        barA: {
          title: bestDelayedLabel,
          valueText: formatMoney(bestDelayedTot, "en", 0) + " lifetime",
          pct: Math.round((bestDelayedTot / Math.max(1, maxTot)) * 100)
        },
        barB: {
          title: "Option B: Claiming Early at Age 62 (-30% Permanent Reduction · Cumulative by Age " + liveTo + ")",
          valueText: formatMoney(tot62, "en", 0) + " lifetime",
          pct: Math.round((tot62 / Math.max(1, maxTot)) * 100)
        },
        explanation: "With a Full Retirement Age (67) benefit of " + formatMoney(m67, "en", 0) + "/mo, claiming early at 62 locks in " + formatMoney(m62, "en", 0) + "/mo (-30%), while waiting until 70 locks in " + formatMoney(m70, "en", 0) + "/mo (+24% Delayed Credits). By age " + liveTo + ", cumulative lifetime benefits are " + formatMoney(tot62, "en", 0) + " (at 62), " + formatMoney(tot67, "en", 0) + " (at 67; break-even age 78.7), and " + formatMoney(tot70, "en", 0) + " (at 70; break-even age 82.5)."
      };
    }

    if (calcId === "en_calc_3") {
      const married = Number(vals.marriedIrmaa || 1) >= 1;
      const ira = Number(vals.iraBalance || 650000);
      const magi = Number(vals.currentMagi || 172000);
      const irmaaCliff = married ? 212000 : 106000;
      const rmd73 = Math.round(ira / 26.5);
      const safeConversionRoom = Math.max(0, irmaaCliff - magi);
      const projectedMagiWithRmd = magi + rmd73;
      const annualIrmaaPenalty = married ? 2080 : 1040;
      return {
        kpis: [
          { label: "Mandatory Age 73 RMD (÷ 26.5)", val: formatMoney(rmd73, "en", 0) + "/yr", highlight: false },
          { label: "Safe Roth Conversion Window", val: formatMoney(safeConversionRoom, "en", 0) + " below IRMAA", highlight: true },
          { label: "IRMAA Surcharge Avoided", val: formatMoney(annualIrmaaPenalty, "en", 0) + "/yr", highlight: true }
        ],
        barA: {
          title: "Option A: Stay Below " + formatMoney(irmaaCliff, "en", 0) + " IRMAA Cliff (or File Form SSA-44 Appeal) — $0 Surcharge",
          valueText: "MAGI: " + formatMoney(Math.min(magi, irmaaCliff - 1000), "en", 0) + " ($0 IRMAA)",
          pct: 75
        },
        barB: {
          title: "Option B: Unplanned RMD Pushes MAGI to " + formatMoney(projectedMagiWithRmd, "en", 0) + " — Triggers Medicare IRMAA Penalty",
          valueText: "+" + formatMoney(annualIrmaaPenalty, "en", 0) + "/yr Medicare Penalty",
          pct: 100
        },
        explanation: "On a " + formatMoney(ira, "en", 0) + " Traditional IRA/401(k), your first Required Minimum Distribution at age 73 is " + formatMoney(rmd73, "en", 0) + "/year. You currently have " + formatMoney(safeConversionRoom, "en", 0) + " of safe headroom to convert to a Roth IRA below the " + formatMoney(irmaaCliff, "en", 0) + " Medicare IRMAA cliff—and filing Form SSA-44 after retirement removes the " + formatMoney(annualIrmaaPenalty, "en", 0) + "/yr surcharge!"
      };
    }

    // 5. NEDERLAND (NL)
    if (calcId === "nl_calc_1") {
      const kids = Number(vals.children || 2);
      const grandkids = Number(vals.grandchildren || 2);
      const estate = Number(vals.estateTotal || 320000);
      const years = Number(vals.giftYears || 5);

      const vrijstellingKind = 26230;
      const vrijstellingKleinkind = 26230;
      const schenkKindJaar = 6908;
      const schijfGrens10Pct = 158669;

      function calcChildTax(perChildAmount) {
        const belast = Math.max(0, perChildAmount - vrijstellingKind);
        if (belast <= schijfGrens10Pct) return Math.round(belast * 0.10);
        return Math.round(schijfGrens10Pct * 0.10 + (belast - schijfGrens10Pct) * 0.20);
      }

      const perChildB = estate / kids;
      const totalTaxB = calcChildTax(perChildB) * kids;

      const totalGiftedTaxFree = kids * schenkKindJaar * years;
      const totalGrandchildTaxFree = grandkids * vrijstellingKleinkind;
      const remainingEstateA = Math.max(0, estate - totalGiftedTaxFree - totalGrandchildTaxFree);
      const perChildA = remainingEstateA / kids;
      const totalTaxA = calcChildTax(perChildA) * kids;
      const taxSaved = Math.max(0, totalTaxB - totalTaxA);

      return {
        kpis: [
          { label: "Belastingvrij Geschonken + Kleinkind", val: formatMoney(totalGiftedTaxFree + totalGrandchildTaxFree, "nl", 0), highlight: false },
          { label: "Erfbelasting Zonder Plan (Optie B)", val: formatMoney(totalTaxB, "nl", 0), highlight: false },
          { label: "Uw Besparing voor de Familie", val: formatMoney(taxSaved, "nl", 0), highlight: true }
        ],
        barA: {
          title: "Optie A: Slim Combineren (Schenkvrijstelling € 6.908/jr + Kleinkind-legaat € 26.230) — Erfbelasting: " + formatMoney(totalTaxA, "nl", 0),
          valueText: "Netto familie: " + formatMoney(estate - totalTaxA, "nl", 0),
          pct: 100
        },
        barB: {
          title: "Optie B: Niets Regelen (Alles in 1 keer vererven) — Erfbelasting: " + formatMoney(totalTaxB, "nl", 0) + " (-" + formatMoney(taxSaved, "nl", 0) + ")",
          valueText: "Netto familie: " + formatMoney(estate - totalTaxB, "nl", 0),
          pct: Math.max(25, Math.round(((estate - totalTaxB) / Math.max(1, estate - totalTaxA)) * 100))
        },
        explanation: "Over een vermogen van " + formatMoney(estate, "nl", 0) + " betalen " + kids + " kind(eren) zonder planning " + formatMoney(totalTaxB, "nl", 0) + " aan erfbelasting. Door gedurende " + years + " jaar de schenkvrijstelling van € 6.908 per kind te benutten én voor " + grandkids + " kleinkind(eren) de vrijstelling van € 26.230 op te nemen, bespaart uw familie " + formatMoney(taxSaved, "nl", 0) + "!"
      };
    }

    if (calcId === "nl_calc_2") {
      const samen = Number(vals.livingStatus || 0) >= 1;
      const extraP = Number(vals.extraPension || 1200);
      const aowBrutoMnd = samen ? 1122 : 1637;
      const totaalBrutoJaar = (aowBrutoMnd + extraP) * 12;
      const schijfGrens = 40857;
      const bovenSchijf1 = Math.max(0, totaalBrutoJaar - schijfGrens);

      const inSchijf1 = Math.min(totaalBrutoJaar, schijfGrens);
      const belastingBruto = inSchijf1 * 0.1907 + bovenSchijf1 * 0.3748 + (extraP * 12 * 0.0526);
      const heffingskortingen = totaalBrutoJaar <= 45308 ? 3150 : Math.max(1200, 3150 - (totaalBrutoJaar - 45308) * 0.15);
      const nettoJaarCorrect = Math.round(totaalBrutoJaar - Math.max(0, belastingBruto - heffingskortingen));
      const nettoMndCorrect = Math.round(nettoJaarCorrect / 12);
      const dubbeleKortingNaheffing = extraP > 0 ? Math.min(2850, Math.round(extraP * 12 * 0.1907)) : 0;

      return {
        kpis: [
          { label: "Totaal Bruto Jaarinkomen", val: formatMoney(totaalBrutoJaar, "nl", 0) + "/jr", highlight: totaalBrutoJaar <= schijfGrens },
          { label: "Geschat Netto Maandinkomen", val: formatMoney(nettoMndCorrect, "nl", 0) + "/mnd", highlight: true },
          { label: "Voorkomen Naheffing (1x Korting)", val: formatMoney(dubbeleKortingNaheffing, "nl", 0) + "/jr", highlight: true }
        ],
        barA: {
          title: "Optie A: Loonheffingskorting op slechts 1 uitkering — Geen naheffing achteraf",
          valueText: formatMoney(nettoMndCorrect, "nl", 0) + " netto/mnd (0 € schuld)",
          pct: 100
        },
        barB: {
          title: "Optie B: Dubbele Loonheffingskorting bij SVB én Pensioenfonds — Aanslag Belastingdienst achteraf",
          valueText: "Naheffing: -" + formatMoney(dubbeleKortingNaheffing, "nl", 0) + "/jaar",
          pct: 68
        },
        explanation: "Uw bruto AOW (" + formatMoney(aowBrutoMnd, "nl", 0) + "/mnd) plus aanvullend pensioen (" + formatMoney(extraP, "nl", 0) + "/mnd) bedraagt " + formatMoney(totaalBrutoJaar, "nl", 0) + " bruto per jaar (Schijf 1 AOW-tarief 19,07% tot € 40.857 + 5,26% Zvw-bijdrage op aanvullend pensioen). Zet de loonheffingskorting uitsluitend aan bij één uitkeringsinstantie, anders moet u circa " + formatMoney(dubbeleKortingNaheffing, "nl", 0) + " terugbetalen aan de Belastingdienst!"
      };
    }

    if (calcId === "nl_calc_3") {
      const tax = Number(vals.expectedTax || 22000);
      const months = Number(vals.monthsAfterDeath || 16);
      const renteMonths = Math.max(0, months - 8);
      const annualRate = 0.07;
      const interestPenalty = Math.round(tax * annualRate * (renteMonths / 12));
      return {
        kpis: [
          { label: "Rentevrije Termijn na Overlijden", val: "8 maanden", highlight: false },
          { label: "Rente bij Voorlopige Aanslag (Optie A)", val: "€ 0", highlight: true },
          { label: "Bespaarde Belastingrente (~7%)", val: formatMoney(interestPenalty, "nl", 0), highlight: true }
        ],
        barA: {
          title: "Optie A: Verzoek Voorlopige Aanslag vóór maand 8 — € 0 belastingrente",
          valueText: "Totaal te betalen: " + formatMoney(tax, "nl", 0),
          pct: Math.round((tax / Math.max(1, tax + interestPenalty)) * 100)
        },
        barB: {
          title: "Optie B: Pas na " + months + " maanden aangifte zonder voorlopige aanslag (+" + formatMoney(interestPenalty, "nl", 0) + " rente)",
          valueText: "Totaal: " + formatMoney(tax + interestPenalty, "nl", 0),
          pct: 100
        },
        explanation: "Wanneer de afwikkeling van de nalatenschap " + months + " maanden duurt, rekent de Belastingdienst vanaf maand 8 circa 7% belastingrente over " + formatMoney(tax, "nl", 0) + " (= " + formatMoney(interestPenalty, "nl", 0) + " extra). Met een Voorlopige Aanslag binnen 8 maanden bespaart u dit bedrag volledig."
      };
    }

    return null;
  }

  function renderTopBar() {
    const langBar = document.getElementById("lang-buttons-container");
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;
    const langs = ["de", "fr", "pl", "en", "nl"];
    langBar.innerHTML = langs.map(function(code) {
      const d = SENIOR_DATA[code];
      const activeCls = code === STATE.lang ? "lang-btn active" : "lang-btn";
      return '<button type="button" class="' + activeCls + '" data-lang="' + code + '" aria-pressed="' + (code === STATE.lang) + '">' +
               escapeHtml(d.countryLabel) +
             '</button>';
    }).join("");

    langBar.querySelectorAll(".lang-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });

    document.getElementById("font-size-label").textContent = data.nav.fontSizeLabel;
    document.querySelectorAll(".font-btn").forEach(function(fBtn) {
      fBtn.classList.toggle("active", fBtn.getAttribute("data-size") === STATE.fontSize);
    });

    document.getElementById("hero-badge").textContent = b.heroBadge;
    document.getElementById("hero-title").textContent = b.heroTitle;
    document.getElementById("hero-subtitle").textContent = b.heroSubtitle;
    document.getElementById("privacy-banner-text").textContent = data.privacyBanner;

    const pillsContainer = document.getElementById("trust-pills-container");
    pillsContainer.innerHTML = b.trustPills.map(function(p) {
      return '<span class="trust-pill">' + escapeHtml(p) + '</span>';
    }).join("");
  }

  function getMatchingGift(data, outcomeIndex) {
    const b = data.bridge;
    const gifts = b.freeGifts || [];
    if (!gifts.length) return null;
    if (STATE.requestedVideoEp) {
      const foundByParam = gifts.find(function(g) { return g.ep === STATE.requestedVideoEp; });
      if (foundByParam) return foundByParam;
    }
    const targetEp = (b.outcomeToGiftEp && b.outcomeToGiftEp[outcomeIndex]) || 1;
    return gifts.find(function(g) { return g.ep === targetEp; }) || gifts[0];
  }

  function renderQuizAndDiagnosis() {
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;
    const quizBox = document.getElementById("quiz-dynamic-container");
    const resultsZone = document.getElementById("diagnosis-and-offers-zone");

    if (!STATE.quizCompleted) {
      resultsZone.style.display = "none";
      const qIndex = STATE.quizStep;
      const qObj = data.quiz.questions[qIndex];
      const progressPct = Math.round(((qIndex + 1) / 4) * 100);
      const stepLabel = data.ui.questionProgress.replace("{current}", String(qIndex + 1));

      let videoDirectBannerHtml = "";
      if (STATE.requestedVideoEp) {
        const epGift = (b.freeGifts || []).find(function(g) { return g.ep === STATE.requestedVideoEp; });
        if (epGift) {
          videoDirectBannerHtml = '' +
            '<div style="background:#ECFDF5;border:3px solid #15803D;border-radius:12px;padding:16px 18px;margin-bottom:20px;">' +
              '<div style="font-size:18px;font-weight:800;color:#065F46;margin-bottom:8px;">' +
                escapeHtml(b.videoBannerPrefix || "🎁") + ' [' + escapeHtml(epGift.code) + ']' +
              '</div>' +
              '<a href="' + escapeHtml(epGift.url) + '" target="_blank" rel="noopener" class="btn-green-giant" style="min-height:58px;font-size:19px;">' +
                '<span>' + escapeHtml(b.step1PrimaryBtnPrefix + epGift.title) + '</span>' +
                '<span>➔</span>' +
              '</a>' +
            '</div>';
        }
      }

      let html = videoDirectBannerHtml +
        '<h2 style="margin:0 0 8px 0;font-size:25px;font-weight:900;">' + escapeHtml(data.ui.quizTitle) + '</h2>' +
        '<p style="margin:0 0 18px 0;font-size:19px;color:#334155;">' + escapeHtml(data.ui.quizIntro) + '</p>' +
        '<div class="quiz-progress-bar-wrap" role="progressbar" aria-valuenow="' + progressPct + '" aria-valuemin="0" aria-valuemax="100">' +
          '<div class="quiz-progress-bar-fill" style="width:' + progressPct + '%;"></div>' +
        '</div>' +
        '<div class="quiz-step-badge">' + escapeHtml(stepLabel) + '</div>' +
        '<h3 class="quiz-question-title">' + escapeHtml(qObj.title) + '</h3>' +
        '<div class="quiz-options-list">';

      qObj.options.forEach(function(optText, idx) {
        html += '<button type="button" class="quiz-option-btn" data-opt-idx="' + idx + '">' +
                  '<span>' + escapeHtml(optText) + '</span>' +
                  '<span class="quiz-option-arrow">➔</span>' +
                '</button>';
      });
      html += '</div>';

      html += '<div class="quiz-nav-row">';
      if (qIndex > 0) {
        html += '<button type="button" class="btn-secondary-giant" id="quiz-btn-prev">' + escapeHtml(data.ui.btnBack) + '</button>';
      } else {
        html += '<span></span>';
      }
      html += '<button type="button" class="btn-secondary-giant" id="quiz-btn-skip">' + escapeHtml(b.btnSkipToCalc) + '</button>';
      html += '</div>';

      quizBox.innerHTML = html;

      quizBox.querySelectorAll(".quiz-option-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
          const chosenIdx = Number(btn.getAttribute("data-opt-idx"));
          STATE.quizAnswers[qIndex] = chosenIdx;
          if (qIndex < 3) {
            STATE.quizStep = qIndex + 1;
            renderQuizAndDiagnosis();
          } else {
            STATE.quizCompleted = true;
            const out = data.quiz.outcomes[chosenIdx] || data.quiz.outcomes[0];
            STATE.activeCalcIndex = out.calcIndex || 0;
            renderQuizAndDiagnosis();
            window.scrollTo({ top: document.getElementById("quiz-section-anchor").offsetTop - 70, behavior: "smooth" });
          }
        });
      });

      const prevBtn = document.getElementById("quiz-btn-prev");
      if (prevBtn) {
        prevBtn.addEventListener("click", function() {
          if (STATE.quizStep > 0) {
            STATE.quizStep -= 1;
            renderQuizAndDiagnosis();
          }
        });
      }

      const skipBtn = document.getElementById("quiz-btn-skip");
      if (skipBtn) {
        skipBtn.addEventListener("click", function() {
          STATE.quizCompleted = true;
          renderQuizAndDiagnosis();
        });
      }
      return;
    }

    // Quiz completado -> Mostrar Diagnóstico 2026 + Mini-Calculadora en vivo + CTA Paso 1 (0€) + CTA Paso 2 (Pack Completo)
    const outcomeIdx = STATE.quizAnswers[3] || 0;
    const outcome = data.quiz.outcomes[outcomeIdx] || data.quiz.outcomes[0];
    const selectedSummary = data.quiz.questions.map(function(q, idx) {
      return q.options[STATE.quizAnswers[idx] || 0];
    }).join(" · ");

    quizBox.innerHTML = '' +
      '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">' +
        '<div style="font-size:19px;font-weight:800;color:#1E3A8A;">✓ ' + escapeHtml(data.ui.diagResultTitle) + '</div>' +
        '<button type="button" class="btn-secondary-giant" id="diag-restart-btn">' + escapeHtml(data.ui.btnRestartQuiz) + '</button>' +
      '</div>';

    document.getElementById("diag-restart-btn").addEventListener("click", function() {
      STATE.quizStep = 0;
      STATE.quizCompleted = false;
      renderQuizAndDiagnosis();
    });

    resultsZone.style.display = "block";

    // 1. Renderizar Tarjeta de Diagnóstico 2026
    const diagContainer = document.getElementById("diagnosis-card-container");
    diagContainer.innerHTML = '' +
      '<div class="diagnosis-card">' +
        '<div class="diagnosis-header-badge">✓ ' + escapeHtml(data.ui.diagResultTitle) + '</div>' +
        '<h2 class="quiz-question-title" style="margin-bottom:8px;">' + escapeHtml(outcome.title) + '</h2>' +
        '<p style="margin:0 0 14px 0;font-size:18px;color:#334155;font-weight:600;">' + escapeHtml(selectedSummary) + '</p>' +
        '<div class="diagnosis-grid">' +
          '<div class="diag-item-box">' +
            '<div class="diag-item-label">📌 ' + escapeHtml(data.ui.diagThresholdLabel) + '</div>' +
            '<div class="diag-item-value">' + escapeHtml(outcome.threshold2026) + '</div>' +
          '</div>' +
          '<div class="diag-item-box money">' +
            '<div class="diag-item-label">💶 ' + escapeHtml(data.ui.diagMoneyAtStakeLabel) + '</div>' +
            '<div class="diag-item-value">' + escapeHtml(outcome.moneyAtStake) + '</div>' +
          '</div>' +
          '<div class="diag-item-box step">' +
            '<div class="diag-item-label">🚀 ' + escapeHtml(data.ui.diagFirstStepLabel) + '</div>' +
            '<div class="diag-item-value">' + escapeHtml(outcome.firstStep) + '</div>' +
          '</div>' +
          '<div class="legal-badge-box">' +
            '⚖️ ' + escapeHtml(data.ui.diagSourceLabel) + ' ' + escapeHtml(outcome.source) +
          '</div>' +
        '</div>' +
      '</div>';

    // 2. Renderizar Mini-Calculadora en Vivo
    renderLiveCalculator();

    // 3. Renderizar CTA Paso 1 (Regalo Gratis 0€ en Gumroad + Lista de episodios)
    renderStep1FreeOffer(outcomeIdx);

    // 4. Renderizar CTA Paso 2 (Sistema Completo 2026 en Gumroad)
    renderStep2PaidOffer();
  }

  function renderLiveCalculator() {
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;

    document.getElementById("live-calc-badge").textContent = b.liveCalcSectionBadge;
    document.getElementById("live-calc-title").textContent = b.liveCalcSectionTitle;
    document.getElementById("live-calc-intro").textContent = b.liveCalcSectionIntro;

    const selectorEl = document.getElementById("calc-selector-container");
    selectorEl.innerHTML = data.calculators.map(function(c, idx) {
      const cls = idx === STATE.activeCalcIndex ? "calc-select-card active" : "calc-select-card";
      return '<button type="button" class="' + cls + '" data-calc-idx="' + idx + '">' +
               escapeHtml(c.title) +
             '</button>';
    }).join("");

    selectorEl.querySelectorAll(".calc-select-card").forEach(function(btn) {
      btn.addEventListener("click", function() {
        STATE.activeCalcIndex = Number(btn.getAttribute("data-calc-idx"));
        renderLiveCalculator();
      });
    });

    const activeCalc = data.calculators[STATE.activeCalcIndex] || data.calculators[0];
    const currentVals = STATE.calcValues[activeCalc.id];

    const inputsContainer = document.getElementById("calc-inputs-container");
    let inputsHtml = '<h3 style="margin:0 0 8px 0;font-size:22px;font-weight:800;">' + escapeHtml(activeCalc.title) + '</h3>' +
                     '<p style="margin:0 0 18px 0;font-size:18px;color:#334155;">' + escapeHtml(activeCalc.subtitle) + '</p>';

    activeCalc.inputs.forEach(function(inp) {
      const val = currentVals[inp.id];
      const chipsHtml = (inp.presets || []).map(function(pVal) {
        const chipCls = Number(val) === Number(pVal) ? "preset-chip active" : "preset-chip";
        return '<button type="button" class="' + chipCls + '" data-inp-id="' + inp.id + '" data-preset="' + pVal + '">' +
                 escapeHtml(String(pVal) + " " + inp.unit) +
               '</button>';
      }).join("");

      inputsHtml += '' +
        '<div class="input-field-group">' +
          '<label class="input-label" for="inp-' + inp.id + '">' + escapeHtml(inp.label) + '</label>' +
          '<div class="stepper-row">' +
            '<button type="button" class="stepper-btn" data-step-dir="-1" data-inp-id="' + inp.id + '" aria-label="Minus">−</button>' +
            '<input type="number" id="inp-' + inp.id + '" class="numeric-input-large" data-inp-id="' + inp.id + '" ' +
                   'min="' + inp.min + '" max="' + inp.max + '" step="' + inp.step + '" value="' + val + '">' +
            '<button type="button" class="stepper-btn" data-step-dir="1" data-inp-id="' + inp.id + '" aria-label="Plus">+</button>' +
            '<span class="unit-badge">' + escapeHtml(inp.unit) + '</span>' +
          '</div>' +
          '<div class="preset-chips-row">' + chipsHtml + '</div>' +
        '</div>';
    });

    inputsContainer.innerHTML = inputsHtml;

    inputsContainer.querySelectorAll(".stepper-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        const inpId = btn.getAttribute("data-inp-id");
        const dir = Number(btn.getAttribute("data-step-dir"));
        const inpCfg = activeCalc.inputs.find(function(i) { return i.id === inpId; });
        if (!inpCfg) return;
        let nextVal = Number(currentVals[inpId] || 0) + (dir * inpCfg.step);
        nextVal = Math.max(inpCfg.min, Math.min(inpCfg.max, Math.round(nextVal * 100) / 100));
        currentVals[inpId] = nextVal;
        renderLiveCalculator();
      });
    });

    inputsContainer.querySelectorAll(".preset-chip").forEach(function(chip) {
      chip.addEventListener("click", function() {
        const inpId = chip.getAttribute("data-inp-id");
        currentVals[inpId] = Number(chip.getAttribute("data-preset"));
        renderLiveCalculator();
      });
    });

    inputsContainer.querySelectorAll(".numeric-input-large").forEach(function(numInput) {
      numInput.addEventListener("input", function() {
        const inpId = numInput.getAttribute("data-inp-id");
        const parsed = parseFloat(numInput.value);
        if (!isNaN(parsed)) {
          currentVals[inpId] = parsed;
          renderCalcResultsOnly();
        }
      });
    });

    renderCalcResultsOnly();
  }

  function renderCalcResultsOnly() {
    const data = SENIOR_DATA[STATE.lang];
    const activeCalc = data.calculators[STATE.activeCalcIndex] || data.calculators[0];
    const currentVals = STATE.calcValues[activeCalc.id];
    const result = evaluateCalculator(STATE.lang, activeCalc.id, currentVals);
    const resContainer = document.getElementById("calc-results-container");
    if (!result) return;

    const kpisHtml = result.kpis.map(function(k) {
      const cls = k.highlight ? "kpi-card highlight" : "kpi-card";
      return '<div class="' + cls + '">' +
               '<div class="kpi-card-label">' + escapeHtml(k.label) + '</div>' +
               '<div class="kpi-card-val">' + escapeHtml(k.val) + '</div>' +
             '</div>';
    }).join("");

    const pctA = Math.max(12, Math.min(100, Number(result.barA.pct || 50)));
    const pctB = Math.max(12, Math.min(100, Number(result.barB.pct || 50)));

    resContainer.innerHTML = '' +
      '<div class="kpi-cards-grid">' + kpisHtml + '</div>' +
      '<div class="comparison-bars-section">' +
        '<h4 style="margin:0 0 14px 0;font-size:21px;font-weight:800;">📊 ' + escapeHtml(data.ui.comparisonTitle) + '</h4>' +
        '<div class="comp-bar-group">' +
          '<div class="comp-bar-header">' +
            '<span style="color:#065F46;">✓ ' + escapeHtml(result.barA.title) + '</span>' +
            '<span style="color:#065F46;">' + escapeHtml(result.barA.valueText) + '</span>' +
          '</div>' +
          '<div class="comp-bar-track">' +
            '<div class="comp-bar-fill bar-a" style="width:' + pctA + '%;">' + pctA + '%</div>' +
          '</div>' +
        '</div>' +
        '<div class="comp-bar-group">' +
          '<div class="comp-bar-header">' +
            '<span style="color:#9A3412;">⚠ ' + escapeHtml(result.barB.title) + '</span>' +
            '<span style="color:#9A3412;">' + escapeHtml(result.barB.valueText) + '</span>' +
          '</div>' +
          '<div class="comp-bar-track">' +
            '<div class="comp-bar-fill bar-b" style="width:' + pctB + '%;">' + pctB + '%</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="plain-explanation-box">' +
        '<div style="font-weight:800;font-size:19px;margin-bottom:6px;">💡 ' + escapeHtml(data.ui.plainExplanationTitle) + '</div>' +
        '<div style="font-size:18px;">' + escapeHtml(result.explanation) + '</div>' +
      '</div>' +
      '<div class="legal-badge-box">' +
        '⚖️ ' + escapeHtml(data.ui.officialSourceBadge) + ' ' + escapeHtml(activeCalc.legalRef) +
      '</div>';
  }

  function renderStep1FreeOffer(outcomeIdx) {
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;
    const primaryGift = getMatchingGift(data, outcomeIdx);
    const step1El = document.getElementById("step1-free-offer-container");
    const pillLabel = b.giftBtnPill || "Gratis →";

    const allGiftsHtml = b.freeGifts.map(function(g) {
      const isRec = primaryGift && g.ep === primaryGift.ep;
      const cls = isRec ? "gift-episode-btn recommended" : "gift-episode-btn";
      return '<a href="' + escapeHtml(g.url) + '" target="_blank" rel="noopener" class="' + cls + '">' +
               '<div>' +
                 '<div class="gift-ep-title">🎁 [' + escapeHtml(g.code) + '] ' + escapeHtml(g.title) + '</div>' +
                 '<div class="gift-ep-desc">' + escapeHtml(g.desc) + '</div>' +
               '</div>' +
               '<span class="gift-ep-pill">' + escapeHtml(pillLabel) + '</span>' +
             '</a>';
    }).join("");

    step1El.innerHTML = '' +
      '<div class="cta-step1-card">' +
        '<div class="cta-step1-badge">' + escapeHtml(b.step1Badge) + '</div>' +
        '<h2 style="margin:0 0 8px 0;font-size:26px;font-weight:900;color:#064E3B;">' + escapeHtml(b.step1Title) + '</h2>' +
        '<p style="margin:0 0 18px 0;font-size:19px;color:#1E293B;font-weight:500;">' + escapeHtml(b.step1Subtitle) + '</p>' +
        (primaryGift ? (
          '<a href="' + escapeHtml(primaryGift.url) + '" target="_blank" rel="noopener" class="btn-green-giant" id="primary-free-gift-btn">' +
            '<span>' + escapeHtml(b.step1PrimaryBtnPrefix + primaryGift.title) + '</span>' +
            '<span>➔</span>' +
          '</a>'
        ) : '') +
        '<div style="margin-top:22px;font-size:19px;font-weight:800;color:#064E3B;">' + escapeHtml(b.step1AllGiftsLabel) + '</div>' +
        '<div class="gift-episodes-grid">' + allGiftsHtml + '</div>' +
      '</div>';
  }

  function renderStep2PaidOffer() {
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;
    const step2El = document.getElementById("step2-paid-offer-container");

    const rowsHtml = b.comparisonRows.map(function(row) {
      return '<tr>' +
               '<td><strong>' + escapeHtml(row[0]) + '</strong></td>' +
               '<td>' + escapeHtml(row[1]) + '</td>' +
               '<td>' + escapeHtml(row[2]) + '</td>' +
             '</tr>';
    }).join("");

    step2El.innerHTML = '' +
      '<div class="cta-step2-card">' +
        '<div class="cta-step2-badge">⭐ ' + escapeHtml(b.step2Badge) + '</div>' +
        '<h2 class="cta-step2-title">' + escapeHtml(b.step2Title) + '</h2>' +
        '<p class="cta-step2-subtitle">' + escapeHtml(b.step2Subtitle) + '</p>' +
        '<div class="comparison-table-wrap">' +
          '<table class="comparison-table">' +
            '<thead>' +
              '<tr>' +
                '<th>' + escapeHtml(b.comparisonHeaders[0]) + '</th>' +
                '<th>' + escapeHtml(b.comparisonHeaders[1]) + '</th>' +
                '<th>' + escapeHtml(b.comparisonHeaders[2]) + '</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' + rowsHtml + '</tbody>' +
          '</table>' +
        '</div>' +
        '<a href="' + escapeHtml(b.paidPackUrl) + '" target="_blank" rel="noopener" class="btn-gold-giant" id="paid-pack-checkout-btn">' +
          '<span>' + escapeHtml(b.paidPackBtnText) + '</span>' +
        '</a>' +
        '<p style="margin:14px 0 0 0;font-size:18px;color:#E2E8F0;text-align:center;font-weight:600;">🔒 ' +
          escapeHtml(b.paidPackGuarantee) +
        '</p>' +
      '</div>';
  }

  function renderLegalFooter() {
    const data = SENIOR_DATA[STATE.lang];
    const b = data.bridge;
    const lf = b.legalFooter || {};
    const footerEl = document.getElementById("bridge-legal-footer");
    if (!footerEl) return;

    const giftsLinksHtml = (b.freeGifts || []).map(function(g) {
      return ' · <a href="' + escapeHtml(g.url) + '" target="_blank" rel="noopener" style="color:#15803D;font-weight:700;">[' + escapeHtml(g.code) + '] ' + escapeHtml(g.title) + '</a>';
    }).join("");

    footerEl.innerHTML = '' +
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:2px solid #E2E8F0;">' +
        '<div style="font-weight:800;color:#0F172A;margin-bottom:4px;">' + escapeHtml(lf.disclaimerTitle || "") + '</div>' +
        '<div style="font-size:17px;line-height:1.55;color:#334155;">' + escapeHtml(lf.disclaimerText || "") + '</div>' +
      '</div>' +
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:2px solid #E2E8F0;">' +
        '<div style="font-weight:800;color:#0F172A;margin-bottom:4px;">' + escapeHtml(lf.privacyTitle || "") + '</div>' +
        '<div style="font-size:17px;line-height:1.55;color:#334155;">' + escapeHtml(lf.privacyText || "") + '</div>' +
      '</div>' +
      '<div style="margin-bottom:14px;padding-bottom:12px;border-bottom:2px solid #E2E8F0;">' +
        '<div style="font-weight:800;color:#0F172A;margin-bottom:4px;">' + escapeHtml(lf.impressumTitle || "") + '</div>' +
        '<div style="font-size:17px;line-height:1.55;color:#334155;">' + escapeHtml(lf.impressumText || "") + '</div>' +
      '</div>' +
      '<div style="font-size:17px;line-height:1.6;">' +
        '<strong>' + escapeHtml(data.flag + " " + b.channelName) + ':</strong> ' +
        '<a href="' + escapeHtml(b.paidPackUrl) + '" target="_blank" rel="noopener" style="color:#1E3A8A;font-weight:800;">' + escapeHtml(b.paidPackPrice + " — " + b.step2Title) + '</a>' +
        giftsLinksHtml +
      '</div>';
  }

  function renderAll() {
    renderTopBar();
    renderQuizAndDiagnosis();
    renderLegalFooter();
  }

  function bindGlobalEvents() {
    document.querySelectorAll(".font-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        setFontSize(btn.getAttribute("data-size"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    STATE.requestedVideoEp = parseVideoParam();
    const initialLang = detectInitialLanguage();
    initDefaultsForLanguage(initialLang);
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("skip") === "1") {
        STATE.quizCompleted = true;
      }
    } catch (e) {}
    document.documentElement.lang = initialLang;
    document.title = SENIOR_DATA[initialLang].bridge.pageTitle;
    bindGlobalEvents();
    setFontSize("large");
    renderAll();
  });
})();

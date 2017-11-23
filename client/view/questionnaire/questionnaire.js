Template.questionnaire.helpers({
   quests : [
  { 
    num: 1,
    title: "1. Title Q1", 
    text: "Text Q1",
    opts:[
        {name: "q1",
         value: "q1_opt1", 
         optxt: "Option 1"},
        {name: "q1",
         value: "q1_opt2", 
         optxt: "Option 2"}
    ]
  },
  {
      num: 2,
      title: "2 Title Q2",
      text:"Text Q2",
      opts:[
          {name: "q2",
           value: "q2_opt1",
           optxt: "Option 1"},
          {name: "q2",
           value: "q2_op2",
          optxt: "Option 2"}
      ]
  }
   ]
});


Template.questionnaire.events({ 
    'submit myForm': function(event,template) {
        event.preventDefault();  
        quests.forEach(function(quest){
            var sel = template.myForm.quest.value;
            var i = template.myForm.quest.num;
            var ansArray = new Array();
            ansArray[i]=sel;
            console.log(ansArray);
            
            Answers.insert({
                selected:  ansArray[quest.num]=sel,
            });
        })
    }
});



/*Template.questionnaire.events({ 
    
    'submit form': function(event,template) {
        event.preventDefault();
        questions.forEach(function(question) { 
            Answers.insert({
                title: question.qtitle,
                option: event.target[question.optgroup].value});
        });
    }
});*/

/*
Template.questionnaire1.helpers({
    questions : [
      { 
        qtitle: "1. Nedstämdhet", 
        qtext: "Avser uppgift om sänkt grundstämning oavsett om den tar sig uttryck eller ej. Omfattar känslor av sorgsenhet, olycklighet, hopplöshet och hjälplöshet. Bedömningen baseras på intensitet, varaktighet och i vilken grad sinnesstämningen påverkas av yttre omständigheter. Förhöjd sinnesstämning skattas ”0”.", 
        options:[
            { optqgroup: "q1", optvalue: "q1_opt0", optxt: "0. Neutralt stämningsläge. Kan känna såväl tillfällig munterhet som nedstämdhet, allt efter omständigheterna, utan övervikt för ena eller andra stämningsläget." },
            { optqgroup: "q1", optvalue: "q1_opt1", optxt: "1. " },
            { optqgroup: "q1", optvalue: "q1_opt2", optxt: "2. Övervägande upplevelser av nedstämdhet men ljusare stunder förekommer. " },
            { optqgroup: "q1", optvalue: "q1_opt3", optxt: "3. " },
            { optqgroup: "q1", optvalue: "q1_opt4", optxt: "4. Genomgående nedstämdhet och dyster till sinnes. Sinnesstämningen påverkas föga av yttre omständigheter." },
            { optqgroup: "q1", optvalue: "q1_opt5", optxt: "5. " },
            { optqgroup: "q1", optvalue: "q1_opt6", optxt: "6. Genomgående upplevelser av maximal nedstämdhet." }
      ]},
      { 
        qtitle: "2. Sänkt grundstämning",
        qtext: "Avser en sänkning av det emotionella grundläget (till skillnad från situationsutlösta affekter). Omfattar dysterhet, tungsinne och nedstämdhet, som manifesterar sig i mimik, kroppshållning och rörelsemönster. Bedömningen baseras på utpräglingsgrad och avledbarhet. Förhöjd grundstämning skattas ”0” på detta item.", 
        options:[
            { optqgroup: "q2", optvalue: "q2_opt0", optxt: "0. Neutral stämningsläge." },
            { optqgroup: "q2", optvalue: "q2_opt1", optxt: "1. " },
            { optqgroup: "q2", optvalue: "q2_opt2", optxt: "2. Ser genomgående nedstämd ut, men kan tillfälligt växla till ljusare sinnesstämning. " },
            { optqgroup: "q2", optvalue: "q2_opt3", optxt: "3. " },
            { optqgroup: "q2", optvalue: "q2_opt4", optxt: "4. Ser nedstämd och olycklig ut oavsett samtalsämne." },
            { optqgroup: "q2", optvalue: "q2_opt5", optxt: "5. " },
            { optqgroup: "q2", optvalue: "q2_opt6", optxt: "6. Genomgående uttryck för extrem dysterhet, tungsinne eller förtvivlad olycka." }
      ]
      },
      { 
        qtitle: "3. Ångestkänslor",
        qtext: "Avser känslor av vag psykisk olust, inre oro eller obehaglig inre spänning, ångest eller vånda, som kan stegras till det outhärdliga. Bedömningen baseras på intensitet, frekvens, duration och behov av hjälp. Särhålles från nedstämdhet (1).", 
        options:[
            { optqgroup: "q3", optvalue: "q3_opt0", optxt: "0. Mestadels lugn." },
            { optqgroup: "q3", optvalue: "q3_opt1", optxt: "1. " },
            { optqgroup: "q3", optvalue: "q3_opt2", optxt: "2. Tillfälliga känslor av obehaglig psykisk spänning. " },
            { optqgroup: "q3", optvalue: "q3_opt3", optxt: "3. " },
            { optqgroup: "q3", optvalue: "q3_opt4", optxt: "4. Ständig känsla av inre oro, någon gång så intensiv att den endast med viss svårighet kan bemästras." },
            { optqgroup: "q3", optvalue: "q3_opt5", optxt: "5. " },
            { optqgroup: "q3", optvalue: "q3_opt6", optxt: "6. Långdragna ångestkänslor. Överväldigande känslor av skräck eller dödsångest, som ej kan bemästras på egen hand." }
      ] },
      { 
        qtitle: "4. Minskad nattsömn", 
        qtext: "Avser uppgifter om minskad sömntid eller sömndjup i förhållande till de ordinära sömnvanorna. Ökad sömn skattas ”0” på detta item. ", 
        options:[
            { optqgroup: "q4", optvalue: "q4_opt0", optxt: "0. Sover som vanligt." },
            { optqgroup: "q4", optvalue: "q4_opt1", optxt: "1. " },
            { optqgroup: "q4", optvalue: "q4_opt2", optxt: "2. Måttliga insomningssvårigheter eller kortare, ytligare eller oroligare sömn än vanligt." },
            { optqgroup: "q4", optvalue: "q4_opt3", optxt: "3. " },
            { optqgroup: "q4", optvalue: "q4_opt4", optxt: "4. Minskad sömntid (minst två timmar mindre än normalt). Vaknar ofta under natten även utan yttre störningar." },
            { optqgroup: "q4", optvalue: "q4_opt5", optxt: "5. " },
            { optqgroup: "q4", optvalue: "q4_opt6", optxt: "6. Mindre än två till tre timmars nattsömn totalt." }
      ] },
      { 
        qtitle: "5. Minskad aptit",
        qtext: "Avser upplevelser av att aptiten är sämre än normalt.", 
        options:[
            { optqgroup: "q5", optvalue: "q5_opt0", optxt: "0. Normalt eller ökad aptit." },
            { optqgroup: "q5", optvalue: "q5_opt1", optxt: "1. " },
            { optqgroup: "q5", optvalue: "q5_opt2", optxt: "2. Dålig matlust." },
            { optqgroup: "q5", optvalue: "q5_opt3", optxt: "3. " },
            { optqgroup: "q5", optvalue: "q5_opt4", optxt: "4. Aptit saknas nästan helt, maten smakar inte, måste tvinga sig att äta." },
            { optqgroup: "q5", optvalue: "q5_opt5", optxt: "5. " },
            { optqgroup: "q5", optvalue: "q5_opt6", optxt: "6. Måste övertalas att äta något överhuvudtaget. Matvägran." }
      ] },
      { 
        qtitle: "6. Koncentrationssvårigheter",
        qtext: "Avser svårigheter att samla tankarna eller koncentrera sig. Bedömningen baseras på intensitet, frekvens och i vilken mån olika aktiviteter försvåras.",
        options:[
            { optqgroup: "q6", optvalue: "q6_opt0", optxt: "0. Inga koncentrationssvårigheter." },
            { optqgroup: "q6", optvalue: "q6_opt1", optxt: "1. " },
            { optqgroup: "q6", optvalue: "q6_opt2", optxt: "2. Tillfälligt svårt att hålla tankarna samlade vid t ex läsning eller TV-tittande. " },
            { optqgroup: "q6", optvalue: "q6_opt3", optxt: "3. " },
            { optqgroup: "q6", optvalue: "q6_opt4", optxt: "4. Uppenbara koncentrationssvårigheter som försvårar läsning eller samtal." },
            { optqgroup: "q6", optvalue: "q6_opt5", optxt: "5. " },
            { optqgroup: "q6", optvalue: "q6_opt6", optxt: "6. Kontinuerliga, invalidiserande koncentrationssvårigheter." }
      ] },
      { 
        qtitle: "7. Initiativlöshet", 
        qtext: "Avser den subjektiva upplevelsen av initiativlöshet, känslan av att behöva ett motstånd, innan en aktivitet kan påbörjas.",
        options:[
            { optqgroup: "q7", optvalue: "q7_opt0", optxt: "0. Ingen svårighet att ta itu med nya uppgifter." },
            { optqgroup: "q7", optvalue: "q7_opt1", optxt: "1. " },
            { optqgroup: "q7", optvalue: "q7_opt2", optxt: "2. Lätta igångsättningssvårigheter. " },
            { optqgroup: "q7", optvalue: "q7_opt3", optxt: "3. " },
            { optqgroup: "q7", optvalue: "q7_opt4", optxt: "4. Svårt att komma igång även med enkla rutinuppgifter, som kräver stor ansträngning. " },
            { optqgroup: "q7", optvalue: "q7_opt5", optxt: "5. " },
            { optqgroup: "q7", optvalue: "q7_opt6", optxt: "6. Oförmögen att ta initiativ till de enklaste aktiviteter. Kan inte påbörja någon verksamhet på egen hand. ..." }
      ] },
      { 
        qtitle: "8. Minskat känslomässigt engagemang",
        qtext: "Avser upplevelser av minskat intresse för omvärlden eller för sådana aktiviteter som vanligen bereder nöje eller glädje. Subjektiv oförmåga att reagera känslomässigt inför människor eller företeelser i omgivningen.",
        options:[
            { optqgroup: "q8", optvalue: "q8_opt0", optxt: "0. Normalt intresse för omvärlden och för andra människor." },
            { optqgroup: "q8", optvalue: "q8_opt1", optxt: "1. " },
            { optqgroup: "q8", optvalue: "q8_opt2", optxt: "2. Svårigheter att finna nöje i sådant som vanligen väcker intresse. Minskad förmåga att bli arg eller irriterad." },
            { optqgroup: "q8", optvalue: "q8_opt3", optxt: "3. " },
            { optqgroup: "q8", optvalue: "q8_opt4", optxt: "4. Ointresserad av omvärlden. Upplevelser av likgiltighet inför vänner och bekanta. " },
            { optqgroup: "q8", optvalue: "q8_opt5", optxt: "5. " },
            { optqgroup: "q8", optvalue: "q8_opt6", optxt: "6. Total oförmåga att känna adekvat sorg eller vrede. Totalt eller smärtsam likgiltighet och oförmåga att uppleva känslor även för närstående." }
      ] },
      { 
        qtitle: "9. Depressivt tankeinnehåll",
        qtext: "Avser självförebråelser, självanklagelser, föreställningar om synd och skuld, mindervärdighet och ekonomisk ruin.",
        options:[
            { optqgroup: "q9", optvalue: "q9_opt0", optxt: "0. Inga pessimistiska tankar." },
            { optqgroup: "q9", optvalue: "q9_opt1", optxt: "1. " },
            { optqgroup: "q9", optvalue: "q9_opt2", optxt: "2. Fluktuerande självförebråelser och mindervärdesidéer." },
            { optqgroup: "q9", optvalue: "q9_opt3", optxt: "3. " },
            { optqgroup: "q9", optvalue: "q9_opt4", optxt: "4. Ständiga självanklagelser. Klara, men inte orimliga, tankar om synd eller skuld. Uttalat pessimistisk framtidssyn." },
            { optqgroup: "q9", optvalue: "q9_opt5", optxt: "5. " },
            { optqgroup: "q9", optvalue: "q9_opt6", optxt: "6. Absurda föreställningar om ekonomisk ruin och oförlåtliga synder. Absurda självanklagelser." }
      ] }, 
      { 
        qtitle: "10. Livsleda och själmordstankar",
        qtext: "Avser uppgift om sänkt grundstämning oavsett om Avser upplevelser av livsleda, dödsönskningar och självmordstankar samt förberedelser för självmord. Eventuella självmordsförsök påverkar ej i sig skattningen.",
        options:[
            { optqgroup: "q10", optvalue: "q10_opt0", optxt: "0. Ordinär livslust. Inga självmordstankar. " },
            { optqgroup: "q10", optvalue: "q10_opt1", optxt: "1. " },
            { optqgroup: "q10", optvalue: "q10_opt2", optxt: "2. Livsleda, men inga eller endast vaga dödsönskningar. " },
            { optqgroup: "q10", optvalue: "q10_opt3", optxt: "3. " },
            { optqgroup: "q10", optvalue: "q10_opt4", optxt: "4. Självmordstankar förekommer och självmord betraktas som en tänkbar utväg, men ingen bestämd självmordsavsikt." },
            { optqgroup: "q10", optvalue: "q10_opt5", optxt: "5. " },
            { optqgroup: "q10", optvalue: "q10_opt6", optxt: "6. Uttalande avsikter att begå självmord, när tillfälle bjuds. Aktiva förberedelser för självmord." }
      ] },
      ]
});
*/
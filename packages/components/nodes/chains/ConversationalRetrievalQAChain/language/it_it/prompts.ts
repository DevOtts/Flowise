export const default_qa_template = `Utilizza i seguenti contesti per rispondere alla domanda alla fine. Se non conosci la risposta, semplicemente dì che non lo sai, non cercare di inventare una risposta.

{context}

Domanda: {question}
Risposta utile:`

export const qa_template = `Utilizza i seguenti contesti per rispondere alla domanda alla fine.

{context}

Domanda: {question}
Risposta utile:`

export const default_map_reduce_template = `Data la seguente estrazione da un lungo documento e una domanda, crea una risposta finale. 
Se non conosci la risposta, semplicemente dì che non lo sai. Non cercare di inventare una risposta.

{summaries}

Domanda: {question}
Risposta utile:`

export const map_reduce_template = `Data la seguente estrazione da un lungo documento e una domanda, crea una risposta finale. 

{summaries}

Domanda: {question}
Risposta utile:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Le informazioni sul contesto sono qui sotto. 
---------------------
{context}
---------------------
Data l'informazione sul contesto e senza conoscenza pregressa, ${sysPrompt}
Rispondi alla domanda: {question}.
Risposta:`
    if (!sysPrompt)
        returnPrompt = `Le informazioni sul contesto sono qui sotto. 
---------------------
{context}
---------------------
Data l'informazione sul contesto e senza conoscenza pregressa, rispondi alla domanda: {question}.
Risposta:`
    return returnPrompt
}

export const refine_template = `La domanda originale è la seguente: {question}
Abbiamo fornito una risposta esistente: {existing_answer}
Abbiamo l'opportunità di affinare la risposta esistente (solo se necessario) con ulteriori informazioni di contesto.
------------
{context}
------------
Dato il nuovo contesto, affina la risposta originale per rispondere meglio alla domanda. 
Se non riesci a trovare una risposta dal contesto, restituisci la risposta originale.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Data la seguente conversazione e una domanda di follow-up, riformula la domanda di follow-up per renderla una domanda indipendente, rispondi nella stessa lingua della domanda di follow-up. Includila nella domanda indipendente.

Cronologia chat:
{chat_history}
Domanda di follow-up: {question}
Domanda indipendente:`

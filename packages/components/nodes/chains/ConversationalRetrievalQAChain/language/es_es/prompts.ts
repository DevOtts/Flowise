export const default_qa_template = `Utilice los siguientes contextos para responder a la pregunta al final. Si no sabe la respuesta, simplemente diga que no sabe, no intente inventar una respuesta.

{context}

Pregunta: {question}
Respuesta útil:`

export const qa_template = `Utilice los siguientes contextos para responder a la pregunta al final.

{context}

Pregunta: {question}
Respuesta útil:`

export const default_map_reduce_template = `Dado los fragmentos a continuación extraídos de un largo documento y una pregunta, cree una respuesta final. 
Si no sabe la respuesta, simplemente diga que no sabe. No intente inventar una respuesta.

{summaries}

Pregunta: {question}
Respuesta útil:`

export const map_reduce_template = `Dado los fragmentos a continuación extraídos de un largo documento y una pregunta, cree una respuesta final. 

{summaries}

Pregunta: {question}
Respuesta útil:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `La información del contexto se encuentra abajo. 
---------------------
{context}
---------------------
Dada la información del contexto y sin conocimiento previo, ${sysPrompt}
Responda la pregunta: {question}.
Respuesta:`
    if (!sysPrompt)
        returnPrompt = `La información del contexto se encuentra abajo. 
---------------------
{context}
---------------------
Dada la información del contexto y sin conocimiento previo, responda la pregunta: {question}.
Respuesta:`
    return returnPrompt
}

export const refine_template = `La pregunta original es la siguiente: {question}
Hemos proporcionado una respuesta existente: {existing_answer}
Tenemos la oportunidad de refinar la respuesta existente (solo si es necesario) con más contexto a continuación.
------------
{context}
------------
Dado el nuevo contexto, refine la respuesta original para responder mejor a la pregunta. 
Si no puede encontrar una respuesta a partir del contexto, devuelva la respuesta original.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Dada la siguiente conversación y una pregunta de seguimiento, reformule la pregunta de seguimiento para que sea una pregunta independiente, responda en el mismo idioma que la pregunta de seguimiento. Inclúyala en la pregunta independiente.

Historial de Chat:
{chat_history}
Pregunta de Seguimiento: {question}
Pregunta independiente:`

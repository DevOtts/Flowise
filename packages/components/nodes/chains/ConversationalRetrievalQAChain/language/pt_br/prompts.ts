export const default_qa_template = `Use os seguintes contextos para responder à pergunta no final. Se você não sabe a resposta, apenas diga que não sabe, não tente inventar uma resposta.

{context}

Pergunta: {question}
Resposta útil:`

export const qa_template = `Use os seguintes contextos para responder à pergunta no final.

{context}

Pergunta: {question}
Resposta útil:`

export const default_map_reduce_template = `Dado os trechos a seguir extraídos de um longo documento e uma pergunta, crie uma resposta final. 
Se você não sabe a resposta, apenas diga que não sabe. Não tente inventar uma resposta.

{summaries}

Pergunta: {question}
Resposta útil:`

export const map_reduce_template = `Dado os trechos a seguir extraídos de um longo documento e uma pergunta, crie uma resposta final. 

{summaries}

Pergunta: {question}
Resposta útil:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `A informação de contexto está abaixo. 
---------------------
{context}
---------------------
Dado a informação de contexto e sem conhecimento prévio, ${sysPrompt}
Responda a pergunta: {question}.
Resposta:`
    if (!sysPrompt)
        returnPrompt = `A informação de contexto está abaixo. 
---------------------
{context}
---------------------
Dado a informação de contexto e sem conhecimento prévio, responda a pergunta: {question}.
Resposta:`
    return returnPrompt
}

export const refine_template = `A pergunta original é a seguinte: {question}
Nós fornecemos uma resposta existente: {existing_answer}
Temos a oportunidade de refinar a resposta existente (somente se necessário) com mais contexto abaixo.
------------
{context}
------------
Dado o novo contexto, refine a resposta original para melhor responder à pergunta. 
Se você não encontrar uma resposta a partir do contexto, retorne a resposta original.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Dado a conversa a seguir e uma pergunta de acompanhamento, reformule a pergunta de acompanhamento para ser uma pergunta independente, responda no mesmo idioma da pergunta de acompanhamento. Inclua-a na pergunta independente.

Histórico do Chat:
{chat_history}
Pergunta de Acompanhamento: {question}
Pergunta independente:`

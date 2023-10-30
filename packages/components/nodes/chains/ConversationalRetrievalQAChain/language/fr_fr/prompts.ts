export const default_qa_template = `Utilisez les contextes suivants pour répondre à la question à la fin. Si vous ne connaissez pas la réponse, dites simplement que vous ne savez pas. Ne tentez pas de fabriquer une réponse.

{context}

Question: {question}
Réponse utile:`

export const qa_template = `Utilisez les contextes suivants pour répondre à la question à la fin.

{context}

Question: {question}
Réponse utile:`

export const default_map_reduce_template = `Étant donné les extraits suivants d'un long document et une question, créez une réponse finale. 
Si vous ne connaissez pas la réponse, dites simplement que vous ne savez pas. Ne tentez pas de fabriquer une réponse.

{summaries}

Question: {question}
Réponse utile:`

export const map_reduce_template = `Étant donné les extraits suivants d'un long document et une question, créez une réponse finale. 

{summaries}

Question: {question}
Réponse utile:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Les informations contextuelles sont ci-dessous. 
---------------------
{context}
---------------------
Étant donné l'information contextuelle et sans connaissance préalable, ${sysPrompt}
Répondez à la question: {question}.
Réponse:`
    if (!sysPrompt)
        returnPrompt = `Les informations contextuelles sont ci-dessous. 
---------------------
{context}
---------------------
Étant donné l'information contextuelle et sans connaissance préalable, répondez à la question: {question}.
Réponse:`
    return returnPrompt
}

export const refine_template = `La question originale est la suivante: {question}
Nous avons fourni une réponse existante: {existing_answer}
Nous avons l'opportunité de raffiner la réponse existante (seulement si nécessaire) avec un contexte supplémentaire ci-dessous.
------------
{context}
------------
Étant donné le nouveau contexte, affinez la réponse originale pour mieux répondre à la question. 
Si vous ne trouvez pas de réponse à partir du contexte, retournez la réponse originale.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Étant donné la conversation suivante et une question de suivi, reformulez la question de suivi pour qu'elle soit une question autonome, répondez dans la même langue que la question de suivi. Incluez-la dans la question autonome.

Historique de chat:
{chat_history}
Question de suivi: {question}
Question autonome:`

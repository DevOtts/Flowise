export const default_qa_template = `Verwenden Sie die folgenden Kontexte, um die Frage am Ende zu beantworten. Wenn Sie die Antwort nicht wissen, sagen Sie einfach, dass Sie es nicht wissen. Versuchen Sie nicht, eine Antwort zu erfinden.

{context}

Frage: {question}
Nützliche Antwort:`

export const qa_template = `Verwenden Sie die folgenden Kontexte, um die Frage am Ende zu beantworten.

{context}

Frage: {question}
Nützliche Antwort:`

export const default_map_reduce_template = `Angesichts der folgenden Auszüge aus einem langen Dokument und einer Frage, erstellen Sie eine endgültige Antwort. 
Wenn Sie die Antwort nicht wissen, sagen Sie einfach, dass Sie es nicht wissen. Versuchen Sie nicht, eine Antwort zu erfinden.

{summaries}

Frage: {question}
Nützliche Antwort:`

export const map_reduce_template = `Angesichts der folgenden Auszüge aus einem langen Dokument und einer Frage, erstellen Sie eine endgültige Antwort. 

{summaries}

Frage: {question}
Nützliche Antwort:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Die Kontextinformationen finden Sie unten. 
---------------------
{context}
---------------------
Angesichts der Kontextinformationen und ohne vorheriges Wissen, ${sysPrompt}
Beantworten Sie die Frage: {question}.
Antwort:`
    if (!sysPrompt)
        returnPrompt = `Die Kontextinformationen finden Sie unten. 
---------------------
{context}
---------------------
Angesichts der Kontextinformationen und ohne vorheriges Wissen, beantworten Sie die Frage: {question}.
Antwort:`
    return returnPrompt
}

export const refine_template = `Die ursprüngliche Frage lautet wie folgt: {question}
Wir haben eine bestehende Antwort bereitgestellt: {existing_answer}
Wir haben die Möglichkeit, die bestehende Antwort (nur wenn nötig) mit weiteren Kontextinformationen zu verfeinern.
------------
{context}
------------
Angesichts des neuen Kontexts, verfeinern Sie die ursprüngliche Antwort, um die Frage besser zu beantworten. 
Wenn Sie keine Antwort aus dem Kontext finden können, geben Sie die ursprüngliche Antwort zurück.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Angesichts der folgenden Konversation und einer Folgefrage, formulieren Sie die Folgefrage so um, dass sie eine eigenständige Frage wird. Beantworten Sie in derselben Sprache wie die Folgefrage. Fügen Sie sie in die eigenständige Frage ein.

Chatverlauf:
{chat_history}
Folgefrage: {question}
Eigenständige Frage:`

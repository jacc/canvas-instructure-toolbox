var correct = "",
    incorrect = "";
$('.display_question').each(function(){
    var incorrect = $(this).hasClass('incorrect'),
        question_text = $(this).find('.question_text').text().trim(),
        answer_text = $(this).find('.selected_answer .select_answer').text().trim(),
        krunked = `${question_text} - ${incorrect ? `NOT ${answer_text}` : answer_text}\n`
    if(incorrect){
        wrongs += krunked
    } else {
        rights += krunked
    }
});

console.log(`================\njacc's Canvas to Quizlet Exporter\nCopyright (c) 2019 Professional Yadi Krunkers\nOG version by @strix on GitHub\nFor educational use only (literally)\n================`)
console.log(`================\nCorrect Questions / Answers\n${correct}================`)
console.log(`================\nIncorrect Questions / Answers\n${incorrect}================`)

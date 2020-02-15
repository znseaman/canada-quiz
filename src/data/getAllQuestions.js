function getAllQuestions() {
  var allQuestions = []
  var questionBlocks = $('form table')
  for (let i = 0, length = questionBlocks.length + 1; i < length; i++) {
    var q = $(questionBlocks[i]).find('tbody tr td[align="left"]')
    var question = q.find('b:eq(0)').text().replace(/^\d+.\s/g, '')

    var options = q.text().replace(question, '').replace(/^\d+.\s/g, '').replace('a. ', '').replace('b. ', '|').replace('c. ', '|').replace('d. ', '|').split('|')

    allQuestions.push({
      id: i + 1,
      question,
      options
    })
  }

  return allQuestions;
}
getAllQuestions()
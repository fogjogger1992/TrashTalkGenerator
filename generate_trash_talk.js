// pick up a random item from array
function samplePicker(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// generate trash talk
function generateTrashTalk(target) {

  if (!target) {
    return '請選擇說幹話對象'
  }

  const targetName = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const targetAudience = targetName[target]
  const targetTask = samplePicker(task[target])
  const targetPhrase = samplePicker(phrase)

  return (`身為一位${targetAudience}，${targetTask}${targetPhrase}吧！`)
}

// export
module.exports = generateTrashTalk
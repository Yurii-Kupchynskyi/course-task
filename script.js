function findFirstUniqueCharacter(word) {
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      return word[i];
    }
  }

  return null;
}

const findCharacterBtn = document.getElementById("findCharacterBtn");
const result = document.getElementById("answerField");
const regex = /[\s,)(.-]+/;

function FindChatracter() {
  const input = document.getElementById("textarea").value;

  const inputArray = input.split(regex);
  const uniqueCharacterArray = inputArray.map((word) => {
    return findFirstUniqueCharacter(word);
  });

  const uniqueCharacter = findFirstUniqueCharacter(
    uniqueCharacterArray.join("")
  );

  console.log(inputArray);
  console.log(uniqueCharacterArray);
  console.log(uniqueCharacter);

  result.textContent = uniqueCharacter;
}

findCharacterBtn.addEventListener("click", FindChatracter);

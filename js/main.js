const jokeHolder = document.querySelector('.display-joke');
const jokeButton = document.querySelector('button');
jokeButton.addEventListener('click', handleClick);

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  console.log(joke);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item == not) {
    console.log('Ah! we used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

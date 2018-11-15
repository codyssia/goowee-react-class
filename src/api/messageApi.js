const messages = [
  { text: 'Veni' },
  { text: 'Vidi' },
  { text: 'Vici' },
];

export function getMessages() {
  return new Promise((resolve) => {
    resolve(messages);
  });
}

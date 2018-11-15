const messages = [
  { text: 'Veni' },
  { text: 'Vidi' },
  { text: 'Vici' },
];

export function getMessages() {
  const response = { success: true };

  return new Promise((resolve) => {
    resolve(messages);
  });
}

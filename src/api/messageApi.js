const messages = [
  { text: 'One' },
  { text: 'Two' },
  { text: 'Three' },
];

export function getMessages() {
  const response = { success: true };

  return new Promise((resolve) => {
    resolve(messages);
  });
}

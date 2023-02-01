const person = {
  name: "Alexey",
  language: ["type-script"],
  friends: [
    {
      name: "Egor",
      language: ["type-script"],
      friends: [
        {
          name: "Maxim",
          language: ["java"],
          friends: [{ name: "Egor", language: ["type-script"], friends: [] }],
        },
        {
          name: "Mikhail",
          language: ["type-script"],
          friends: [
            { name: "Nikolay", language: ["java", "kotlin"], friends: [] },
            { name: "Sergey", language: ["python"], friends: [] },
            { name: "Egor", language: ["type-script"], friends: [] },
          ],
        },
      ],
    },
    {
      name: "Mikhail",
      language: ["type-script"],
      friends: [
        { name: "Nikolay", language: ["java", "kotlin"], friends: [] },
        { name: "Sergey", language: ["python"], friends: [] },
        { name: "Egor", language: ["type-script"], friends: [] },
      ],
    },
    {
      name: "Dmitry",
      language: ["type-script", "python"],
      friends: [{ name: "Ivan", language: ["type-script"], friends: [] }],
    },
    {
      name: "Alexander",
      language: ["type-script", "java", "C++"],
      friends: [],
    },
  ],
};

const breadthFirstSearch = (person, find) => {
  const queue = [...person.friends];

  const checked = [];

  while (queue.length > 0) {
    const currentPeople = queue.shift();

    if (!checked.includes(currentPeople.name)) {
      if (currentPeople.language.includes(find)) {
        return currentPeople;
      }

      checked.push(currentPeople.name);
      queue.push(...currentPeople.friends);
    }
  }

  return null;
};

console.log(breadthFirstSearch(person, "python"));

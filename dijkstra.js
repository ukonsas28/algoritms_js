const graph = {
  start: {
    A: 6,
    B: 2,
  },
  A: {
    end: 1,
  },
  B: {
    A: 3,
    end: 5,
  },
  end: {},
};

const costs = { ...graph.start, end: Infinity };

let parents = { end: null };
for (let child in graph["start"]) {
  parents[child] = "start";
}

const findLowCostNode = (obj) => {
  let lessValue = null;
  let result;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof lessValue === "object") {
      lessValue = value;
      result = key;
    }
    if (lessValue > value) {
      lessValue = value;
      result = key;
    }
  }
  return result;
};

const dijkstra = () => {
  const checkNode = [];

  let currentNode = findLowCostNode(costs);

  while (!checkNode.includes(currentNode)) {
    const cost = costs[currentNode];
    const neighbors = graph[currentNode];

    for (let el of Object.keys(neighbors)) {
      const new_cost = neighbors[el] + cost;

      if (costs[el] > new_cost) {
        costs[el] = new_cost;
        parents[el] = currentNode;
      }
      checkNode.push(currentNode);
      currentNode = findLowCostNode(costs);
    }
  }
};

dijkstra();
console.log(costs, parents);

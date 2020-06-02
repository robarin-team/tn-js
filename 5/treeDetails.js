const nodeOutput = (node, indent) => {
  return `${indent} ${node.nodeType} ${node.nodeName} ${node.nodeValue}`
}

const nodeTree1 = (nodeList, indent = '') => {
  console.log(nodeOutput(nodeList, indent));

  nodeList.childNodes.forEach(function (node) {
    nodeTree1(node, indent += ' ');
  });
}

const nodeTree2 = (nodeList, indent = '') => {
  console.log(nodeOutput(nodeList, indent));

  for (let node of nodeList.childNodes) {
    nodeTree1(node, indent += ' ');
  }
}

const nodeTree3 = (nodeList, indent = '') => {
  console.log(nodeOutput(nodeList, indent));
  let node = nodeList;

  while (node && node.firstChild) {
    nodeTree1(nodeList, indent += ' ');
    node = node.nextSibling;
  }
}

const nodeList = document.querySelector('html');

nodeTree3(nodeList);
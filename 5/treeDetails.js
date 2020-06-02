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
    nodeTree2(node, indent += ' ');
  }
}

const nodeTree3 = (nodeList, indent = '') => {
  console.log(nodeOutput(nodeList, indent));
  let node = nodeList.firstChild;

  while (node) {
    nodeTree3(node, indent += ' ');
    node = node.nextSibling;
  }
}

const nodeList = document.querySelector('html');

nodeTree3(nodeList);
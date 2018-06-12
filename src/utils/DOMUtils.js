import { head } from './arrayUtils.js';

export function parseComponent(stringComponent) {
  const parser = new DOMParser();

  return head(parser
    .parseFromString(stringComponent, 'text/html')
    .body.children);
}

export function addNewChild (node, component) {
  let compT =  component;
  let tmpDiv = node ;
      tmpDiv.appendChild(compT);
  return tmpDiv
}


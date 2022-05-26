const stringifiedArrayOfStringsToArray = (rawTarget: string): string[] => {
  let targets: string[] = [];
  // const a = "['z','y','k']";
  //first element
  const c = rawTarget.split(",");
  const x = c[0];
  const z = x.split("[");
  const d = z[1];
  const j = d.split("'");
  console.log(j[1]);
  targets.push(j[1]);
  //middle elements
  const otherEle = c.slice(1, c.length - 1);
  otherEle.map((ele) => {
    const el = ele.split("'");
    targets.push(el[1]);
  });
  //last element
  const m = rawTarget.split(",");
  const n = m[m.length - 1];
  const o = n.split("]");
  const p = o[0];
  const q = p.split("'");
  console.log(q[1]);
  targets.push(q[1]);
  return targets;
};
//there is gotta be a better way man 😬😈
export default stringifiedArrayOfStringsToArray;

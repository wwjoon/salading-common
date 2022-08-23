export const productEqual = (
  productA: { productId: string; productOptionGroups: { productOptionId: string; qty: number; }[]; },
  productB: { productId: string; productOptionGroups: { productOptionId: string; qty: number; }[]; }
) => {
  if (productA.productId.toString() !== productB.productId.toString()) { return false; }
  if (productA.productOptionGroups.length !== productB.productOptionGroups.length) { return false; }
  const sortedA = productOptionGroupsGetSortedCopy(productA.productOptionGroups);
  const sortedB = productOptionGroupsGetSortedCopy(productB.productOptionGroups);
  for (let index = 0; index < sortedA.length; index++) {
    if (sortedA[index].productOptionId !== sortedB[index].productOptionId) { return false; }
    if (sortedA[index].qty !== sortedB[index].qty) { return false; }
  }
  return true;
};

const productOptionGroupsGetSortedCopy = (productOptionGroups: { productOptionId: string; qty: number; }[]) =>  (
  productOptionGroups.map(v => ({ productOptionId: v.productOptionId.toString(), qty: v.qty }))
  .sort((a, b) => {
    if (a.productOptionId > b.productOptionId) { return 1; }
    if (a.productOptionId < b.productOptionId) { return -1; }
    return 0;
  })
);

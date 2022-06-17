export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}

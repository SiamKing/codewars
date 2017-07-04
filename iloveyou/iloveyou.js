function howMuchILoveYou(nbPetals) {
  const love = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

  return nbPetals % 6 == 0 ? love[nbPetals % 6 + 5] : love[nbPetals % 6 - 1];
}

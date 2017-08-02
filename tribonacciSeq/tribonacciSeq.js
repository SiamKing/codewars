function tribonacci(sig,n){
  for (let i = 0; i < n; i++) {
    sig.push(sig[i] + sig[i + 1] + sig[i + 2]);
  }
  return sig.slice(0, n);
}

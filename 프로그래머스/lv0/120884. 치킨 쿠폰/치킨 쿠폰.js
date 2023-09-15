function solution(chicken) {
  let coupons = chicken;
  let service = 0;
  while(coupons >= 10) {
    service = service + parseInt(coupons / 10);
    coupons = coupons % 10 + parseInt(coupons / 10);
  }

  return service;
}
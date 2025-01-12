let id = 0;
class Id {
  value: number;
  constructor() {
    id += 1;
    this.value = id;
  }
}

export default Id;

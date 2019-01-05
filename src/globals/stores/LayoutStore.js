import { observable } from "mobx";

class LayoutStore {
  @observable
  collapsed = false;

  toggle = () => {
    this.collapsed = !this.collapsed;
  };
}

export default LayoutStore;

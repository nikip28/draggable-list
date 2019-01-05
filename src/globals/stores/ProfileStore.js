import { observable } from "mobx";

class ProfileStore {
  @observable editProfile = false;

  onToggleProfile = () => {
    this.editProfile = !this.editProfile;
    console.log(this.editProfile);
  };
}

export default ProfileStore;

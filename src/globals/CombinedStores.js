import GlobalStore from "./stores/GlobalStore";
import LayoutStore from "./stores/LayoutStore";
import ProfileStore from "./stores/ProfileStore";

export default {
  globals: new GlobalStore(),
  layout: new LayoutStore(),
  profile: new ProfileStore()
};

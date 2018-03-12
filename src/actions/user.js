import { SET_USER } from "./action_types";
import { AVATAR_IMAGES, PIKACHU } from "../constants";

// gets userId + avatarIndex (between 0 to AVATAR_IMAGES.length -1 and sets the user
// if avatarIndex out of range - set the avatar to pikachu
export const setUser = (userId, avatarIndex) => {
  let avatar = PIKACHU; // pick-a-pi
  if (avatarIndex >= 0 && avatarIndex < AVATAR_IMAGES.length)
    avatar = AVATAR_IMAGES[avatarIndex];
  return { type: SET_USER, data: { userId, avatar } };
};

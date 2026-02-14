import { MaleHeadBald } from "./heads/MaleHeadBald.js";
import { MaleTorso } from "./torsos/MaleTorso.js";
import { MaleArms } from "./arms/MaleArms.js";
import { MaleLegsJeans } from "./legs/MaleLegsJeans.js";
import { Rollerblades } from "../equipment/Rollerblades.js";
import { CharacterBuilder } from "../core/CharacterBuilder.js";

export const SkaterGuy = CharacterBuilder({
  head: MaleHeadBald,
  torso: MaleTorso,
  arms: MaleArms,
  legs: MaleLegsJeans,
  skates: Rollerblades
});

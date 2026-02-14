import { FemaleHeadAfro } from "./heads/FemaleHeadAfro.js";
import { FemaleTorso } from "./torsos/FemaleTorso.js";
import { FemaleArms } from "./arms/FemaleArms.js";
import { FemaleLegsShorts } from "./legs/FemaleLegsShorts.js";
import { Rollerblades } from "../equipment/Rollerblades.js";
import { CharacterBuilder } from "../core/CharacterBuilder.js";

export const SkaterGirl = CharacterBuilder({
  head: FemaleHeadAfro,
  torso: FemaleTorso,
  arms: FemaleArms,
  legs: FemaleLegsShorts,
  skates: Rollerblades
});

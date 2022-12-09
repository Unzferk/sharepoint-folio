import { IName } from "./IName";
import { IPicture } from "./IPicture";

export interface IPerson {
  name: IName;
  picture: IPicture;
  gender: string;
  email: string;
  phone: string;
}

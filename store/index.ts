import { proxy } from "valtio";


type Colors = {
    body: string | null;
    skeleton: string | null;
    feet: string | null;
    neck: string | null;
    eyes: string | null;
}

export const state = proxy<{items: Colors}>({
    items: {
        body:  null,
        skeleton:  null,
        feet:  null,
        neck:  null,
        eyes:  null,
    }

})
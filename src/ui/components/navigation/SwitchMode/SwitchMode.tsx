/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControlLabel from "@mui/material/FormControlLabel";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { MaterialUISwitch } from "ui";
const switchMode: ForwardRefRenderFunction<HTMLInputElement, any> = (
  { label, onChange,rest },
  ref
) => {
  return (
    <FormControlLabel
    {...ref}
     
      control={<MaterialUISwitch {...rest} onChange={onChange}   sx={{ m: 1 }} defaultChecked />}
      label={label}
    />
  );
};
export const SwitchMode = forwardRef(switchMode);

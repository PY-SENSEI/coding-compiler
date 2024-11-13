import { SaveIcon, Share2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  CompilerSliceStateType,
  updateCurrentLanguage,
} from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

export default function HelperHeader() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-2">
        <Button
          className="flex items-center justify-center gap-1"
          variant="success"
        >
          <SaveIcon />
          Save
        </Button>
        <Button
          className="flex items-center justify-center gap-1"
          variant="secondary"
        >
          <Share2Icon />
          Share
        </Button>
      </div>
      <div className="__tab_switcher ml-auto flex justify-center items-center gap-1">
        Language:
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) => {
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            );
          }}
        >
          <SelectTrigger
            className="w-[180px] bg-gray-800 outline-none 
          focus:ring-0"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">Html</SelectItem>
            <SelectItem value="css">Css</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

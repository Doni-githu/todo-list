import { Dispatch, SetStateAction } from "react";

export default interface ITextAreaProps {
    label: string,
    setState: Dispatch<SetStateAction<string>>,
    state: string
}
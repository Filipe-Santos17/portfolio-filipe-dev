import { SetStateAction, Dispatch } from "react";

export type DataTypeGitHubApi = {
  id: number,
  name: string,
  description: string,
  language: string,
  html_url: string,
}

export type TypeChangeModalState = { changeModal: Dispatch<SetStateAction<boolean>> }
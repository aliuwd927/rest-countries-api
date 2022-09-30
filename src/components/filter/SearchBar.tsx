import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export interface SearchBarProps {
  setGlobalSearch: (props: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [debouncedValue, value, setValue] = useDebounce<string>("", 1000);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setSearchValue(debouncedValue);
    props.setGlobalSearch(searchValue);
  }, [debouncedValue, props.setGlobalSearch, searchValue]);

  function handleSearchBarValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <form className="SearchBarSection">
      <input
        type="text"
        placeholder="search"
        name="search"
        onChange={handleSearchBarValue}
      />
    </form>
  );
}

//https://stackblitz.com/edit/react-ts-s644qh?file=useDebounce.ts,App.tsx
//https://www.w3schools.com/react/react_usecallback.asp
